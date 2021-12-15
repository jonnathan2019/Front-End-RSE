
// console.log("*******************")
// console.log(resutaldo_final)//resulatdo final
// console.log(objeto_resp)//resulatdo dimensiones y otros
// const lista = [];
// const object = {
//     name: 'juna',
//     size: '100'
// };

function obtener_datos() {
    var datos_z = {
        "name": "RSE",
        "children": []
    }
    objeto_resp.forEach(dim => {
        const objeto_dim = {//recomrremos las DIMENSIONES
            name: dim.dimension,
            children: []
        }
        datos_z.children.push(objeto_dim)
        dim.temas.forEach(temas => {//recorremos los TEMAS
            datos_z.children.find((dim_new, index) => {
                //comparamos las dimensiones para que solo ingrese en una 
                if (dim_new.name === dim.dimension) {
                    // console.log(dim_new.name+' - '+ temas.nombre)
                    const objeto_temas = {
                        name: temas.nombre,
                        children: []
                    }
                    // console.log(datos_z.children[index].children)
                    datos_z.children[index].children.push(objeto_temas)
                    temas.indicadores.forEach(indicador => {//recorremos INIDCAODRES
                        datos_z.children[index].children.find((tema_new, index_tema) => {
                            //comparamos los  temas para soo ingrese uno
                            if (temas.nombre === tema_new.name) {
                                // console.log(tema_new.name + ' - ' + indicador.indicador)
                                const objeto_indicador = {
                                    name: indicador.indicador,
                                    size: (indicador.valor_1_formula * 100).toFixed(2)
                                }
                                datos_z.children[index].children[index_tema].children.push(objeto_indicador)
                            }
                        })
                    })
                }

            })

        })
    });

    return datos_z;
}

function grafica_zoomable() {
    const width = 800,
        height = 800,
        maxRadius = (Math.min(width, height) / 2) - 5;

    const formatNumber = d3.format(',d');

    const x = d3.scaleLinear()
        .range([0, 2 * Math.PI])
        .clamp(true);

    const y = d3.scaleSqrt()
        .range([maxRadius * .1, maxRadius]);

    const colores = ['#FF5733', '#1FE250']
    // const color = d3.scaleOrdinal(d3.schemeCategory20);
    const color = d3.scaleOrdinal(colores);

    const partition = d3.partition();

    const arc = d3.arc()
        .startAngle(d => x(d.x0))
        .endAngle(d => x(d.x1))
        .innerRadius(d => Math.max(0, y(d.y0)))
        .outerRadius(d => Math.max(0, y(d.y1)));

    const middleArcLine = d => {
        const halfPi = Math.PI / 2;
        const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

        const middleAngle = (angles[1] + angles[0]) / 2;
        const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
        if (invertDirection) { angles.reverse(); }

        const path = d3.path();
        path.arc(0, 0, r, angles[0], angles[1], invertDirection);
        return path.toString();
    };

    const textFits = d => {
        const CHAR_SPACE = 6;

        const deltaAngle = x(d.x1) - x(d.x0);
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
        const perimeter = r * deltaAngle;

        return d.data.name.length * CHAR_SPACE < perimeter;
    };

    const svg = d3.select('.grafica-zoomable-sunburst').append('svg')
        .style('width', '100vw')
        .style('height', '100vh')
        .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
        .on('click', () => focusOn()); // Reset zoom on canvas click

    // obtenemos los datos
    var root = obtener_datos();
    // console.log(root);

    root = d3.hierarchy(root);
    root.sum(d => d.size);

    const slice = svg.selectAll('g.slice')
        .data(partition(root).descendants().slice(1));

    slice.exit().remove();

    const newSlice = slice.enter()
        .append('g').attr('class', 'slice')
        .on('click', d => {
            d3.event.stopPropagation();
            focusOn(d);
        });

    newSlice.append('title')
        .text(d => d.data.name + '\n' + formatNumber(d.value));

    newSlice.append('path')
        .attr('class', 'main-arc')
        // .style('fill', d => color((d.children ? d : d.parent).data.name))
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("fill-opacity", d => (d.children ? 0.9 : 0.4))
        .attr('d', arc);

    newSlice.append('path')
        .attr('class', 'hidden-arc')
        .attr('id', (_, i) => `hiddenArc${i}`)
        .attr('d', middleArcLine);

    const text = newSlice.append('text')
        .attr('display', d => textFits(d) ? null : 'none');

    // Add white contour
    text.append('textPath')
        .attr('startOffset', '50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
        .text(d => d.data.name)
        .style('fill', 'none')
        // .style('stroke', '#fff')
        .style('stroke-width', 5)
        .style('stroke-linejoin', 'round');

    text.append('textPath')
        .attr('startOffset', '50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
        .text(d => d.data.name);


    function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
        // Reset to top-level if no data point specified

        const transition = svg.transition()
            .duration(750)
            .tween('scale', () => {
                const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                    yd = d3.interpolate(y.domain(), [d.y0, 1]);
                return t => { x.domain(xd(t)); y.domain(yd(t)); };
            });

        transition.selectAll('path.main-arc')
            .attrTween('d', d => () => arc(d));

        transition.selectAll('path.hidden-arc')
            .attrTween('d', d => () => middleArcLine(d));

        transition.selectAll('text')
            .attrTween('display', d => () => textFits(d) ? null : 'none');

        moveStackToFront(d);

        //

        function moveStackToFront(elD) {
            svg.selectAll('.slice').filter(d => d === elD)
                .each(function (d) {
                    this.parentNode.appendChild(this);
                    if (d.parent) { moveStackToFront(d.parent); }
                })
        }
    }
}



    // grafica_1()


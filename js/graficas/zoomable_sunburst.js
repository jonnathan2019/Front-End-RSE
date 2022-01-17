
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
                                var valor = indicador.valor_1_formula ;
                                if(valor <= 0){
                                    valor =0.0198
                                }
                                const objeto_indicador = {
                                    name: indicador.indicador,
                                    size: valor + 1000
                                    // size: (valor * 100).toFixed(2)
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
    var data = obtener_datos();
    // console.log(data);
    var height = 30;

    partition = data => {
        const root = d3.hierarchy(data)
            .sum(d => d.size)
            .sort((a, b) => b.value - a.value);
        return d3.partition()
            .size([2 * Math.PI, root.height + 1])
            (root);
    }
    
    const colores = ['#ff8000', '#1FE250']// naranja: #FF5733  ff8000
    // const color = d3.scaleOrdinal(d3.schemeCategory20);
    const color = d3.scaleOrdinal(colores);
    // var color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow, data.children.length + 1));
    var format = d3.format(",d");

    var width = 400;
    var radius = width / 6;

    var arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))


    const root = partition(data);

    root.each(d => d.current = d);

    // const svg = d3.select(DOM.svg(width, width))
    const svg = d3.select(".grafica-zoomable-sunburst").append("svg")
        .attr('class', 'svg-zoomable')
        .style("width", "100vw")
        .style("height", "100vh")
        .style("font", "10px sans-serif");

    const g = svg.append("g")
        .attr("transform", `translate(${width / 1.38},${width / 1.39})`);

    var tooltip = d3.select('.grafica-zoomable-sunburst') // select element in the DOM with id 'chart'
        .append('div').classed('tooltip-zoom', true); // append a div element to the element we've selected    
    tooltip.append('div') // add divs to the tooltip defined above 
        .attr('class', 'label'); // add class 'label' on the selection                
    tooltip.append('div') // add divs to the tooltip defined above             
        .attr('class', 'count'); // add class 'count' on the selection
    tooltip.append('div') // add divs to the tooltip defined above
        .attr('class', 'percent'); // add class 'percent' on the selection

    const path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .enter().append('path')
        .attr("fill", d => {
            if (d.depth > 2) {
                // var total = d.parent.value;
                // var percent = Math.round(1000 * d.value / total) / 10;
                // console.log(d.value)
                // if (d.value > 10) {
                //     return 'green'
                // } else if (d.value < 1.99) {
                //     return 'red'
                // }
                // return "yellow"
                if (d.value > (0.10 + 1000)) {
                    return 'green'
                } else if (d.value < (0.0199 + 1000)) {
                    return 'red'
                }
                return "yellow"
            }
            while (d.depth > 1) d = d.parent; return color(d.data.name);
        })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.9: 0.7) : 0)
        .attr("d", d => arc(d.current))
        .on('mouseover', function (d) {
            var total = d.parent.value;
            var percent = Math.round(1000 * d.value / total) / 10; // calculate percent
            tooltip.select('.label').html(d.data.name); // set current label           
            // tooltip.select('.count').html(d.value); // set current count            
            // tooltip.select('.percent').html(percent + '%'); // set percent calculated above          
            tooltip.style('display', 'block'); // set display   
        })
        .on('mouseout', function () { // when mouse leaves div                        
            tooltip.style('display', 'none'); // hide tooltip for that element
        })
        .on('mousemove', function (d) { // when mouse moves                  
            tooltip.style('top', (d3.event.layerY + 430) + 'px'); // always 10px below the cursor
            tooltip.style('left', (d3.event.layerX + 330) + 'px'); // always 10px to the right of the mouse
        });;

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    // path.append("title")
    //     .text(d => d.data.name + '\n' + format(d.value));
    // .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = g.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .enter().append("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => {
            var dato = d.data.name.slice(0, 10)
            if (d.data.name.length < 10) {
                return d.data.name;
            } else {
                return dato + '..';
            }

            return dato;
        });

    const parent = g.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    function clicked(p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });

        const t = g.transition().duration(750);


        path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function (d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.9: 0.7) : 0)
            .attrTween("d", d => () => arc(d.current));

        label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
    }

    function arcVisible(d) {
        return d.y1 <= 4 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 4 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }


    // d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .append("g")
    //     .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    // });
}

function grafica_zoomable_dashboard() {
    var data = obtener_datos();
    // console.log(data);
    var height = 30;

    partition = data => {
        const root = d3.hierarchy(data)
            .sum(d => d.size)
            .sort((a, b) => b.value - a.value);
        return d3.partition()
            .size([2 * Math.PI, root.height + 1])
            (root);
    }
    
    const colores = ['#ff8000', '#1FE250']// naranja: #FF5733  ff8000
    // const color = d3.scaleOrdinal(d3.schemeCategory20);
    const color = d3.scaleOrdinal(colores);
    // var color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow, data.children.length + 1));
    var format = d3.format(",d");

    var width = 300;
    var radius = width / 6;

    var arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))


    const root = partition(data);

    root.each(d => d.current = d);

    // const svg = d3.select(DOM.svg(width, width))
    const svg = d3.select(".grafica-circular-zoom").append("svg")
        .attr('class', 'svg-zoomable')
        .style("width", "430px")
        .style("height", "75vh")
        .style("font", "10px sans-serif");

    const g = svg.append("g")
        .attr("transform", `translate(${width / 1.38},${width / 1.39})`);

    var tooltip = d3.select('.grafica-circular-zoom') // select element in the DOM with id 'chart'
        .append('div').classed('tooltip-zoom', true); // append a div element to the element we've selected    
    tooltip.append('div') // add divs to the tooltip defined above 
        .attr('class', 'label'); // add class 'label' on the selection                
    tooltip.append('div') // add divs to the tooltip defined above             
        .attr('class', 'count'); // add class 'count' on the selection
    tooltip.append('div') // add divs to the tooltip defined above
        .attr('class', 'percent'); // add class 'percent' on the selection

    const path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .enter().append('path')
        .attr("fill", d => {
            if (d.depth > 2) {
                // var total = d.parent.value;
                // var percent = Math.round(1000 * d.value / total) / 10;
                // console.log(d.value)
                // if (d.value > 10) {
                //     return 'green'
                // } else if (d.value < 1.99) {
                //     return 'red'
                // }
                // return "yellow"
                if (d.value > (0.10 + 1000)) {
                    return 'green'
                } else if (d.value < (0.0199 + 1000)) {
                    return 'red'
                }
                return "yellow"
            }
            while (d.depth > 1) d = d.parent; return color(d.data.name);
        })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.9: 0.7) : 0)
        .attr("d", d => arc(d.current))
        .on('mouseover', function (d) {
            var total = d.parent.value;
            var percent = Math.round(1000 * d.value / total) / 10; // calculate percent
            tooltip.select('.label').html(d.data.name); // set current label           
            // tooltip.select('.count').html(d.value); // set current count            
            // tooltip.select('.percent').html(percent + '%'); // set percent calculated above          
            tooltip.style('display', 'block'); // set display   
        })
        .on('mouseout', function () { // when mouse leaves div                        
            tooltip.style('display', 'none'); // hide tooltip for that element
        })
        .on('mousemove', function (d) { // when mouse moves                  
            tooltip.style('top', (d3.event.layerY + 490) + 'px'); // always 10px below the cursor
            tooltip.style('left', (d3.event.layerX + 120) + 'px'); // always 10px to the right of the mouse
        });;

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    // path.append("title")
    //     .text(d => d.data.name + '\n' + format(d.value));
    // .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = g.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .enter().append("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => {
            var dato = d.data.name.slice(0, 10)
            if (d.data.name.length < 10) {
                return d.data.name;
            } else {
                return dato + '..';
            }

            return dato;
        });

    const parent = g.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    function clicked(p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });

        const t = g.transition().duration(750);


        path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function (d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.9: 0.7) : 0)
            .attrTween("d", d => () => arc(d.current));

        label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
    }

    function arcVisible(d) {
        return d.y1 <= 4 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 4 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }


    // d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .append("g")
    //     .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    // });
}
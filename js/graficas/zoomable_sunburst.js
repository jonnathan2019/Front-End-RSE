setTimeout(() => {
    // console.log("*******************")
    // console.log(resutaldo_final)//resulatdo final
    // console.log(objeto_resp)//resulatdo dimensiones y otros
    // const lista = [];
    // const object = {
    //     name: 'juna',
    //     size: '100'
    // };
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
                                console.log(tema_new.name + ' - ' + indicador.indicador)
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
    console.log(datos_z)

    function grafica_1() {
        function getData() {
            return {
                "name": "flare",
                "children": [{
                    "name": "analytics",
                    "children": [{
                        "name": "cluster",
                        "children": [{
                            "name": "AgglomerativeCluster",
                            "size": 3938
                        }, {
                            "name": "CommunityStructure",
                            "size": 3812
                        }, {
                            "name": "HierarchicalCluster",
                            "size": 6714
                        }, {
                            "name": "MergeEdge",
                            "size": 743
                        }]
                    }, {
                        "name": "graph",
                        "children": [{
                            "name": "BetweennessCentrality",
                            "size": 3534
                        }, {
                            "name": "LinkDistance",
                            "size": 5731
                        }, {
                            "name": "MaxFlowMinCut",
                            "size": 7840
                        }, {
                            "name": "ShortestPaths",
                            "size": 5914
                        }, {
                            "name": "SpanningTree",
                            "size": 3416
                        }]
                    }, {
                        "name": "optimization",
                        "children": [{
                            "name": "AspectRatioBanker",
                            "size": 7074
                        }]
                    }]
                }, {
                    "name": "animate",
                    "children": [{
                        "name": "Easing",
                        "size": 17010
                    }, {
                        "name": "FunctionSequence",
                        "size": 5842
                    }, {
                        "name": "ISchedulable",
                        "size": 1041
                    }, {
                        "name": "Parallel",
                        "size": 5176
                    }, {
                        "name": "Pause",
                        "size": 449
                    }, {
                        "name": "Scheduler",
                        "size": 5593
                    }, {
                        "name": "Sequence",
                        "size": 5534
                    }, {
                        "name": "Transition",
                        "size": 9201
                    }, {
                        "name": "Transitioner",
                        "size": 19975
                    }, {
                        "name": "TransitionEvent",
                        "size": 1116
                    }, {
                        "name": "Tween",
                        "size": 6006
                    }]
                }, {
                    "name": "data",
                    "children": [{
                        "name": "converters",
                        "children": [{
                            "name": "Converters",
                            "size": 721
                        }, {
                            "name": "DelimitedTextConverter",
                            "size": 4294
                        }, {
                            "name": "GraphMLConverter",
                            "size": 9800
                        }, {
                            "name": "IDataConverter",
                            "size": 1314
                        }, {
                            "name": "JSONConverter",
                            "size": 2220
                        }]
                    }]
                }, {
                    "name": "display",
                    "children": [{
                        "name": "DirtySprite",
                        "size": 8833
                    }, {
                        "name": "LineSprite",
                        "size": 1732
                    }, {
                        "name": "RectSprite",
                        "size": 3623
                    }, {
                        "name": "TextSprite",
                        "size": 10066
                    }]
                }, {
                    "name": "util",
                    "children": [{
                        "name": "Arrays",
                        "size": 8258
                    }, {
                        "name": "Colors",
                        "size": 10001
                    }, {
                        "name": "Dates",
                        "size": 8217
                    }, {
                        "name": "Displays",
                        "size": 12555
                    }, {
                        "name": "Filter",
                        "size": 2324
                    }, {
                        "name": "Geometry",
                        "size": 10993
                    }, {
                        "name": "IEvaluable",
                        "size": 335
                    }, {
                        "name": "Property",
                        "size": 5559
                    }, {
                        "name": "Shapes",
                        "size": 19118
                    }, {
                        "name": "Sort",
                        "size": 6887
                    }, {
                        "name": "Stats",
                        "size": 6557
                    }, {
                        "name": "Strings",
                        "size": 22026
                    }]
                }, {
                    "name": "vis",
                    "children": [{
                        "name": "axis",
                        "children": [{
                            "name": "Axis",
                            "size": 24593
                        }, {
                            "name": "CartesianAxes",
                            "size": 6703
                        }]
                    }, {
                        "name": "data",
                        "children": [{
                            "name": "Data",
                            "size": 20544
                        }, {
                            "name": "DataList",
                            "size": 19788
                        }, {
                            "name": "DataSprite",
                            "size": 10349
                        }, {
                            "name": "EdgeSprite",
                            "size": 3301
                        }, {
                            "name": "NodeSprite",
                            "size": 19382
                        }, {
                            "name": "ScaleBinding",
                            "size": 11275
                        }, {
                            "name": "Tree",
                            "size": 7147
                        }, {
                            "name": "TreeBuilder",
                            "size": 9930
                        }]
                    }, {
                        "name": "legend",
                        "children": [{
                            "name": "Legend",
                            "size": 20859
                        }, {
                            "name": "LegendItem",
                            "size": 4614
                        }, {
                            "name": "LegendRange",
                            "size": 10530
                        }]
                    }, {
                        "name": "operator",
                        "children": [{
                            "name": "distortion",
                            "children": [{
                                "name": "BifocalDistortion",
                                "size": 4461
                            }, {
                                "name": "Distortion",
                                "size": 6314
                            }, {
                                "name": "FisheyeDistortion",
                                "size": 3444
                            }]
                        }, {
                            "name": "encoder",
                            "children": [{
                                "name": "ColorEncoder",
                                "size": 3179
                            }, {
                                "name": "Encoder",
                                "size": 4060
                            }, {
                                "name": "PropertyEncoder",
                                "size": 4138
                            }, {
                                "name": "ShapeEncoder",
                                "size": 1690
                            }, {
                                "name": "SizeEncoder",
                                "size": 1830
                            }]
                        }, {
                            "name": "filter",
                            "children": [{
                                "name": "FisheyeTreeFilter",
                                "size": 5219
                            }, {
                                "name": "GraphDistanceFilter",
                                "size": 3165
                            }, {
                                "name": "VisibilityFilter",
                                "size": 3509
                            }]
                        }, {
                            "name": "IOperator",
                            "size": 1286
                        }, {
                            "name": "label",
                            "children": [{
                                "name": "Labeler",
                                "size": 9956
                            }, {
                                "name": "RadialLabeler",
                                "size": 3899
                            }, {
                                "name": "StackedAreaLabeler",
                                "size": 3202
                            }]
                        }, {
                            "name": "Operator",
                            "size": 2490
                        }, {
                            "name": "OperatorList",
                            "size": 5248
                        }, {
                            "name": "OperatorSequence",
                            "size": 4190
                        }, {
                            "name": "OperatorSwitch",
                            "size": 2581
                        }, {
                            "name": "SortOperator",
                            "size": 2023
                        }]
                    }, {
                        "name": "Visualization",
                        "size": 16540
                    }]
                }]
            }

        }


        // d3.json("https://gist.githubusercontent.com/mbostock/4348373/raw/85f18ac90409caa5529b32156aa6e71cf985263f/flare.json", function (data) {

        var data = datos_z;
        console.log(data);
        var height = 30;

        partition = data => {
            const root = d3.hierarchy(data)
                .sum(d => d.size)
                .sort((a, b) => b.value - a.value);
            return d3.partition()
                .size([2 * Math.PI, root.height + 1])
                (root);
        }


        var color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow, data.children.length + 1));
        var format = d3.format(",d");

        var width = 500;
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
            .style("width", width)
            .style("height", width)
            .style("font", "10px sans-serif");

        const g = svg.append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);

        const path = g.append("g")
            .selectAll("path")
            .data(root.descendants().slice(1))
            .enter().append("path")
            .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
            .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("d", d => arc(d.current));

        path.filter(d => d.children)
            .style("cursor", "pointer")
            .on("click", clicked);

        path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

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
            .text(d => d.data.name);

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
                .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attrTween("d", d => () => arc(d.current));

            label.filter(function (d) {
                return +this.getAttribute("fill-opacity") || labelVisible(d.target);
            }).transition(t)
                .attr("fill-opacity", d => +labelVisible(d.target))
                .attrTween("transform", d => () => labelTransform(d.current));
        }

        function arcVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }

        function labelVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }

        function labelTransform(d) {
            const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const y = (d.y0 + d.y1) / 2 * radius;
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        }


        d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    }

    function grafica_2() {
        const width = 800,
            height = 800,
            maxRadius = (Math.min(width, height) / 2) - 5;

        const formatNumber = d3.format(',d');

        const x = d3.scaleLinear()
            .range([0, 2 * Math.PI])
            .clamp(true);

        const y = d3.scaleSqrt()
            .range([maxRadius * .1, maxRadius]);

        const color = d3.scaleOrdinal(d3.schemeCategory20);

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


        function getData() {
            return {
                "name": "flare",
                "children": [{
                    "name": "analytics Responsabilida Social EMpresarial",
                    "children": [{
                        "name": "cluster",
                        "children": [{
                            "name": "AgglomerativeCluster",
                            "size": 3938
                        }, {
                            "name": "CommunityStructure",
                            "size": 3812
                        }, {
                            "name": "HierarchicalCluster",
                            "size": 6714
                        }, {
                            "name": "MergeEdge",
                            "size": 743
                        }]
                    }, {
                        "name": "graph",
                        "children": [{
                            "name": "BetweennessCentrality",
                            "size": 3534
                        }, {
                            "name": "LinkDistance",
                            "size": 5731
                        }, {
                            "name": "MaxFlowMinCut",
                            "size": 7840
                        }, {
                            "name": "ShortestPaths",
                            "size": 5914
                        }, {
                            "name": "SpanningTree",
                            "size": 3416
                        }]
                    }, {
                        "name": "optimization",
                        "children": [{
                            "name": "AspectRatioBanker",
                            "size": 7074
                        }]
                    }]
                }, {
                    "name": "animate",
                    "children": [{
                        "name": "Easing",
                        "size": 17010
                    }, {
                        "name": "FunctionSequence",
                        "size": 5842
                    }, {
                        "name": "ISchedulable",
                        "size": 1041
                    }, {
                        "name": "Parallel",
                        "size": 5176
                    }, {
                        "name": "Pause",
                        "size": 449
                    }, {
                        "name": "Scheduler",
                        "size": 5593
                    }, {
                        "name": "Sequence",
                        "size": 5534
                    }, {
                        "name": "Transition",
                        "size": 9201
                    }, {
                        "name": "Transitioner",
                        "size": 19975
                    }, {
                        "name": "TransitionEvent",
                        "size": 1116
                    }, {
                        "name": "Tween",
                        "size": 6006
                    }]
                }, {
                    "name": "data",
                    "children": [{
                        "name": "converters",
                        "children": [{
                            "name": "Converters",
                            "size": 721
                        }, {
                            "name": "DelimitedTextConverter",
                            "size": 4294
                        }, {
                            "name": "GraphMLConverter",
                            "size": 9800
                        }, {
                            "name": "IDataConverter",
                            "size": 1314
                        }, {
                            "name": "JSONConverter",
                            "size": 2220
                        }]
                    }]
                }, {
                    "name": "display",
                    "children": [{
                        "name": "DirtySprite",
                        "size": 8833
                    }, {
                        "name": "LineSprite",
                        "size": 1732
                    }, {
                        "name": "RectSprite",
                        "size": 3623
                    }, {
                        "name": "TextSprite",
                        "size": 10066
                    }]
                }, {
                    "name": "util",
                    "children": [{
                        "name": "Arrays",
                        "size": 8258
                    }, {
                        "name": "Colors",
                        "size": 10001
                    }, {
                        "name": "Dates",
                        "size": 8217
                    }, {
                        "name": "Displays",
                        "size": 12555
                    }, {
                        "name": "Filter",
                        "size": 2324
                    }, {
                        "name": "Geometry",
                        "size": 10993
                    }, {
                        "name": "IEvaluable",
                        "size": 335
                    }, {
                        "name": "Property",
                        "size": 5559
                    }, {
                        "name": "Shapes",
                        "size": 19118
                    }, {
                        "name": "Sort",
                        "size": 6887
                    }, {
                        "name": "Stats",
                        "size": 6557
                    }, {
                        "name": "Strings",
                        "size": 22026
                    }]
                }, {
                    "name": "vis",
                    "children": [{
                        "name": "axis",
                        "children": [{
                            "name": "Axis",
                            "size": 24593
                        }, {
                            "name": "CartesianAxes",
                            "size": 6703
                        }]
                    }, {
                        "name": "data",
                        "children": [{
                            "name": "Data",
                            "size": 20544
                        }, {
                            "name": "DataList",
                            "size": 19788
                        }, {
                            "name": "DataSprite",
                            "size": 10349
                        }, {
                            "name": "EdgeSprite",
                            "size": 3301
                        }, {
                            "name": "NodeSprite",
                            "size": 19382
                        }, {
                            "name": "ScaleBinding",
                            "size": 11275
                        }, {
                            "name": "Tree",
                            "size": 7147
                        }, {
                            "name": "TreeBuilder",
                            "size": 9930
                        }]
                    }, {
                        "name": "legend",
                        "children": [{
                            "name": "Legend",
                            "size": 20859
                        }, {
                            "name": "LegendItem",
                            "size": 4614
                        }, {
                            "name": "LegendRange",
                            "size": 10530
                        }]
                    }, {
                        "name": "operator",
                        "children": [{
                            "name": "distortion",
                            "children": [{
                                "name": "BifocalDistortion",
                                "size": 4461
                            }, {
                                "name": "Distortion",
                                "size": 6314
                            }, {
                                "name": "FisheyeDistortion",
                                "size": 3444
                            }]
                        }, {
                            "name": "encoder",
                            "children": [{
                                "name": "ColorEncoder",
                                "size": 3179
                            }, {
                                "name": "Encoder",
                                "size": 4060
                            }, {
                                "name": "PropertyEncoder",
                                "size": 4138
                            }, {
                                "name": "ShapeEncoder",
                                "size": 1690
                            }, {
                                "name": "SizeEncoder",
                                "size": 1830
                            }]
                        }, {
                            "name": "filter",
                            "children": [{
                                "name": "FisheyeTreeFilter",
                                "size": 5219
                            }, {
                                "name": "GraphDistanceFilter",
                                "size": 3165
                            }, {
                                "name": "VisibilityFilter",
                                "size": 3509
                            }]
                        }, {
                            "name": "IOperator",
                            "size": 1286
                        }, {
                            "name": "label",
                            "children": [{
                                "name": "Labeler",
                                "size": 9956
                            }, {
                                "name": "RadialLabeler",
                                "size": 3899
                            }, {
                                "name": "StackedAreaLabeler",
                                "size": 3202
                            }]
                        }, {
                            "name": "Operator",
                            "size": 2490
                        }, {
                            "name": "OperatorList",
                            "size": 5248
                        }, {
                            "name": "OperatorSequence",
                            "size": 4190
                        }, {
                            "name": "OperatorSwitch",
                            "size": 2581
                        }, {
                            "name": "SortOperator",
                            "size": 2023
                        }]
                    }, {
                        "name": "Visualization",
                        "size": 16540
                    }]
                }]
            }

        }


        var root = datos_z;
        console.log(root);

        // console.log(root)
        root = d3.hierarchy(root);
        root.sum(d => d.size);

        const slice = svg.selectAll('g.slice')
            .data(partition(root).descendants());

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
            .style('fill', d => color((d.children ? d : d.parent).data.name))
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


    grafica_2();
    // grafica_1()

}, 8000)
$(window).load(function(){FusionCharts.ready(function () {
    var officeLoc = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Harry's SuperMart Office Locations",
                "subcaption": "Head Office and Zonal Offices",
                "theme": "fint",
                "entityFillColor": "#b4ddb0",                                
                "markerFontSize": "12",
                "showEntityHover" : "0",
                "useSNameInLabels": "0"
            },                
            "markers": {
                "application": [
                    {
                        "id": "west-zone-ho-1",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "west-zone-ho-2",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "mid-west-zone-ho",
                        "shapeId": "hdo-shape"
                    },
                    {
                        "id": "north-east-ho",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "south-ho",
                        "shapeId": "zo-shape"
                    }
                ],
                "definition": [
                    {
                        "id": "west-zone-ho-1",
                        "x": "100",
                        "y": "250",
                        "label": "Zonal Office{br}[California, West Zone]",
                        "labelPos": "Bottom"
                    },
                    {
                        "id": "west-zone-ho-2",
                        "x": "145",
                        "y": "45",
                        "label": "Zonal Office{br}[Montana, West Zone]",
                        "labelPos": "Bottom"
                    },                    
                    {
                        "id": "mid-west-zone-ho",
                        "x": "450",
                        "y": "200",
                        "label": "Head Office{br}[Illinois, Mid West Zone]",
                        "labelPos": "Bottom"
                    },
                    {
                        "id": "north-east-ho",
                        "x": "625",
                        "y": "95",
                        "label": "Zonal Office{br}[New York, North East Zone]",
                        "labelPos": "Top"
                    },
                    {
                        "id": "south-ho",
                        "x": "295",
                        "y": "310",
                        "label": "Zonal Office{br}[Texas, South Zone]",
                        "labelPos": "Bottom"
                    }
                ],
                "shapes": [
                    {
                        "id": "hdo-shape",
                        "type": "circle",
                        "radius": "10",                        
                        "fillcolor": "ffffff,6baa01",
                        "fillAlpha": "100,40",
                        "fillRatio": "10,50",
                        "fillPattern": "RADIAL",
                        "borderColor": "#666666",
                        "borderThickness": "2",
                        "borderAlpha": "80"
                    },
                    {
                        "id": "zo-shape",
                        "type": "arc",                        
                        "radius": "8",
                        "innerRadius": "2",
                        "fillcolor": "6baa01"
                    }
                ]
            },
            "data": [{
                "id": "CA",
                "showLabel": "1"
            },{
                "id": "MT",
                "showLabel": "1"
            },{
                "id": "IL",
                "showLabel": "1"
            },{
                "id": "NY",
                "showLabel": "1"
            },{
                "id": "TX",
                "showLabel": "1"
            }]
        }
    }).render();
});});
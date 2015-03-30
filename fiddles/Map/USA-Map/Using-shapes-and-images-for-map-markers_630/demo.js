$(window).load(function(){FusionCharts.ready(function() {
    var officeLoc = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Harry's SuperMart Office Locations",
                "subcaption": "Head Office and Zonal Offices",                
                "entityFillColor": "#b4ddb0",
                "markerFillColor": "6baa01",
                "showLabels": "0",
                "useSNameInLabels": "0"

            },
            "markers": {
                "application": [
                    {
                        "id": "west-zone-ho-1",
                        //Using shape id as triangle to use triangle shape
                        "shapeId": "triangle"
                    },
                    {
                        "id": "west-zone-ho-1-arc",
                        "shapeId": "arc"
                    }, 
                    {
                        "id": "west-zone-ho-2",
                        //Using shape id as triangle to use triangle shape
                        "shapeId": "triangle"
                    },
                    {
                        "id": "west-zone-ho-2-arc",
                        "shapeId": "arc"
                    },
                    {
                        "id": "mid-west-zone-ho",
                        //Custom shapeid to add image
                        "shapeId": "ho-anchor"
                    },
                    {
                        "id": "north-east-ho",
                        "shapeId": "triangle"
                    },
                    {
                        "id": "north-east-ho-arc",
                        "shapeId": "arc"
                    },
                    {
                        "id": "south-ho",
                        "shapeId": "triangle"
                    },
                    {
                        "id": "south-ho-arc",
                        "shapeId": "arc"
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
                        "id": "west-zone-ho-1-arc",
                        "x": "100",
                        "y": "250",
                        "radius": "11"
                    },
                     {
                        "id": "west-zone-ho-2",
                        "x": "145",
                        "y": "45",
                        "label": "Zonal Office{br}[Montana, West Zone]",
                        "labelPos": "Top"
                    },
                    {
                        "id": "west-zone-ho-2-arc",
                        "x": "145",
                        "y": "45",
                        "radius": "11"
                    },
                    {
                        "id": "mid-west-zone-ho",
                        "x": "450",
                        "y": "150",
                        "label": "Head Office{br}[Illinois, Mid West Zone]",
                        "labelPos": "Top"
                    },
                       {
                        "id": "north-east-ho",
                        "x": "630",
                        "y": "95",
                        "label": "Zonal Office{br}[New York, North East Zone]",
                        "labelPos": "Top"
                    },
                    {
                        "id": "north-east-ho-arc",
                        "x": "630",
                        "y": "95",
                        "radius": "11"
                    },
                    {
                        "id": "south-ho",
                        "x": "295",
                        "y": "310",
                        "label": "Zonal Office{br}[Texas, South Zone]",
                        "labelPos": "Bottom"
                    },
                    {
                        "id": "south-ho-arc",
                        "x": "295",
                        "y": "310",
                        "radius": "11"
                    }
                ],
                //Custom shape defined with image as a marker
                "shapes": [
                    {
                        "id": "ho-anchor",
                        "type": "image",
                        //Image url for the marker
                        "url": "http://static.fusioncharts.com/sampledata/images/building.png",
                        "xscale": "15",
                        "yscale": "15",
                        "labelPadding": "15"
                    }
                ]
            },
            "data": [
                {
                    "id": "MT",
                    "showLabel": "1"
                    
                },
                {
                    "id": "CA",
                    "showLabel": "1"
                    
                },
                {
                    "id": "TX",
                    "showLabel": "1"
                },
                {
                    "id": "IL",
                    "showLabel": "1"
                },
                {
                    "id": "NY",
                    "showLabel": "1"
                }
            ]
        }
    }).render();
    
});});
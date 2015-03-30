$(window).load(function(){FusionCharts.ready(function () {
    var inventoryChart = new FusionCharts({
        type: 'dragcolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Inventory status - Bakersfield Central",                
                "subCaption": "Top 5 Food items",
                "xAxisName": "Food Item",
                "yAxisName": "No. of Units",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Poultry"
                        }, 
                        {
                            "label": "Rice"
                        }, 
                        {
                            "label": "Peanut Butter"
                        }, 
                        {
                            "label": "Salmon"
                        }, 
                        {
                            "label": "Cereal"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Available Stock",
                    "allowDrag": "0",
                    "data": [
                        {
                            "id": "P_AS",
                            "value": "6000"
                        }, 
                        {
                            "id": "R_AS",                            
                            "value": "9500"
                        }, 
                        {
                            "id": "PB_AS",
                            "value": "11900"
                        }, 
                        {
                            "id": "S_AS",
                            "value": "8000"
                        }, 
                        {
                            "id": "C_AS",
                            "value": "9700"
                        }
                    ]
                }, 
                {
                    "seriesname": "Estimated Demand",
                    "dashed": "1",
                    "data": [
                        {
                            "id": "P_ED",
                            "value": "19000"
                        }, 
                        {
                            "id": "R_ED",
                            "value": "16500"
                        }, 
                        {
                            "id": "PB_ED",
                            "value": "14300"
                        }, 
                        {
                            "id": "S_ED",
                            "value": "10000"
                        }, 
                        {
                            "id": "C_ED",
                            "value": "9800"
                        }
                    ]
                }
            ]
        },
        events: {
            'rendered': function(evt, arg){
                var chartIns = evt && evt.sender,
                    data = chartIns && chartIns.getData(),
                    dataTable = document.getElementById("data-table"),
                    i,
                    j,
                    len = data && data.length,
                    len2,
                    tableStr = "";
                
                for(i = 0; i < len; i+=1){
                    tableStr += "<tr>";
                    len2 = data[i].length;
                    for(j = 0; j < len2; j+= 1){
                        if(i == 0){
                            if(data[i][j] == ""){
                                 tableStr += "<th>Item Name</th>";
                            }else{
                                tableStr += "<th>"+data[i][j]+"</th>";
                            }
                        }else{
                            if(data[i][j] == ""){
                                 tableStr += "<td>empty</td>";
                            }else{
                                tableStr += "<td>"+data[i][j]+"</td>";
                            }
                        }
                    }
                    tableStr +=  "</tr>"
                }
                
                dataTable.innerHTML = tableStr;                
            }
        }
    }).render();
});});
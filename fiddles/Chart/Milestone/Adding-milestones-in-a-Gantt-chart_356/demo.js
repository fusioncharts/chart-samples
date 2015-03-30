$(window).load(function(){FusionCharts.ready(function () {
    var smoPlan = new FusionCharts({
        type: 'gantt',
        renderAt: 'chart-container',
        width: '750',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "dateformat": "mm/dd/yyyy",
                "caption": "Social Media Optimization",
                "captionFontSize" : "14",
                "subCaption" : "Project Plan",
                "subCaptionFontSize" : "12"
            },
            "categories": [
                {
                    "category": [
                        {
                            "start": "08/01/2014",
                            "end": "08/31/2014",
                            "label": "Aug '14"
                        },
                        {
                            "start": "09/01/2014",
                            "end": "09/30/2014",
                            "label": "Sep '14"
                        },
                        {
                            "start": "10/01/2014",
                            "end": "10/31/2014",
                            "label": "Oct '14"
                        },
                        {
                            "start": "11/01/2014",
                            "end": "11/30/2014",
                            "label": "Nov '14"
                        },
                        {
                            "start": "12/01/2014",
                            "end": "12/31/2014",
                            "label": "Dec '14"
                        },
                        {
                            "start": "01/01/2015",
                            "end": "01/31/2015",
                            "label": "Jan '15"
                        },
                        {
                            "start": "02/01/2015",
                            "end": "02/28/2015",
                            "label": "Feb '15"
                        },
                        {
                            "start": "03/01/2015",
                            "end": "03/31/2015",
                            "label": "Mar '15"
                        }
                    ]
                }
            ],
            "processes": {
                "fontsize": "12",
                "isbold": "1",
                "align": "left",
                "process": [
                    {
                        "label": "Identify Customers"
                    },
                    {
                        "label": "Survey 500 Customers"
                    },
                    {
                        "label": "Interpret Requirements"
                    },
                    {
                        "label": "Market Analysis"
                    },
                    {
                        "label": "Brainstorm concepts"
                    },
                    {
                        "label": "Define Ad Requirements"
                    },
                    {
                        "label": "Design & Develop"
                    },
                    {
                        "label": "Mock test"
                    },
                    {
                        "label": "Documentation"
                    },
                    {
                        "label": "Start Campaign"
                    }
                ]
            },
            "tasks": {
                "task": [
                    {
                        "id": "1",
                        "start": "08/04/2014",
                        "end": "08/10/2014"
                    },
                    {
                        "id": "2",
                        "start": "08/08/2014",
                        "end": "08/19/2014"
                    },
                    {
                        "id": "3",
                        "start": "08/19/2014",
                        "end": "09/02/2014"
                    },
                    {
                        "id": "4",
                        "start": "08/24/2014",
                        "end": "09/02/2014"
                    },
                    {
                        "id": "5",
                        "start": "09/02/2014",
                        "end": "09/21/2014"
                    },
                    {
                        "id": "6",
                        "start": "09/21/2014",
                        "end": "10/06/2014"
                    },
                    {
                        "id": "7",
                        "start": "10/06/2014",
                        "end": "01/21/2015"
                    },
                    {
                        "id": "8",
                        "start": "01/21/2015",
                        "end": "02/19/2015"
                    },
                    {
                        "id": "9",
                        "start": "01/28/2015",
                        "end": "02/24/2015"
                    },
                    {
                        "id": "10",
                        "start": "02/24/2015",
                        "end": "03/27/2015"
                    }
                ]
            },
            //Adding milestones with task id 8 and 10
            "milestones": {
                "milestone": [
                    {
                        "date": "1/21/2015",
                        "taskid": "7",
                        "color": "#f8bd19",
                        "shape": "star",
                        "tooltext": "Development Complete"
                    },
                    {
                        "date": "3/28/2015",
                        "taskid": "10",
                        "color": "#f8bd19",
                        "shape": "star",
                        "tooltext": "Successful Completion of Campaign"
                    }                   
                ]
            }
            
            
        }
    }).render();
});});
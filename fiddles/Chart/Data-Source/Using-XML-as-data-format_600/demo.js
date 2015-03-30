$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'xml',
        dataSource: '<chart caption="Monthly revenue" subcaption="Last year" xaxisname="Month" yaxisname="Revenue (In USD)" theme="fint">\
    <set label="Jan" value="420000" />\
    <set label="Feb" value="810000" />\
    <set label="Mar" value="720000" />\
    <set label="Apr" value="550000" />\
    <set label="May" value="910000" />\
    <set label="Jun" value="510000" />\
    <set label="Jul" value="680000" />\
    <set label="Aug" value="620000" />\
    <set label="Sep" value="610000" />\
    <set label="Oct" value="490000" />\
    <set label="Nov" value="900000" />\
    <set label="Dec" value="730000" />\
</chart>'
    })
    .render();
});});
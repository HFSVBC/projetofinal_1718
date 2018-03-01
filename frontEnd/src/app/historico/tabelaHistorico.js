var dataSet = [
[ "12/03/2016", "12:24", "1.2.15"],
["05/06/2017", "15:56", "1.2.24"], 
["24/05/2017", "10:11", "1.2.22"],
["14/04/2016", "9:48", "1.2.21"]
];
$(document).ready(function() {
    $('#hist').DataTable( {
        data: dataSet,
        columns: [
            { title: "Data" },
            { title: "Hora" },
            { title: "Sala." }
        ]
    } );
} );

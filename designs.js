// Select color input
var colorInput = $("#colorPicker") ;

// Select size input
var gridHeight = $("#inputHeight");
var gridWidth = $("#inputWeight");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(grid) {
    $('table tr').remove();
    for (var h = 1 ; h <= gridHeight.val() ; h++){
       var row = $("table").append("<tr></tr>");
        for (var w = 1 ; w <= gridWidth.val() ; w++){
           var column =  $('tr:last').append("<td></td>");
            $('td').attr("class",'pixels');
            console.log("we have " + gridHeight.val() + "row(s) and " + gridWidth.val() +"column(s)");
        } 
    }  
    grid.preventDefault();
    
    $(".pixels").click(function (event){
        var paintCells = $('#colorPicker').val();
        $(event.target).css('background-color', paintCells);
        console.log("This cell has a color code of " + paintCells);
    });
// Your code goes here!

});

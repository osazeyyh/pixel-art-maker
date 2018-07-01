// Select color input
const colorInput = $("#colorPicker") ;

// Select size input
const gridHeight = $("#inputHeight");
const gridWidth = $("#inputWeight");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(grid) {
    $('table tr').remove();
    for (let h = 1 ; h <= gridHeight.val() ; h++){
      let row = $("table").append("<tr></tr>");
        for (let w = 1 ; w <= gridWidth.val() ; w++){
           let column =  $('tr:last').append("<td></td>");
            $('td').attr("class",'pixels');
            console.log("We have " + gridHeight.val() + "row(s) and " + gridWidth.val() +"column(s)");
        } 
    }  
    grid.preventDefault();
    
    $(".pixels").click(function (event){
        let paintCells = $('#colorPicker').val();
        $(event.target).css('background-color', paintCells);
        console.log("This cell has a color code of " + paintCells);
    });
// Your code goes here!

});

$(document).ready(function() {
  let rows = 3;
  let columns = 3;
  let arr = initArr();
  main();
  
  function main(){
    arr = initArr();
    createGrid();
    numRectangles();
  }

  // const width = $('#grid').width()/columns
  // console.log('width', width)
  // const height = $(document).height()/rows
  // console.log('height', height)
  // $('td').css('width',width)
  // $('td').css('height',width)

  function initArr() {
    let arr = new Array(columns);
    for (var x = 0; x < columns; x++) {
      arr[x] = [];
      for (var y = 0; y < rows; y++) {
        arr[x][y] = 1;
      }
    }
    return arr;
  }
  function createGrid() {
    $("tbody").html('')
    for (i = 0; i <= rows - 1; i++) {
      $("tbody").append("<tr id=" + i + ">");
      for (j = 0; j <= columns - 1; j++) {
        //if($("td").hasClass())
        $("#" + i).append("<td id=" + i + "_" + j + "></td>");
      }
      //$("tabody").append("</tr>");
    }
  }

  function numRectangles() {
    let counter = 0;
    let pairs = [];
    let rectangles = [];

    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        for (var k = 0; k < arr[i].length; k++) {
          if (arr[i][k] == arr[j][k] && arr[j][k] == 1) {
            temp = [[i, k], [j, k]];
            pairs.push(temp);
          }
        }
      }
    }

    for (i = 0; i < pairs.length - 1; i++) {
      for (j = i + 1; j < pairs.length; j++) {
        if (
          pairs[i][0][0] == pairs[j][0][0] &&
          pairs[i][1][0] == pairs[j][1][0]
        ) {
          rectangles.push([pairs[i][0], pairs[j][0], pairs[i][1], pairs[j][1]]);
        }
      }
    }
    //console.log(rectangles);
    $("#NumRectangles").html(rectangles.length);
    return rectangles;
  }

  $("tbody tr td").click(function(event) {
    let pointId = event.target.id;
    let point = $("#" + pointId);
    let IsPoint = point.hasClass("deletedPoint");
    if (!IsPoint) {
      point.addClass("deletedPoint");
      points = pointId.split("_");
      arr[parseInt(points[0])][parseInt(points[1])] = 0;
    } else {
      point.removeClass("deletedPoint");
      points = pointId.split("_");
      arr[parseInt(points[0])][parseInt(points[1])] = 1;
    }
    //return numRectangles(arr);

    $("#NumRectangles").html(numRectangles().length);
  });


  $('#AddRow').click(function(){
    if(0<rows<10){
      rows=rows+1;
      main();
    }
  })
  $('#SubRow').click(function(){
    if(0<rows<10){
      rows=rows-1;
      main();
    }
  })
  $('#AddCol').click(function(){
    if(0<columns<10){
      columns=columns+1;
      main();
    }
  })
  $('#SubCol').click(function(){
    if(0<columns<10){
      columns=columns-1;
      main();
    }
  })

});

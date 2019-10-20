$(document).ready(function() {
  let rows = 5;
  let columns = 5;
  createGrid();
  numRectangles();
  createArray();
  // const width = $('#grid').width()/columns
  // console.log('width', width)
  // const height = $(document).height()/rows
  // console.log('height', height)
  // $('td').css('width',width)
  // $('td').css('height',width)

  function createGrid() {
    for (i = 0; i <= rows - 1; i++) {
      $("tbody").append("<tr id=" + i + ">");
      for (j = 0; j <= columns - 1; j++) {
        //if($("td").hasClass())
        $("#" + i).append("<td id=" + i + "_" + j + "></td>");
      }
      //$("tabody").append("</tr>");
    }
  }
  function createArray(){
    var matrix = [];
    for(var i=0; i<9; i++) {
    matrix[i] = [];
    for(var j=0; j<9; j++) {
        matrix[i][j] = 1;
        
    }
    console.log('matrix', matrix)
}
  }
  function numRectangles(arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]) {
    let counter = 0;
    let pairs = [];
    let rectangles = [];

    console.log(arr);
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
    console.log(rectangles);
    console.log(rectangles.length);
    return rectangles;
  }

  $("tbody tr td").click(function(event) {
    let pointId = event.target.id;
    let point = $("#" + pointId);
    let IsPoint = point.hasClass("deletedPoint");

    if (!IsPoint) {
      point.addClass("deletedPoint");
    } else {
      point.removeClass("deletedPoint");
    }
  });
});

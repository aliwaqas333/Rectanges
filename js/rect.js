$(document).ready(function() {
  let rows = 3;
  let columns = 3;
  let arr = initArr();
  main();

  function main() {
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
    $("table")
      .find("tr")
      .remove();
    $("#numRows").html(rows);
    $("#numColumns").html(columns);
    for (i = 0; i <= rows - 1; i++) {
      $("tbody").append("<tr id=" + i + ">");
      for (j = 0; j <= columns - 1; j++) {
        //if($("td").hasClass())
        $("#" + i).append("<td id=" + i + "_" + j + "></td>");
        document
          .getElementById(i + "_" + j)
          .addEventListener("click", sampleClick);
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

  function sampleClick() {
    let pointId = event.target.id;
    let point = $("#" + pointId);
    let IsPoint = point.hasClass("deletedPoint");
    if (!IsPoint) {
      point.addClass("deletedPoint");
      point.removeClass("filled");

      points = pointId.split("_");
      arr[parseInt(points[0])][parseInt(points[1])] = 0;
    } else {
      point.removeClass("deletedPoint");
      point.addClass("filled");
      points = pointId.split("_");
      arr[parseInt(points[0])][parseInt(points[1])] = 1;
    }
    //return numRectangles(arr);

    $("#NumRectangles").html(numRectangles().length);
  }

  $("#fillAll").click(function() {
    $("td").removeClass("deletedPoint");
    $("td").addClass("filled");

    for (var x = 0; x < arr.length; x++)
      for (var y = 0; y < arr[0].length; y++) arr[x][y] = 1;
    numRectangles();
  });

  $("#clearAll").click(function() {
    $("td").addClass("deletedPoint");
    $("td").removeClass("filled");

    for (var x = 0; x < arr.length; x++)
      for (var y = 0; y < arr[0].length; y++) arr[x][y] = 0;
    numRectangles();
  });

  $("#AddRow").click(function() {
    if (rows < 9) {
      rows = rows + 1;
      main();
    }
  });
  $("#SubRow").click(function() {
    if (rows >0) {
      rows = rows - 1;
      main();
    }
  });
  $("#AddCol").click(function() {
    if (columns<9) {
      columns = columns + 1;
      main();
    }
  });
  $("#SubCol").click(function() {
    if (columns >0) {
      columns = columns - 1;
      main();
    }
  });
});

$(document).ready(function(){
    let rows=5
    let columns=5
    createGrid();
    // const width = $('#grid').width()/columns
    // console.log('width', width)
    // const height = $(document).height()/rows
    // console.log('height', height)
    // $('td').css('width',width)
    // $('td').css('height',width)

    function createGrid(){
        for (i = 0; i <= rows-1; i++) {
            $('tbody').append('<tr id=' + i + '>')
            for (j = 0; j <= columns-1; j++) {
              //if($("td").hasClass())
              $('#' + i).append('<td id=' + i + '_' + j + '></td>')
            }
            //$("tabody").append("</tr>");
          }
    }

    $('tbody tr td').click(function(event){
        let pointId=event.target.id
        let point=$('#'+pointId)
        let IsPoint=point.hasClass('deletedPoint')
        
        if(!IsPoint){
            point.addClass('deletedPoint')
        }
        else{
            point.removeClass('deletedPoint')
        }
        

    })
})
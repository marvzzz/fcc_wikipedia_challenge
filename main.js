$(document).ready(function(){

    var term ; //value for testing
    var dataVal;
    var itemLoop;

  function wikiViewer(){
    $.ajax({
      //dataType:'JSONP',
      type:'GET',
      url:'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&formatversion=2&gsrsearch='+ term,
      success: function(data){
        //console.log(data.query.pages);
        //global function
        function items(){
         for(var i=0; i<data.query.pages.length; i++){
             data.query.pages[i];
          }
        }
      }
    })
  }wikiViewer();

  $('.query-btn').on('click', function(){
    term = $('.searchInput').val();
    $('.displayContent').text();
    //wikiViewer(term);
    console.log(term);
  })





  /*// button inside the form
  $('#btn-search').on('click', function(e){
    e.preventDefault();
    term = $('.searchInput').val();//document.getElementsByClassName('searchInput')[0].val();
    wikiViewer();
  })*/




});



/*
//fetching data using XMLHttpRequest insted of AJAX.

function fetchData(){
  var xhr = new XMLHttpRequest();

      xhr.open('GET','https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&origin=*',true);
      xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText));
      }
      xhr.send();
}
fetchData();


//this is how to loop through an objects
success: function(data){
  Object.keys(data.query.pages).forEach(function(item){
    console.log(data.query.pages[item]);
  })
*/

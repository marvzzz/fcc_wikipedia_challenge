$(document).ready(function(){


  function wikiViewer(term){
    $.ajax({
      //dataType:'JSONP',
      type:'GET',
      url:'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&formatversion=2&gsrsearch='+ term,
      success: function(data){
      items(data);
      }
    })
  }


  function items(data){
    var html = "";
    var data = data.query;
    for(var i=0; i<data.pages.length; i++) {
      var description =data.pages[i].extract;
      var title = data.pages[i].title;
      html = html + "<h2 class='title'>" + title + "</h2><p class='description'>" + description + "</p>"
   }
   $(".displayContent").html(html);
   animate();
  }

  function animate() {
  }

  $('#search').on('submit', function(event){
    event.preventDefault();
    var term = $('.searchInput').val();
    $('.displayContent').text();
    wikiViewer(term);
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

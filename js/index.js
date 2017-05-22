
document.addEventListener("DOMContentLoaded", function(){
  //history api
  var pageLinks = document.querySelectorAll(".pageLink");

  for(var p=0; p<pageLinks.length; p++){

    pageLinks[p].addEventListener("click", function( ev ){
      //this function runs when the user clicks on the anchor with the id "myAnchorTag".
      ev.preventDefault( );  
      //stop the link from reloading the page.
      var href = ev.currentTarget.href;
      navigate( href, true );
      return false;
    });
  }                                                   
});



function navigate( url, addToHistory ){
$('#container').load(url + ' #container');

  if( addToHistory ){

    history.pushState({"data":123}, null, url );    
    //add the url to the history array
  }else{
    history.replaceState({"data":123}, null, url);
  }
  if(location.pathname=="/") document.title = "This is page title";
  if(location.pathname=="/page1.html") document.title = "This is page 1 title";
  if(location.pathname=="/page2.html") document.title = "This is page 2 title";
  if(location.pathname=="/page3.html") document.title = "This is page 3 title";
  if(location.pathname=="/page4.html") document.title = "This is page 4 title";
}

window.addEventListener("hashchange", function(ev){
  //this happens when we have used replaceState() or pushState();
  
});

window.addEventListener("popstate", function( ev ){
  //this will handle the back button and forward button if clicked.  
  console.log( ev.state );
  console.log( location.href );
  navigate( location.href, false );
  //don't add this call to the history... it is already there.
});


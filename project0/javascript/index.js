$(document).ready(function(){
    //for owl-carousel//
    var owl = $('.owl-sliders');
    owl.owlCarousel({
        loop:true,
        autoplay: true,
        navSpeed: 0.2,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});


$('.owl-logo').owlCarousel({
        navSpeed: 10,
        nav:true,
        items:3,
        autoHeight:true,
        autoplay: false,
        loop:true,
        margin:10,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
});



var tabButtons=document.querySelectorAll(".tab-container .button-container button");
var tabPanels=document.querySelectorAll(".tab-container  .tabpanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#1c2b5f');


var tabButtons_trending=document.querySelectorAll(".tab-container-trending .button-container button");
var tabPanels_trending=document.querySelectorAll(".tab-container-trending  .tabpanel1");

function showPanelTrending(panelIndex,colorCode) {
    tabButtons_trending.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons_trending[panelIndex].style.backgroundColor=colorCode;
    tabButtons_trending[panelIndex].style.color="white";
    tabPanels_trending.forEach(function(node){
        node.style.display="none";
    });
    tabPanels_trending[panelIndex].style.display="block";
    tabPanels_trending[panelIndex].style.backgroundColor=colorCode;
}
showPanelTrending(0,'#000');
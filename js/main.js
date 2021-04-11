  // $(".akkkkkkk").show(function (){
  //           $(".gellery").style.display = "block";
            
  //       });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('.owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    margin:10,
    nav:true,
    navText:['prev','Next'],
    // animateOut:'fadeout',

    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})
// wow js 
new WOW().init();
// wow js 

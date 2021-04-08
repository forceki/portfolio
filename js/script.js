$(document).ready(function(){


//animai toggle
 $('.container').click(function(){
    $('.container').toggleClass('change');
     $('.nav').toggleClass('appear');
  });


//animasi navbar

 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('nav-scrolled');
      $('ul li:first-child').addClass('fade');
       $('ul li:first-child').addClass('in');
    } else {
      $('nav').removeClass('nav-scrolled');
      $('nav ul.br li:first-child').removeClass('fade');
       $('nav ul.br li:first-child').removeClass('in');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('nav').addClass('nav-scrolled');
    $('ul li:first-child').addClass('fade');
     $('ul li:first-child').addClass('in');
  };
  //for-info-profil

  

 

         /*  LightSlider  */
      // $(document).ready(function() {
      //   $('#vertical').lightSlider({
      //     gallery:false,
      //     item:1,
      //     vertical:true,
      //     verticalHeight:600,
      //     vThumbWidth:0,
      //     thumbItem:0,
      //     thumbMargin:0,
      //     slideMargin:0
      //   });  
      // });

  


});
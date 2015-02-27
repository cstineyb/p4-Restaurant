//STICKY CONTENT


$(window).load(function(){
      $("#main-nav").sticky({ topSpacing: 0 });
    });

//HIDE AND REVEAL MENU ITEMS BY TYPE

$('div.types a.raw').click(function(){
  $('section.item').hide();
  $('section.raw').show(5000);
   $('section.item').show(16000);
  
 
  });


$('div.types a.veg').click(function(){
  
 $('section.item').hide();
  $('section.veg').show(3000);
   $('section.item').show(10000);
  });


 $('div.types a.spicy').click(function(){
  
   $('section.item').hide();
  $('section.spicy').show(5000);
   $('section.item').show(16000);


   });

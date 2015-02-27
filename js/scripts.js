//STICKY CONTENT


$(window).load(function(){
      $("#main-nav").sticky({ topSpacing: 0 });
    });

//HIDE AND REVEAL MENU ITEMS BY TYPE

$('div.types a.raw').click(function(){
  
  $('section.item').hide();
  $('section.raw').show();
  });


$('div.types a.veg').click(function(){
  
  $('section.item').hide();
  $('section.veg').show();
  });


$('div.types a.spicy').click(function(){
  
  $('section.item').hide();
  $('section.spicy').show();
  });



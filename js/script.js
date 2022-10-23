$(".MenuTop, .FunFact2, .MenuMiddle, .MenuBottom").hide();


$(".MenuButtonTop").click(function(){
    $(".MenuTop").fadeIn("fast");
    $(".PinkBox").hide();
}); 

$(".MenuButtonMiddle").click(function(){
    $(".MenuMiddle").fadeIn("fast");
    $(".FashionTab").fadeOut("fast");
}); 

$(".MenuButtonBottom").click(function(){
    $(".MenuBottom").fadeIn("fast");
    $(".CastTab").fadeOut("fast");
}); 

$(".Close4").click(function(){
    $(".MenuBottom").hide();
    $(".CastTab").fadeIn("fast");
})

$(".Close2").click(function(){
    $(".MenuTop").hide();
    $(".PinkBox").fadeIn("fast");
})

$(".Close3").click(function(){
    $(".MenuMiddle").hide();
    $(".FashionTab").fadeIn("fast");
})

$(".Close1").click(function(){
    $(".FunFact2").fadeOut();
    $(".PinkBox").fadeIn("fast");
})


$(".FunFact2").hide();

$("#FunFact1").click(function(){
    $(".FunFact2").fadeIn("fast");
    $(".PinkBox").fadeOut("fast");
})

$("#Cast").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CastTab").offset().top
    }, 500);
    $(".MenuTop").fadeOut("fast");
    $(".PinkBox").fadeIn("fast");
});

$(".Fashion").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CluelessLogo2").offset().top
    }, 500);
    $(".MenuTop").fadeOut("fast");
    $(".PinkBox").fadeIn("fast");
});

$(".HomeMiddle").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CluelessLogo").offset().top
    }, 500);
    $(".MenuMiddle").hide();
    $(".FashionTab").fadeIn("fast");
});




$(".HomeBottom").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CluelessLogo").offset().top
    }, 500);
    $(".MenuBottom").hide();
    $(".CastTab").fadeIn("fast");
});

$(".FashionBottom").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CluelessLogo2").offset().top
    }, 500);
    $(".MenuBottom").hide();
    $(".CastTab").fadeIn("fast");
});

$(".CastMiddle").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#CluelessLogo3").offset().top
    }, 500);
    $(".MenuMiddle").hide();
    $(".FashionTab").fadeIn("fast");
});


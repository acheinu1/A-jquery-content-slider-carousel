$(document).ready(function (){
    //set options
    var speed = 500;            //fade speed
    var autoswitch = true;          //auto slider option
    var autoswitch_speed = 4000;        //auto slider speed

    //add class active to the first slide class
    $(".slide") .first() .addClass("active");

    //hide all the 5 slides
    $(".slide") .hide();

    // show only active slide
    $(".active") .show();

    //the next icon
    $("#next") .on("click",function(){

        //this is to set the previous page to old
        $(".active") .removeClass("active") .addClass("oldActive");
        if($(".oldActive") .is(":last-child")){

        // when the last(5) is out we want first(1) as the next slide
        $(".slide") .first() .addClass("active");
        }
        else{
        $(".oldActive").next().addClass("active");
        }
        $(".oldActive") .removeClass("oldActive");
        $(".slide").fadeOut(speed)
        $(".active").fadeIn(speed)
    })

    // the previous button
    $("#prev") .on("click",function(){
        
        $(".active") .removeClass("active") .addClass("oldActive");
        if($(".oldActive") .is(":first-child")){

        
        $(".slide") .last() .addClass("active");
        }
        else{
        $(".oldActive").prev().addClass("active");
        }
        $(".oldActive") .removeClass("oldActive");
        $(".slide").fadeOut(speed)
        $(".active").fadeIn(speed)
    })
})
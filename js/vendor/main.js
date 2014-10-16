var height,width,bgMusic;

$(window).load(function() { // makes sure the whole site is loaded
    height = $(window).height();
    width = $(window).width();

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#signin').delay(500).css({'display':'block', 'opacity':'1'});    

    if(height < width){
        $("#horizontalDisplay").delay(500).css({'display':'block'});
    }
});

$(function(){
  $(".pointer").bind( "vmouseup", tapRelease );
 
  function tapRelease( event ){
    $(".pointer").removeClass('ng-click-active');
  }
});

$(function(){
  $(".pointer").bind( "vmousedown", tapHandle );
 
  function tapHandle( event ){
    $(".pointer").addClass('ng-click-active');
    }
});

$(window).on('resize', function(){
        if($(window).height() < $(window).width()){
            $("#horizontalDisplay").delay(500).css({'display':'block'});
            // $('#signin').delay(500).css({'display':'none', 'opacity':'0'});
        }else{
            $("#horizontalDisplay").delay(500).css({'display':'none'});
            // $('#signin').delay(500).css({'display':'block', 'opacity':'1'});
        }
    });
            
$(document).ready(function() {

    height = $(window).height();
    width = $(window).width();

    $("#image-7").hide();

    $("#firstArrow").hide();
    $(".ui-loader").hide();

    secondAnimationHide();
    threeAnimationHide();
    fourAnimationHide();
    firstScreenAnimationHide();
    fiveAnimationHide();

    $('#image-2').hide();
        $('#image-3').hide();
        $('#image-4').hide();
        $('#car-transition').hide();

    var thumbprint = $(".pointer");

    var button2 = document.getElementById("fingerPrint");

    var button = new Hammer(button2);

    button.add(new Hammer.Press({
        event: 'press',
        pointer: 1,
        threshold: 10,
        time: 350
    }));

    button.on('press', function(event) {
        
        //fade out overlay
         $('#signin').fadeOut(2200)
         $('#signin').delay(600).css({'display':'none'});
        //start expanding bg

         $('#firstPage').delay(600).css({'display':'block', 'opacity':'1'});
        firstScreenAnimation();

         $('#image-2').show();
        $('#image-3').show();
        $('#image-4').show();
        $('#car-transition').show();
    });

    bgMusic = document.getElementById("song");
   // bgMusic.play();

    $("img").load(function() {

        var height2 = $(this).height();
        var width2 = $(this).width();

        $("#image-2").height($("#firstPage").height());
        $("#image-3").height($("#firstPage").height());
        $("#image-4").height($("#firstPage").height());
        $("#car-transition").height($("#firstPage").height());
    

      
        $(function() {
            // var img = document.getElementById('image-1'); 
            var IMG_HEIGHT = height2,
            currentImg=0,
            maxImages=9;
            speed=500,
            imgs = $("#imgs");

            //Init touch swipe
            imgs.swipe( {
                triggerOnTouchEnd : true,
                swipeStatus : swipeStatus,
                allowPageScroll:"NONE"
            });

            /**
            * Catch each phase of the swipe.
            * move : we drag the div.
            * cancel : we animate back to where we were
            * end : we animate to the next image
            */
            function swipeStatus(event, phase, direction, distance, fingers)
            {
                //If we are moving before swipe, and we are going L or R, then manually drag the images
                if( phase=="move" && (direction=="up" || direction=="down") )
                {
                    var duration=0;

                    if (direction == "up"){
                        scrollImages((IMG_HEIGHT * currentImg) + distance, duration);
                    }
                    else if (direction == "down"){
                        scrollImages((IMG_HEIGHT * currentImg) - distance, duration);
                    }
                }

                //Else, cancel means snap back to the begining
                else if ( phase == "cancel")
                {
                    scrollImages(IMG_HEIGHT * currentImg, speed);
                }

                //Else end means the swipe was completed, so move to the next image
                else if ( phase =="end" )
                {
                    if (direction == "down")
                        previousImage()
                    else if (direction == "up")
                        nextImage()

                    checkCurrentImage(currentImg);
                }
            }

            function previousImage()
            {
                currentImg = Math.max(currentImg-1, 0);
                scrollImages( IMG_HEIGHT * currentImg, speed);
                console.log("1 " +IMG_HEIGHT);
                console.log("2 "+currentImg);

            }

            function nextImage()
            {
                currentImg = Math.min(currentImg+1, maxImages-1);
                scrollImages( IMG_HEIGHT * currentImg, speed);

            }

            function checkCurrentImage(value){
                switch (value) { 
                    case 0: displayText('firstPageText');
                        break;
                    case 1: displayText('text-2');
                        break;
                    case 2: displayText('text-3');
                        break;
                    case 3: displayText('text-4');
                        break;
                    case 4: carTransition();
                        break; 
                    default:
                       // alert('Nobody sucks!');
                        break;

                }
            }

            function displayText(id){
                switch (id) {
                    case 'firstPageText': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                   firstScreenAnimation();
                                   fiveAnimationHide();
                        break;
                    case 'text-2': secondAnimation();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                   $('#first').removeClass("expand");
                        break;
                    case 'text-3': secondAnimationHide();
                                    threeAnimation();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                        break;
                    case 'text-4': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimation();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                        break;
                }

            }
            /**
             * Manually update the position of the imgs on drag
             */
            function scrollImages(distance, duration)
            {
                imgs.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

                //inverse the number we set in the css
                var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

                imgs.css("-webkit-transform", "translate3d(0px,"+value +"px,0px)");
            }


            function carTransition() {

                $("#pop-up1").hide();
                $("#pop-up2").hide();
                $("#pop-up3").hide();
                $("#pop-up4").hide();
                $("#hotspot").hide();

                secondAnimationHide();
                threeAnimationHide();
                fourAnimationHide();
                firstScreenAnimationHide();

            
                $("#bigcar").attr('src','images/bigCar.jpg').addClass("expand2").fadeIn(1500);

                $("#image-6").delay(3000).fadeIn(1500, function(){
                    // $("#car-transition").append('<div id="hotspot"></div>');
                   $("#hotspot").show();
                });
                $("#bigcar").delay(2800).fadeOut(1500, function() {
                        $('#bigcar').removeClass("expand2");
                        $("#bigcar").attr('src','');
                    });

                // var button3 = document.getElementById("hotspot");
                // var button4 = new Hammer(button3);
                // button4.add(new Hammer.Press({
                //     event: 'press',
                //     pointer: 1,
                //     threshold: 5,
                //     time: 100
                // }));
            }

            function buttonPressOnDoor(){    
            // InteriorCar();
                alert("working");
                $("#image-6").delay(800).fadeOut(1500, function() {
                    $("#image-6").attr('src','images/5.jpg');
                });
            }
 
            function InteriorCar(){

                $("#pop-up1").delay(1000).fadeIn(1000);
                $("#pop-up2").delay(1500).fadeIn(1000);
                $("#pop-up3").delay(2000).fadeIn(1000);
                $("#pop-up4").delay(2500).fadeIn(1000);
            }

            //////////////////////////////////////////////////////////////////////////////////////////////
        });
    });
});

function firstScreenAnimation(){
    $('#first').delay(600).addClass("expand");
    $("#firstHeader").delay(2000).fadeIn(1500);
    $("#firstSub").delay(2200).fadeIn(1500);
    $("#firstArrow").delay(2800).fadeIn(1500);
}

function secondAnimation(){
    $("#text2").fadeIn(1500);
    $("#text2sub").delay(500).fadeIn(1500);
}

function threeAnimation(){
    $("#text3").fadeIn(1500);
    $("#text3sub").delay(500).fadeIn(1500);
}

function fourAnimation(){
    $("#text4").fadeIn(1500);
    $("#text4sub").delay(500).fadeIn(1500);
}





function firstScreenAnimationHide(){
    $("#firstHeader").hide();
    $("#firstSub").hide();
}

function secondAnimationHide(){
    $("#text2").hide();
    $("#text2sub").hide();
}

function threeAnimationHide(){
    $("#text3").hide();
    $("#text3sub").hide();
}

function fourAnimationHide(){
    $("#text4").hide();
    $("#text4sub").hide();
}

function fiveAnimationHide(){
    $("#hotspot").remove();
    $("#image-6").hide();
    $("#bigcar").hide();
}


function toggleMusic(){

    if($(".music-btn").hasClass("on")){
        bgMusic.play();
        $(".music-btn").removeClass("on");
    }else{
        bgMusic.pause();
        $(".music-btn").addClass("on");
    }

}
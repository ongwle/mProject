var height,width,bgMusic;

$(window).load(function() { // makes sure the whole site is loaded
    height = $(window).height();
    width = $(window).width();

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
        

    if(height > width){
        $('#signin').delay(500).css({'display':'block', 'opacity':'1'});
    }else{
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
            $('#signin').delay(500).css({'display':'none', 'opacity':'0'});
        }else{
            $("#horizontalDisplay").delay(500).css({'display':'none'});
            $('#signin').delay(500).css({'display':'block', 'opacity':'1'});
        }
    });
            
$(document).ready(function() {

    $("#text-2").hide();
    $("#text-3").hide();
    $("#image-7").hide();
    $("#text-4").hide();
    $("#firstHeader").hide();
    $("#firstSub").hide();
    $("#firstArrow").hide();

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
         $('#signin').fadeOut('slow')
         $('#signin').delay(600).css({'display':'none'});
        //start expanding bg

         $('#firstPage').delay(600).css({'display':'block', 'opacity':'1'});
         $('#first').delay(600).addClass("expand");
         $("#firstHeader").delay(2000).fadeIn(1500);
         $("#firstSub").delay(2200).fadeIn(1500);
         $("#firstArrow").delay(2400).fadeIn(1500);
    });

    bgMusic = document.getElementById("song");
    //bgMusic.play();


    $("img").load(function() {
      
        $(function() {
            // var img = document.getElementById('image-1'); 
            var IMG_HEIGHT = height,
            currentImg=0,
            maxImages=10;
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

                    if (direction == "up")
                        scrollImages((IMG_HEIGHT * currentImg) + distance, duration);

                    else if (direction == "down")
                        scrollImages((IMG_HEIGHT * currentImg) - distance, duration);
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
            }

            function nextImage()
            {
                currentImg = Math.min(currentImg+1, maxImages-1);
                scrollImages( IMG_HEIGHT * currentImg, speed);

            }

            function checkCurrentImage(value){
                switch (value) { 
                    case 0: displayText('text-2');
                        break;
                    case 1: displayText('text-3');
                        break;
                    case 2: displayText('text-4');
                        break;
                    case 3: carTransition();
                        break; 
                    default:
                        alert('Nobody sucks!');
                        break;
                }
            }

            function displayText(id){
                switch (id) {
                    case 'text-2': $("#text-2").fadeIn(1500);
                                   $("#text-3").hide();
                                   $("#text-4").hide();
                        break;
                    case 'text-3': $("#text-3").fadeIn(1500);
                                   $("#text-2").hide();
                                   $("#text-4").hide();
                        break;
                    case 'text-4': $("#text-4").fadeIn(1500);
                                   $("#text-2").hide();
                                   $("#text-3").hide();
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
                imgs.swipe("disable");
                $( "#image-7").css();
                $( "#image-7" ).delay( 800 ).fadeIn( 400 );
            }
            //////////////////////////////////////////////////////////////////////////////////////////////
        });
    });
});

function toggleMusic(){

    if($(".music-btn").hasClass("on")){
        bgMusic.play();
        $(".music-btn").removeClass("on");
    }else{
        bgMusic.pause();
        $(".music-btn").addClass("on");
    }

}
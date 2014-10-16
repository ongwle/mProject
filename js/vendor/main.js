var height,width,bgMusic;

var url = "http://180.169.22.67:6012/api/Registration";

$(window).load(function() { // makes sure the whole site is loaded
    height = $(window).height();
    width = $(window).width();

    $('.arrow').css('top',(height-50)+'px');
    $('.arrowText').css('top',(height-70)+'px');

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

$(function(){
    $("#hotspot").bind("tap", triggerHotspotImage);

    function triggerHotspotImage(event){
        $("#hotspot").fadeOut(1500);
         $("#image-6").delay(3000).fadeOut(800, function(){
            $("#image-6").attr('src','images/5.jpg').fadeIn(1000);
            fifthAnimation();
            sixthAnimation();
         });
         
    }
});

$(function(){
    $("#popup1").bind("tap", triggerImage1);

    function triggerImage1(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg1").show();
        
    }   

});

$(function(){
    $("#popup2").bind("tap", triggerImage2);

    function triggerImage2(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg2").show();
    }   

});

$(function(){
    $("#popup3").bind("tap", triggerImage3);

    function triggerImage3(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg3").show();
    }   

});
$(function(){
    $("#popup4").bind("tap", triggerImage4);

    function triggerImage4(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg4").show();
    }   

});

$(function(){
    $("#popupLg1").delay(4000).bind("tap", triggerOffImage1);
    function triggerOffImage1(event){
        $("#popupLg1").fadeOut(1500);
         $("#overlayBlackForCarTransition").fadeOut(1500);
    }
});

$(function(){
    $("#popupLg2").bind("tap", triggerOffImage2);
     
    function triggerOffImage2(event){
        $("#popupLg2").fadeOut(1500);
         $("#overlayBlackForCarTransition").fadeOut(1500);
    }

});

$(function(){
    $("#popupLg3").bind("tap", triggerOffImage3);
     
    function triggerOffImage3(event){
        $("#popupLg3").fadeOut(1500);
         $("#overlayBlackForCarTransition").fadeOut(1500);
    }

});

$(function(){
    $("#popupLg4").bind("tap", triggerOffImage4);
     
    function triggerOffImage4(event){
        $("#popupLg4").fadeOut(1500);
         $("#overlayBlackForCarTransition").fadeOut(1500);
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


    $("#cityDDL").change(function() {
        var cityName = $(this).val();
        if($(this).val() == "其他"){
            //show hidden field
            $("#hiddenFieldCity").show();
            $("#CityName").val('');
        }else{
            $("#hiddenFieldCity").hide();
            $("#CityName").val(cityName);
        }
    }); 

    $("form.ajax_form").submit(function(e){
        e.preventDefault();
        var postMSG = {
                CityName: $("#CityName").val(),
                Name: $("#Name").val(),
                Gender: $("#Gender").val(),
                IdentificationNo: $("#IdentificationNo").val(),
                MobileNo: $("#MobileNo").val(),
                EmailAddress: $("#EmailAddress").val()
        };

        $("#registerSubmitButton").hide();
        $("#formloading").show();

        // $.ajax({                    
        //         url: url,
        //         type: 'POST',
        //         data: JSON.stringify(postMSG),
        //         contentType: "application/json; charset=utf-8",
        //         dataType: 'json',
        //         crossDomain: true,
        //         success:function(msg) {
        //             if (msg && msg.Status === true) {
        //                 $("#uploadSuccess").show();
        //             } else {
        //                 $("#registerSubmitButton").show();
        //                 alert("Unable to register");
        //             }
        //         }
        //     });
    });

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
    sixAnimationHide();

    imageAnimationHide();


    $('#image-2').hide();
    $('#image-3').hide();
    $('#image-4').hide();
    $('#car-transition').hide();

    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    $("#popup4").hide();

    var thumbprint = $(".pointer");

    var button2 = document.getElementById("fingerPrint");

    var button = new Hammer(button2);

    button.add(new Hammer.Press({
        event: 'press',
        pointer: 1,
        threshold: 10,
        time: 350
    }));

    // var button3 = document.getElementById("hotspot");
    // console.log(button3);
    // // alert(button3);
    // var button4 = new Hammer(button3);

    // button4.add(new Hammer.Press({
    //     event: 'press',
    //     pointer: 1,
    //     threshold: 10,
    //     time: 350
    // }));

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
    bgMusic.play();

    $("img").load(function() {

        var height2 = $(this).height();
        var width2 = $(this).width();

        // console.log($("#firstPage").height());
        // console.log($("#image-2").height());
        // console.log($("#image-3").height());
        // console.log($("#image-4").height());
        // console.log($("#car-transition").height());
        // console.log($("#pageSix").height());
        // console.log($("#finalPage").height());
        // console.log($("#uploadSuccess").height());

        $("#image-2").height($("#firstPage").height());
        $("#image-3").height($("#firstPage").height());
        $("#image-4").height($("#firstPage").height());
        $("#car-transition").height($("#firstPage").height());
        $("#pageSix").height($("#firstPage").height());
        $("#finalPage").height($("#firstPage").height());
        $("#uploadSuccess").height($("#firstPage").height());
        $("#uploadSuccess").width($("#finalPage").width());
    

      
        $(function() {
            // var img = document.getElementById('image-1'); 
            var IMG_HEIGHT = height2,
            currentImg=0,
            maxImages=7;
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
                    case 5:displayText('sixPage');
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
                                   sixAnimationHide();

                                   imageAnimationHide();

                        break;
                    case 'text-2': secondAnimation();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();
                                   $('#first').removeClass("expand");
                                   imageAnimationHide();
                        break;
                    case 'text-3': secondAnimationHide();
                                    threeAnimation();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();
                                    imageAnimationHide();

                        break;
                    case 'text-4': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimation();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();

                                    imageAnimationHide();

                        break;

                    case 'sixPage': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimation();

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

                secondAnimationHide();
                threeAnimationHide();
                fourAnimationHide();
                firstScreenAnimationHide();

                sevenAnimationHide();
                $("#hotspot").hide();
            
                $("#bigcar").attr('src','images/bigCar.jpg').addClass("expand2").fadeIn(1500);

                $("#image-6").delay(3000).fadeIn(1500, function(){
                    $("#hotspot").delay(2000).fadeIn(1500);
                });
                $("#bigcar").delay(2800).fadeOut(1500, function() {
                        $('#bigcar').removeClass("expand2");
                        $("#bigcar").attr('src','');
                    });


            }    

            // $("#button").click(function(){
            //     $("#pop-up1").delay(1000).fadeIn(1000);
            //     $("#pop-up2").delay(1500).fadeIn(1000);
            //     $("#pop-up3").delay(2000).fadeIn(1000);
            //     $("#pop-up4").delay(2500).fadeIn(1000);
            // });

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


function fifthAnimation(){
    $("#text5").delay(500).fadeIn(1500);
    $("#text5sub").delay(1000).fadeIn(1500);
    $("#gallery").delay(1500).fadeIn(1500);
}

function sixAnimation(){
    $("#sixHeader").fadeIn(1500);
}

function sevenAnimationHide(){
    $("#uploadSuccess").fadeIn(1500);
}


function sixthAnimation(){
    $("#popup1").delay(500).fadeIn(1000);
    $("#popup2").delay(1000).fadeIn(1000);
    $("#popup3").delay(1500).fadeIn(1000);
    $("#popup4").delay(2000).fadeIn(1000);
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
   // $("#hotspot").remove();
    $("#image-6").hide();
    $("#bigcar").hide();
}

function sixAnimationHide(){

    $("#text5").hide();
    $("#text5sub").hide();
    $("#gallery").hide();
    $("#overlayBlackForCarTransition").hide();
}

function sevenAnimationHide(){
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    $("#popup4").hide();
}

function imageAnimationHide(){
    $("#popupLg1").hide();
    $("#popupLg2").hide();
    $("#popupLg3").hide();
    $("#popupLg4").hide();
    $("#sixHeader").hide();
}

function sevenAnimationHide(){
    $("#uploadSuccess").hide();
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
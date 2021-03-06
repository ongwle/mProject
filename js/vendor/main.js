var height,width,bgMusic,imgs, formPosition;

var url = "http://180.169.22.67:6012/api/Registration";

var touchEvent = function(event){
    event.preventDefault();
}

$(window).load(function() { // makes sure the whole site is loaded
    height = $(window).height();
    width = $(window).width();

    $('.arrow').css('top',(height-50)+'px');
    $('.arrow2').css('top',(height-50)+'px');
    $('.arrowText').css('top',(height-70)+'px');
    $('.arrowText2').css('top',(height-81)+'px');

    //$('.pointer').css('top',(height/2)+'px');

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#signin').delay(500).css({'display':'block', 'opacity':'1'});    

    // if(height < width){
    //     $("#horizontalDisplay").delay(500).css({'display':'block'});
    // }
    document.addEventListener('touchmove', touchEvent, false);
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
    $("#hotspot").bind("vmousedown", triggerHotspotImage);

    function triggerHotspotImage(event){
        document.removeEventListener('touchmove', touchEvent, false);
        $("#hotspot").fadeOut(1000);
         $("#image-6").delay(500).fadeOut(800, function(){
            $("#image-6").attr('src','images/5.jpg').fadeIn(800);
            carAnimation();
            popupAnimation();
         });
         
    }
});


$(function(){
    $("#popup1").bind("tap", triggerImage1);

    function triggerImage1(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg1").show();
        $("#icon-close").show();
        
    }   

});

$(function(){
    $("#popup2").bind("tap", triggerImage2);

    function triggerImage2(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg2").show();
        $("#icon-close").show();
    }   

});

$(function(){
    $("#popup3").bind("tap", triggerImage3);

    function triggerImage3(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg3").show();
        $("#icon-close").show();
    }   

});
$(function(){
    $("#popup4").bind("tap", triggerImage4);

    function triggerImage4(event){
        $("#overlayBlackForCarTransition").show();
        $("#popupLg4").show();
        $("#icon-close").show();
    }   

});

$(function(){
    $("#icon-close").bind("tap", triggerImage4Off);

    function triggerImage4Off(event){
        $("#overlayBlackForCarTransition").hide();
        $("#icon-close").hide();
        $("#popupLg1").hide();
        $("#popupLg2").hide();
        $("#popupLg3").hide();
        $("#popupLg4").hide();
    }   

});

// $(window).on('resize', function(){
//         if($(window).height()-$(window).width() < 150){
//             $("#horizontalDisplay").delay(500).css({'display':'block'});
//             // $('#signin').delay(500).css({'display':'none', 'opacity':'0'});
//         }else{
//             $("#horizontalDisplay").delay(500).css({'display':'none'});
//             // $('#signin').delay(500).css({'display':'block', 'opacity':'1'});
//         }
//     });
            
$(document).ready(function() {

    function hasHtml5Validation () {
      return typeof document.createElement('input').checkValidity === 'function';
    }

   

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

        
         if (hasHtml5Validation()) {
            if (!this.checkValidity()) {
              $(this).addClass('invalid');
              return;
            } else {
              $(this).removeClass('invalid');
            }
        }

        $("form.ajax_form input").blur();
        location.hash = "#finalPage";
        // var win7 = $('#firstPage').height() * 6;
        
        // imgs.css("-webkit-transform", "translate3d(0px,"+win7+"px,0px)");
        
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
        
        $.ajax({                    
                url: url,
                type: 'POST',
                data: JSON.stringify(postMSG),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                crossDomain: true,
                success:function(msg) {
                    location.hash = "#finalPage";
                    imgs.swipe("enable"); 
                    if (msg && msg.Status === true) {
                        $("#uploadSuccess").show();
                        sevenAnimation();
                    } else {
                        $("#registerSubmitButton").show();
                        alert("Unable to register. Please Try Again.");
                    }
                }
            });
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

    carAnimationHide();
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

    button.on('press', function(event) {
        bgMusic.play();
        document.removeEventListener('touchmove', touchEvent, false);
        //img.swipe('enable');
        //fade out overlay
         $('#signin').fadeOut(2200)
         $('#signin').delay(600).css({'display':'none'});
        //start expanding bg

         $('#firstPage').delay(600).css({'display':'block', 'opacity':'1'});
        firstScreenAnimation();

         $('#image-2').show();
        $('#image-3').show();
        $('#image-4').show();
        $("#image-5").show();
        $('#car-transition').show();
        $("#pageSix").show();
        $("#finalPage").show();

    });


    bgMusic = document.getElementById("song");

    $("img").load(function() {

        var height2 = $(this).height();
        var width2 = $(this).width();

        $("#image-2").height($("#firstPage").height());
        $("#image-3").height($("#firstPage").height());
        $("#image-4").height($("#firstPage").height());
        $("#image-5").height($("#firstPage").height());
        $("#car-transition").height($("#firstPage").height());
        $("#pageSix").height($("#firstPage").height());
        $("#finalPage").height($("#firstPage").height());
        $("#uploadSuccess").height($("#firstPage").height());
        $("#uploadSuccess").width($("#finalPage").width());
    

      
        $(function() {
            // var img = document.getElementById('image-1'); 
            var IMG_HEIGHT = height2,
            currentImg=0,
            maxImages=9,
            speed=500;

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
                console.log(value);
                switch (value) { 
                    case 0: displayText('firstPageText');
                        break;
                    case 1: displayText('text-2');
                        break;
                    case 2: displayText('text-3');
                        break;
                    case 3: displayText('text-4');
                            $("#image-6").stop(true,true);
                            $("#hotspot").stop(true,true);
                            $("#carArrow").stop(true,true);
                            $("#bigcar").stop(true,true);
                            $('#bigcar').removeClass("expand2");
                            $("#bigcar").attr('src','');
                        break;
                    case 5: carTransition();
                        break; 
                    case 6:
                            $("#image-6").stop(true,true);
                            $("#hotspot").stop(true,true);
                            $("#carArrow").stop(true,true);
                            $("#bigcar").stop(true,true);
                            $('#bigcar').removeClass("expand2");
                            $("#bigcar").attr('src','');
                        displayText('sixPage');
                        break;
                    case 7:
                        formPosition = IMG_HEIGHT * currentImg;
                        imgs.swipe("disable"); 
                        break;
                    case 8:
                        imgs.swipe("disable"); 
                        imgs.css("-webkit-transform", "translate3d(0px,0px,0px)");
                        imgs.swipe("enable");
                        currentImg=0;
                        firstScreenAnimation();
                        sevenAnimationHide();
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
                                   carAnimationHide();
                                   sevenAnimationHide();
                                   imageAnimationHide();
                        break;
                    case 'text-2': secondAnimation();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();
                                   $('#first').removeClass("expand");
                                   carAnimationHide();
                                   sevenAnimationHide();
                                   imageAnimationHide();
                        break;
                    case 'text-3': secondAnimationHide();
                                    threeAnimation();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();
                                    carAnimationHide();
                                    sevenAnimationHide();
                                   imageAnimationHide();
                        break;
                    case 'text-4': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimation();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimationHide();
                                    carAnimationHide();
                                    sevenAnimationHide();
                                   imageAnimationHide();
                        break;

                    case 'sixPage': secondAnimationHide();
                                    threeAnimationHide();
                                    fourAnimationHide();
                                    firstScreenAnimationHide();
                                    fiveAnimationHide();
                                    sixAnimation();
                                    carAnimationHide();
                                    sevenAnimationHide();
                                    imageAnimationHide();
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

                //imgs.swipe("disable"); 

                secondAnimationHide();
                threeAnimationHide();
                fourAnimationHide();
                firstScreenAnimationHide();

                fiveAnimationHide();
                carAnimationHide();
                imageAnimationHide();

                popupAnimationHide();



                $("#image-6").attr('src','images/7.jpg');

                $("#bigcar").css({'display':'block', 'opacity':'1'}); 
            
                $("#bigcar").attr('src','images/bigCar.jpg').addClass("expand2");

                $("#bigcar").delay(5000).fadeOut(7500, function() {
                    $('#bigcar').removeClass("expand2");
                    $("#bigcar").attr('src','');
                });

                $("#image-6").delay(5000).fadeIn(1500, function(){
                    $("#hotspot").delay(300).fadeIn(1500);
                    // $("#carArrow").delay(200).fadeIn(1500);
                    $("#carArrow2").delay(200).fadeIn(1500);
                    //imgs.swipe("enable");

                    
                });

                
            }    
        });
    });
});


function firstScreenAnimation(){
    $('#first').delay(600).addClass("expand");
    $("#firstHeader").delay(1800).fadeIn(1500);
    $("#firstSub").delay(2000).fadeIn(1500);
    $("#firstArrow").delay(2600).fadeIn(1500);
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

function sixAnimation(){
    $("#sixHeader").fadeIn(1500);
}

function sevenAnimation(){
    $("#uploadSuccess").fadeIn(1500);
    $("#sevenArrow").fadeIn(1500);
    $("#sevenArrow2").fadeIn(1500);
}

function carAnimation(){
    // $("#carArrow").fadeOut();
    $("#carArrow2").fadeOut();
    
    $("#text5").delay(1500).fadeIn(1500);
    $("#text5sub").delay(2000).fadeIn(1500);
    $("#gallery").delay(2500).fadeIn(1500);
}

function popupAnimation(){
    $("#popup1").delay(3000).fadeIn(1000);
    $("#popup2").delay(3500).fadeIn(1000);
    $("#popup3").delay(4000).fadeIn(1000);
    $("#popup4").delay(4500).fadeIn(1000);
}





function firstScreenAnimationHide(){
    $("#firstHeader").hide();
    $("#firstSub").hide();
    // $("#musicPlayer").show();
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
    $("#hotspot").hide();
    $("#image-6").hide();
    $("#bigcar").hide();
}

function sixAnimationHide(){
    $("#sixHeader").hide();
}

function sevenAnimationHide(){
    $("#uploadSuccess").hide();
    $("#sevenArrow").hide();
    $("#sevenArrow2").hide();
    $("#hiddenFieldCity").hide();

    $("#CityName").val('');
    $("#Name").val('');
    $("#Gender").val('');
    $("#IdentificationNo").val('');
    $("#MobileNo").val('');
    $("#EmailAddress").val('');

    $("#cityDDL option:first").attr("selected", true);
    $(".control-label").text($("#cityDDL option:first").val());

    $("#registerSubmitButton").show();
    $("#formloading").hide(); 
}

function carAnimationHide(){
    $("#text5").hide();
    $("#text5sub").hide();
    $("#gallery").hide();
    $("#overlayBlackForCarTransition").hide();
    $("#icon-close").hide();
    // $("#carArrow").hide();
    $("#carArrow2").hide();
}

function popupAnimationHide(){
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
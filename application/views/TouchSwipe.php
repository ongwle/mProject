
<div id="container">
	<div id="imgs">
        <div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7347/8731666710_34d07e709e_z.jpg"/></div>
        <div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg"/></div>
        <div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7382/8732044638_9337082fc6_z.jpg" /></div>
    </div>

	<!-- <div class="slider-wrap">
		<div class="slider" id="slider">
			<div class="holder">
				<div class="slide-wrapper">
					<div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7347/8731666710_34d07e709e_z.jpg" /></div>
					<span class="temp">74</span>
				</div>
				<div class="slide-wrapper">
					<div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg" /></div>
					<span class="temp">64</span>
				</div>
				<div class="slide-wrapper">
					<div class="slide"><img class="slide-image" src="http://farm8.staticflickr.com/7382/8732044638_9337082fc6_z.jpg" /></div>
					<span class="temp">82</span>
				</div>
			</div>
		</div>
	</div>	 -->
</div>

<script>
	$(function() {
		var IMG_WIDTH = $( window ).height(),
		currentImg=0,
		maxImages=10;
		speed=500,
		imgs = $("#slide");

		//Init touch swipe
		imgs.swipe( {
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus,
			allowPageScroll:"vertical"
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
					scrollImages((IMG_WIDTH * currentImg) + distance, duration);

				else if (direction == "down")
					scrollImages((IMG_WIDTH * currentImg) - distance, duration);
			}

			//Else, cancel means snap back to the begining
			else if ( phase == "cancel")
			{
				scrollImages(IMG_WIDTH * currentImg, speed);
			}

			//Else end means the swipe was completed, so move to the next image
			else if ( phase =="end" )
			{
				if (direction == "down")
					previousImage()
				else if (direction == "up")
					nextImage()
			}
		}

		function previousImage()
		{
			currentImg = Math.max(currentImg-1, 0);
			scrollImages( IMG_WIDTH * currentImg, speed);
		}

		function nextImage()
		{
			currentImg = Math.min(currentImg+1, maxImages-1);
			scrollImages( IMG_WIDTH * currentImg, speed);
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
	});
</script>

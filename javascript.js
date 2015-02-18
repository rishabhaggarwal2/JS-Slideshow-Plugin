$(document).ready(function(){

	console.log("mumu");
	var x=1;
	var src="";
	$(document).keyup(function(e){
		console.log(e.keyCode);
		if(e.keyCode==39&&x<5) //Replace 5 by total images
		{	
			$(".slider img").fadeOut(1000); //replace 1000 by time everywhere
			x++;
			src = "<img src='"+x+".jpg'>";
			setTimeout(function(){
				$(".slider").html(src);
				$(".slider img").fadeIn("slow");
			}, 1000);
			
		}
		else if(e.keyCode==39&&x==5) //Replace 5 by total images
		{
			$(".slider img").fadeOut(1000);
			x=1;
			src = "<img src='"+x+".jpg'>";
			setTimeout(function(){
				$(".slider").html(src);
				$(".slider img").fadeIn("slow");
			}, 1000);
		}

		else if(e.keyCode==37&&x>1) //Replace 5 by total images
		{
			$(".slider img").fadeOut(1000);
			x--;
			src = "<img src='"+x+".jpg'>";
			setTimeout(function(){
				$(".slider").html(src);
				$(".slider img").fadeIn("slow");
			}, 1000);
		}
		else if(e.keyCode==37&&x==1) //Replace 5 by total images
		{
			$(".slider img").fadeOut(1000);
			x=5;
			src = "<img src='"+x+".jpg'>";
			setTimeout(function(){
				$(".slider").html(src);
				$(".slider img").fadeIn("slow");
			}, 1000);
		}
	});

	$(".thumbs img").click(function(){
		var imagename = $(this).attr("src");
		var imageno = imagename.replace( /[^\d.]/g, '' );
		x = parseInt(imageno);
		src = "<img src='"+x+".jpg'>";
		$(".slider img").fadeOut(1000);
				setTimeout(function(){
					$(".slider").html(src);
					$(".slider img").fadeIn("slow");
		}, 1000);

	});

	$(".thumb_container").mouseover(function(e){
   var parentOffset = $(this).parent().offset(); 
   //or $(this).offset(); if you really just want the current element's offset
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   console.log(relX);
   console.log(relY);
   var width = $(".thumb_container").width();
   console.log(width);

   if(relX>=(width-150))
   {
   	console.log("sexy buoy");
   	$(".thumbs").css("left","-90%");
   }

   if(relX<=150)
   {
   	console.log("sexy buoy");
   	$(".thumbs").css("left","0%");
   }
});

});
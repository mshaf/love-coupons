var entitles = "This coupon entitles you to ";
var clickOK = "Click OK to redeem this coupon";

$(function(){$("img").on("click", function(e) {
	$("body").append('<div class="background"></div>');
    if (confirm(entitles + this.title.toLowerCase() + "\n" + clickOK)){
 		$(this).fadeOut("slow");
 	}
 	$(".background").remove();

 });
});
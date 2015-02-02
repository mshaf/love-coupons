var entitles = "This coupon entitles you to ";
var clickOK = "Click OK to redeem this coupon";

$("img").on("click", function(e) {
	$("body").append('<div class="background"></div>');
    if (confirm(entitles + this.title.toLowerCase() + "\n" + clickOK)){
 		$(this).addClass("faded");
 	}
 	$(".background").remove();

 });

$(function(){
   
    $(".button").click(function(){
	alert("this worked!");
     });

    $(".button_test_1").click(function(){
	alert("this worked!");
     });

});


$(function(){
	
	var username = "ElectronCatComputer";
	var password = "topsecret";

	$('.js--login').click(function(){
		if($('.js--username').val() === username && $('.js--password').val()=== password){
			window.location.href = "index12.html"; 
		}
		else{
			$('.js--login-error').addClass('s-visible');
		}
	});

	
});



$(function(){
	
	$('.js--show-alert').click(function(){
		$('.js--alert').slideDown("fast");
	});

	$('.js--alert-close').click(function(){
		$('.js--alert').slideUp("fast");
	});

});
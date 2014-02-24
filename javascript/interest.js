$(function () {

	$('#first').on('click', function(){
		
		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#secondimg').addClass('wrappedElement');

	});


	$('#second').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#music').addClass('wrappedElement');
	});


	$('#spend').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#firstimg').addClass('wrappedElement');
	});


	$('#into').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#cook').addClass('wrappedElement');
	});


	$('#times').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#gym').addClass('wrappedElement');
	});


	$('#use').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#pro').addClass('wrappedElement');
	});


	$('#achieve').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#yoga').addClass('wrappedElement');		
	});


	$('#practice').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});

		$('#krav').addClass('wrappedElement');
	});


	$('#marathon').on('click', function(){

		$('article img').each(function(){
			if($(this).hasClass('wrappedElement')){
				$(this).removeClass('wrappedElement');
			}
		});
		
		$('#hack').addClass('wrappedElement');
	});

});


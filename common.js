(function ($) {
	$('li').click(function(){
		$(this).addClass('clicked')
		$(this).find('b').fadeIn(300)
		$(this).find('i').animate({ 
			width: '30',
			height: '30',
			fontSize: '26px',
			'line-height': '30px'
		}, 300 );
		if($('li:not(.clicked)').length === 0){
			setTimeout(function() {
				$('#winCont').fadeIn(300)
				$('#dummyspan').html("<embed src='./snd/Молодец.wav' hidden=true autostart=true loop=false>")
				$('#winCont span').click(function(){
					$('#dummyspan').html("<embed src='./snd/Попробуй_ещё.wav' hidden=true autostart=true loop=false>")
					$('#winCont').fadeOut(300)
					$('#dummyspan').html()
					$('li').removeClass('clicked')
					setTimeout(function() {
						$('li').find('b').fadeOut(300)
						$('li').find('i').animate({ 
							width: '100',
							height: '100',
							fontSize: '72px',
							'line-height': '100px'
						}, 300 );
					}, 1000)
				})
			}, 2000)
		}
	})
}(jQuery));
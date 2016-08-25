$( '.child' ).hide();
$( document ).ready( function () {

	$( '.maths' ).click( function () {
		$( '.math-child' ).show();
		$( '#eqn' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjcNQRTvVAigzU48e4StxPe-" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#set' ).click( function () {
			$( '.content' ).html( '<iframe width="653" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjcCe0eygquHnjgQ2Bfli0gf" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '.surd' ).click( function () {
			$( '.content' ).html( '<iframe width="653" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjf44XiMvtMhj4VFmrJp7IsP" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#log' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjfEY-CLKd0NhVENW-nqDSuY" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#trig' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjfPXWYItOHByEqGzgzPrQLe" frameborder="0" allowfullscreen></iframe>' );
		} )
	} );
	$( '.wassce' ).click( function () {
		$( '.wassce-child' ).show();
	} );
	$( '.cowbell' ).click( function () {
		$( '.cowbell-child' ).show();
	} );

} );

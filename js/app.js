$( '.child' ).hide();
$( document ).ready( function () {

	$( '.maths' ).click( function () {
		$( '.math-child' ).show();
		$( '#set' ).click( function () {
			$( '.content' ).append( '<iframe width="653" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjcCe0eygquHnjgQ2Bfli0gf" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '.surd' ).click( function () {
			$( '.content' ).append( '<iframe width="653" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjf44XiMvtMhj4VFmrJp7IsP" frameborder="0" allowfullscreen></iframe>' );
		} )
	} );
	$( '.wassce' ).click( function () {
		$( '.wassce-child' ).show();
	} );
	$( '.cowbell' ).click( function () {
		$( '.cowbell-child' ).show();
	} );

} );

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
		$( '#sin' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjfPXWYItOHByEqGzgzPrQLe" frameborder="0" allowfullscreen></iframe><iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjdie2D8_V1HJPqaSq7O4KA8" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#cos' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjdIjMpxrl77Z4BRgQrUfTrt" frameborder="0" allowfullscreen></iframe>' );
		} )

	} );
	$( '.wassce' ).click( function () {
		$( '.wassce-child' ).show();
		$( '#2014' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjdIjMpxrl77Z4BRgQrUfTrt" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#2015' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjck-0MD0_zbCpIj8tE7D4XR" frameborder="0" allowfullscreen></iframe>' );
		} )
		$( '#2016' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjduaa3TohAl5BzzgSZ_N1uV" frameborder="0" allowfullscreen></iframe>' );
		} )
	} );
	$( '.cowbell' ).click( function () {
		$( '.cowbell-child' ).show();
		$( '#MAR2016' ).click( function () {
			$( '.content' ).html( '<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PL2jJTGkTmCjd3Mr95Rmq9BGbtD-8t-6Da" frameborder="0" allowfullscreen></iframe>' );
		} )
	} );

} );

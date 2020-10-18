$( '#navbar .navbar-nav a' ).on( 'click', function () {
	$( '#navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
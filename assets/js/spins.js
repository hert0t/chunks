$(document).ready(function() {
	$("#form").on( "submit", function( event ) {
		$("#btnspin").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" disabled="true"></span>`
		);
		$(this).submit();
		});
	});
		

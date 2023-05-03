$(document).ready(function() {
	$("#form").on( "submit", function( event ) {
		event.preventDefault();
		$("#btnspin").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
		);
		});
	});
		

$(document).ready(function() {
	$("#btnspin").on( "click", function( event ) {
		event.preventDefault();
		$(this).html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
		);
		$("#form").submit();
		});
	});
		

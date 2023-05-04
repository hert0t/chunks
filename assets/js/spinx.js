$(document).ready(function() {
	$("#form").on( "submit", function( event ) {
		$("#btnspin").attr("disabled", true);
		$("#btnspin").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" disabled="true"></span>`
		);
		$(this).submit();
		});
	});
		

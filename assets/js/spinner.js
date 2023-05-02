$(document).ready(function() {
	$("#btnspin").click(function() {
		$(this).prop("disabled", true);
		$(this).html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
		);
		$("#form").submit();
		});
	});
		

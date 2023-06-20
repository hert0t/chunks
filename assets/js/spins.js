$(document).ready(function() {
	$("#form1").on( "submit", function( event ) {
		$("#btnspin1").attr("disabled", true);
		$("#btnspin1").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" disabled="true"></span>`
		);
		$(this).submit();
		});
	});


$(document).ready(function() {
	$("#form2").on( "submit", function( event ) {
		$("#btnspin2").attr("disabled", true);
		$("#btnspin2").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" disabled="true"></span>`
		);
		$(this).submit();
		});
	});
		

$(document).ready(function() {
	$("#form3").on( "submit", function( event ) {
		$("#btnspin3").attr("disabled", true);
		$("#btnspin3").html(
		`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" disabled="true"></span>`
		);
		$(this).submit();
		});
	});
		

(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
			$(document ).ajaxSuccess(function( event, xhr, settings ) {

				$(".front .vjs-control-text").text("Play");
			   // if ( $(".webform-client-form-1 .form-actions .webform-submit").length > 0 && $(".webform-client-form-1 .form-managed-file .file").length > 0) {
  			 //   	      console.log(settings.url);
  			 //   	      var search = settings.url.search("modal_forms/ajax/webform/1");
			   // 	      console.log(search);

			   // 	     if (xhr.status == false && search > 1) {
			   // 		   	window.location.href = 'gracias';
			   // 		  }	
			   // 	}
			});	
		}
  	};
}(jQuery));
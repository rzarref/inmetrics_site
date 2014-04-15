var inmetrics = function(){
	var init = function() {
		animations.init(isMobile());
		removeCurtain();

		$('#contato form').validate({
      rules: {
				'contato[nome]': "required",
				'contato[email]': {
					required: true,
					email: true
				},
				'contato[mensagem]': "required"
			},
			messages: {
        'contato[nome]': "*Preenchimento obrigatório.",
        'contato[email]': {
        	required: "*Preenchimento obrigatório.",
        	email: "*Digite um e-mail válido."
        },
        'contato[mensagem]': "*Preenchimento obrigatório."
      }
		});

		$('#contato a.inmetrics').on({click: scrollTop});

		//Inicio Potiguar binds
		$(".descriptions a").on({click: descriptionsClick});
	  $(".selections a").on({
	  	mouseenter: selectionMouseenter,
	  	mouseleave: selectionsMouseleave,
	  	click: selectionsClick
	  });
	  //Fim Potiguar binds
	};

	//Inicio Potiguar functions
	var selectionsClick = function() {
		var $this = $(this);
    var selection = $this.data("selection");
    $this.toggleClass("selected");
    var isSelected = $this.hasClass("selected");
    
    if($("[data-selection=" + selection + "].selected").length > 0)
      $("[data-selection-row=" + selection + "]").addClass("selected");
    else
      $("[data-selection-row=" + selection + "]").removeClass("selected");
    
    return false;
	};

	var selectionsMouseleave = function() {
		var selection = $(this).data("selection");
    $("[data-selection-row=" + selection + "]").removeClass("hovered");
	};

	var selectionMouseenter = function() {
		var $this = $(this);
		var selection = $this.data("selection");
    $this.closest(".columns-overlap")
           .find("[data-selection-row=" + selection + "]")
           .addClass("hovered");
	};

	var descriptionsClick = function() {
		return false;
	};
	//Fim Potiguar functions


	var scrollTop = function(){
		$('html, body').animate({scrollTop: 0}, {queue: false, duration: 20000});
		return false;
	};

	var removeCurtain = function(){
		$.get('assets/images/animados/olho_aladoanima.png', function(){
			setTimeout(function() {
				$('body').removeClass('loading-on');
			}, 1200);
		});
	};

	isMobile = function() {
		return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	};

	return { init: init }
}();

$(document).ready(inmetrics.init);
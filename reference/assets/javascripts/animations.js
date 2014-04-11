var animations = function(){
	var init = function(isMobile) {
		if (isMobile && $(window).width() > 768)
			PortableVersion();
		else {
			DesktopVersion(true);
			$(window).on({resize: windowResize});
		}
	};

	var timeoutResize = null;
	var windowResize = function(){
		clearTimeout(timeoutResize);
		timeoutResize = setTimeout(function(){
			DesktopVersion(false)
		}, 300);
	};

	var PortableVersion = function(){
		$('header .in-inspire').attr({"style": setPrefixCSS("transform: translate(108px, 541px);")});
		
		$(window).on({scroll: function(){
			var _top = $(document).scrollTop();

			if(_top > 200)
				$('header .in-inspire').attr({"style": setPrefixCSS("transform: translate(108px, 160px);")});
			else
				$('header .in-inspire').attr({"style": setPrefixCSS("transform: translate(108px, 541px);")});
		}});
	};

	var mySkroll = null;
	var DesktopVersion = function(isInit){
		var w_height = $(window).height();

		//olhos
		// $('header .in-inspire').attr({
		// 	"data-0": setPrefixCSS("transform: translate(108px, 541px);"),
		// 	"data-1100": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-1500": setPrefixCSS("transform: translate(115px, 570px);"),
		// 	"data-2450": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-2490": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-3000": setPrefixCSS("transform: translate(115px, 340px);"),
		// 	"data-3300": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-3750": setPrefixCSS("transform: translate(115px, 420px);"),
		// 	"data-4150": setPrefixCSS("transform: translate(115px, 120px);"),
		// 	"data-4970": setPrefixCSS("transform: translate(115px, 120px);"),
		// 	"data-5350": setPrefixCSS("transform: translate(115px, 240px);"),
		// 	"data-5600": setPrefixCSS("transform: translate(115px, 120px);"),
		// 	"data-6430": setPrefixCSS("transform: translate(115px, 550px);"),
		// 	"data-7380": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-7650": setPrefixCSS("transform: translate(115px, 450px);"),
		// 	"data-8020": setPrefixCSS("transform: translate(115px, 120px);"),
		// 	"data-9020": setPrefixCSS("transform: translate(115px, 570px);"),
		// 	"data-10300": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-12000": setPrefixCSS("transform: translate(115px, 210px);"),
		// 	"data-13000": setPrefixCSS("transform: translate(115px, 540px);"),
		// 	"data-13650": setPrefixCSS("transform: translate(115px, 140px);"),
		// 	"data-0-end": setPrefixCSS("transform: translate(720px, "+ (w_height- 600) +"px);")
		// });

		//iniciando apresenta
		$("#apresenta").attr({
			"data-0": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-1500": setPrefixCSS("transform: translate(0px, -470px);")
		});
		$("#apresenta .olho").attr({
			"data-400": "background-position: 0px 0px;",
			"data-1500": "background-position: 0px -130px;"
		});
		$('#apresenta .olho-2').attr({
			"data-600": "background-position: -223px 0px;",
			"data-1500": "background-position: -223px -110px;"
		});
		$('#apresenta .olho-3').attr({
			"data-500": "background-position: right 0px;",
			"data-1600": "background-position: right -150px;"
		});

		//estrategia
		$("#strategic").attr({
			"data-0": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-1500": setPrefixCSS("transform: translate(0px, -470px);"),
			"data-4200": setPrefixCSS("transform: translate(0px, -1402px);")
		});
		// $('#strategic h2').attr({
		// 	"data-850": setPrefixCSS("transform: translate(0px, 0px);"),
		// 	"data-3000": setPrefixCSS("transform: translate(0px, -700px);")
		// });
		$('#strategic .img-cena').attr({
			"data-750": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-2300": setPrefixCSS("transform: translate(0px, -150px);")
		});
		$('#strategic .img-projeto').attr({
			"data-850": setPrefixCSS("transform: translate(0px, 0px);") + " width:223px; opacity:1;",
			"data-3000": setPrefixCSS("transform: translate(35px, -230px);") + " width:90px; opacity:0;"
		});
		$('#strategic .img-nuvens').attr({
			"data-1000": setPrefixCSS("transform: translate(0px, 80px);"),
			"data-2800": setPrefixCSS("transform: translate(0px, -300px);")
		});
		$('#strategic .table').attr({
			"data-1000": setPrefixCSS("transform: translate(0px, 100px);"),
			"data-3500": setPrefixCSS("transform: translate(0px, -200px);")
		});

		//iniciando gestao
		$('#management').attr({
			"data-2100": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-3250": setPrefixCSS("transform: translate(0px, -"+ w_height +"px);"),
			"data-5300": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1130) +"px);")
		});
		$("#management h2").attr({
			"data-2700": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-4400": setPrefixCSS("transform: translate(0px, -170px);")
		});
		$('#management .img-cena').attr({
			"data-2800": setPrefixCSS("transform: translate(0px, 150px);"),
			"data-4500": setPrefixCSS("transform: translate(0px, -200px);")
		});
		$('#management .table').attr({
			"data-3200": setPrefixCSS("transform: translate(0px, 120px);"),
			"data-4800": setPrefixCSS("transform: translate(0px, -100px);")
		});

		//inicianado operacional
		$('#operational').attr({
			"data-3000": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-3200": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
			"data-6000": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
			"data-8900": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1204) +"px);")
		});
		$('#operational h2').attr({
			"data-4500": setPrefixCSS("transform: translate(0px, -200px);"),
			"data-5300": setPrefixCSS("transform: translate(0px, 60px);"),
			"data-6500": setPrefixCSS("transform: translate(0px, -210px);")
		});
		$('#operational span.fil-1').attr({
			"data-4300": setPrefixCSS("transform: translate(0px, -490px);"),
			"data-4800": setPrefixCSS("transform: translate(0px, 70px);"),
			"data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
			"data-6500": setPrefixCSS("transform: translate(0px, -230px);"),
		});
		$('#operational img.fil-2').attr({
			"data-4400": setPrefixCSS("transform: translate(0px, -490px);"),
			"data-5000": setPrefixCSS("transform: translate(0px, 70px);"),
			"data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
			"data-6500": setPrefixCSS("transform: translate(0px, -230px);")
		});
		$('#operational img.fil-3').attr({
			"data-4500": setPrefixCSS("transform: translate(0px, -490px);"),
			"data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
			"data-6500": setPrefixCSS("transform: translate(0px, -230px);")
		});
		$('#operational .table').attr({
			"data-4700": setPrefixCSS("transform: translate(0px, 300px);"),
			"data-6500": setPrefixCSS("transform: translate(0px, -50px);")
		});

		//iniciando funcional
		$('#functional').attr({
			"data-7100": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-8100": setPrefixCSS("transform: translate(0px, -"+ (w_height - 20) +"px);"),
			"data-12400": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1210) +"px);")
		});
		$('#functional h2').attr({
			"data-7500": setPrefixCSS("transform: translate(0px, 100px);"),
			"data-8100": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-9600": setPrefixCSS("transform: translate(0px, -200px);")
		});
		$('#functional .img-cena').attr({
			"data-7500": setPrefixCSS("transform: translate(0px, 80px);"),
			"data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-9000": setPrefixCSS("transform: translate(0px, -70px);")
		});
		$('#functional .img-peao-cabeca').attr({
			"data-7500": setPrefixCSS("transform: translate(0px, -35px);"),
			"data-8150": setPrefixCSS("transform: translate(0px, 67px);")
		});
		$('#functional .img-peao-base').attr({
			"data-7500": setPrefixCSS("transform: translate(2px, 72px);"),
			"data-8150": setPrefixCSS("transform: translate(2px, -41px);")
		});
		$('#functional .img-nuvens').attr({
			"data-8000": setPrefixCSS("transform: translate(0px, 80px);") + " opacity: 0;",
			"data-8900": setPrefixCSS("transform: translate(0px, 10px);") + " opacity: 1;",
			"data-11000": setPrefixCSS("transform: translate(0px, -220px);") + " opacity: 1;"
		});
		$('#functional .table').attr({
			"data-8700": setPrefixCSS("transform: translate(0px, 120px);"),
			"data-10700": setPrefixCSS("transform: translate(0px, -50px);")
		});

		//iniciando qualidade
		$('#quality').attr({
			"data-7500": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-10500": setPrefixCSS("transform: translate(0px, -490px);"),
			"data-12300": setPrefixCSS("transform: translate(0px, -"+ (w_height - 100) +"px);"),
			"data-14500": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1040) +"px);")
		});
		$('#quality h2').attr({
			"data-10500": setPrefixCSS("transform: translate(0px, -300px);"),
			"data-12300": setPrefixCSS("transform: translate(0px, 50px);"),
			"data-13400": setPrefixCSS("transform: translate(0px, -70px);")
		});
		$('#quality .img-coroa').attr({
			"data-11300": setPrefixCSS("transform: translate(0px, -300px);"),
			"data-12000": setPrefixCSS("transform: translate(0px, 35px);")
		});
		$('#quality .img-raios').attr({
			"data-11980": "opacity: 0",
			"data-12020": "opacity: 1"
		});
		$('#quality .img-projeto').attr({
			"data-11000": "opacity: 0; width: 100px; right: 102px;",
			"data-12000": "opacity: 1; width: 320px; right: 22px;"
		});
		$('#quality .img-nuvens').attr({
			"data-12150": setPrefixCSS("transform: translate(0px, 50px);" + " opacity: 0;"),
			"data-12200": setPrefixCSS("transform: translate(0px, 60px);" + " opacity: 1;"),
			"data-13400": setPrefixCSS("transform: translate(0px, -80px);" + " opacity: 1;")
		});

		$('#quality .table').attr({
			"data-12150": setPrefixCSS("transform: translate(0px, 150px);"),
			"data-14000": setPrefixCSS("transform: translate(0px, 0px);")
		});

		//iniciando contato
		$('#contato').attr({
			"data-2600-end": setPrefixCSS("transform: translate(0px, 0px);"),
			"data-750-end": setPrefixCSS("transform: translate(0px, -651px);"),
			"data-0-end": setPrefixCSS("transform: translate(0px, -740px);")
		});

		//iniciando o parallax
    if ($(window).width() > 768) {
      if(isInit || mySkroll == null) {
        mySkroll = skrollr.init({
          scale: 2.2
        });
      } else {
        mySkroll.refresh();
      }
    } else {
      if (mySkroll != null) {
        mySkroll.destroy();
        mySkroll = skrollr.get();
      }
    }
	};

	var setPrefixCSS = function(values){
		var data = "-webkit-" + values;
				data += "-moz-" + values;
				data += "-ms-" + values;
				data += "-o-" + values;
				data += values;
		return data;
	};

	return {init: init};
}();
// JavaScript Document
	function activeHead($obj){
		new Fx.Style($obj,"backgroundPosition",{duration:500}).start("25px -195px","25px -217px");
	}
	function backgroundHead($obj){
		if($obj.getStyle("backgroundPosition") == "25px -217px" ){
			new Fx.Style($obj,"backgroundPosition",{duration:500}).start("25px -217px","25px -195px");
		}
	}
	
	var accordion = new Accordion('div#menu a.head', 'div#menu ul.sm', {
		opacity: false,		
		fixedWidth:236,
		alwaysHide:true,
		onActive:function($head,$cont){activeHead($head)},
		onBackground:function($head,$cont){backgroundHead($head)}
	}, $('menu_sf'));	
	
	window.addEvent("load",function(){	
		//if(atual != null) atual.setStyle('background-color','#bc0000');
		//ajeitando altura do sistema
		var menuHeight = parseInt($("menu").getStyle("height"));
		var conteudoHeight = parseInt($("conteudo").getStyle("height"));
		var smMaiorHeight = Number(0);
		$$(".sm").each(function(el,i){
			if(el.getSize().scrollSize.y > smMaiorHeight)
				smMaiorHeight = el.getSize().scrollSize.y;
		})
		if( conteudoHeight < menuHeight+smMaiorHeight ){
			alert('');
			if(window.ie6) $("conteudo").setStyle("height",menuHeight+smMaiorHeight+"px");
			else $("conteudo").setStyle("min-height",menuHeight+smMaiorHeight+"px");
		}		
	});	
	
	
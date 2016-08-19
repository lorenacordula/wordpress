window.addEvent('domready', function() {
 
	var accord = new MultipleOpenAccordion($('sistemas'), {
		togglers: $$('#sistemas div.abre'),
		elements: $$('#sistemas div.acc_cont'),
		openAll: false,
		firstElementsOpen: [] //close everything
	});
	
	var tabs = new TabSwapper({
		selectedClass: 'ligado',
		deselectedClass: 'desligado',
		tabs: $$('#conteudo_abas li'),
		clickers: $$('#conteudo_abas li'),
		sections: $$('div.caixa_conteudo div.conteudo'),
		/*remember what the last tab the user clicked was*/
		cookieName: 'conteudo_abas',
		/*use transitions to fade across*/
		smooth: true,
		smoothSize: true
	});
	
	//create our SimpleCarousel instance
	var slide = new SimpleSlideShow.Carousel($('not-destaque'), {
	  startIndex: 0,
	  slides: $$('not-destaque div.not_item'),
	  nextLink: 'not-next',
	  prevLink: 'not-prev'
	});	


});


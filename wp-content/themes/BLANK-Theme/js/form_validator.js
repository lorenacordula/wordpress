/**
 * @author Germano
 */
var windowScroll;
window.addEvent('domready', function(){
    $$('form.validar').each(function(frm){
		
        frm.addEvent('submit', function(){
			$$('.error-message, .message').each(function(el){
		        el.destroy();
		    });
			var retorno = true;
			var pr=0;
            $$('.required').each(function(elem){

                if (elem.value == '' || (elem.value == '*novoRegistro*' && elem.match('select'))) {
                    retorno = false;
                    addErro(elem);
					if(pr==0){
						elem.focus();
						pr=1;
					}
                }
            });
			if (retorno == false) {
	        	showMsgErro(frm);
	    	}
		    return retorno;
        });
		
    });
	windowScroll = new Fx.Scroll(window);
});

function addErro(elem, msg){
    var label = elem.getPrevious()
    var campo;
    if (label.match('label')) {
        campo = '<b>' + label.get('text') + '</b>';
    }
    else {
        label = label.getPrevious();
        campo = '<b>' + label.get('text') + '</b>';
    }
    if (msg == null) {
        msg = campo + ' tem preenchimento obrigatório';
    }
    
    
    new Element('div', {
        'class': 'error-message',
        'html': msg
    }).inject(elem.getParent(), 'before');
    
}

function showMsgErro(idForm){
    msg = "Não foi possível enviar os dados.";
               
    new Element('div', {
        'class': 'message',
        'id': 'mensagemErro',
        'html': msg + ' Preencha todos os campos obrigatórios'
    }).inject(idForm, 'top');
    windowScroll.toElement($('mensagemErro'));
}

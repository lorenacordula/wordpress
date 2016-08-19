/**
 * @author Germano
 */
var myFx = new Array($$('.dinamicIns').length);
var admin = 'admin/';

window.addEvent('domready', function(){

    $$('.dinamicIns').each(function(selElem, i){
        var controller = selElem.getProperty('rel');
        var label = selElem.getPrevious()
        var campo = label.get('text');
        
        new Element('option', {
            'value': '',
            'html': '------------------'
        }).inject(selElem);
        
        new Element('option', {
            'value': '*novoRegistro*',
            'html': 'Inserir ' + campo
        }).inject(selElem);
        
        
        
        selElem.addEvent('change', function(){
            if (this.value == '*novoRegistro*') {
                adicionarFormAdicao(selElem, controller, i);
            }
            else {
                if (myFx[i] != null) {
                    myFx[i].slideOut();
                }
            }
        })
    });
});


function adicionarFormAdicao(elemento, controller, i){
    if (myFx[i] == null) {
        para = new Element('div', {
            'class': 'input text',
            'styles': {
                'margin-left': '10px',
                'padding-bottom': '5px'
            }
        }).inject(elemento.getParent(), 'after');
        
        myFx[i] = new Fx.Slide(para);
        myFx[i].hide();
        
        
        var label = elemento.getPrevious()
        var campo = label.get('text');
        
        
        
        // ----------------------------- NOME --------------------------------
        new Element('label', {
            'html': 'Inserir ' + campo,
            'for': 'newField',
            'styles': {
                'width': '110px',
                'padding-bottom': '6px'
            }
        }).inject(para);
        para.appendText(' ');
        
        var inputField = new Element('input', {
            'type': 'text',
            'class': 'texto grd',
            'id': controller + 'NewField',
            'name': 'data[' + controller + '][new_field]',
            'maxlength': '50',
            'size': '40',
            'events': {
                'keypress': function(event){
                    if (event.key == 'enter') {
                        gravarNewField(elemento,inputField, controller, i);
                        return false;
                    }
                }
            }
        }).inject(para);
        
        new Element('input', {
            'type': 'button',
            'class': 'btn',
            'value': 'Gravar',
            'events': {
                'click': function(){
                    gravarNewField(elemento,inputField, controller, i);
                }
            },
            'styles': {
                'margin-left': '5px'
            }
        }).inject(para);
    }
    
    myFx[i].slideIn();
    
}

function gravarNewField(elemento,inputField, controller, i){
    if (inputField.value == '') {
        alert('Digite o valor a ser inserido.');
        return false;
    }    
    var jsonRequest = new Request.JSON({
        url: WEB_ROOT + '/' + controller + '/adicionarNovoRegistro/newField:' + inputField.value,
        onComplete: function(registro){
			ultimo = elemento.getElement('option[value=*novoRegistro*]').getPrevious();
			if (registro.id != '') {
				new Element('option', {
					'value': registro.id,
					'html': inputField.value
				}).inject(ultimo, 'before');
				
				elemento.value = registro.id
				inputField.value = '';
			}       
        }
    }).get();
    
    myFx[i].slideOut();
}

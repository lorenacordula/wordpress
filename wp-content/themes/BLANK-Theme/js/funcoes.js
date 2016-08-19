// JavaScript Document
function mascara(obj, funcao){
    v_obj = obj;
    v_fun = funcao;
    setTimeout("executa_mascara()", 1);
}

function executa_mascara() {
    v_obj.value = v_fun(v_obj.value);
}

function soNumeros(valor) {

    return valor.replace(/\D/g,"")
}
function maskcarteira(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{3})(\d)/,"$1 $2")       
    v=v.replace(/(\d{12})(\d)/,"$1 $2")
    return v
}

function money(valor) {
    valor = valor.replace(/\D/g,"")	
	valor = valor.replace(/(\d{1,10})(\d{2})/,"$1,$2") 
	return valor;
}
function masktelefone(valor) {
    valor = valor.replace(/\D/g,"")
    valor = valor.replace(/^(\d\d)(\d)/g,"($1) $2")
    valor = valor.replace(/(\d{4})(\d)/,"$1-$2")
    return valor
}
function anoPeriodo(valor) {
    // Remove tudo que nï¿½o ï¿½ nï¿½mero do valor.
    valor = valor.replace(/\D/g,"")	
	valor = valor.replace(/(\d{4})(\d{1})/,"$1.$2") 
	return valor;
}
function maskrg(valor) {
    // Remove tudo que nï¿½o ï¿½ nï¿½mero do valor.
    valor = valor.replace(/\D/g,"")	
	valor = valor.replace(/(\d{1,3})(\d{3})(\d{3})/,"$1.$2.$3") 
	return valor;
}
function maskcpf(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{3})(\d)/,"$1.$2")
    v=v.replace(/(\d{3})(\d)/,"$1.$2")
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return v
}
function maskcnpj(v){
   v=v.replace(/\D/g,"")
   v=v.replace(/^(\d{2})(\d)/,"$1.$2")
   v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
   v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
   v=v.replace(/(\d{4})(\d)/,"$1-$2")
   return v
}
function maskcep(v){
   v=v.replace(/\D/g,"");
   v=v.replace(/^(\d{5})(\d)/,"$1-$2")
   return v
}
function maskdata(valor){ 
     valor = valor.replace(/\D/g,"")
     valor = valor.replace(/^(\d\d)(\d)/g,"$1/$2")
     valor = valor.replace(/(\d{2})(\d)/,"$1/$2")
     return valor
}

function maskhora(valor){ 
     valor = valor.replace(/\D/g,"")                 
     valor = valor.replace(/^(\d\d)(\d)/g,"$1:$2")	
     return valor
}
function validar_email(obj) {
    var email = obj.value;

    var regEmail = new RegExp(".+?@.+?[.].+?");
    if (regEmail.test(email) || email=='') {
        return true;
    } else {	
        alert("Por favor insira um e-mail válido.");
		obj.value = '';
		obj.focus();
    }
}
function iniTexto(obj,txt){
	if(obj.value==""){
		obj.value=txt;
	}
}

function selectAll(obj, sty){
	$$(sty).each(function(ele){		
		if(obj.checked==true)
			ele.checked = true;
		else
			ele.checked = false;
	});
}

function verificaAbreviacao(val){
	var nomes = val.split(" ");
	for(var i=0;i<nomes.length;i++){
		if((nomes[i].length < 2 || nomes[i].lastIndexOf(".") > 0) && nomes[i]!='e' && nomes[i]!='E' && nomes[i]!=''){			
			return true; 
		}
	}		
}

function validarData(obj,nasc){
	val = obj.value;
	if(val.length!=0){
		if(val.length!=10){
			alert('Insira uma data válida!');
			obj.value='';
			return false;
		}else{
			dia = val.substr(0,2);
			mes = val.substr(3,2)-1;
			ano = val.substr(6,4);
			var data = new Date();
			
			data.set('FullYear',ano);
			data.set('Date',dia);
			data.set('Month',mes);
			
			var atual = new Date();
			if(data.format('%d/%m/%Y') != val){
				alert('Insira uma data válida!');
				obj.value='';
				return false;	
			}
			
			if(nasc==true && atual < data ){
				alert('A data de nascimento não pode ser maior que a data atual.');
				obj.value='';
				return false;		
			}
									
						
		}
	}
}

function verificaIguais(n,str){						
	if(n==str.length){			
		return true;
	}
	else{
		if(str.substr(0,1)==str.substr(n,1)){
			return verificaIguais(++n,str);
		}else{				
			return false;
		}
	}		
}

//Funï¿½ï¿½o de validaï¿½ï¿½o de CPF
function isCPF(st) {
	
	st = st.replace('.','');
	st = st.replace('.','');
	st = st.replace('-','');
	
	
	if(verificaIguais(0,st)) return false;			
	
	

	if (st == "")
		return (false);
	
	l = st.length;
	
	//aleterado para se usuï¿½rio nï¿½o digitar os zeros na frente do CPF, completar sozinho
	if ((l == 9) || (l == 8)){
		for (i = l ; i < 10; i++){
			st = '0' + st
		}
	}

	l = st.length;
	st2 = "";
	for (i = 0; i < l; i++) {
		caracter = st.substring(i,i+1);
		if ((caracter >= '0') && (caracter <= '9'));
		st2 = st2 + caracter;
	}

	if ((st2.length > 11) || (st2.length < 10))
		return (false);

	if (st2.length==10)
		st2 = '0' + st2;

	digito1 = st2.substring(9,10);
	digito2 = st2.substring(10,11);
	digito1 = parseInt(digito1,10);
	digito2 = parseInt(digito2,10);
	sum = 0; mul = 10;

	for (i = 0; i < 9 ; i++) {
		digit = st2.substring(i,i+1);
		tproduct = parseInt(digit ,10) * mul;
		sum += tproduct;
		mul--;
	}

	dig1 = ( sum % 11 );

	if ( dig1==0 || dig1==1 )
		dig1=0;
	else
		dig1 = 11 - dig1;

	if (dig1!=digito1)
		return (false);

	sum = 0;
	mul = 11;

	for (i = 0; i < 10 ; i++) {
		digit = st2.substring(i,i+1);
		tproduct = parseInt(digit ,10)*mul;
		sum += tproduct;
		mul--;
	}
	
	dig2 = (sum % 11);
	
	if ( dig2==0 || dig2==1 )
		dig2=0;
	else
		dig2 = 11 - dig2;
	
	if (dig2 != digito2)
		return (false);
	
	if( st == "00000000000" || st == "0000000000" || st == "000000000" || st == "000000000" )
		return (false);
		
	return (true);
}

function validaCPF(obj){
	if(obj.value.length!=14 && obj.value.length>0){
		alert("CPF inválido");
		obj.focus();
		obj.value='';
		return false;
	}
	if(!isCPF(obj.value) && obj.value.length>0){
		alert("CPF inválido");
		obj.value='';
		return false;
	}
	return true;
	
}
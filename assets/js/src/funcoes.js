//Funcao que verifica se todos os campos do cadastra motorista estao preenchidos
function checaMoto(){
	if 	(document.Cadastro_moto.textNome.value !=""
		&& document.Cadastro_moto.Birthday.value !=""
		&& document.Cadastro_moto.CPF.value !=""
		&& document.Cadastro_moto.Modelo_carro.value !=""
		&& document.Cadastro_moto.Modelo_carro.value !=""
		){
		alert("Enviado");
		document.Cadastro_moto.submit();

	}else{
		alert("Há campos não preenchidos");
		 }

 }

//Funcao que verifica se todos os campos do cadastra corridas estao preenchidos
 function checaCorr(){
	if 	(document.Cadastro_corr.textNome.value !=""
		&& document.Cadastro_corr.nome_pass.value !=""
		&& document.Cadastro_corr.Valor.value !=""
		){
		alert("Enviado");
		document.Cadastro_corr.submit();

	}else{
		alert("Há campos não preenchidos");
		 }

 }

//Funcao que verifica se todos os campos do cadastra passageiro estao preenchidos
 function checaPass(){
	if 	(document.cadastro_pass.textNome.value !=""
		&& document.cadastro_pass.Birthday.value !=""
		&& document.cadastro_pass.CPF.value !="")
	{
		alert("Enviado");
		document.cadastro_pass.submit();

	}else{
		alert("Há campos não preenchidos");
		 }

 }
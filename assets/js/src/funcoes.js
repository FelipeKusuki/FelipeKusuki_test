function checaMoto(){
	if 	(document.Cadastro_moto.getElementById("textNome").value !=""
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
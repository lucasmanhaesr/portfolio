const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", event => {

    event.preventDefault();

    const inputNome = document.querySelector("#name");
    const errorNome = document.querySelector("#txtNome");

    const inputEmail = document.querySelector("#email");
    const errorEmail = document.querySelector("#txtEmail")

    const inputTitulo = document.querySelector("#subject");
    const errorTitulo = document.querySelector("#txtSubject")

    const inputMensagem = document.querySelector("#message");

    if(inputNome.value.length < 3){
        errorNome.innerHTML = `<p class="textError">O Nome deve ter no minimo 3 caracteres.</p>`;
        inputNome.value = "";
        inputNome.focus();
        return;
    }else{
        errorNome.innerHTML = "";
    }

    if(!inputEmail.value.match(emailRegex)){
        errorEmail.innerHTML = `<p class="textError">Digite um E-mail válido.</p>`;
        inputEmail.value = "";
        inputEmail.focus();
    }else{
        errorEmail.innerHTML = "";
    }

    if(inputTitulo.value.length < 5){
        errorTitulo.innerHTML = `<p class="textError">O Assunto deve ter no minimo 5 caracteres.`;
        inputTitulo.value = "";
        inputTitulo.focus();
    }else{
        errorTitulo.innerHTML = "";
    }

    alert("Formulário Enviado com Sucesso!");

    inputNome.value = "";
    inputEmail.value = "";
    inputTitulo.value = "";
    inputMensagem.value = "";
    
});
/*
case Sensitive = reconhece letras maiusculas e minusculas

por Tag : getElementByTagName()
por Id :  getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email= document.querySelector('#email')
let assunto =  document.querySelector('#assunto')
let nomeOk=false
let emailOk=false
let assuntoOk=false
let  mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
let txt = document.querySelector('#txtNome')
if(nome.value.length < 3){
   txtNome.innerHTML = 'Nome Invalido'
   txtNome,style.color = 'Red'
}else{
    txtNome.innerHTML ='Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
}

}

function validaEmail(){
    let txtEmail = document.querySelector('#email')

    if(email.value.indexOf('@')== -1|| email.value.indexOf('.')== -1){
        txtEmail.innerHTML= 'E-mail inválido'
        txtEmail.style.color= 'red'

    }else{
        txtEmail.innerHTML= 'E-mail Válido'
        txtEmail.style.color= 'green'
        nomeOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')
    
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto  é muito grande, digite  no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        nomeOk= true
    }
}

function enviar (){
    if (nomeOk== true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function zoom(){
mapa.style.width ='800px'
mapa.style.height = '600px'
}

function normal(){
    mapa.style.width ='400px'
    mapa.style.height = '250px'
}
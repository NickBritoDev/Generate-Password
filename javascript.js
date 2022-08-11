//responsavel pelo input slider de seleção de numero de caracteres
let sliderElement = document.querySelector("#slider")
//responsavel pelo botão de gerar senha
let buttonElement = document.querySelector("#button")
//responsavel pelo  numero da caracteres da senha
let sizePass = document.querySelector("#valor")
//responsavel por renderizar o sizePass em tela
let password = document.querySelector("#pass")
//responsavel por renderizar a senha em tela
let containerPass = document.querySelector("#container-pass")

//materia disponivel para criação da senha
let charset = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLÇZXCVBNM!@#$%&*"
let novaSenha = ""

//responsavel por modificar o HTML de acordo com o numero contido no sliderElement 
sizePass.innerHTML = sliderElement.value
//responsavel por manter atualizado de acordo com a posição da barra de slider
slider.oninput = function(){
    sizePass.innerHTML = this.value
}

//responsavel por gerar a senha
function generatePass(){
    let pass = ""
    //laço de repetição para fazer a senha com o numero escolido no sliderElement
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        //randoniza os caracteres
        pass += charset.charAt(Math.floor(Math.random() *n))
    }
    //renderiza o campo com a senha produzida
    containerPass.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}

//responsavel por fazer o ctrl+c automatico
function copyPass(){
    navigator.clipboard.writeText(novaSenha)
    novaSenha = ""
}
import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada');
const quantCarac = document.querySelector('.quantCarac');
const checkMaius = document.querySelector('.chk-maiusculas');
const checkMinus = document.querySelector('.chk-minusculas');
const checkNum = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');




export default () =>{
    gerarSenha.addEventListener('click', e=>{
        senhaGerada.innerHTML = gera();




    })
}

function gera(){
    const senha = geraSenha(quantCarac.value, checkMaius.checked, checkMinus.checked, checkNum.checked, checkSimbolos.checked)

    return senha || "Nada selecionado" ;
}
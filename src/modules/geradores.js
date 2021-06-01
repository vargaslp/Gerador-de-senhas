const rand = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}
const geraMaiuscula = ()=>{
    return String.fromCharCode(rand(65,91));
}

const geraMinuscula = ()=>{
    return String.fromCharCode(rand(97,123));
}

const geraNumero = ()=>{
    return String.fromCharCode(rand(48,58));
}

const simbolos = ',.:/?(){}[]+=/-*%$#@!¨&`^~';
const geraSimbolo = ()=>{
    return simbolos[rand(0, simbolos.length)];
}

export default function geraSenha(quantidade, maisculas, minusculas, numeros, simbolos){

    const senhaArray = [];
    quantidade = Number(quantidade);


    for(let i = 0; i< quantidade; i++){

        maisculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());

    }

   return senhaArray.join('').slice(0, quantidade);

}
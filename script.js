function autoajuste(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function criptografia(text) {
    let substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.split('').map(letra => substituicoes[letra] || letra).join('');
}

function descriptografia(text) {
    let palavra = text;
    let saida = '';
    let substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    for (let chave in substituicoes) {
        palavra = palavra.split(chave).join(substituicoes[chave]);
    }

    return palavra;
}

function exibirSaida(text){
    let campo = document.querySelector('.conteudoLateral__saida');
    campo.value = text;
    
    let divElement = document.querySelector('.sumir');
    divElement.style.visibility = 'hidden';

    divElement = document.querySelector('.conteudo__conteudoLateral__botao3');
    divElement.style.visibility = 'visible';
}

function limparCampo() {
    text = document.querySelector('textarea');
    text.value = '';
}

function receberCriptografar(){
    let text = document.querySelector('textarea').value;
    exibirSaida(criptografia(text));
    limparCampo();
}

function receberDescriptografia(){
    let text = document.querySelector('textarea').value;
    exibirSaida(descriptografia(text));
    limparCampo();
}

function copiarText(){
    let copyText = document.getElementById("Copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
function verresposta(id){
    var resposta = document.getElementById('resposta' +id)
    var xis = document.getElementById('img' +id)
    if(resposta.style.display === 'inline-block'){
        resposta.style.display = 'none'
        xis.style.transform = 'rotate(0)';

    }else{
        resposta.style.display = 'inline-block'
        xis.style.transform = 'rotate(45deg)';
    }
}
document.addEventListener('DOMContentLoaded',function(){
const aumentaFonteBotao=document.getElementById('aumentar-fonte')
const diminuirFonteBotao=document.getElementById('diminuir-fonte') 
let tamanhoAtuaFonte=1;
aumentaFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte= +=0.1;
document.body.style.fontSize=`${tamanhoAtualFonte}rem`


})
diminuirFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte= +=0.5;
document.body.style.fontSize=`${tamanhoAtuaFonte}rem`

})
}

)  
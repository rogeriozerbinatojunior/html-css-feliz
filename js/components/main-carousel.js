/* 
    Anotações: window (acessa a janela) e para achar o documento 
    dentro da janela usa o "." . para encontrar algum elemento 
    usa-se o document e para buscar pelo seletor (div ou class)
    usa o querySelector('class ou id do elemento')
*/

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 50;
btnRight.addEventListener('click' , function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;

});
btnLeft.addEventListener('click' , function() {
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
});

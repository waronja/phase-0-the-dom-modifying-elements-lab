// Write your code here!
const main = document.getElementById('main');
main.remove();

//Create new heading element with ID atttribute

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Thaiya is the champion';

main.appendChild(newHeader);
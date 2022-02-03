const price = document.querySelector('#planAmount');
const numInput = document.querySelector('#employeeCount');
const rangeInput = document.querySelector('#rangeInput');

rangeInput.addEventListener('input', (e) => {

    numInput.value = e.target.value;

    if (e.target.value < 100){
        price.textContent = '$10';
    } else if (rangeInput.value < 500 ){
        price.textContent = '$8';
    } else if (rangeInput.value < 1000 ){
        price.textContent = '$7';
    } else if (rangeInput.value < 2000 ){
        price.textContent = '$6';
    } else if (rangeInput.value < 3000 ){
        price.textContent = '$5';
    } else{
        price.textContent = '$4';
    }
})

numInput.addEventListener('input', (e) => {
    
    rangeInput.value = parseInt(numInput.value);

    if (e.target.value < 100){
        price.textContent = '$10';
    } else if (rangeInput.value < 500 ){
        price.textContent = '$8';
    } else if (rangeInput.value < 1000 ){
        price.textContent = '$7';
    } else if (rangeInput.value < 2000 ){
        price.textContent = '$6';
    } else if (rangeInput.value < 3000 ){
        price.textContent = '$5';
    } else{
        price.textContent = '$4';
    }
})


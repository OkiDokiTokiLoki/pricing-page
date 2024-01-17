const rangeInput = document.querySelector('#rangeInput');
const numInput = document.querySelector('#employeeCount');
const priceDisplay = document.querySelector('#priceDisplay');

const priceTiers = [
    { max: 100, price: '$10.00' },
    { max: 500, price: '$8.00' },
    { max: 1000, price: '$7.00' },
    { max: 2000, price: '$6.00' },
    { max: 3000, price: '$5.00' },
    { max: Infinity, price: '$4.00' }
];

rangeInput.addEventListener('input', () => syncInputsAndCalculate(rangeInput.value));
numInput.addEventListener('input', () => syncInputsAndCalculate(numInput.value, true));

function syncInputsAndCalculate(value, isNumInput = false) {
    const val = parseInt(value, 10);
    const inputToUpdate = isNumInput ? rangeInput : numInput;
    inputToUpdate.value = val;
    priceCalc(val);
}

function priceCalc(val) {
    const { price } = priceTiers.find((tier) => val < tier.max) || priceTiers[priceTiers.length - 1];
    priceDisplay.textContent = price;
}

(() => {
    function showMessage() {
        const overlayDiv = document.querySelector('.overlay');
        overlayDiv.innerHTML = (window.innerWidth <= 768)
            ? '<p>This page isn\'t ready for mobile devices just yet.</p>'
            : null;
    };
    showMessage();

    window.addEventListener('resize', showMessage());
})();
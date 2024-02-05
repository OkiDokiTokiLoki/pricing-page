const rangeInput = document.querySelector<HTMLInputElement>('#rangeInput')!;
const numInput = document.querySelector<HTMLInputElement>('#employeeCount')!;
const priceDisplay = document.querySelector<HTMLSpanElement>('#priceDisplay')!;

interface PriceTier {
    max: number;
    price: string;
}

const priceTiers: PriceTier[] = [
    { max: 100, price: '$10.00' },
    { max: 500, price: '$8.00' },
    { max: 1000, price: '$7.00' },
    { max: 2000, price: '$6.00' },
    { max: 3000, price: '$5.00' },
    { max: Infinity, price: '$4.00' }
];

rangeInput.addEventListener('input', () => syncInputsAndCalculate(rangeInput.value));
numInput.addEventListener('input', () => syncInputsAndCalculate(numInput.value, true));

function syncInputsAndCalculate(value: string, isNumInput = false) {
    const val = parseInt(value, 10);
    const inputToUpdate = isNumInput ? rangeInput : numInput;
    inputToUpdate.value = val.toString();
    priceCalc(val);
}

function priceCalc(val: number) {
    const { price } = priceTiers.find((tier) => val < Number(tier.max)) || priceTiers[priceTiers.length - 1];
    priceDisplay.textContent = price;
}

(() => {
    function showMessage() {
        const overlayDiv = document.querySelector<HTMLDivElement>('.overlay');
        overlayDiv!.innerHTML = (window.innerWidth <= 768)
            ? '<p>This page isn\'t ready for mobile devices just yet.</p>'
            : '';
    }
    showMessage();

    window.addEventListener('resize', showMessage);
})();

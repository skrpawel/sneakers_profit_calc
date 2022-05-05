const loader = document.getElementById('preloader');
const input_cost = document.getElementById('shoes_cost_input');
const input_shipping_rate = document.getElementById('shipping_cost_input');
const input_sell = document.getElementById('selling_price_input');
const select_form = document.getElementById('form-select');
const box_form = document.getElementById('form-box');
const log = document.getElementById('values');
const span_h1 = document.getElementById('profit_h1');
const profit_value = document.getElementById('profit_value');
const percent_value = document.getElementById('percent_value');

window.addEventListener("load", function () {
    loader.style.display = "none";
});

function selectHandler() {

    if (select_form.value === 'szara') {
        span_h1.style.backgroundImage = "url('mr_dead.png')";
        span_h1.style.backgroundPosition = "center center";

        return playSound('./mr.mov')
    }
    span_h1.style.backgroundImage = "url('usd.webp')";

}

function playSound(url) {
    const audio = new Audio(url);
    audio.volume = .005;
    audio.play();
}




function calculateProfit(a, b, c) {

    if (a && (b !== "") && c) {
        let profit = c - (a + b);

        if (select_form.value === 'ryczaltBez') {
            profit = profit - c * 0.03;
        }

        return profit;
    }

    return '?';
}

function calculatePercentage(a, b, c) {
    if (select_form.value == 'ryczaltBez') {
        return (c * 100) / (a + b + (c * 0.03)) - 100;
    }

    return (c * 100) / (a + b) - 100;
}



function getValues() {
    let shoeCost = +input_cost.value;
    let shipCost = +input_shipping_rate.value;
    let sellPrice = +input_sell.value;

    return [shoeCost, shipCost, sellPrice];
}

function updateProfit() {
    if (select_form.value) {
        let [a, b, c] = getValues();
        let profit = (calculateProfit(a, b, c)).toFixed(2);
        let percent = '?';
        if (profit !== '?') {
            percent = (calculatePercentage(a, b, c)).toFixed(2);
        }

        if (+profit > 0) {
            profit_value.style.color = 'green';
            percent_value.style.color = 'green';
        }

        if (+profit <= 0) {
            profit_value.style.color = 'red';
            percent_value.style.color = 'red';
        }

        profit_value.textContent = profit + ' PLN';

        percent_value.textContent = percent + ' %';


        return
    }

    profit_value.style.color = 'white';
    percent_value.style.color = 'white';
    profit_value.textContent = 'Wybierz formę opdatkowania';
    return percent_value.textContent = '0 %';
}

box_form.addEventListener('input', updateProfit);
box_form.addEventListener('select', updateProfit);
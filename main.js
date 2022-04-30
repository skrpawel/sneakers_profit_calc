const input_cost = document.getElementById('shoes_cost_input');
const input_shipping_rate = document.getElementById('shipping_cost_input');
const input_sell = document.getElementById('selling_price_input');
const select_form = document.getElementById('form-select');
const box_form = document.getElementById('form-box');
const log = document.getElementById('values');
const log_perc = document.getElementById('percentage');
const span_h1 = document.getElementById('profit_h1');
const profit_value = document.getElementById('profit_value');




function selectHandler() {

    if (select_form.value === 'szara') {
        span_h1.style.backgroundImage = "url('mr_dead.png')";
        span_h1.style.backgroundPosition = "center center";

        playSound('./mr.mov')
    }

}

function playSound(url) {
    const audio = new Audio(url);
    audio.volume = .03;
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



function getValues() {
    let shoeCost = +input_cost.value;
    let shipCost = +input_shipping_rate.value;
    let sellPrice = +input_sell.value;

    return calculateProfit(shoeCost, shipCost, sellPrice);
}


function updateProfit() {
    if (select_form.value) {
        let profit = getValues();
        profit_value.style.color = 'green';
        return profit_value.textContent = profit + ' PLN';
    }

    return profit_value.textContent = 'Wybierz formę opdatkowania';
}

box_form.addEventListener('input', updateProfit);
box_form.addEventListener('select', updateProfit);
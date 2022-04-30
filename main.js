const input_cost = document.getElementById('shoes_cost_input');
const input_sell = document.getElementById('selling_price_input');
const input_shipping_rate = document.getElementById('shipping_cost_input');
const select_form = document.getElementById('form-select');
const box_form = document.getElementById('form-box');
const log = document.getElementById('values');
const log_perc = document.getElementById('percentage');
const span_h1 = document.getElementById('profit_h1');






function selectHandler() {

    if (select_form.value === 'szara') {
        span_h1.style.backgroundImage = "url('mr_dead.png')";
        span_h1.style.backgroundPosition = "bottom center";

        playSound('./mr.mov')
    }

}

function playSound(url) {
    const audio = new Audio(url);
    audio.volume = .03;
    audio.play();
}


function updateValue(e) {
    let a = input_buy.value;
    let b = input_sell.value;
    let c = input_shipping_rate.value;
    console.log(e);
    const profit = (b - (b * 0.03) - a - c).toFixed(2);
    console.log(profit);
    log.textContent = profit + ' PLN';
    const perc = ((a + profit) / a).toFixed(4);
    const fixedPerc = parseInt(String(perc).split('.')[1]) / 100 + '%';
    log_perc.textContent = fixedPerc;
}
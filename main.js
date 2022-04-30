const input_buy = document.getElementById('buy_value');
const input_sell = document.getElementById('sell_value');
const input_shipping_rate = document.getElementById('shipping_cost');
const log = document.getElementById('values');
const log_perc = document.getElementById('percentage');



input_buy.addEventListener('input', updateValue);
input_sell.addEventListener('input', updateValue);
input_shipping_rate.addEventListener('input', updateValue);




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
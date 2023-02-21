const $select = document.querySelectorAll('.calculator-select');
const amount1 = document.getElementById('amount-1');
const amount2 = document.getElementById('amount-2');
const button = document.querySelector('.calculator-button');
const loader = document.querySelector(".loader");
const buttonText = document.querySelector(".calcular-button-text");
const buttonSwap = document.querySelector(".swap-button");

const data = {
    "AUD": "Dólar australiano",
    "BGN": "Lev búlgaro",
    "BRL": "Real brasileño",
    "CAD": "Dólar canadiense",
    "CHF": "Franco suizo",
    "CNY": "Yuan renminbi chino",
    "CZK": "Corona checa",
    "DKK": "Corona danesa",
    "EUR": "Euro",
    "GBP": "Libra esterlina británica",
    "HKD": "Dólar de Hong Kong",
    "HUF": "Forinto húngaro",
    "IDR": "Rupia indonesia",
    "ILS": "Nuevo séquel israelí",
    "INR": "Rupia india",
    "ISK": "Corona islandesa",
    "JPY": "Yen japonés",
    "KRW": "Won surcoreano",
    "MXN": "Peso mexicano",
    "MYR": "Ringgit malasio",
    "NOK": "Corona noruega",
    "NZD": "Dólar neozelandés",
    "PHP": "Peso filipino",
    "PLN": "Zloty polaco",
    "RON": "Leu rumano",
    "SEK": "Corona sueca",
    "SGD": "Dólar de Singapur",
    "THB": "Baht tailandés",
    "TRY": "Lira turca",
    "USD": "Dólar estadounidense",
    "ZAR": "Rand sudafricano"
};

// fetch('https://api.frankfurter.app/currencies')
//   .then((data) => data.json())
//   .then((data) => {
//     display(data);
//   });

function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    $select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][1]} (${entries[i][0]})</option>`;
    $select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][1]} (${entries[i][0]})</option>`;
  }
}

display(data);

document.addEventListener('click', (e)=>{
    let currency1;
    let currency2;
    let aux = $select[0].value;
    let value1 = amount1.value;
    
    if(e.target.matches('.swap-button')){
        $select[0].value = $select[1].value;
        $select[1].value = aux;
        currency1 = $select[1].value;
        currency2 = $select[0].value;
    } else {
        currency1 = $select[0].value;
        currency2 = $select[1].value;
    }

    if(e.target.matches('.calculator-button')){   
        if (value1 && currency1 !== currency2) {
            amount1.style.outline="none";
            $select[0].style.outline="none";
            $select[1].style.outline="none";
            buttonText.style.display='none';
            loader.style.display='flex';
            convert(currency1, currency2, value1);
        }
        if(!value1 || currency1===currency2){
            if(!value1){
                amount1.style.outline="2px red solid";
            } else {
                amount1.style.outline="none";
            }
            if(currency1===currency2){
                $select[0].style.outline="2px red solid";
                $select[1].style.outline="2px red solid";
            } else {
                $select[1].style.outline="none";
                $select[0].style.outline="none";
            }
        } 
    }
});

function convert(currency1, currency2, value1) {
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${value1}&from=${currency1}&to=${currency2}`)
    .then((val) => val.json())
    .then((val) => {
      amount2.value = `${Object.values(val.rates)[0] * 1} (${currency2})`;
      buttonText.style.display='block';
      loader.style.display='none';
    });
}

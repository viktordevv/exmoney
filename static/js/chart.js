let myChart=null;
function reloadChart(time){
    const selects=document.querySelectorAll('.calculator-select');
    let url = `https://api.frankfurter.app/${time}..?from=${selects[0].value}&to=${selects[1].value}`;
    let label = [],
        datos = [];
    
    const ctx = document.getElementById('currency-chart');
    let config = {
        type: 'line',
        data: { 
            labels: [],
            datasets: [{ 
                label: '', 
                data: [], 
                borderColor: 'rgb(117, 159, 65)',
                tension: 0.5 
            }]
        },
        options: { 
            scales: {
                x: {
                    type: 'time', 
                    time: { 
                        unit: 'month', 
                        displayFormats: {
                            day: 'MMM DD' 
                        }
                    }
                },
                y: {
                    suggestedMin: 0, 
                    suggestedMax: 0
                }
            }
        }
    };

    fetch(url)
    .then(response => response.json())
    .then(data => {
        label = [];
        datos = [];
        for (let date in data.rates) {
            label.push(date);
            datos.push(data.rates[date][selects[1].value]);
        }
        config.data.datasets[0].label=`Tipo de cambio ${selects[0].value}/${selects[1].value}`;
        config.data.labels = label;
        config.data.datasets[0].data = datos;
        config.options.scales.y.suggestedMax=Object.keys(data.rates)[Object.keys(data.rates).length-1][selects[1].value]+1;
        config.options.scales.y.suggestedMin=Object.keys(data.rates)[Object.keys(data.rates).length-1][selects[1].value]-1;
        if(myChart != null){
            myChart.destroy();
            myChart = new Chart(ctx, config); 
        } else if(myChart===null){
            myChart = new Chart(ctx, config); 
        }
    });
}
const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const lastSixMonths = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const oneYearAgo = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const fiveYearsAgo = new Date(Date.now() - 5 * 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);


const max='1999-01-04';
const datesButtons=document.querySelectorAll(".chart-dates");
const dates = [fiveDaysAgo, oneMonthAgo,lastSixMonths, oneYearAgo, fiveYearsAgo, max];

document.addEventListener("click", (e)=>{
    if(e.target.matches(".chart-dates")){
        for(let i=0; i<datesButtons.length; i++){
            if(datesButtons[i]===e.target){
                reloadChart(dates[i]);
                datesButtons[i].classList.add("button-active");
            } else {
                datesButtons[i].classList.remove("button-active");
            }
        }
    }
    
});

reloadChart(oneMonthAgo)

document.addEventListener("change", (e)=>{
    if(e.target.matches(".calculator-select")){
        reloadChart(oneMonthAgo);
    }
});


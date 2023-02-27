let myChart=null;
function reloadChart(time){
    const formattedDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const selects=document.querySelectorAll('.calculator-select');
    let url = `https://api.frankfurter.app/${time}..?from=${selects[0].value}&to=${selects[1].value}`;
    let label = [],
        datos = [];
    
    const ctx = document.getElementById('currency-chart');
    let config = {
        type: 'line', // tipo de gráfico
        data: { // datos que se van a mostrar
            labels: [], // etiquetas del eje X
            datasets: [{ // conjunto de datos
                label: '', // nombre de la serie de datos
                data: [], // datos en sí
                borderColor: 'rgb(117, 159, 65)', // color de la línea
                tension: 0.5 // suavidad de la línea
            }]
        },
        options: { // opciones del gráfico
            scales: {
                x: {
                    type: 'time', // tipo de escala del eje X
                    time: { // configuración de la escala de tiempo
                        unit: 'month', // unidad de tiempo (día, semana, mes, etc.)
                        displayFormats: {
                            day: 'MMM DD' // formato de visualización de la etiqueta
                        }
                    }
                },
                y: {
                    suggestedMin: 0, // valor mínimo del eje Y
                    suggestedMax: 0 // valor máximo del eje Y
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
        config.data.datasets[0].label=`Tipo de cambio ${selects[0].value}/${selects[1].value}`
        config.data.labels = label;
        config.data.datasets[0].data = datos;
        config.options.scales.y.suggestedMax=(data.rates[formattedDate][selects[1].value])+1;
        config.options.scales.y.suggestedMin=(data.rates[formattedDate][selects[1].value])-1;
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


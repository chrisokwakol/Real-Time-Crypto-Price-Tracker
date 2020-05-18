// Fetch Bitcoin Historical Data
fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=12&api_key={39f5b6ab93b14b77c7c3286d41934b74e8147c91f63b30f0fea6924541fe4052}')
    .then(response => response.json())
    .then(btc_history => { 
        // Fetch Ethereum Historical Data
        fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=12&api_key={39f5b6ab93b14b77c7c3286d41934b74e8147c91f63b30f0fea6924541fe4052}')
            .then(response => response.json())
            .then(eth_history => {
                // Fetch Litecoin Historical Data
                fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=12&api_key={39f5b6ab93b14b77c7c3286d41934b74e8147c91f63b30f0fea6924541fe4052}')
                .then(response => response.json())
                .then(ltc_history => {

// Function To Convert ms to hrs, min, s
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

return hours + ":" + minutes + ":" + seconds;
}


    // CHART GOES HERE
var BTC_chart = document.getElementById('BTC_chart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#888'


var chart1 = new Chart(BTC_chart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [
         msToTime(btc_history.Data.Data[0].time),
         msToTime(btc_history.Data.Data[1].time),
         msToTime(btc_history.Data.Data[2].time),
         msToTime(btc_history.Data.Data[3].time),
         msToTime(btc_history.Data.Data[4].time),
         msToTime(btc_history.Data.Data[5].time),
         msToTime(btc_history.Data.Data[6].time),
         msToTime(btc_history.Data.Data[7].time),
         msToTime(btc_history.Data.Data[8].time),
         msToTime(btc_history.Data.Data[9].time),
         msToTime(btc_history.Data.Data[10].time),
         msToTime(btc_history.Data.Data[11].time)
    ],
        datasets: [{
            label: 'Bitcoin',
            showLine: true,
            fill: false,
            backgroundColor: '#7289da',
            borderColor: '#7289da',
            data: [
                btc_history.Data.Data[0].high,
                btc_history.Data.Data[1].high,
                btc_history.Data.Data[2].high,
                btc_history.Data.Data[3].high,
                btc_history.Data.Data[4].high, 
                btc_history.Data.Data[5].high, 
                btc_history.Data.Data[6].high, 
                btc_history.Data.Data[7].high, 
                btc_history.Data.Data[8].high,
                btc_history.Data.Data[9].high,
                btc_history.Data.Data[10].high,
                btc_history.Data.Data[11].high,
            ]
        } 
        

        ],
        
    },

    // Configuration options go here
    options: {}
});

    // Ethereum Chart
    const ETH_chart = document.getElementById('ETH_chart').getContext('2d')

    Chart.defaults.global.defaultFontColor = '#888';

    const chart2 = new Chart(ETH_chart, {

        type: 'line', 

        data: {
            labels: [
             msToTime(eth_history.Data.Data[0].time),
             msToTime(eth_history.Data.Data[1].time),
             msToTime(eth_history.Data.Data[2].time),
             msToTime(eth_history.Data.Data[3].time),
             msToTime(eth_history.Data.Data[4].time),
             msToTime(eth_history.Data.Data[5].time),
             msToTime(eth_history.Data.Data[6].time),
             msToTime(eth_history.Data.Data[7].time),
             msToTime(eth_history.Data.Data[8].time),
             msToTime(eth_history.Data.Data[9].time),
             msToTime(eth_history.Data.Data[10].time),
             msToTime(eth_history.Data.Data[11].time)
        ],

            datasets: [{
                label: 'Ethereum',
                showLine: true,
                fill: false,
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                data: [
                    eth_history.Data.Data[0].high,
                    eth_history.Data.Data[1].high,
                    eth_history.Data.Data[2].high,
                    eth_history.Data.Data[3].high,
                    eth_history.Data.Data[4].high, 
                    eth_history.Data.Data[5].high, 
                    eth_history.Data.Data[6].high, 
                    eth_history.Data.Data[7].high, 
                    eth_history.Data.Data[8].high,
                    eth_history.Data.Data[9].high,
                    eth_history.Data.Data[10].high,
                    eth_history.Data.Data[11].high,
                ]
            }]
        }
    })



        })

    })

})
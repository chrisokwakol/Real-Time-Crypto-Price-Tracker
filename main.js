fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR&api_key={39f5b6ab93b14b77c7c3286d41934b74e8147c91f63b30f0fea6924541fe4052}')
    .then(response => response.json())
    .then(crypto => {
        const coin = crypto;
        document.getElementById('BTC').innerHTML = '$' + crypto.BTC.USD
        document.getElementById('ETH').innerHTML = '$' + crypto.ETH.USD
        document.getElementById('LTC').innerHTML = '$' + crypto.LTC.USD


    })

// Fetch Bitcoin Historical Data
// fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=10&api_key={39f5b6ab93b14b77c7c3286d41934b74e8147c91f63b30f0fea6924541fe4052}')
//     .then(response => response.json())
//     .then(ltc_history => console.log(ltc_history.Data.Data[0].high))
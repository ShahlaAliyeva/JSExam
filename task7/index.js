const https = require('https');

https.get('https://vuejsproject-806e8-default-rtdb.firebaseio.com/AllProducts.json', (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
})
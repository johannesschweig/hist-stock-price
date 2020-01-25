const fs = require('fs')

let data = fs.readFileSync('data/msci-world-alphavantage.json')
data = JSON.parse(data)
data = data['Time Series (Daily)']

// count days
var count = 0
for  (var i in data) {
    if(data.hasOwnProperty(i)) {
        count++
    }
}

console.log('data holds', Math.round(count/365.0*100)/100, 'years')



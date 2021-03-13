const url = "https://api.twelvedata.com/time_series?symbol=GME&interval=1day&outputsize=100&format=JSON&start_date=2021-02-13%2013:17:00&end_date=2021-03-11%2013:17:00&apikey=691754daad0144fb8cb7a2dc2c3a2ac2"
const rp = require('request-promise');
const fs = require('fs');
const express = require('express');
const app = express();


let data = [];
let py = [];
let dates = [];

// if we dynamically get url we can get what GME stock prices in real time
rp(url)
.then(function(html){
    // wait until finished writing to file, writing data to file stockData
    let jsonData = JSON.parse(html).values;

    for (let line of jsonData) {
        ({x:line.datetime, y:line.close});
        py.push(JSON.parse(line.close));
        dates.push(line.datetime)
    }

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['./get_png.py']);

    pyProg.stdout.on('data', function(data) {
        console.log(data.toString());
        res.write(data);
        res.end('end');
    });

})
.catch(function(err){
    return err;
});






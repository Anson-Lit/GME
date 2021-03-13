const url="https://api.twelvedata.com/time_series?symbol=GME&interval=1min&exchange=NYSE&type=stock&format=JSON&start_date=2021-03-10%2011:59:00&end_date=2021-03-11%2011:59:00&apikey=691754daad0144fb8cb7a2dc2c3a2ac2"

const rp = require('request-promise');
const fs = require('fs');

rp(url)
.then(function(html){
    // wait until finished writing to file, writing data to file stockData
    console.log((JSON.stringify((JSON.parse(html).values))));
    // fs.writeFile(".\\DataModel\\data.txt", JSON.stringify((JSON.parse(html).values)), (err) => {if (err) return err})
})
.catch(function(err){
    return err;
});




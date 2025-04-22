//creating an http server
//express
// is express node js bundle
// const express = require("express")

// const app = express()
//  function sum(n){
//     ans=0;
//     for(let i =1 ;i<=n;i++){
//         ans = ans+i;
//     }
//     return ans;
// }

// app.get("/",function(req,res){
//     const n= req.query.n;
//     const ans= sum(n);
//     res.send("hi your ans is "+ ans);
// })


// app.listen(3000);
const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];
app.use(express.json());

// GET endpoint (correctly defined)
app.get("/", function(req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// POST endpoint moved OUTSIDE the GET handler
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done"
    });
});

app.listen(3000);
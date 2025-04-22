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
const express = require("express")
const app = express();

const user = [{
    name:"John",
    kidney:[{
            healthy:false
        }]
}]

app.get("/",function(req,res){
    const johnkidney = user[0].kidney;
    const numberOfKidney = johnkidney.length;
    let  numberOfHealthyKidney = 0;
    for(let i=0;i<johnkidney.length;i++){
        if(johnkidney[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney-numberOfHealthyKidney;
    res.json({
        johnkidney,
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
})
app.listen(3000)

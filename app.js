//creating an http server using express library 

const express = require ("express");

const app = express();
function number(n){
    let ans = 0 ;
    for (let i = 1; i<=n; i++){
        ans = ans +1;
    }
    return (ans);
   };
const user = [{
    name:  "john",
    kidneys :[{
        healthy: false
    },
    {
        healthy: false}]
}];

app.get("/", (req, res )=>{
    const johnkidneys = user[0].kidneys;
   const number = johnkidneys.length;
   let numberofhealthykidneys = 0;
   for (let i =0; i< johnkidneys.length; i++){
    if (johnkidneys[i].health){
    numberofhealthykidneys = numberofhealthykidneys + 1 
   }
   }
   const numberofunhealthykidneys = number - numberofhealthykidneys;
   res.json({
    number,
    numberofhealthykidneys,
    numberofunhealthykidneys
   })
})
app.use(express.json());
app.post("/", (req, res) =>{
    let isHealthy = req.body.damnhealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"done"
    })
})


app.put("/",(req, res) =>{
    for(let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})
app.delete("/",(req, res) =>{

    const newkidneys = [];
    for (let i = 0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }

    }
    user[0].kidneys = newkidneys;
    res.json({msh  : "done bro"})
})

app.listen(3000 , ()=>{
    console.log ("listening")
}) 




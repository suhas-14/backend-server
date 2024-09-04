const express = require ('express')
const app = express()
let studentArray = require("./initialData")

//middleware
app.use(express.json)

app.get("/api/student", (req, res)=>{
    res.send(studentArray)
})

app.get("/api/student/:id", (req, res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        id = parseInt(id)
    let studentObj = studentArray.find((item)=>{
        return item.id === id
    })
    if (studentObj === undefined) {
        res.status(404).send({"message": "Student not found"})
    }
    res.send(studentObj)
    } else {
        res.status(400).send({"message": "Invalid id"})
    }
})

app.post("/api/student", (req,res)=> {
    let reqKeys = Object.keys(req.body);
    let studentObj = req.body;
    if(reqKeys.find((item)=>{return item==="id"}) && reqKeys.find((item)=>{return item==="name"})
    && reqKeys.find((item)=>{return item==="currentClass"}) && reqKeys.find((item)=>{return item==="division"})) {
        studentArray.push(studentObj)
        res.send(studentArray);
    } else {
        res.status(400).send({"message": "Bad request"})
    }
    
})

app.listen(1212, ()=>{
    console.log("Server is running on port 1212")
})
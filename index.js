let exp = require("express")
let bodyParser = require("body-parser")
let port = process.env.PORT || 3000
let app = exp()

app.use(bodyParser.urlencoded({extended:true}))
app.use(exp.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{
    let yourName = req.body.yours
    let yourCrushName = req.body.crush
  let data = {
    percent:[
        "0%","1%","2%","3%","4%","5%","6%","7%","8%","9%","10%","11%","12%","13%","14%","15%","16%","17%","18%","19%","20%","21%","22%","23%","24%","25%","26%","27%","28%","29%","30%","31%","32%","33%","34%","35%","36%","37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63%","64%","65%","66%","67%","68%","69%","70%","71%","72%","73%","74%","75%","76%","77%","78%","79%","80%","81%","82%","83%","84%","85%","86%","87%","88%","89%","90%","91%","92%","93%","94%","95%","96%","97%","98%","99%","100%"
    ]
  }

  let jon = JSON.stringify(data)
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="icon" type="images/x-icon" href="images/WhatsApp Image 2022-11-28 at 5.46.42 AM.jpeg">
    </head>
    <body style="height:80vh"> 
        <h1> `+ yourName + `,`+` you and `+ yourCrushName +`'s love calculation is `+ JSON.parse(jon).percent[Math.floor(Math.random()*101)] +` </h1>
    </body>
    </html>
    `)
    // data.pert[Math.floor(Math.random()*101)]
    res.send()
})

app.listen(port,()=>{
    console.log("port just started at port 3000")
})
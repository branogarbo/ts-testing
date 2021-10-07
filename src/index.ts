import express from "express"

let app = express();

app.get("/", (req, res) => {
   res.send("heyyy");
})

app.listen(3000, () => console.log("listening on port 3000"));
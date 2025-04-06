import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import paymentRoutes  from "./src/routes/payment.routes.js"

dotenv.config()

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/payment", paymentRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 
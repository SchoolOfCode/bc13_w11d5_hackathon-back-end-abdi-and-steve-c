//import express
import express from "express";
// import cors
import cors from "cors";
// import morgan
import logger from "morgan";
// import todosRouter from routes/todos.js
import todosRouter from "./routes/todos.js"

const PORT=process.env.PORT
//create app from express
const app = express();

//cors
app.use(cors());
//morgan
app.use(logger("dev"));
//express json
app.use(express.json());
//app. use
app.use("/todos",todosRouter);

//export default app
app.listen(PORT,()=>{console.log(`listening on ${PORT}`)})
export default app;
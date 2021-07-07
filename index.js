const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const authMiddleWare = require("./auth/middleware.js");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const cafeRouter = require("./routers/cafe")
const userRouter = require("./routers/user")


const app = express();
app.use(corsMiddleWare());
/**
 * morgan:
 *
 * simple logging middleware so you can see
 * what happened to your request
 */
 app.use(loggerMiddleWare("dev"));

 /**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * a.k.a. body-parser
 * Needed to be able to POST / PUT / PATCH
 *
 * docs: https://expressjs.com/en/api.html#express.json
 *
 */

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 *
 * cors middleware:
 *
 * Since our api is hosted on a different domain than our client
 * we are are doing "Cross Origin Resource Sharing" (cors)
 * Cross origin resource sharing is disabled by express by default
 * for safety reasons (should everybody be able to use your api, I don't think so!)
 *
 * We are configuring cors to accept all incoming requests
 * If you want to limit this, you can look into "white listing" only certain domains
 *
 * docs: https://expressjs.com/en/resources/middleware/cors.html
 *
 */

 

 /**
 *
 * delay middleware
 *
 * Since our api and client run on the same machine in development mode
 * the request come in within milliseconds
 * To simulate normal network traffic this simple middleware delays
 * the incoming requests by 1500 second
 * This allows you to practice with showing loading spinners in the client
 *
 * - it's only used when you use npm run dev to start your app
 * - the delay time can be configured in the package.json
 */

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/cafes", cafeRouter)
app.use("/users", userRouter)

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
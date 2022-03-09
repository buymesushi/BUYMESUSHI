const express = require("express");

const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const userRouter = require("./routes/users");
const authBoardRouter = require("./routes/authBoard");
const BoardRouter = require("./routes/Board");
const webmeetingRouter = require("./routes/webmeeting");
const productRouter = require("./routes/productRoutes");
const profileRouter = require("./routes/profile");
const mypageRouter = require("./routes/myPageRoutes");
const minigameRouter = require("./routes/minigame");
const connectDB = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// const importDate = require("./routes/seederScript");

const connectAndImport = async () => {
    try {
        await connectDB();
        // await importDate();
    } catch (err) {
        console.log(err);
    }
};

connectAndImport();

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/mypage", mypageRouter);

app.use("/api/users", userRouter);
app.use("/api/authboard", authBoardRouter);
app.use("/api/Board", BoardRouter);
app.use("/api/webmeeting", webmeetingRouter);

app.use("/api/profile", profileRouter);
app.use("/api/minigame", minigameRouter);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});

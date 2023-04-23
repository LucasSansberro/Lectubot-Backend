import Router from "express"

const indexRouter = Router()

indexRouter.get("/", (req, res) => {
  res.json({ msg: "Hola" });
});

export default indexRouter
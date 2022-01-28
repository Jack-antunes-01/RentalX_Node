import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

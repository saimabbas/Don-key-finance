import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Database } from "./database";
import { PORT } from "./env";
import { loginRoutes } from "./routes/loginRoutes";
import { apiRoutes } from "./routes/apiRoutes";
import { protocolRoutes } from "./routes/protocolRoutes";
import { checkAuth } from "./middlewares";
import "./cron";
const app = express();

declare global {
  namespace Express {
    interface Request {
      user?: { walletAddress: string, GUID: string, uid: number };
    }
  }
}

app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", loginRoutes);
app.use("/api/v1", checkAuth(), protocolRoutes)

app.use("/api/v1", checkAuth(), apiRoutes);

async function bootstrap() {
  await Database.connect();
  await app.listen(PORT);

  console.log("Server Listening on Port ", PORT);
}

process.on("beforeExit", async () => {
  await Database.disconnect();
});
bootstrap();

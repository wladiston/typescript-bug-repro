import { logger } from "@acme/logger";
import os from "os";

import { app } from "./app";

const port = 3100;

const onListen = () => {
  const address = Object.values(os.networkInterfaces())
    .flat()
    .find((ip) => String(ip?.family).includes("4") && !ip?.internal)?.address;

  if (!address) {
    logger.info(`🚀 API started at http://localhost:${port}`);
  } else {
    logger.info(
      `🚀 API started at http://localhost:${port} (http://${address}:${port})`
    );
  }
};

app.listen(port, onListen);

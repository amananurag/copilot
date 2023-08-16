// This function is used to generate API_KEY for the application

import crypto from "crypto";

function generateApiKey() {
  const key = crypto.randomBytes(32).toString("hex");
  console.log(`API key: ${key}`);
  return key;
}

generateApiKey();

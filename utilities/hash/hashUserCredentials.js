import crypto from "crypto";
function hashUserCredentials(req) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(req.body.password, salt, 1000, 64, "sha512")
    .toString("hex");
  req.body.password = hash;
  console.log(req.body.password);
  req.body.salt = salt;
  return req;
}

export default hashUserCredentials;

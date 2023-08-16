function validateApiKey(req, res, next) {
  let apikey = "";
  if (req.headers.apikey) {
    apikey = req.headers.apikey;
  }
  const apiKeyFromEnv = process.env.API_KEY;
  if (apikey == apiKeyFromEnv) {
    return next();
  } else {
    res.status(403).json({ error: "Invalid API key" });
  }
}

export default validateApiKey;

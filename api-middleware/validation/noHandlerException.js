function noHandlerFound(req, res, next) {
  const validUrls = ["/", "/login"];
  if (!validUrls.includes(req.url)) {
    res.status(404).json({ error: "Requested URI is invalid" });
  } else {
    return next();
  }
}
export default noHandlerFound;

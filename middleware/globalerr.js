export function globalErr(err, req, res, next) {
  res.status(err.status || 500).json({ error: "Something went wrong" });
}

export function globalErr(err, req, res, next) {
  console.log(err.message)
  res.status(err.status || 500).json({ error: "Something went wrong" });
}

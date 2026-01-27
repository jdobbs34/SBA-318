export function logger(req, res, next) {
  console.log(`${req.method} - ${req.url}`);

  if (req.body) {
    console.log(`Req Date`, req.body);
  }

  next();
}

export function globalErr(err, req, res, next) {
  res.status(err.status || 500).json({ error: "Something went wrong" });
}

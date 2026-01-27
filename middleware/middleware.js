export function logger(req, res, next) {
  console.log(`${req.method} - ${req.url}`);

  if (req.body) {
    console.log(`Req Date`, req.body);
  }

  next();
}



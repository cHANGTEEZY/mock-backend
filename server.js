const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

// Enable CORS for your frontend (both domains)
server.use((req, res, next) => {
  const allowedOrigins = [
    "https://amnil-auth.vercel.app", // Allow your first domain
    "https://react-amnil-auth.vercel.app", // Allow your second domain
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // Dynamically set allowed origin
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH"); // Allow methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // Allow headers

  next();
});

server.use(middlewares);
server.use(router);
server.listen(port);

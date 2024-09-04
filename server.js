
import jsonServer from "json-server"
import auth from "json-server-auth"
import cors from "cors"
const port = 3001

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 664,
  
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
// app.listen(port);

app.listen(port, () => console.log("Server is running on port:", port));
/* A senha do admin é 12345 */
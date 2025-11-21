import helmet from "helmet";
import express from "express";
import prodroute from "./routes/prodroute.js";
import cors from "cors";
import {sql} from "./db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const port=3001;
const app=express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/products",prodroute);

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const rows=await sql`
      INSERT INTO users (username, password_hash)
      VALUES (${username }, ${hash})
    `;
    console.log(rows);
    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.error("REGISTER error:", err);

    if (err.code === "23505") {
      return res.status(400).json({ error: "Username already exists" });
    }

    res.status(500).json({ error: "Server error" });
  }
});


// ----------------- LOGIN -----------------
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body; 

  try {
    // Query using neon serverless
    const rows = await sql`
      SELECT id, username, password_hash
      FROM users
      WHERE username = ${username}
    `;

    if (rows.length === 0) {
      // USER DOES NOT EXIST
      return res
        .status(404)
        .json({ error: "USER_NOT_FOUND" });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({
      message: "Login successful",
      user: { id: user.id, username: user.username },
    });

  } catch (err) {
    console.error("LOGIN error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

async function initdb(res,req){
  try{
     const db=await sql`
      SELECT * FROM items
    `;
    console.log("Db initialised");
  }catch(err){
    console.log(err);
  }
};

initdb().then(()=>{
  app.listen(port,()=>{
    console.log(`The server is listenening on ${port}`);
  })
})
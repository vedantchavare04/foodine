import {neon} from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const{PGHOST,PGUSER,PGDATABASE,PGPASSWORD,PGPORT}=process.env;

export const sql=neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

export const example=console.log("not used")
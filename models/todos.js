import { pool } from "../db/index.js";

export async function getTodos() {
    const data = await pool.query("SELECT * FROM todos ORDER BY id;");
    return data.rows;
}

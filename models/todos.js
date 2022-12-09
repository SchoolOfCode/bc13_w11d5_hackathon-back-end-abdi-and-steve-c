import { pool } from "../db/index.js";

export async function getTodos() {
    const data = await pool.query("SELECT * FROM todos ORDER BY id;");
    return data.rows;
}

export async function postTodo(newTodo) {
    const { task, completed } = newTodo;
    const data = await pool.query(
        `INSERT INTO todos (
            task,
            completed
        ) VALUES ($1,$2) RETURNING *;`,
            [task, completed]
    );
    return data.rows[0];
}

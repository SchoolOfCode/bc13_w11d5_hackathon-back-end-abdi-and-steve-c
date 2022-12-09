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

//take an id, update the completed field

export async function updateCompleted(id, completedStatus) {
	const { completed } = completedStatus;
	const data = await pool.query(
		`UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *;`,
		[completed, id]
	);
	return data.rows[0];
}

export async function deleteTodo(id) {
	const data = await pool.query(`DELETE FROM todos WHERE id = $1 RETURNING *`, [
		id,
	]);
	return data.rows[0];
}

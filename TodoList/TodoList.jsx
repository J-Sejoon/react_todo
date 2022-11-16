import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState([
		{ id: "123", text: "장보기", status: "active" },
		{ id: "859", text: "유산소운동", status: "active" },
		{ id: "241dr", text: "샴푸 구입", status: "active" },
	]); //status는 나중에 진행중/완료 구분을 위해

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};

	const handleDelete = (deleted) =>
		setTodos(todos.filter((t) => t.id !== deleted.id));

	const filtered = getFilteredItems(todos, filter); // 필터링해주느 함수실행
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{filtered.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
};

//TodoList컴퍼넌트 바깥 부분에 필터링하는 함수 정의
function getFilteredItems(todos, filter) {
	if (filter === "all") {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}

export default TodoList;

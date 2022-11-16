import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext(); //아래 훅을 만들었기 때문에 export필요 X

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		updateDarkMode(!darkMode);
	};
	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

//Hooks
export const useDarkMode = () => useContext(DarkModeContext);

//다크모드가 트루였을때 제일 상위 엘리먼트에 dark 클라스를 넣어준다
function updateDarkMode(darkMode) {
	if (darkMode) {
		document.documentElement.classList.add("dark");
		console.log("dark클라스 들어감!!");
	} else {
		document.documentElement.classList.remove("dark");
		console.log("dark클라스 제거");
	}
}

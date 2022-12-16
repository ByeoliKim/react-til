import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

const ColorList = (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    )
}

export default ColorList;

//ThemeContext.Provider > ColorList > MainContent
//ColorList 컴포넌트는 방금 전에 만든 MainContent 컴포넌트를 자식으로 갖고 있는데, 이를 ThemeContext.Provider 로 감싸서 ThemeContext 의 값을 하위 컴포넌트들이 사용할 수 있도록 해 줌.
//ThemeContext 의 값을 하위 컴포넌트들이 사용할 수 있다.

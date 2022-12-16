import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MainContent = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    //파라미터로 컨텍스트 객체를 넣어 줘야 함.

    return (
        <div
            style={{
                width:"100vw",
                height:"100vh",
                padding:"1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === 'light' ? "black" : "white",
            }}
        >
            <p>
                안녕하세요, 별이의 컨텍스트 페이지입니다. <br/>
                테마 변경이 가능해요. 🤓
            </p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;

//MainContent 컴포넌트는 ThemeContext 로부터 현재 설정된 테마 값을 받아와 실제 화면의 콘텐츠를 렌더링 하는 역할을 함.
//테마 변경 버튼을 누를 경우 ThemeContext 로부터 받은 toggleTheme() 함수를 호출하여 ThemeContext 의 값을 변경하는 역할을 합니다.
//ThemeContext 의 값을 가져오기 위해 ThemeContext.Consumer 컴포넌트를 사용하는 방법이 아닌, useContext() 훅을 사용함.

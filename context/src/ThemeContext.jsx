import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;

//크롬 개발자 도구를 통해 컨텍스트의 이름을 확인하기 위해서
//ThemeContext 의 displayName 값을 설정해 줬음미다.
//theme 와 toggleTheme() 함수는 자체적으로 관리되고 있다.
//여기에서는 컨텍스트의 초기값을 별도로 설정하지 않았고, 이후 Provider 에서 값을 설정할 예정이다.
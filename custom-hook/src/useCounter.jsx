import React, { useState } from "react";

const useCounter = (initialValue) => {

    //useCounter() 훅은 초기 카운트 값을 파라미터로 받아서 count 라는 이름의 state 를 생성하여 값을 제공함.
    //카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 커스텀 훅이다.
    //이 커스텀 훅으로 어떤 함수 컴포넌트에서든 카운트 기능을 쉽게 사용할 수 있게 됨.

    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
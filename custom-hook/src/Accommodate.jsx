import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; //최대 카운트 개수는 상수로 정의한다.

//Accommodate 컴포넌트는 useCounter() 훅을 사용하여 카운트를 관리함!
const Accommodate = (props) => {
    const [isFull, setIsfull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=====🚀");
        console.log("useEffect() is called!!!!!");
        console.log(`isFull: ${isFull}`);
    });
    //첫 번째 useEffect 같은 경우는, 의존성 배열이 없음.
    //컴포넌트가 마운트 된 직후에 호출되며 이후 컴포넌트가 업데이트 될 때마다 호출됨.
    

    useEffect(() => {
        setIsfull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count} 난 의존성 배열 있엉~`);
    }, [count]);
    //두 번째 useEffect 같은 경우에는, 의존성 배열이 있음.
    //컴포넌트가 마운트 된 직후에 호출되며 이후 count 값이 바뀔 때마다 호출됨
    //이때, 용량이 가득 찼는지, 안 찼는지의 상태를 isFull 이라는 state 에 저장함!!!!!
    //용량이 다 찼을 경우 의존성 배열을 갖고 있는 훅은 호출되지 않는다! count 의 값이 변하지 않기 때문에 ~_~

    return (
        <div style={{padding:16}}>
            <p>{`총 ${count} 명 수용했습니다.`}</p>
            <button 
                onClick={increaseCount}
                disabled={isFull}
            >
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
            {/* 카운트 개수가 최대 용량을 초과하면 경고 문구가 표시되며 더 이상 입장이 불가능해진다. */}
        </div>
    )
}

export default Accommodate
const scaleNames = {
    c: "섭씨",
    f: "화씨"
};

const TemperatureInput = (props) => {
    const handleChange = (event) => {
        // 컴포넌트의 state를 사용하지 않게 되기 때문에 입력값이 변경되었을 때 상위 컴포넌트로 변경된 값을 전달해 줘야 됨.
        // 사용자가 온도 값을 변경할 때마다 props 에 있는 onTemperatureChange() 함수를 통해 변경된 온도 값이 상위 컴포넌트로 전달함.
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력하시오~ (단위:{scaleNames[props.scale]});
            </legend>
            {/* 온도값을 state에서 가져오는 것이 아닌, props를 통해서 가져온다. */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput

//TemperatureInput 컴포넌트는 props로 scale 과 temperature 값을 받아서 표시해 주고 있다.
//온도 값이 변경되었을 때에 props의 onTemperatureChange() 함수를 호출하여 오직 상위 컴포넌트로 변경된 값을 전달한다
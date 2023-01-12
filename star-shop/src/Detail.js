import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    useEffect(() => {
        // mount, update 시 여기 코드 실행됨.
        let timer = setTimeout(() => { setAlertMsg(false) }, 2000);

        return () => {
            clearTimeout(timer);
            //기존 요청은 제거하고 싶을 때 활용하슈
            //clean up function 은 mount 시 실행 안 됨
            //unmount 시 실행됨.
        }
    }, []);

    let [count, setCount] = useState(0);

    let {id} = useParams();
    
    let findId = props.items.find(function(x){
        return x.id == id
    });

    let [alertMsg, setAlertMsg] = useState(true);

    let [num, setNum] = useState('')

    useEffect(()=>{
        if (isNaN(num) == true) {
            alert("숫자만 입력하슈")
        }
    }, [num])

    return (
        <div className="container">
            {count}
            <button onClick={() => { setCount(count+1) }}>버튼</button>
            {   
                alertMsg == true
                ?
                <div className="box">
                    2초 이내 구매시 할인
                </div>
                : null
            }
            <input onChange={((e)=>{ setNum(e.target.value) })} />
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="이미지" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    );
}

export default Detail;
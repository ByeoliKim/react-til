import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    useEffect(() => {
        // mount, update 시 여기 코드 실행됨.
        setTimeout(() => { setAlert(false) }, 2000);
    }, []);

    let [count, setCount] = useState(0);

    let {id} = useParams();
    
    let findId = props.items.find(function(x){
        return x.id == id
    });

    let [alert, setAlert] = useState(true);

    return (
        <div className="container">
            {count}
            <button onClick={() => { setCount(count+1) }}>버튼</button>
            {   
                alert == true
                ?
                <div className="box">
                    2초 이내 구매시 할인
                </div>
                : null
            }
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
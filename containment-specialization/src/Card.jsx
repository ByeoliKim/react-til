const Card = (props) => {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 50,
                padding: 40,
                borderRadius: 14,
                boxSizing: "border-box",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.09)",
                backgroundColor: backgroundColor || "tomato",
                letterSpacing:"-1.5px"
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

// Card 컴포넌트는 하위 컴포넌트를 감싸서 카드 형태로 보여 주는 컴포넌트임.
// 여기에서 Children 을 사용한 부분이 Containment 이고
// title과 background 를 사용한 부분이 Specialization 임.
// Card 컴포넌트는 범용적으로 재사용이 가능한 컴포넌트임.


export default Card;
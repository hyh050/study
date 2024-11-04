function study(){
    return(
        <div>
            <h3>주제 props/
            props를 통하여 부모 자식간에 객체,배열,함수 등 값을 전달 할 수 있다.</h3>
            <p>
            1.컴퍼넌트에서 자식에게 props를 전달할때 자식컨포넌트를 호출하여 속성처럼 전달한다.
                예)
                function App() {
                    return (
                        <Greeting name="Alice" />
                    );
                };
                (App:부모, Greeting:자식, name은 속성, "Alice"는 값)

            2.자식요소에서 props로 받아올수있고 간편하게 객체분해를 사용 할 수 있다.
                예)
                function Greeting(props){ };
                function Greeting({name}){ };
               
            </p>
        </div>
    )
}
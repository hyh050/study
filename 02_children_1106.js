//주제 children
//부모 컴포넌트 안에 자식 컴포넌트에 해당
//틀은 같지만 내용이 다른 컴포넌트를 만들어 재활용에 용이

//부모 컴포넌트 card
function card({children}){
    return(
        <div>
            <h1>오늘 저녁은?</h1>
            {children}
        </div>
    )
}

//실제 사용
function app(){
    return(
        <div>
            <card>
                <p>김치찌개</p>
            </card>
            <card>
                <p>된장찌개</p>
            </card>
        </div>
        
    )
}
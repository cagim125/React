import React, {useState} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "11",
        email: "11",
        tel: "11",    
    });

    const { name, email, tel } = inputs; //위에 있는 오브젝트를 사용을 하려면 바깥으로 한번 빼주어야 한다.

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            ...inputs,              // ... 깊은 복사 (새로운 Object 생성)
            [id]: value
        });
    };
    
    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div> 
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div> 
            <p>이름: {name} </p>
            <p>이메일: {email} </p>
            <p>전화번호: {tel} </p>
        </div>
    );
};

export default Input2;
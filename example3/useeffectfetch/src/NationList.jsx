import { useEffect, useState } from "react"
import styled from 'styled-components'


const Item = styled.div`
    width: 500px;
    margin: 60px auto;

    ul{
        padding: 10px;
        list-style: none;
    }

    li {
        border: 1px solid #e4e4e4;
        padding: 10px;
        box-shadow: 4px 4px 6px rgba(0,0,0, 0.1);
        border-radius: 10px;
        margin: 20px 0;
    }

    button{
        float:right;
        padding: 10px;
        border-radius: 5px;
        border:1px solid black;
        margin-left:10px;
        background-color: #fff;
    }
`


export default function NationList() {

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3001/nations');

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("네트워크 응답에 문제가 있습니다.");
                }
                return response.json()
            })
            .then(json => setNations(json))
            .catch(error => console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error));
    }, [url]);

    return (
        <Item>
            <h2>나라 목록</h2>
            <ul>
                {
                    nations.map(nations => (
                        <li key={nations.id}>
                            <h3>{nations.title}</h3>
                            <p>{nations.loc}</p>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => setUrl('http://localhost:3001/nations?loc=europe')}>유럽목록</button>
                <button onClick={() => setUrl('http://localhost:3001/nations')}>전체목록</button>
            </div>
        </Item>
    )
}
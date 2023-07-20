import { useState } from "react";

export function Resume({ hello, name, hobby, food, color }) {
    const [like, setLike] = useState("");

    // let like = 0;

    function clickLike() {
        if (like === "") {
            setLike('like');
        } else {
            setLike("");
        }
    }

    return (
        <>
            <h1>{name}의 자기소개서</h1>
            <h2>{hello}</h2>
            <dl>
                <dt>취미 : </dt>
                <dd>{hobby}</dd>
                <dt>좋아하는 음식 : </dt>
                <dd>{food}</dd>
                <dt>좋아하는 색 : </dt>
                <dd style={{ color: color }}>{color}</dd>
            </dl>
            <button onClick={clickLike}>like</button><span>{like}</span>
        </>
    )
}
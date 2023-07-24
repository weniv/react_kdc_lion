import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


export default function ProductDetailNoticePage() {
    const { id } = useParams();

    return (
        <>
            <h1>product {id}의 공지사항입니다.</h1>
            <div>product {id} 는 어쩌고 저쩌고 ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis dolor atque in, temporibus nesciunt exercitationem corporis maxime esse impedit recusandae iusto laborum est optio, nemo doloremque, aut porro quia!</div>
        </>
    )
}

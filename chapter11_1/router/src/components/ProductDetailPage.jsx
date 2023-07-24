import React from 'react'
import { useLocation } from 'react-router-dom';

export default function ProductDetailPage() {
    const location = useLocation();
    console.log(location.pathname.split('/'));
    const id = location.pathname.split('/')[2]

    return (
        <>
            <div>{id} 번째 ProductDetailPage</div>
            <h1>product {id} 는 다릅니다!</h1>
            <div>product {id} 는 어쩌고 저쩌고 ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis dolor atque in, temporibus nesciunt exercitationem corporis maxime esse impedit recusandae iusto laborum est optio, nemo doloremque, aut porro quia!</div>
        </>
    )
}

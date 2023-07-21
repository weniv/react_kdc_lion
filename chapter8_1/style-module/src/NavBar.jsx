import { useState } from "react"
import { ContentsContainer } from "./ContentsContainer";
import styles from './App.module.css'

function NavBar() {

    const [listName, setListName] = useState("detail");

    function checkId(event) {
        setListName(event.target.id);
    }

    return (
        <>
            <nav className={styles.box}>
                <ul>
                    <li className={styles.text}>
                        <button id="detail" onClick={checkId}
                            style={listName === "detail" ? { color: "red" } : {
                                color: "black"
                            }}>상세정보</button>
                    </li>
                    <li className={styles.text}>
                        <button id="qna" onClick={checkId} style={listName === "qna" ? { color: "red" } : {
                            color: "black"
                        }}>Q&A</button>
                    </li>
                    <li className={styles.text}>
                        <button id="review" onClick={checkId} style={listName === "review" ? { color: "red" } : {
                            color: "black"
                        }}>Review</button>
                    </li>
                </ul>
            </nav >
            <ContentsContainer listName={listName} />
        </>
    )
}

export default NavBar;
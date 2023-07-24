import { useContext } from "react";
import { UserInfo } from "./context";


export const HelloLicatTwo = () => {
    const { name, id } = useContext(UserInfo);

    return (
        <div>
            <h2>Two : {name}</h2>
            <strong>Two : {id}</strong>
        </div>
    )
}
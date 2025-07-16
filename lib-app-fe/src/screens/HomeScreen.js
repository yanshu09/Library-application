import {useEffect, useState} from "react";
import { getLocalStorageUser } from "../utils/AuthUtil";
import LibrarianHomeScreen from "./LibrarianHomeScreen";
import StudentHomeScreen from "./StudentHomeScreen";

const HomeScreen = () =>{
    const {userType, setUserType} = useState("");

    useEffect(() => {
        const user = getLocalStorageUser();
        if(user){
            setUserType(user.type);
        }
    }, []);

    if(!userType.length){
        return <p>Loading...</p>;
    }

    const getHomeScreen = () =>{
        return userType === "LIBRARIAN" ? 
    (<LibrarianHomeScreen/>) :
    (<StudentHomeScreen/>);
    };

    return (<section className="app-section">
    <button className="ui secondary button">Logout</button>
    {getHomeScreen()}
    </section>)
};

export default HomeScreen;
import { useEffect, useState } from "react";
import CreateChannel from "./CreateChannel";
import DirectMessage from "./DirectMessage";
import RealTimeChat from "./RealTimeChat";

function Dashboard () {
    const [whoToChat, setWhoToChat] = useState({
        uid: ''
    })
    const [usersListOfUID, setUsersListOfUID] = useState()
    useEffect( ()=> {
        // call the send message utility function here
        console.log(whoToChat.uid)
    }, [whoToChat])
    return (
        <div className="flex flex-col justify-center items-center">
            <CreateChannel />
            <div>{whoToChat.uid}</div>
            <DirectMessage setWhoToChat={setWhoToChat}/>
            
        </div>
    )
}

export default Dashboard;
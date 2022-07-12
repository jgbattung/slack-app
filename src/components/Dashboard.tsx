import { useEffect, useState } from "react";
import DirectMessage from "./DirectMessage";
import RealTimeChat from "./RealTimeChat";

function Dashboard () {
    const [whoToChat, setWhoToChat] = useState({
        uid: ''
    })
    useEffect( ()=> {
        // call the send message utility function here
        console.log(whoToChat.uid)
    }, [whoToChat])
    return (
        <div className="grid grid-cols-3 w-full">
            <div>Channel</div>
            <div>RealTimeChat</div>
            <div>{whoToChat.uid}</div>
            <DirectMessage setWhoToChat={setWhoToChat}/>
            
        </div>
    )
}

export default Dashboard;
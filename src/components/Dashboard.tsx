import DirectMessage from "./DirectMessage";
import RealTimeChat from "./RealTimeChat";

function Dashboard () {
    return (
        <div className="grid grid-cols-3 w-full">
            <div>Channel</div>
            <div>RealTimeChat</div>
            <div>RealTimeChat</div>
            <DirectMessage />
            
        </div>
    )
}

export default Dashboard;
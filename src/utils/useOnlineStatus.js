import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatue] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatue(false);
        });

        window.addEventListener('online',()=>{
            setOnlineStatue(true);
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;
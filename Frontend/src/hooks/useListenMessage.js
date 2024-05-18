import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation"
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessage = () => {
  const {messages, setMessages} = useConversation();
    const {socket} = useSocketContext();

    useEffect(() => {
      socket.on("newMessage", (newMessage) => {
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
      })
    
      return () => socket?.off()
    }, [socket, messages, setMessages])
    

}

export default useListenMessage
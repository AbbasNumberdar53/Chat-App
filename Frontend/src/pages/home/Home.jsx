import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className=" flex p-6 rounded-lg shadow-md bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-40 sm:h-[450px] md:h-[550px] overflow-hidden gap-2">
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
}

export default Home;

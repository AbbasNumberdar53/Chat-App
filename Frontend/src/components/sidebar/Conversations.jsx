import useGetConverstions from "../../hooks/useGetConverstions";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConverstions();
  //console.log(conversations);
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={index === conversations.length - 1}
        />
      ))}

      {loading ? <span className=" loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;

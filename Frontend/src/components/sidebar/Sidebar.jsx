import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className=" divider divider-error px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

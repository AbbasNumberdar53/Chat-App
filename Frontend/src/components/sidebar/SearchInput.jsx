import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className=" flex gap-2 items-center">
        <input type="text" placeholder="Search..." className=" input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle text-white bg-red-400">
            <IoSearchSharp className="w-6 h-6 "/>
        </button>
    </form>
  )
}

export default SearchInput
import "../../App.css"
import { IoSearchOutline } from "react-icons/io5";
export const Search = () => {
    return(
        
     <div className="relative w-80">
  {/* Search Icon */}
  <IoSearchOutline className="absolute left-3 top-1/2 cursor-pointer -translate-y-1/2 text-gray-400" />
  
  {/* Input Box */}
  <input
    type="text"
    placeholder="Search here..."
    className="bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-md pl-10 pr-3 py-2 w-full h-9 outline-none"
  />
</div>




        
    )
}
import { useEffect } from "react"
import { FaRegUserCircle } from "react-icons/fa";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
export const DashboardBox =(props)=>{
    useEffect(()=>{
        console.log(props)
    },[])
    return (
       <div className="h-full flex-1 rounded-xl shadow-xl hover:shadow-2xl cursor-pointer relative" style={{
        backgroundImage:`linear-gradient(to right, ${props.color?.[0]},${props.color?.[1]}`}}>
            {
               props.grow == true ?
               <span className="">
               <TrendingUpIcon sx={{fontSize:200,opacity:0.1,position:"absolute"}}/>
               </span>:<span><TrendingDownIcon  sx={{ fontSize: 200 , opacity:0.1, position:"absolute"}}/></span>
            }
              <div className="flex justify-between">
                 <div className="flex h-full  flex-col justify-betweet mx-4 my-4">
                    <h1 className="text-2xl font-semibold text-white">Total User</h1>
                    <span className="text-2xl text-white font-extrabold">277</span>
                    <span className="text-2xl text-white font-bold">Last Month</span>
                 </div>
                 <div className="mx-4 my-4 ">
                    <div className="px-3 py-3 bg-black/10 rounded-xl">
                      {
                        props?.icon
                      }
                    </div>
                 </div>
              </div>
       </div>
    )
}
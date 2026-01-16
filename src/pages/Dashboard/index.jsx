import { DashboardBox } from "../../components/DashboardComponent/index";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FaPencilAlt } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import { MdDelete } from "react-icons/md";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export const Dashboard = () => {
  const [showBy, setShowBy] = useState("");
  const [categoryBy, setCategoryBy] = useState("");
  const [brandBy, setBrandBy] = useState("");

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  const options = {
    backgroundColor: "transparent",
    chartArea: { width: "90%", height: "70%" },
  };
  return (
    <div className=" h-full w-full">
      {/* {row dashbaord} */}
      <div className="flex w-full  px-2 py-2 gap-3 overflow-hidden">
        <div className="grid gap-4 grid-cols-2 grid-rows-2 relative h-[400px] w-5/6 ">
          <DashboardBox
            color={["#005b01", "#33ff35"]}
            icon={<MdOutlineShoppingBag size={20} opacity={0.5} />}
            grow={true}
          />
          <DashboardBox
            color={["#ffce0d", "#ffdc52"]}
            icon={<FaRegUserCircle size={20} opacity={0.5} />}
          />
          <DashboardBox
            color={["#7c00ff", "#c085ff"]}
            icon={<IoCartOutline size={20} opacity={0.5} />}
            grow={true}
          />
          <DashboardBox
            color={["#fd4400", "#ffb396"]}
            icon={<FaRegStar size={20} opacity={0.5} />}
          />
        </div>
        <div className="h-[400px] gap-3 flex flex-col text-white overflow-hidden w-1/3 rounded-xl shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-800">
          <div className="w-full flex justify-between px-4 pt-3 pb-1.5 ">
            <h1 className="text-2xl font-bold uppercase">Total Sales</h1>
            <h1>
              <HiDotsVertical size={30} />
            </h1>
          </div>
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-bold">$73,948,2.61</h3>
            <p className="text-xl font-bold">$73,948</p>
          </div>
          <div>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="100%"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
      {/* filter section area */}
      {/* filter section area */}
      <div className="mt-2 shadow-xl h-full bg-gray-50 w-full rounded-2xl px-2 py-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium uppercase">best selling product</h1>
          <span className="text-xl">
            <HiDotsVertical />
          </span>
        </div>
        <div className="flex gap-3">
          <div className="h-12 w-40">
            <h1 className="font-bold uppercase">Show By</h1>
            <Select
              className="h-10 w-full"
              value={showBy}
              onChange={(e) => setShowBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="h-12 w-40">
            <h1 className="font-bold uppercase">Category By</h1>
            <Select
              className="h-10 w-full"
              value={categoryBy}
              onChange={(e) => setCategoryBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="h-12 w-40">
            <h1 className="font-bold uppercase">Brand By</h1>
            <Select
              className="h-10 w-full"
              value={brandBy}
              onChange={(e) => setBrandBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
       <div className="my-6">
  <div className="overflow-x-auto rounded-lg">
    <table className="min-w-full border border-gray-300/30 text-sm text-left">
      
      {/* TABLE HEAD */}
      <thead className="bg-blue-700 text-white">
        <tr>
          <th className="px-4 py-2 border border-gray-300/30">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              <span>UID</span>
            </div>
          </th>
          <th className="px-4 py-2 border border-gray-300/30">PRODUCT</th>
          <th className="px-4 py-2 border border-gray-300/30">CATEGORY</th>
          <th className="px-4 py-2 border border-gray-300/30">BRAND</th>
          <th className="px-4 py-2 border border-gray-300/30">PRICE</th>
          <th className="px-4 py-2 border border-gray-300/30">STOCK</th>
          <th className="px-4 py-2 border border-gray-300/30">RATING</th>
          <th className="px-4 py-2 border border-gray-300/30">ORDER</th>
          <th className="px-4 py-2 border border-gray-300/30">SALES</th>
          <th className="px-4 py-2 border border-gray-300/30 text-center">ACTION</th>
        </tr>
      </thead>

      {/* TABLE BODY */}
      <tbody className="divide-y divide-gray-300/30">
        <tr className="hover:bg-gray-50 transition">
          <td className="px-4 py-2">#1</td>
          <td className="px-4 py-2">Tops And Skirts set for Female</td>
          <td className="px-4 py-2 capitalize">womans</td>
          <td className="px-4 py-2 capitalize">richman</td>
          <td className="px-4 py-2">$21.00</td>
          <td className="px-4 py-2">30</td>
          <td className="px-4 py-2">4.9 (19)</td>
          <td className="px-4 py-2">380</td>
          <td className="px-4 py-2">$38k</td>
          <td className="px-4 py-2">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <FaEye className="cursor-pointer hover:text-blue-600" />
              <FaPencilAlt className="cursor-pointer hover:text-green-600" />
              <MdDelete className="cursor-pointer hover:text-red-600" />
            </div>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</div>

         </div>
      {/* </div> */}
    </div>
  );
};

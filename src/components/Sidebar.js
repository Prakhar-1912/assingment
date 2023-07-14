import React,{useState,useEffect} from "react";
import { FiSettings } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { LuCalendarClock, LuPieChart } from "react-icons/lu";
import { BsTags,BsFillArrowLeftCircleFill } from "react-icons/bs";

const Sidebar = () => {
    
    const[open,setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setOpen(false);
          } else {
            setOpen(true);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
  return (
    <div>
      <div className={`${open?"w-72":"w-20"} h-full bg-black text-white duration-300 m-5 p-5 rounded-3xl`}>
      <div className="relative">
      <BsFillArrowLeftCircleFill className={` text-3xl rounded-full absolute -right-8 border border-black cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
      <p className={`${!open&&"scale-0"} text-4xl pl-4 font-semibold`}>Board.</p>
      
      </div>
        <div className="text-xl flex flex-col gap-60 pl-4">
          <ul>
            <div className="mt-16 flex-col flex-wrap space-y-8">
              <div className="">
                <LuPieChart className="text-2xl cursor-pointer block float-left mr-2" />
                <li className={`${!open&&"scale-0"}`}>Dashboard</li>
              </div>

              <div >
                <BsTags className="text-2xl cursor-pointer block float-left mr-2" />
                <li className={`${!open&&"scale-0"}`}>Transactions</li>
              </div>

              <div >
                <LuCalendarClock className="text-2xl cursor-pointer block float-left mr-2" />
                <li className={`${!open&&"scale-0"}`}>Schedules</li>
              </div>

              <div >
                <BiUserCircle className="text-2xl cursor-pointer block float-left mr-2" />
                <li className={`${!open&&"scale-0"}`}>Users</li>
              </div>

              <div >
                <FiSettings className="text-2xl cursor-pointer block float-left mr-2" />
                <li className={`${!open&&"scale-0"}`}> Settings</li>
              </div>
            </div>
          </ul>

          <ul>
            <div className="flex-col space-y-2">
              <li className={`${!open&&"scale-0"} text-lg`}>Help</li>
              <li className={`${!open&&"scale-0"} text-lg`}>Contact Us</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

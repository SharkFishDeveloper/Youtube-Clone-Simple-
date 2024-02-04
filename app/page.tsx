import Image from "next/image";
import { VideoCard } from "./components/VideoCard";
import VideoGrid from "./components/VideoGrid";
import { Appbar } from "./components/Appbar";
import SideBarContent from "./components/SideBarContent";



export default function Home() {
  return (
    <div >
      <Appbar/>
     <div className="grid grid-cols-12">
      <div className="col-span-4 md:col-span-1"><SideBarContent/></div>
      <div className="col-span-8 md:col-span-11">
      <VideoGrid />
      </div>
     </div>
    </div>
  );
}

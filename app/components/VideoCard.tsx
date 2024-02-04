import Image from "next/image"

interface props {
    title:string,
    author:string,
    views:string,
    timestamp:string,
    image:string,
    thumbImage:string
}

export function VideoCard(props:props){
    return <div className=" p-3 ">
    <Image src={props.image} alt="Thumbnail " height={400} width={400} className="rounded-xl cursor-pointer"/>

    <div className="grid grid-cols-12  py-2 gap-2">
    <div className="col-span-2 ">
    <Image src={props.thumbImage} alt="Thumbnail " height={100} width={130} className="rounded-full w-[3.5rem] h-[3.5rem]"/>
    </div>
   
    <div className="col-span-10">
        <div className="text-white font-semibold">
        {props.title}
        </div>
        <div className="col-span-11 text-gray-400 text-sm">
        {props.author}
    </div>
    <div className="col-span-11 text-gray-400 text-sm">
        {props.views} . {props.timestamp}
    </div>
    </div>

    
   


    </div>

   
    </div>
}
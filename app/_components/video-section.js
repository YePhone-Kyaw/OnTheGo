"use client";

export default function TypeOfVideos({type, src}) {
  return (
    <div className=" flex flex-col items-center space-y-2 h-72"> 
        <video
            className=" w-96 h-full object-cover" 
            controls
            muted
            src={src}
        />
      <p className="text-center text-sm font-semibold">{type}</p> 
    </div>
  );
}

export function SectorOfExperience({title, src}){
    return(
        <div className=" flex flex-col items-center space-y-2 h-72"> 
        <video
            className=" w-96 h-full object-cover" 
            controls
            muted
            src={src}
        />
      <p className="text-center text-sm font-semibold">{title}</p> 
    </div>
    )
}

export function ExamplesOfWork({title,description, src}){
    return(
        <div className=" flex flex-col items-center space-y-2 h-72">
            <video
            className=" w-96 h-full object-cover"
            controls
            muted
            src={src}
            />
            <p className="text-center text-sm font-semibold">{title}</p>
            <p className=" text-center text-sm">{description}</p>
        </div>
    )
}
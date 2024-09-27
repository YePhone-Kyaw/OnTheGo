"use client";

import { useState } from "react";

export default function TypeOfVideos({ title, src }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const controlExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col items-center space-y-2 h-72 ${
        isExpanded ? 'fixed inset-0 z-50 m-5' : 'relative'}`}>
      <video
        className={`object-cover cursor-pointer ${isExpanded ? 'w-4/5 h-auto' : 'w-96 h-full cursor-pointer'}`}
        controls
        muted
        onClick={controlExpand}
        src={src}
      />
      {!isExpanded && (
        <p className="text-center text-sm font-semibold">{title}</p>
      )}
    </div>
  );
}



export function ExamplesOfWork({title,description, src}){

  const [isExpanded, setIsExpanded] = useState(false)

  const controlExpand = () =>{
    setIsExpanded(!isExpanded)
  }

    return(
        <div className={`flex flex-col items-center space-y-2 h-72 cursor-pointer ${isExpanded ? 'fixed inset-0 z-50 m-5 cursor-pointer' : 'relative'}` }>
            <video
            className={`object-cover ${isExpanded ? 'w-4/5 h-auto' : 'w-96 h-full'}`}
            controls
            muted
            src={src}
            onClick={controlExpand}
            />
            {!isExpanded && (
          <p className="text-center text-sm font-semibold">{title}</p>
            )}
            {!isExpanded && (
               <p className=" text-center text-sm">{description}</p>
            )}
        </div>
    )
}
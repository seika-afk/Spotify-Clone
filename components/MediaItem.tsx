'use client'
import React from 'react';
import {Song} from "@/types";
import useLoadImage from '@/hooks/useLoadImage';
import Image from 'next/image';

interface MediaItemProps {
  data:Song,
  onClick?: (id:string) => void;

}

const MediaItem: React.FC<MediaItemProps> = ({ 
  data,
onClick 

}) => {
    const imageUrl = useLoadImage(data);
    const handleClick = () => {
if(onClick){
return onClick(data.id);

}
//Dfeault action if onClick is not provided


    } 
        return (
    
<div
  onClick={handleClick}
  className="
    flex
    items-center
    w-full
    p-2
    cursor-pointer
    rounded-md
    hover:bg-neutral-800/50
  "
>
  <div
    className="
      relative
      rounded-md
      h-12
      w-12
      overflow-hidden
      flex-shrink-0
    "
  >
    <Image
      fill
      src={imageUrl || '/images/liked.png'}
      alt="Media Item"
      className="object-cover"
    />
  </div>

  <div
    className="
      flex
      flex-col
      gap-y-1
      ml-3
      overflow-hidden
    "
  >
    <p className="text-white truncate">{data.title}</p>
    <p className="text-neutral-400 text-sm truncate">{data.author}</p>
  </div>
</div>



        );
};

export default MediaItem;

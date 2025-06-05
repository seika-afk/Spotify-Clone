"use client";

import {Song} from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface PlayerContentProps {
  song: Song;
  songUrl:string;
}


const PlayerContent: React.FC<PlayerContentProps> =(
{song,
songUrl    }
)=>{


return (


<div
className="
grid
grid-cols
md:grid-cols-3
h-full
"
>


    <div
className="
flex
w-full
justify-start
">
<div
className="
flex
items-center
gap-x-4
"
>
    <MediaItem
    data={song}
    />
<LikeButton songId={song.id}/>

</div>


<div
className="
flex
md:hidden
col-auto
w-full
items-center
justify-end
"
>

<div

onClick={()=>{}}
className="
h-10
w-10
flex
items-center
justify-center
rounded-full
bg-white
cursor-pointer
p-1
"

></div>


</div>



</div>


</div>



);




}

export default PlayerContent
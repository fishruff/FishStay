'use client';
import Image from "next/image";

const Avatar = () => {
    return ( 
        <div>
            <Image 
            className=" rounded-full"
            alt="Avatar"
            width='30'
            height='30'
            src='/images/placeholder.jpeg'
            />
        </div>
     );
}
 
export default Avatar;
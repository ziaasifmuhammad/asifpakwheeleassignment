

import Image from "next/image";
import React from "react";
 
const Body  = () => {
    return(
<div className="  flex divide-y-3 text-center  py-6 w-3/12 whitespace-normal space-x-4 ">
<div className=" h-30 w-30 pl-40  w-50 space-x-40">

    <Image src="/bike.jpg" width={300} height={300} alt="logo bike  "
    >
        </Image>
    
    <h1 className="text-balance justify-center align-bottom">Honda bike</h1><br />
    <h2 className="text-center items-center font-normal py-2 px-3">PKR 430,000</h2>
    </div>

    <div className=" h-30 w-30 pl-40  w-50 space-x-40">
    
    <Image src="/new car.png" width={300} height={300} alt= "logo car w-25 h-30" 
    >
    </Image>
    <h1 className="text-center items-center font-normal ">Toyota Corolla</h1>
    <h2 className="text-center items-center font-normal py-5 px-3">PKR 6,500,000</h2>
    </div>
    <div className=" h-30 w-30 pl-40  w-50 space-x-40">
    <Image src="/Honda bike.png" width={150} height={150} alt= "logo bike w-25 h-30"
    >
    </Image>
    <h1 className=" items-center font-normal text-left">Honda Prider</h1>
    <p className="text-center items-center font-normal py-2 px-3">PKR 230,000 </p>
    </div>
</div>
    )
}
export default Body


import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="justify-center items-center text-center">
            <Image src="/bike.jpg"  width ={600} height={500} alt="car" className="h-68 w-50 text-center items-center px-30 "></Image>
            <h1 className="text-center items-center font-normal py-4 px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut amet vel atque nemo ex doloremque placeat provident! Eveniet doloribus assumenda quis minus, nostrum fugiat velit saepe delectus consectetur atque distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestias nostrum nihil maxime vel sequi harum iure, error impedit ratione aliquam ad! Cum sint alias adipisci! Corporis vitae aperiam cum.
            </h1>
            <p className="text-center items-center font-normal py-4 px-5">PKR 350,000</p>
            <button className=" justify-center text-center items-center font-normal
             h-20 w-30 rounded-3xl bg-slate-500 text-white  py-4 px-6 hover:bg-red-400">Make Payment</button>
        </div>
    )
}

export default page
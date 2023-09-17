import { CloudArrowUpIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/24/solid";

import React from "react";
import { Images } from "../Images";

export const Hero = () => {
    return (
        <div className="w-full h-screen bg-gray-200 flex flex-col justify-between ">
            <div className="grid md:grid-cols-2 m-auto p-3 max-w-[1200px]">
                <div className="xl:mt-10">
                    <p className="text-xl">Unique Sequencing & Production</p>
                    <h1 className="text-5xl my-4 font-bold">Cloud Management</h1>
                    <p className="text-2xl ">This is our Tech brand.</p>
                    <button className="py-2 md:w-[60%] my-5  px-5 md:py-3 md:text-xl ">Get Started</button>
                </div>
                <div>
                    <img className="w-full" src={Images.home} />
                </div>
                <div className="sm:flex flex-col flex-wrap items-center 
                py-2 bg-zinc-100 drop-shadow-sm rounded-xl 
                absolute bottom-[2%] text-center place-self-center mx-2 hidden
                ">
                    <p className="text-black">Data Services</p>
                    <div className="flex flex-wrap mt-2 mx-3" >
                        <p className="flex mx-5 items-center text-slate-700">
                            <CloudArrowUpIcon className="h-6 m-2 text-indigo-600" /> App Security
                        </p>
                        <p className="flex mx-5 items-center text-slate-700">
                            <ServerIcon className="h-6 m-2 text-indigo-600 " /> Dashboard Design
                        </p>
                        <p className="flex mx-5 items-center text-slate-700">
                            <ServerIcon className="h-6 m-2 text-indigo-600" />
                            Cloud Data
                        </p>
                        <p className="flex mx-5 items-center text-slate-700">
                            <PaperAirplaneIcon className="h-6 m-2 text-indigo-600" />
                            API
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

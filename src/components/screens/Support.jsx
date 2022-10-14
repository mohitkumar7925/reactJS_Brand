import { ArrowRightIcon, ArrowSmallRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Images } from "../Images";

export const Support = () => {
    return (
        <div className="w-full">
            <div className="w-full h-[400px]  absolute bg-gray-900/80">
                <img src={Images.support} className="object-cover w-full h-full mix-blend-overlay  " />
            </div>
            <div className="text-white relative mx-auto pt-5 max-w-[1200px]">
                <div className="px-5 py-5 text-center">
                    <p className="text-5xl">Support</p>
                    <p className="text-xl py-3">Finding the right team</p>
                    <p className="text-slate-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate quas dicta explicabo est, aperiam corrupti numquam
                        dolor architecto molestiae voluptatem vitae. Voluptatum, dolorum reiciendis minima similique odit ipsum consectetur?
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    
                    
                    <div className="bg-white mx-10 rounded-xl shadow-xl my-8">
                        <div className="p-4">
                            <PhoneIcon className="text-white h-12 p-2 bg-indigo-800 rounded-xl mt-[-2.5rem]" />
                            <p className="text-black text-xl font-bold my-4">Sales</p>
                            <p className="text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis ab id delectus accusantium. Consequuntur
                                provident fuga dolorem voluptatum est tempore soluta, fugit ea aliquid similique sunt. Et, minima non?
                            </p>
                        </div>
                        <div className="bg-slate-100 text-indigo-800 px-6 py-2 rounded-b-xl">
                            <p className="font-bold flex items-center gap-4">
                                Contact Us <ArrowSmallRightIcon className="h-6 " />
                            </p>
                        </div>
                    </div>
                    <div className="bg-white mx-10 rounded-xl shadow-xl my-8">
                        <div className="p-4">
                            <PhoneIcon className="text-white h-12 p-2 bg-indigo-800 rounded-xl mt-[-2.5rem]" />
                            <p className="text-black text-xl font-bold my-4">Sales</p>
                            <p className="text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis ab id delectus accusantium. Consequuntur
                                provident fuga dolorem voluptatum est tempore soluta, fugit ea aliquid similique sunt. Et, minima non?
                            </p>
                        </div>
                        <div className="bg-slate-100 text-indigo-800 px-6 py-2 rounded-b-xl">
                            <p className="font-bold flex items-center gap-4">
                                Contact Us <ArrowSmallRightIcon className="h-6 " />
                            </p>
                        </div>
                    </div>
                    <div className="bg-white mx-10 rounded-xl shadow-xl my-8">
                        <div className="p-4">
                            <PhoneIcon className="text-white h-12 p-2 bg-indigo-800 rounded-xl mt-[-2.5rem]" />
                            <p className="text-black text-xl font-bold my-4">Sales</p>
                            <p className="text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis ab id delectus accusantium. Consequuntur
                                provident fuga dolorem voluptatum est tempore soluta, fugit ea aliquid similique sunt. Et, minima non?
                            </p>
                        </div>
                        <div className="bg-slate-100 text-indigo-800 px-6 py-2 rounded-b-xl">
                            <p className="font-bold flex items-center gap-4">
                                Contact Us <ArrowSmallRightIcon className="h-6 " />
                            </p>
                        </div>
                    </div>
                    


                </div>
               
            </div>
        </div>
    );
};

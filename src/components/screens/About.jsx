import React from "react";

export const About = () => {
    return (
        <div className="w-full py-10 px-4 items-center relative ">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center">
                    <p className="text-4xl font-bold ">Trusted by Developers across the world</p>
                    <p className=" my-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae libero praesentium eaque animi esse itaque tenetur
                        rerum ipsum id iure iste alias in, recusandae porro excepturi voluptates. Amet, aliquam.
                    </p>
                </div>
                <div className=" grid grid-cols-3   gap-2 mx-auto  text-center  mt-10">
                    <div className="shadow-xl px-4 py-2 rounded-xl max-w-[400px]">
                        <p className="text-indigo-600 text-5xl font-bold">100%</p>
                        <p>Completions</p>
                    </div>
                    <div className="shadow-xl px-4 py-2 rounded-xl max-w-[400px]">
                        <p className="text-indigo-600 text-5xl font-bold">24/7</p>
                        <p>Delivery</p>
                    </div>
                    <div className="shadow-xl px-4 py-2 rounded-xl max-w-[400px]">
                        <p className="text-indigo-600 text-5xl font-bold">100K</p>
                        <p>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

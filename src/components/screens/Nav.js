import React, { useState } from "react";

export const Nav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="container mx-auto w-full p-5  flex justify-between text-white font-mono  ">
            <div className="text-lg">Dashboard</div>
            <div className="hidden sm:flex">
                {["Home", "Features", "Token", "Collections", "Connect wallet"].map((item) => {
                    return <div className="pr-4">{item}</div>;
                })}
            </div>
            <div className="sm:hidden">
                <div
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    Menu
                </div>
                <div className={`sm:hidden ${toggle ? "" : "hidden"} absolute top-2 right-1 bg-black rounded-lg`}>
                    {["Home", "Features", "Token", "Collections", "Connect wallet"].map((item) => {
                        return (
                            <div onClick={() => setToggle(false)} className="p-4">
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Vite + TailwindCSS + DaisyUI Template</Link>
            </div>
            <div className="flex-none">

                <Link to="/about">
                    <button className="btn btn-square btn-ghost mr-2">
                        About
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Navbar;

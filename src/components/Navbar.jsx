import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Joiners</Link>
            </div>
            <div className="flex-none">

                <Link to="/register">
                    <button className="btn btn-square btn-ghost mr-2">
                        Register
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Navbar;

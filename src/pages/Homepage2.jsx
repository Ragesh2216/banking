import React from "react";
import { Link } from "react-router-dom";
import Latest from "../pages/Latest";
import ExploreServices from "../components/ExploreServices";

const Homepage2 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Remove pt-16 from here since ExploreServices already has it */}
            <ExploreServices />
            
            <Latest />
        </div>
    );
};

export default Homepage2;
import React from "react";

const Button = ({ classname, value, onClick }) => {
    return (
        <button
            className={`${classname} rounded-xl cursor-pointer text-2xl font-bold bg-slate-700`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;

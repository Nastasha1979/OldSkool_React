import React from "react";


export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-white" />
            <p style={{fontSize: "30px"}}>Loading</p>
        </div>
    );
};
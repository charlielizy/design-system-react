import React from 'react';
export const CardTest = ({ data, }) => {
    return (React.createElement("div", { className: "tileBox" },
        React.createElement("ul", { className: "tileTable" }, data.map((item) => {
            return (
            // <Link key={index} to={item.tileRouter}>
            React.createElement("li", { key: item.id, className: "homeTileCell", id: "homeTileCell_pageName" },
                React.createElement("div", { className: "homeTileHeader" },
                    React.createElement("p", { className: "homeTileTitle" }),
                    React.createElement("p", { className: "homeTileImage" },
                        React.createElement("img", { src: item.tileImage, alt: "" })),
                    React.createElement("p", { className: "homeTileDescription" })),
                React.createElement("p", { className: "homeTileViewReport" }, item.viewReport))
            // </Link>
            );
        }))));
};
//# sourceMappingURL=CardTest.js.map
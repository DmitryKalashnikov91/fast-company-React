import React from "react";

const SearchStatus = ({length}) => {
    //console.log(length)
    const renderPhrase = (length) => {
            const lastOne = Number(length.toString().slice(-1));
            //console.log(lastOne)
            if (length > 4 && length < 15) return "человек тусанет";
            if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
            if (lastOne === 1) return "человек тусанет";
            return "человек тусанет";
        };  
return (
    <>
    <h2>
        <span
            className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
        >
            {length > 0
            ? `${length + " " + renderPhrase(length)} с тобой сегодня`
            : "Никто с тобой не тусанет"}
        </span>
    </h2>
</>
)}



export default SearchStatus;
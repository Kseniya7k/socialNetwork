import React from "react";
import s from "./paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, page, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '...', pagesCount];

    return (
        <div>
            {pages.map(p =>
                <span className={page === p && s.selectedPage} onClick={e => { onPageChanged(p) }}>
                    {p}
                </span>
            )}
        </div>

    )
}

export default Paginator;
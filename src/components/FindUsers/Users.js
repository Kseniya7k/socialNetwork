import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, page, onPageChanged, users, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <Paginator page={page}
                       onPageChanged={onPageChanged}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount} />
            <div>
                {
                    users.map(usr => <User key={usr.id}
                                        user={usr}
                                        followingInProgress={followingInProgress}
                                        unfollow={unfollow}
                                        follow={follow} />
                    )
                }
            </div>

        </div>
    );
}

export default Users;
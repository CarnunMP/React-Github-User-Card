import React from "react";
import FollowerCard from "./FollowerCard";

export default class FollowerCards extends React.Component {
    render() {
        const followers = this.props.followers;

        return(
            <div className="follower-cards">
                {followers !== null && followers.map(follower => (
                    <FollowerCard follower={follower} key={follower.id}/>
                ))}
            </div>
        )
    }
}
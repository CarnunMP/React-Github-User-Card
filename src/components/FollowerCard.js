import React from "react";

export default class FollowerCard extends React.Component {
    render() {
        const follower = this.props.follower;
        
        return (
            <div className="card follower">
                <a href={follower.html_url}>
                    <div className="avatar-div">
                        <img src={follower.avatar_url} alt="" />
                    </div>
                    <div className="text-div">
                        <h4>{follower.login}</h4>
                    </div>
                </a>
            </div>
        )
    }
}
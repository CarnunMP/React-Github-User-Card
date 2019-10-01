import React from "react";

export default class UserCard extends React.Component {
    render() {
        const { name, username, avatarURL, location, bio, followers, following, profileURL } = this.props;
        return (
            <div className="user-card">
                <div className="avatar-div">
                    <img src={avatarURL} />
                </div>
            </div>
        )
    }
}
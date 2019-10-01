import React from "react";

export default class UserCard extends React.Component {
    render() {
        const { name, username, avatarURL, location, bio, followers, following, profileURL } = this.props;
        return (
            <div className="card user">
                <div className="avatar-div">
                    <img src={avatarURL} />
                </div>
                <div className="text-div">
                    <h2>{name}</h2>
                    <h3>{username}</h3>
                    <h4>{location}</h4>
                    <p>{bio}</p>
                    <span>Followers: {followers}</span>
                    <span>Following: {following}</span>
                    <p>Profile: {profileURL}</p>
                </div>
            </div>
        )
    }
}

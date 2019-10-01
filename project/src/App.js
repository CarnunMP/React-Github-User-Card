import React from 'react';
import './App.css';

import axios from "axios";
import UserCard from './components/UserCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: null,
        username: null,
        avatarURL: null,
        location: null,
        bio: null,
        followers: null,
        following: null,
        profileURL: null,
      }
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/carnunmp")
      .then(res => {
        const user = res.data;
        this.setState({
          user: {
            name: user.name,
            username: user.login,
            avatarURL: user.avatar_url,
            location: user.location,
            bio: user.bio,
            followers: user.followers,
            following: user.following,
            profileURL: user.url,
          }
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>
            GEThub USER Pages
          </h1>
        </div>
        <UserCard 
          name={this.state.name}
          username={this.state.username}
          avatarURL={this.state.avatarURL}
          location={this.state.location}
          bio={this.state.bio}
          followers={this.state.followers}
          following={this.state.following}
          profileURL={this.state.profileURL}
        />
      </div>
    );
  }
}

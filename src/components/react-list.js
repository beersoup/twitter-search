import React, { Component } from 'react';



export default class ReactResult extends Component {

    render() {
        console.log('Screen name', this.props.status.user.screen_name)
        const screenName = this.props.status.user.screen_name
        const userImage = `https://twitter.com/${screenName}/profile_image?size=bigger`
        const userName = this.props.status.user.name
        return (
            <div className="reactList">
                <img className="reactList__img" src={userImage} />
                <span>{userName}</span>
            </div>
        );
    }
}

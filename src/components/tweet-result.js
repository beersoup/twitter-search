import React from 'react';


const TweetResult = (props) => {

    const screenName = props.status.user.screen_name
    const userImage = `https://twitter.com/${screenName}/profile_image?size=bigger`
    const userName = props.status.user.name
    const text = props.status.text

    return (
        <div className="reactList tweetContain">
            <div className="app__tweetHeader">
                <img className="app__tweetAvatar" src={userImage}/>
                <span className="app__tweetName"><strong>{userName}&nbsp;</strong></span>
                <span className="app__tweetScreenName">{screenName}</span>
            </div>
            <div>
                <span className="app__tweetText">{text}</span>
            </div>
        </div>
    );

}

export default TweetResult;
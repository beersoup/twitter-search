import React from 'react'
import SearchTemplate from './search-template'


const NodeResult = () => {

    return (
        <div className="nodeResult container">
            <SearchTemplate socketOnTweet="tweetNode"
                            socketOnStream="streamNode"
                            removeListenerTweet="tweetNode"
                            removeListenerStream="streamNode"
                            title="NODE"
                            subTitle="NODE"/>
        </div>
    );

}

export default NodeResult;
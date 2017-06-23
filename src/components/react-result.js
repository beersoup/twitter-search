import React from 'react'
import SearchTemplate from './search-template'


const ReactResult = () => {

    return (
        <div className="reactResult container">
            <SearchTemplate socketOnTweet="tweetReact"
                            socketOnStream="streamReact"
                            removeListenerTweet="tweetReact"
                            removeListenerStream="streamReact"
                            title="REACT"
                            subTitle="REACT"/>
        </div>
    );

}

export default ReactResult;

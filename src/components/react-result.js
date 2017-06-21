import React, {Component} from 'react'
import SearchTemplate from './search-template'



export default class ReactResult extends Component {

    render() {

        return (
            <div className="reactResult container">
                <SearchTemplate socketOnTweet="tweetReact"
                                socketOnStream="streamReact"
                                removeListenerTweet="tweetReact"
                                removeListenerStream="streamReact"
                                title="REACT"
                                subTitle="REACT" />
            </div>
        );
    }
}

import React, {Component} from 'react'
import SearchTemplate from './search-template'



export default class NodeResult extends Component {

    render() {

        return (
            <div className="nodeResult container">
                <SearchTemplate socketOnTweet="tweetNode"
                                socketOnStream="streamNode"
                                removeListenerTweet="tweetNode"
                                removeListenerStream="streamNode"
                                title="NODE"
                                subTitle="NODE" />
            </div>
        );
    }
}

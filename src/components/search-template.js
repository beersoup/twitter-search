import React, {Component} from 'react'
import TweetResult from './tweet-result'
import io from 'socket.io-client'



export default class SearchTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweetsData: [],
            streamData: [],
            updateButtonClicked: false,
            showUpdateTweetButton: false
        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleShowUpdateButton = this.handleShowUpdateButton.bind(this);
    }

    componentDidMount() {
        this.socket = io.connect('http://localhost:8080');
        this.socket.on(this.props.socketOnTweet, data => {
            this.setState({tweetsData: data.statuses})
        });
        this.socket.on(this.props.socketOnStream, data => {
            this.state.streamData.push(data)
            this.setState({streamData: this.state.streamData})
        });
        this.timer = setTimeout(this.handleShowUpdateButton, 5000)
    }

    componentWillUnmount() {
        this.socket.removeAllListeners(this.props.removeListenerTweet)
        this.socket.removeAllListeners(this.props.removeListenerStream)
        clearTimeout(this.timer)
    }

    handleUpdateClick() {
        this.state.tweetsData.unshift(...this.state.streamData.reverse())
        this.setState({tweetsData: this.state.tweetsData, streamData: []})
    }

    handleShowUpdateButton() {
        this.setState({showUpdateTweetButton: true})
    }

    render() {

        return (
            <div className="contain">
                <h1 className="app__title">{this.props.title}</h1>
                <p className="app__description">Tweets for <strong>"{this.props.subTitle}"</strong> search query</p>

                {this.state.streamData.length > 0 && this.state.showUpdateTweetButton ?
                    <div className="app__updateButton" onClick={this.handleUpdateClick}>
                        <span className="app__updateText">Get {this.state.streamData.length} new results</span>
                    </div> : null}

                {this.state.tweetsData.length !== 0 ?
                    <div className="add__allTweetCard">
                        {this.state.tweetsData.map((status, i) => {
                            return <div className="app__tweetCard" key={i}><TweetResult status={status}/></div>
                        })}
                    </div> :
                    <div className="app__loading">
                        <img className="app__loadingImg" src="../../style/img/progress.gif"/>
                    </div> }
            </div>
        );
    }
}

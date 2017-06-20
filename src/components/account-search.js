import React, {Component} from 'react'
import TweetResult from './tweet-result'
import io from 'socket.io-client'

export default class AccountSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweetsData: '',
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.socket = io.connect('http://localhost:8080');
        this.socket.on('updateUserSearch', data => {
            this.setState({tweetsData: data})
        });
    }

    componentWillUnmount() {
        this.socket.removeAllListeners('updateUserSearch')
    }

    handleSubmit(event) {
        if(this.state.inputValue !== "" || event.key == 'Enter') {
            this.socket.emit('userSearch', this.state.inputValue)
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value.trim()})
    }

    render() {
        return (
            <div className="accountSearch container">
                <h1 className="app__title">Search latest tweets</h1>
                <p className="app__description">Please enter a Twitter account name</p>
                <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Twitter Account Name"
                               onChange={this.handleChange}
                               value={this.state.inputValue}
                               onKeyPress={this.handleSubmit}/>
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>
                                <span>Update Tweets</span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="add__allTweetCard">
                {this.state.tweetsData.length > 0 && this.state.inputValue !== "" ?
                    this.state.tweetsData.map((status, i) => {
                        if(this.state.inputValue.toLowerCase() === status.user.screen_name.toLowerCase()) {
                            return <div className="app__tweetCard" key={i}><TweetResult status={status}/></div>
                        }
                    })
                 : ''}
                 </div>
            </div>

        );
    }
}

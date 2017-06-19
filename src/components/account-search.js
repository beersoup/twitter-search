import React, {Component} from 'react'
import ReactList from './react-list'
import io from 'socket.io-client'

export default class AccountSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweetsData: [],
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
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

    handleClickButton() {
        this.socket.emit('userSearch', this.state.inputValue)

    }

    handleChange(event) {
        this.setState({inputValue: event.target.value})
    }

    render() {
        return (
            <div className="accountSearch container">
                <h1 className="app__title">Search latest tweets</h1>
                <p className="app__description">Please enter a Twitter account name</p>
                <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Type Twitter Account Name"
                               onChange={this.handleChange}/>
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit" onClick={this.handleClickButton}>
                                <span>Update Tweets</span>
                            </button>
                        </span>
                    </div>
                </div>
                {this.state.tweetsData.length > 0 ?
                    <div className="add__allTweetCard">
                        {this.state.tweetsData.map((status, i) => {
                            return <div className="app__tweetCard" key={i}><ReactList status={status}/></div>
                        })}
                    </div> : ''}
            </div>

        );
    }
}

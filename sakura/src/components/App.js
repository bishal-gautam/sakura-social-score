import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import LandingPage from './LandingPage';
import RiskDetails from './RiskDetails';
import history from '../history';

const BASE_API_URL = 'http://localhost:8080'
const API_URL = `${BASE_API_URL}/searchTweets`

class App extends React.Component {

    state = {
        tweets: [],
        dateAndScore: [],
        averageScore: 0
    }

    onTermSubmit = async (term) => {
        this.setState({ tweets: [] });
        console.log("our term: ", term);
        axios.get(`${API_URL}?companyName=${term}`)
        .then(res => {
            console.log(res.data);
            this.setState({ tweets: res.data });
            this.calculateAverage(this.state.tweets.tweetsInfo)
            this.calculateTime(this.state.tweets.tweetsInfo)
     })
     history.push("/results")
    };

    calculateAverage = (tweets) => {
        console.log("log", tweets)
        if (!tweets) {
            return
        }
        let sum = 0;
        tweets.map(tweet =>
            sum += tweet.sentimentScore
        );

        let average = sum / tweets.length
        let number = average.toString().slice(0, 4)


        this.setState({
            averageScore: number
        })

    }

    calculateTime = (tweets) => {

        let dataArr = []
        for (let i = 0; i < tweets.length; i++) {
            let arrTweet = [i, tweets[i].sentimentScore]
            dataArr.push(arrTweet)
        }

        dataArr.unshift(['x', 'Risk Score'])

        console.log("array", dataArr);
        this.setState({
            dateAndScore: dataArr
        })
    }



    render() {
        return (
            <div className="main-div">
                <Router history={history}>
                    <div>
                        <SearchBar
                            onFormSubmit={this.onTermSubmit}
                        />
                        <Switch>
                            <Route path="/" exact component={LandingPage}
                            />
                            <Route
                                path="/results" exact
                                render={(props) => <SearchResult {...props} tweets={this.state.tweets} dateAndScore={this.state.dateAndScore} averageScore={this.state.averageScore}
                                 />}
                            />
                            <Route
                                path="/about" exact
                                component={RiskDetails}
                            />
                        </Switch>
                    </div>
                </Router>
                <div class="ocean">
                  <div class="wave"></div>
                  <div class="wave"></div>
                </div>
            </div>
        )
    }
}

export default App;

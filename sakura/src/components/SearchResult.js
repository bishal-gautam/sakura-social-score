import React from 'react';
import Loader from 'react-loader-spinner';

import TimeChart from './TimeChart';

class SearchResult extends React.Component {

    render() {
    console.log("Our props in results:", this.props);

    if (this.props.tweets.length == 0) {
        return  (
            <div className="loader-div">
            <h2> Analysing...</h2>
            <Loader
                 type="Puff"
                 color="rgb(128,193,194)"
                 height="100"
                 width="100"
              />
              </div>
          )
    }

    return (
        <div className="result-main-div">
            <div className="results-div">
                <div className="score-div">
                    <h2>Your score is:</h2>
                    <div className="number-div">
                        <p>{this.props.averageScore}</p>
                    </div>
                </div>
                <TimeChart tweets={this.props.dateAndScore} />
                <div className="best-tweet-div">
                    <div className="first-tweet">
                        <h2>Tweet with highest score {this.props.tweets.goodTweetScore}:
                        </h2>
                        <div className="speech-bubble">
                        <p>{this.props.tweets.goodTweet}</p>
                        </div>
                        </div>
                        <div className="second-tweet">
                        <h2>Tweet with lowest score {this.props.tweets.badTweetScore}:
                        </h2>
                        <div className=" speech-bubble">
                            <p>{this.props.tweets.badTweet}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="subscribe-div">
                    <h2> Subscribe to be notified in your score change: </h2>
                    <input  placeholder="Email" className="subscription-input"/>
                    <button>Subscribe</button>
            </div>
        </div>
    )
    }
}

export default SearchResult;

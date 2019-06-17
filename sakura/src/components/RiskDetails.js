import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const RiskDetails = () => {
    return (
        <div className="risk-div">
            <div className="text-description-div">
                <p> The Social Media Water Reputation Risk Tool measures company water reputation risks using Tweets on issues.
                </p>
                <p> We help companies manage the reputational risks associated with water</p>
                <p> Starting with Twitter (more to follow), the Social Media Water Reputation Risk Tool measures company water reputation risks using Tweets on issues. </p>

                <p> Companies can get a water risk reputation score and can take remedial actions based on the score. </p>

                <p> Companies can subscribe to topics and receive notifications on risk issues. </p>
            </div>
            <div className="feed-description-div">
            <h2> Project supported by WWF</h2>
            <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'WWF'
                }}
                options={{
                  username: 'WWF',
                  height: '400'
                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />
            </div>
        </div>
    );
}

export default RiskDetails;

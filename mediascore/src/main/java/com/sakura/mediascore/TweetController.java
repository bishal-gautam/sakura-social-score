package com.sakura.mediascore;

import com.sakura.models.NLPResult;
import com.sakura.models.tweetModel;
import com.sakura.models.tweetsSearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import twitter4j.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class TweetController {
    @Autowired
    NLPController nlpController;

    @RequestMapping("/searchTweets")
    public tweetsSearchResult searchTweets(@RequestParam(value = "companyName") String companyName) {
        tweetsSearchResult result =  new tweetsSearchResult();
        try {
            Twitter twitter = TwitterFactory.getSingleton();
            Query query = new Query(companyName +" water").count(10);
            QueryResult searchResults = twitter.search(query);
            List<tweetModel> tweetModelList = new ArrayList<>();
            String goodTweet = null;
            String badTweet = null;
            float goodScore = (float)-2000.0;
            float badScore = (float) 2000.0;
            for (Status status : searchResults.getTweets()) {
                tweetModel tweetData = new tweetModel();
                NLPResult nlpResult = nlpController.nlp(status.getText());
                if (nlpResult != null) {
                    float sentimentScore = nlpResult.getScore();
                    tweetData.setCreatedOn(status.getCreatedAt());
                    tweetData.setTweetPost(status.getText());
                    tweetData.setSentimentScore(sentimentScore);
                    tweetModelList.add(tweetData);
                    float score = sentimentScore;
                    if (score > goodScore) {
                        goodScore = score;
                        goodTweet = status.getText();
                    }
                    if (score < badScore) {
                        badScore = score;
                        badTweet = status.getText();
                    }
                }
            }
            result.setTweetsInfo(tweetModelList);
            result.setBadTweet(badTweet);
            result.setBadTweetScore(badScore);
            result.setGoodTweet(goodTweet);
            result.setGoodTweetScore(goodScore);
        } catch (TwitterException e) {
            e.printStackTrace();
        }
        return result;
    }
}

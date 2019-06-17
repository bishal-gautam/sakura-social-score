package com.sakura.models;

import java.util.Date;

public class tweetModel {
    String tweetPost;
    Date createdOn;
    float sentimentScore;
    String tweetId;

    public String getTweetId() {
        return tweetId;
    }

    public void setTweetId(String tweetId) {
        this.tweetId = tweetId;
    }

    public String getTweetPost() {
        return tweetPost;
    }

    public void setTweetPost(String tweetPost) {
        this.tweetPost = tweetPost;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public float getSentimentScore() {
        return sentimentScore;
    }

    public void setSentimentScore(float sentimentScore) {
        this.sentimentScore = sentimentScore;
    }
}

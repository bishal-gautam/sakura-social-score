package com.sakura.models;

import java.util.List;

public class tweetsSearchResult {
    List<tweetModel> tweetsInfo;
    String goodTweet;
    float goodTweetScore;
    String badTweet;
    float badTweetScore;
    String goodTweetId;

    public String getGoodTweetId() {
        return goodTweetId;
    }

    public void setGoodTweetId(String goodTweetId) {
        this.goodTweetId = goodTweetId;
    }

    public String getBadTweetId() {
        return badTweetId;
    }

    public void setBadTweetId(String badTweetId) {
        this.badTweetId = badTweetId;
    }

    String badTweetId;

    public List<tweetModel> getTweetsInfo() {
        return tweetsInfo;
    }

    public void setTweetsInfo(List<tweetModel> tweetsInfo) {
        this.tweetsInfo = tweetsInfo;
    }

    public String getGoodTweet() {
        return goodTweet;
    }

    public void setGoodTweet(String goodTweet) {
        this.goodTweet = goodTweet;
    }

    public float getGoodTweetScore() {
        return goodTweetScore;
    }

    public void setGoodTweetScore(float goodTweetScore) {
        this.goodTweetScore = goodTweetScore;
    }

    public String getBadTweet() {
        return badTweet;
    }

    public void setBadTweet(String badTweet) {
        this.badTweet = badTweet;
    }

    public float getBadTweetScore() {
        return badTweetScore;
    }

    public void setBadTweetScore(float badTweetScore) {
        this.badTweetScore = badTweetScore;
    }
}

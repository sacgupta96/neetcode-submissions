class Twitter {
    constructor() {
        this.time = 0;
        this.users = new Map(); // userId -> { tweets: [[time, tweetId]], follows: Set }
    }

    getUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                tweets: [],
                follows: new Set([userId]) // follow self
            });
        }
        return this.users.get(userId);
    }

    postTweet(userId, tweetId) {
        const user = this.getUser(userId);
        user.tweets.push([this.time++, tweetId]);
    }

    getNewsFeed(userId) {
        const user = this.getUser(userId);
        let res = []
        for(let follower of user.follows) {
            const followerUser = this.getUser(follower);
            res= [...res ,...followerUser.tweets]
        }

        res.sort((a , b) => b[0] - a[0])

        return res.slice(0 , 10).map((a) => a[1])
    }

    follow(followerId, followeeId) {
        const follower = this.getUser(followerId);
        this.getUser(followeeId);
        follower.follows.add(followeeId);
    }

    unfollow(followerId, followeeId) {
        const follower = this.getUser(followerId);
        if (followeeId !== followerId) {
            follower.follows.delete(followeeId);
        }
    }
}
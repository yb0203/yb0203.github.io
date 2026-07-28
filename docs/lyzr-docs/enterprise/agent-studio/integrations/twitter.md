> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Twitter

Twitter integration for posting tweets, managing lists, reading timelines, handling direct messages, searching the tweet archive, and interacting with users and spaces on the platform.

## Setup

1. In Agent Studio, go to **Tools** → **Twitter** → **Connect**
2. Sign in with your Twitter account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                                       | Description                                                                                               |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `TWITTER_ADD_A_LIST_MEMBER`                                  | Adds a user to a specified Twitter list owned by the authenticated user.                                  |
| `TWITTER_ADD_POST_TO_BOOKMARKS`                              | Bookmarks an existing, accessible tweet for the authenticated user.                                       |
| `TWITTER_BOOKMARKS_BY_USER`                                  | Retrieves all tweets bookmarked by the authenticated user.                                                |
| `TWITTER_CREATE_A_NEW_DM_CONVERSATION`                       | Creates a new group direct message conversation with specified participants and an initial message.       |
| `TWITTER_CREATE_COMPLIANCE_JOB_REQUEST`                      | Creates a compliance job to check the status of tweet or user IDs in bulk.                                |
| `TWITTER_CREATE_LIST`                                        | Creates a new, empty Twitter list with a unique name for the authenticated user.                          |
| `TWITTER_CREATION_OF_A_POST`                                 | Creates a tweet, optionally including text, media, polls, quotes, or replies.                             |
| `TWITTER_DELETE_DM`                                          | Permanently deletes a specific direct message event sent by the authenticated user.                       |
| `TWITTER_DELETE_LIST`                                        | Permanently deletes a Twitter list owned by the authenticated user.                                       |
| `TWITTER_FETCH_LIST_MEMBERS_BY_ID`                           | Fetches the members of a specific Twitter list by its unique ID.                                          |
| `TWITTER_FETCH_SPACE_TICKET_BUYERS_LIST`                     | Retrieves users who purchased tickets for a specific ticketed Twitter Space.                              |
| `TWITTER_FOLLOW_A_LIST`                                      | Subscribes the authenticated user to a Twitter list's timeline.                                           |
| `TWITTER_FOLLOWERS_BY_USER_ID`                               | Retrieves users who follow a specified public Twitter account.                                            |
| `TWITTER_FOLLOWING_BY_USER_ID`                               | Retrieves the list of users a specific Twitter account is following.                                      |
| `TWITTER_FOLLOW_USER`                                        | Follows another Twitter user on behalf of the authenticated user.                                         |
| `TWITTER_FULL_ARCHIVE_SEARCH`                                | Searches the full archive of public tweets going back to March 2006.                                      |
| `TWITTER_FULL_ARCHIVE_SEARCH_COUNTS`                         | Returns aggregated tweet counts from the full archive matching a query, grouped by day, hour, or minute.  |
| `TWITTER_GET_A_USER_S_LIST_MEMBERSHIPS`                      | Retrieves all Twitter lists a specified user is a member of.                                              |
| `TWITTER_GET_A_USER_S_OWNED_LISTS`                           | Retrieves Twitter lists created and owned by a specific user.                                             |
| `TWITTER_GET_A_USER_S_PINNED_LISTS`                          | Retrieves the Twitter lists a specific user has pinned to their profile.                                  |
| `TWITTER_GET_BLOCKED_USERS`                                  | Returns a read-only view of users blocked by the specified account.                                       |
| `TWITTER_GET_DM_EVENTS_BY_ID`                                | Fetches a specific direct message event by its unique ID.                                                 |
| `TWITTER_GET_DM_EVENTS_FOR_A_DM_CONVERSATION`                | Fetches DM events for a one-on-one conversation with a specified participant.                             |
| `TWITTER_GET_LIST_FOLLOWERS`                                 | Returns users who follow a specific Twitter list.                                                         |
| `TWITTER_GET_MUTED_USERS`                                    | Returns users muted by the authenticated account.                                                         |
| `TWITTER_GET_POST_RETWEETERS_ACTION`                         | Retrieves users who publicly retweeted a specified tweet.                                                 |
| `TWITTER_GET_RECENT_DM_EVENTS`                               | Returns recent direct message events for the authenticated user.                                          |
| `TWITTER_GET_USER_S_FOLLOWED_LISTS`                          | Returns metadata for lists a specific Twitter user follows.                                               |
| `TWITTER_HIDE_REPLIES`                                       | Hides or unhides a reply tweet from a conversation.                                                       |
| `TWITTER_LIST_LOOKUP_BY_LIST_ID`                             | Returns metadata for a specific Twitter list by its ID.                                                   |
| `TWITTER_LIST_POST_LIKERS`                                   | Retrieves users who liked a specific tweet.                                                               |
| `TWITTER_LIST_POSTS_TIMELINE_BY_LIST_ID`                     | Fetches the most recent tweets posted by members of a specified Twitter list.                             |
| `TWITTER_MUTE_USER_BY_USER_ID`                               | Mutes a target user so their tweets no longer appear in the authenticated user's timeline.                |
| `TWITTER_PIN_A_LIST`                                         | Pins a specified Twitter list to the authenticated user's profile.                                        |
| `TWITTER_POST_DELETE_BY_POST_ID`                             | Irreversibly deletes a tweet authored by the authenticated user.                                          |
| `TWITTER_POST_LOOKUP_BY_POST_ID`                             | Fetches full details for a single tweet by its unique ID.                                                 |
| `TWITTER_POST_LOOKUP_BY_POST_IDS`                            | Retrieves detailed information for one or more tweets by their IDs.                                       |
| `TWITTER_POSTS_LABEL_STREAM`                                 | Establishes a real-time stream of events for when tweet content labels are applied or removed.            |
| `TWITTER_POST_USAGE`                                         | Fetches tweet usage statistics for a project to monitor API limits over a specified period.               |
| `TWITTER_RECENT_SEARCH`                                      | Searches tweets from the last 7 days matching a query using Twitter's search syntax.                      |
| `TWITTER_RECENT_SEARCH_COUNTS`                               | Returns counts of tweets matching a query within the last 7 days, aggregated by minute, hour, or day.     |
| `TWITTER_REMOVE_A_BOOKMARKED_POST`                           | Removes a previously bookmarked tweet from the authenticated user's bookmarks.                            |
| `TWITTER_REMOVE_A_LIST_MEMBER`                               | Removes a user from a Twitter list owned by the authenticated user.                                       |
| `TWITTER_RETRIEVE_COMPLIANCE_JOB_BY_ID`                      | Retrieves the status and details of an existing compliance job by its ID.                                 |
| `TWITTER_RETRIEVE_COMPLIANCE_JOBS`                           | Returns a list of recent compliance jobs filtered by type and optionally by status.                       |
| `TWITTER_RETRIEVE_DM_CONVERSATION_EVENTS`                    | Retrieves direct message events for a specific conversation ID.                                           |
| `TWITTER_RETRIEVE_POSTS_FROM_A_SPACE`                        | Retrieves tweets shared in a specified Twitter Space.                                                     |
| `TWITTER_RETRIEVE_POSTS_THAT_QUOTE_A_POST`                   | Retrieves tweets that quote a specified tweet.                                                            |
| `TWITTER_RETRIEVE_POSTS_THAT_REPOST_A_POST`                  | Retrieves tweets that retweeted a specified tweet.                                                        |
| `TWITTER_RETURNS_POST_OBJECTS_LIKED_BY_THE_PROVIDED_USER_ID` | Retrieves tweets liked by a specified Twitter user.                                                       |
| `TWITTER_RETURNS_THE_OPEN_API_SPECIFICATION_DOCUMENT`        | Fetches the OpenAPI specification for Twitter's API v2.                                                   |
| `TWITTER_RETWEET_POST`                                       | Retweets a specified public tweet on behalf of the authenticated user.                                    |
| `TWITTER_SEARCH_FOR_SPACES`                                  | Searches for Twitter Spaces by a text query, with optional filtering by state.                            |
| `TWITTER_SEND_A_NEW_MESSAGE_TO_A_DM_CONVERSATION`            | Sends a message with optional media attachments to an existing DM conversation.                           |
| `TWITTER_SEND_A_NEW_MESSAGE_TO_A_USER`                       | Sends a new direct message with optional media to a specified Twitter user.                               |
| `TWITTER_SPACE_LOOKUP_BY_SPACE_ID`                           | Retrieves details for a Twitter Space by its unique ID.                                                   |
| `TWITTER_SPACE_LOOKUP_BY_THEIR_CREATORS`                     | Retrieves Twitter Spaces created by a list of specified user IDs.                                         |
| `TWITTER_SPACE_LOOKUP_UP_SPACE_IDS`                          | Fetches details for one or more Twitter Spaces by their IDs.                                              |
| `TWITTER_UNFOLLOW_A_LIST`                                    | Removes the authenticated user's subscription to a Twitter list.                                          |
| `TWITTER_UNFOLLOW_USER`                                      | Unfollows a specified Twitter user on behalf of the authenticated user.                                   |
| `TWITTER_UNLIKE_POST`                                        | Removes the authenticated user's like from a specified tweet.                                             |
| `TWITTER_UNMUTE_USER_BY_USER_ID`                             | Unmutes a previously muted user, restoring their tweets and notifications.                                |
| `TWITTER_UNPIN_A_LIST`                                       | Unpins a specified list from the authenticated user's profile.                                            |
| `TWITTER_UNRETWEET_POST`                                     | Removes the authenticated user's retweet of a specified post.                                             |
| `TWITTER_UPDATE_LIST`                                        | Updates an existing Twitter list's name, description, or privacy setting.                                 |
| `TWITTER_USER_HOME_TIMELINE_BY_USER_ID`                      | Retrieves a user's home timeline showing tweets from accounts they follow in reverse chronological order. |
| `TWITTER_USER_LIKE_POST`                                     | Likes a specified tweet on behalf of the authenticated user.                                              |
| `TWITTER_USER_LOOKUP_BY_ID`                                  | Retrieves detailed public profile information for a Twitter user by their ID.                             |
| `TWITTER_USER_LOOKUP_BY_IDS`                                 | Retrieves profile information for multiple Twitter users by their IDs.                                    |
| `TWITTER_USER_LOOKUP_BY_USERNAME`                            | Fetches public profile information for a Twitter user by their username.                                  |
| `TWITTER_USER_LOOKUP_BY_USERNAMES`                           | Retrieves detailed information for 1 to 100 Twitter users by their usernames.                             |
| `TWITTER_USER_LOOKUP_ME`                                     | Returns profile information for the currently authenticated Twitter user.                                 |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Twitter**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated social media posting**
An agent monitors a content calendar or RSS feed and automatically posts tweets, including text, media, or polls, at scheduled times, keeping your audience engaged without manual effort.

**Brand mention and engagement tracking**
An agent uses recent search and full archive search to find tweets mentioning your brand or keywords, then surfaces engagement metrics and sentiment, enabling your team to respond quickly to trends or issues.

**Audience growth and list management**
An agent monitors follower activity, adds relevant users to curated Twitter lists, and follows or unfollows accounts based on defined criteria, helping you grow and maintain a targeted audience automatically.

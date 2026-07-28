> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# YouTube

YouTube enables Lyzr agents to search for videos, retrieve channel and video metadata, manage playlists and subscriptions, upload and update video content, and interact with the YouTube Data API for both content discovery and channel management.

## Setup

1. In Agent Studio, go to **Tools** → **YouTube** → **Connect**
2. Sign in with your Google account and authorize access
3. Review the requested permissions and click **Allow**

## Composio vs ACI: Which provider to use?

This tool is available through two providers. Both connect to the same underlying service but differ in action coverage and auth handling.

|                     | Composio                                   | ACI                                         |
| ------------------- | ------------------------------------------ | ------------------------------------------- |
| **Provider source** | Composio                                   | ACI                                         |
| **Auth type**       | oauth2                                     | oauth2                                      |
| **Best for**        | Broad action coverage, workflow automation | Targeted integrations, API-level operations |

Choose **Composio** when you need the widest selection of actions and deep workflow automation. Choose **ACI** when you need direct API-level control or a specific action not covered by Composio.

## Available actions: Composio

| Action                             | Description                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `YOUTUBE_GET_CHANNEL_ACTIVITIES`   | Gets recent activities from a YouTube channel including video uploads, playlist additions, likes, and other channel events. |
| `YOUTUBE_GET_CHANNEL_ID_BY_HANDLE` | Retrieves the YouTube channel ID for a specific YouTube channel handle.                                                     |
| `YOUTUBE_GET_CHANNEL_STATISTICS`   | Gets detailed statistics for YouTube channels including subscriber counts, view counts, and video counts.                   |
| `YOUTUBE_LIST_CAPTION_TRACK`       | Retrieves a list of caption tracks for a YouTube video, returning an empty list if no captions exist.                       |
| `YOUTUBE_LIST_CHANNEL_VIDEOS`      | Lists videos from a specified YouTube channel, ensuring results are of type video.                                          |
| `YOUTUBE_LIST_USER_PLAYLISTS`      | Retrieves playlists owned by the authenticated user.                                                                        |
| `YOUTUBE_LIST_USER_SUBSCRIPTIONS`  | Retrieves the authenticated user's YouTube channel subscriptions with support for pagination.                               |
| `YOUTUBE_LOAD_CAPTIONS`            | Downloads a specific YouTube caption track owned by the authenticated user and returns its content as text.                 |
| `YOUTUBE_SEARCH_YOU_TUBE`          | Searches YouTube for videos, channels, or playlists using a query term and returns the raw API response.                    |
| `YOUTUBE_SUBSCRIBE_CHANNEL`        | Subscribes the authenticated user to a specified YouTube channel identified by its unique channel ID.                       |
| `YOUTUBE_UPDATE_THUMBNAIL`         | Sets the custom thumbnail for a YouTube video using an image from a provided URL.                                           |
| `YOUTUBE_UPDATE_VIDEO`             | Updates metadata for a YouTube video including title, description, tags, category, and privacy status.                      |
| `YOUTUBE_UPLOAD_VIDEO`             | Uploads a video from a local file path to a YouTube channel with specified title, description, tags, and privacy settings.  |
| `YOUTUBE_VIDEO_DETAILS`            | Retrieves specified information parts such as snippet, content details, and statistics for a YouTube video by its ID.       |

## Available actions: ACI

| Action                          | Description                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `YOUTUBE__RATE_VIDEO`           | Adds a like or dislike rating to a video, or removes an existing rating from a video.                              |
| `YOUTUBE__GET_VIDEO_CATEGORIES` | Retrieves a list of video categories that can be associated with YouTube videos.                                   |
| `YOUTUBE__SEARCH`               | Searches for YouTube resources including videos, channels, and playlists using various filter criteria.            |
| `YOUTUBE__GET_VIDEO_DETAILS`    | Gets detailed information about specific YouTube videos by ID, including snippet, statistics, and content details. |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **YouTube**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Content research assistant:** An agent searches YouTube for videos on a given topic, retrieves their statistics and captions, and compiles a summary report, useful for market research, competitive analysis, or learning content curation.

**Channel management automation:** An agent monitors a YouTube channel's recent activities and statistics, then automatically updates video metadata such as titles, descriptions, and tags based on performance data or editorial guidelines.

**Audience engagement bot:** An agent subscribes to relevant channels on behalf of users, retrieves their latest uploads, and surfaces new video recommendations based on the user's interests, ideal for personalized content discovery workflows.

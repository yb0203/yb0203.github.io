> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# LinkedIn

LinkedIn is a professional networking platform that enables agents to create and manage posts, engage with content, retrieve profile and company information, and analyze audience and performance data on behalf of users or organizations.

## Setup

1. In Agent Studio, go to **Tools** → **LinkedIn** → **Connect**
2. Sign in with your LinkedIn account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                  | Description                                                                                                                               |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `LINKEDIN_CREATE_ARTICLE_OR_URL_SHARE`  | Creates an article or URL share post on LinkedIn using the UGC Posts API with customizable visibility settings.                           |
| `LINKEDIN_CREATE_COMMENT_ON_POST`       | Adds a first-level or nested comment to a LinkedIn share, UGC post, or parent comment, with support for @-mentions and image attachments. |
| `LINKEDIN_CREATE_LINKED_IN_POST`        | Creates a new text, image, or reshare post on LinkedIn for the authenticated user or an organization they manage.                         |
| `LINKEDIN_DELETE_LINKED_IN_POST`        | Deletes a specific LinkedIn post (share) by its unique share ID.                                                                          |
| `LINKEDIN_DELETE_POST`                  | Deletes a LinkedIn post using the Posts API, supporting both ugcPost and share URN formats.                                               |
| `LINKEDIN_DELETE_UGC_POST`              | Deletes a UGC post using the legacy UGC Post API endpoint.                                                                                |
| `LINKEDIN_GET_AD_TARGETING_FACETS`      | Retrieves available ad targeting facets from the LinkedIn Marketing API to discover targeting options for campaigns.                      |
| `LINKEDIN_GET_AUDIENCE_COUNTS`          | Retrieves estimated audience size counts for specified targeting criteria to gauge campaign reach.                                        |
| `LINKEDIN_GET_COMPANY_INFO`             | Retrieves organizations where the authenticated user has specific roles such as ADMINISTRATOR or content poster.                          |
| `LINKEDIN_GET_IMAGE`                    | Retrieves details, status, and download URLs for a LinkedIn image by its URN.                                                             |
| `LINKEDIN_GET_IMAGES`                   | Retrieves metadata including download URLs and dimensions for a batch of LinkedIn images by their URNs.                                   |
| `LINKEDIN_GET_MY_INFO`                  | Fetches the authenticated LinkedIn user's profile information including name, headline, and profile picture.                              |
| `LINKEDIN_GET_NETWORK_SIZE`             | Retrieves the follower count for a LinkedIn organization page.                                                                            |
| `LINKEDIN_GET_ORG_PAGE_STATS`           | Retrieves page statistics such as views and button clicks for a LinkedIn organization page, with optional time-range filtering.           |
| `LINKEDIN_GET_PERSON`                   | Retrieves a LinkedIn member's profile information by their person ID.                                                                     |
| `LINKEDIN_GET_POST_CONTENT`             | Retrieves the full content and metadata of a specific LinkedIn post by its URN.                                                           |
| `LINKEDIN_GET_SHARE_STATS`              | Retrieves share statistics including impressions, clicks, likes, comments, and shares for an organization's content.                      |
| `LINKEDIN_GET_VIDEOS`                   | Retrieves video metadata including duration, dimensions, status, and download URLs from the LinkedIn Marketing API.                       |
| `LINKEDIN_INITIALIZE_IMAGE_UPLOAD`      | Initializes a LinkedIn image upload and returns a presigned upload URL and the resulting image URN for use in posts.                      |
| `LINKEDIN_LIST_REACTIONS`               | Retrieves reactions on a LinkedIn entity such as a share, post, or comment, including who reacted and the reaction type.                  |
| `LINKEDIN_REGISTER_IMAGE_UPLOAD`        | Registers a native LinkedIn image upload for feed shares and returns a presigned upload URL and digital media asset URN.                  |
| `LINKEDIN_SEARCH_AD_TARGETING_ENTITIES` | Searches for ad targeting entities such as locations, job titles, and industries using typeahead search for LinkedIn ad campaigns.        |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **LinkedIn**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated content publishing pipeline**
An agent monitors a blog RSS feed or internal content queue and automatically creates LinkedIn posts with the article URL and custom commentary, scheduling them for optimal visibility using the PUBLIC or CONNECTIONS visibility settings.

**Competitive and audience intelligence**
An agent retrieves follower counts, page stats, and share statistics for competitor or partner organizations, then compiles a weekly performance report to help marketing teams benchmark their LinkedIn presence.

**Engagement and community management**
An agent tracks reactions and comments on recent posts, replies to comments with relevant responses or @-mentions, and escalates high-priority interactions to the social media team for human follow-up.

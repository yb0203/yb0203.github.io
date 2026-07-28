> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Team Management

> Manage your organization from one console: sub-accounts, team usage, roles, and audit logs.

Lyzr Agent Studio gives Owners and Admins a single console to manage the organization and its team. Open it by selecting your organization at the bottom of the left sidebar and choosing **Manage**.

The console has four tabs:

* **Overview** summarizes the organization at a glance.
* **Sub-Accounts** creates and manages isolated account spaces.
* **Team** tracks members, their roles, and their usage.
* **Audit Logs** records every action taken in the organization.

## Roles

Every member has a role that determines what they can do. The **Team** tab shows each member's role, and you assign a role when you invite a member. The available roles are **Owner**, **Admin**, and **Member**. For the full permission breakdown of each role, see [Roles & Permissions](./roles-permissions).

Whoever purchases the organization or teams plan becomes the Org Owner. There is only one Org Owner per organization, and Owners cannot assign the Owner role to another member. To transfer ownership, contact Lyzr support at [studio@lyzr.ai](mailto:studio@lyzr.ai).

## Sub-Accounts

Sub-accounts are dedicated account spaces for customers or projects. Each space keeps its work, team, and credits isolated, so you can collaborate inside a space without affecting the rest of the organization.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/org-sub-accounts.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=be8546bd00e620cdc18ce561be1e8ae3" alt="The Sub-Accounts tab listing each sub-account with its team size, credits left, credit limit, and credit usage." width="2920" height="1642" data-path="assets/images/lyzr-studio/org-sub-accounts.png" />

The Sub-Accounts tab lists every space in the organization. Each row reports the following:

| Column           | What it shows                                               |
| ---------------- | ----------------------------------------------------------- |
| Sub-account name | The name of the account space.                              |
| Team size        | The number of members in the space.                         |
| Credits left     | The credits still available to the space.                   |
| Credit limit     | The maximum credits the space can use in the current cycle. |
| Credit usage     | The credits consumed so far against the limit.              |

From this tab you can manage each space:

* Select **Add Sub-Account** to create a new account space.
* Select **Top Up** to add credits to a space.
* Select **Set Credit Limits** to cap how many credits a space can consume.
* Use the per-row actions to transfer, edit, or delete a sub-account.

Credits replenish and credit limits reset on your invoice date, which the tab shows in a banner at the top.

## Team

The Team tab tracks usage and activity across your team over a selected timeframe: **Last 30 days**, **Last cycle**, or **Last 3 months**. Four summary cards show the totals for the selected period.

| Card             | What it shows                                  |
| ---------------- | ---------------------------------------------- |
| Credits consumed | Total credits the team used in the period.     |
| Agents built     | Number of agents the team created.             |
| Runs             | Total agent runs across the team.              |
| Tokens           | Total input and output tokens across the team. |

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/org-team.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=c74b8fd1cbab2afee6d0954db7260833" alt="The Team tab showing usage summary cards and a member table with per-member credits, agents, runs, tokens, and last login." width="2920" height="1642" data-path="assets/images/lyzr-studio/org-team.png" />

Below the cards, the member table reports per-member activity. Filter it by role, toggle **Include all sub-accounts** to roll in members from every space, and select **Export CSV** to download the table. The seat counter shows how many of your plan's seats are in use.

Each member row shows the following:

| Column          | What it shows                                     |
| --------------- | ------------------------------------------------- |
| Member          | The member's email address.                       |
| Role            | The member's role: Owner, Admin, or Member.       |
| Joined on       | The date the member joined the organization.      |
| Credits         | Credits the member consumed in the period.        |
| Agents          | Number of agents the member built.                |
| KBs             | Number of knowledge bases the member created.     |
| Runs            | Number of agent runs the member triggered.        |
| Tokens (In/Out) | Input and output tokens across the member's runs. |
| Last logged in  | The member's most recent sign-in.                 |
| Accounts        | The sub-accounts the member belongs to.           |

### Invite members

To add members, select **Invite**, enter one or more email addresses separated by commas, assign a role, and submit. Every address in the list is invited with the role you selected, so you can onboard a whole team in a single action.

## Audit Logs

The Audit Logs tab records every action taken in the organization, which supports security and compliance review. It has two views: **Overview** and **Logs**.

### Overview

The Overview view summarizes audit activity. Four cards show total events, successful events with the success rate, failed events, and the number of distinct resource types. Two breakdowns sit below the cards:

* **Events by Action** ranks activity by action type, such as Login, Update, Create, Logout, Train, Upload, and Delete.
* **Events by Resource** ranks activity by resource type, such as User, Agent, Knowledge Base, Semantic Data Model, Artifact, Tool, Organization, and Credential.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/org-audit-overview.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=e91a6bfb0f753fbc03cd4dbfece99266" alt="The Audit Logs Overview showing total, successful, and failed event counts alongside the Events by Action and Events by Resource breakdowns." width="2920" height="1642" data-path="assets/images/lyzr-studio/org-audit-overview.png" />

### Logs

The Logs view lists individual audit events, most recent first. Select **Filters** to narrow the list and **Refresh** to load the latest events. Each event row shows the following:

| Column    | What it shows                                                      |
| --------- | ------------------------------------------------------------------ |
| Timestamp | The date and time of the event, including the time zone.           |
| User      | The member who performed the action.                               |
| Action    | The action taken, such as Login, Create, or Logout.                |
| Resource  | The resource the action affected, such as a user or a named agent. |
| Result    | Whether the action succeeded or failed.                            |

Select the view icon on a row to open the full event detail. The list is paginated at 50 events per page.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/org-audit-logs.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=ccf2e994a8165e2cc65c01e736e3f2aa" alt="The Audit Logs list showing the timestamp, user, action, resource, and result columns for each event." width="2920" height="1642" data-path="assets/images/lyzr-studio/org-audit-logs.png" />

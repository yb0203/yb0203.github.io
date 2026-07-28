> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Calendly

Connect Calendly to let agents check scheduling availability, retrieve event
types, and manage bookings.

## Setup

1. **Tools** → **Calendly** → **Connect**
2. Authenticate with Calendly
3. Authorize access to your event types and scheduled events

## Available actions

| Action                           | Description                                                 |
| -------------------------------- | ----------------------------------------------------------- |
| `CALENDLY_LIST_EVENT_TYPES`      | List all available meeting types and their scheduling links |
| `CALENDLY_GET_USER_AVAILABILITY` | Check available time slots                                  |
| `CALENDLY_LIST_SCHEDULED_EVENTS` | View upcoming scheduled meetings                            |
| `CALENDLY_GET_INVITEE_DETAILS`   | Get details about a specific meeting invitee                |
| `CALENDLY_CANCEL_EVENT`          | Cancel a scheduled event                                    |

## Example use cases

**Sales assistant**: After a lead qualifies, shares the relevant Calendly link
(discovery call, demo) based on the lead's profile and stated needs.

**Scheduling summarizer**: At the start of each week, retrieves all booked
events and creates a briefing document with attendee context for each meeting.

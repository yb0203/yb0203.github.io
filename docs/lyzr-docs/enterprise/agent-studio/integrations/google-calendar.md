> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Calendar

Connect Google Calendar to let agents read schedules, create events, check
availability, and manage meetings.

## Setup

1. **Tools** → **Google Calendar** → **Connect**
2. Authenticate with your Google account
3. Grant calendar read/write access

## Available actions

| Action                                 | Description                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------- |
| `GOOGLECALENDAR_LIST_CALENDARS`        | List all calendars in the account                                                   |
| `GOOGLECALENDAR_GET_CURRENT_DATE_TIME` | Get current date/time for scheduling context                                        |
| `GOOGLECALENDAR_FIND_FREE_SLOTS`       | Find available time slots in a calendar                                             |
| `GOOGLECALENDAR_CREATE_EVENT`          | Create a calendar event (title, time, attendees, location)                          |
| `GOOGLECALENDAR_GET_EVENTS`            | Retrieve events for a date range                                                    |
| `GOOGLECALENDAR_UPDATE_EVENT`          | Modify an existing event                                                            |
| `GOOGLECALENDAR_DELETE_EVENT`          | Remove an event                                                                     |
| `GOOGLECALENDAR_QUICK_ADD_EVENT`       | Add event from a natural language string (e.g., "Lunch with Sarah tomorrow at 1pm") |

## Example use cases

**Meeting scheduler**: Checks availability across team members, proposes meeting
slots, and creates the event with all invitees once confirmed.

**Daily briefing**: At 8am, retrieves the day's events and sends a formatted
summary via Slack or email.

**Follow-up scheduler**: After a sales call, creates a follow-up calendar event
7 days later and adds prep notes in the event description.

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Drive

Connect Google Drive to let agents list, read, create, and search files in
your Drive storage.

## Setup

1. **Tools** → **Google Drive** → **Connect**
2. Authenticate with Google
3. Grant Drive access (recommend scoping to specific folders if possible)

## Available actions

| Action                                      | Description                                    |
| ------------------------------------------- | ---------------------------------------------- |
| `GOOGLEDRIVE_LIST_FILES_IN_A_FOLDER`        | List contents of a specific folder             |
| `GOOGLEDRIVE_RETURNS_THE_CONTENT_OF_A_FILE` | Read file contents (text, Google Docs, Sheets) |
| `GOOGLEDRIVE_FIND_FILE`                     | Search for files by name or content            |
| `GOOGLEDRIVE_CREATE_A_GOOGLE_DOCS_FILE`     | Create a new Google Doc with content           |
| `GOOGLEDRIVE_UPLOAD_FILE`                   | Upload a file to Drive                         |
| `GOOGLEDRIVE_MOVE_FILE`                     | Move file to a different folder                |
| `GOOGLEDRIVE_SHARE_FILE_WITH_USER`          | Share a file with specific permissions         |

## Example use cases

**Document summarizer**: Given a folder path, retrieves all documents created
this week and produces a weekly report summary.

**Report generator**: Agent generates analysis, creates a Google Doc with the
results, and shares it with the relevant team members.

**File organizer**: Scans a specified folder, categorizes files by topic, and
moves them into appropriate subfolders.

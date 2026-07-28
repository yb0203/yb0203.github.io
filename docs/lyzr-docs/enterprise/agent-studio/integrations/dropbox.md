> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Dropbox

Dropbox is a cloud storage service that enables file syncing, sharing, and collaboration across devices, with version control and integrations that agents can use to manage files and folders programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **Dropbox** → **Connect**
2. Sign in with your Dropbox account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                          | Description                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `DROPBOX_CREATE_FILE_REQUEST`   | Creates a new file request that generates a unique upload link so others can submit files directly to a specified Dropbox folder. |
| `DROPBOX_CREATE_FOLDER`         | Creates a new folder at a specified path in Dropbox to organize files and directories.                                            |
| `DROPBOX_CREATE_PAPER`          | Creates a new Dropbox Paper document at a specified path using HTML or Markdown content.                                          |
| `DROPBOX_DELETE_FILE_OR_FOLDER` | Permanently deletes the file or folder at the specified Dropbox path.                                                             |
| `DROPBOX_GET_ABOUT_ME`          | Retrieves account details for the current Dropbox user, including email, name, and account type.                                  |
| `DROPBOX_LIST_FILES_IN_FOLDER`  | Lists files and folders within a specified Dropbox directory, with optional recursive listing of subfolders.                      |
| `DROPBOX_LIST_FOLDERS`          | Retrieves a list of folders, files, and deleted entries from a specified Dropbox path.                                            |
| `DROPBOX_MOVE_FILE_OR_FOLDER`   | Moves a file or folder from one path to another within the user's Dropbox.                                                        |
| `DROPBOX_READ_FILE`             | Downloads and reads the contents of a file from a specified Dropbox path.                                                         |
| `DROPBOX_SEARCH_FILE_OR_FOLDER` | Searches for files and folders in Dropbox by name or content, with optional filters for path, file type, and extension.           |
| `DROPBOX_UPLOAD_FILE`           | Uploads a file to a specified path in the user's Dropbox, with configurable conflict handling options.                            |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Dropbox**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated document archiving**
An agent monitors a project and automatically moves completed deliverables from a working folder to an archive folder using `DROPBOX_MOVE_FILE_OR_FOLDER`, keeping the workspace organized without manual effort.

**Client file collection**
An agent creates a file request via `DROPBOX_CREATE_FILE_REQUEST` with a deadline and shares the upload link with clients, allowing them to submit documents directly to a designated Dropbox folder.

**Content search and retrieval**
An agent uses `DROPBOX_SEARCH_FILE_OR_FOLDER` to locate specific reports or documents by name or content, then reads the file with `DROPBOX_READ_FILE` to extract information for summarization or analysis.

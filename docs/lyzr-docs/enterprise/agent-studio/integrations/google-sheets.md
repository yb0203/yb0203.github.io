> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Sheets

Google Sheets is a cloud-based spreadsheet application that lets agents create, read, and update spreadsheet data to support data entry, analysis, and collaboration workflows.

## Setup

1. In Agent Studio, go to **Tools** → **Google Sheets** → **Connect**
2. Sign in with your Google account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                               | Description                                                              |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `GOOGLE_SHEETS__SPREADSHEET_CREATE`  | Creates a new spreadsheet with specified properties and sheets.          |
| `GOOGLE_SHEETS__VALUES_GET`          | Retrieves data from a specified range in a spreadsheet.                  |
| `GOOGLE_SHEETS__VALUES_UPDATE`       | Sets values in a specified range of a spreadsheet.                       |
| `GOOGLE_SHEETS__VALUES_BATCH_UPDATE` | Sets values in one or more ranges of a spreadsheet in a single request.  |
| `GOOGLE_SHEETS__VALUES_APPEND`       | Appends rows of values to the end of an existing table in a spreadsheet. |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Google Sheets**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated report generation:** An agent can create a new spreadsheet and populate it with processed data, such as weekly sales figures or aggregated survey results, ready for review without manual data entry.

**Real-time data logging:** Use the append action to have an agent continuously log events, form submissions, or sensor readings to a running sheet, building an auditable time-series record automatically.

**Bulk data updates:** An agent can read values from one range, apply transformations or enrichments, and write the results back using a batch update, keeping a master spreadsheet in sync with external data sources.

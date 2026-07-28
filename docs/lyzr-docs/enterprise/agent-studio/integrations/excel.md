> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Excel

Microsoft Excel is a powerful spreadsheet application that enables agents to read, write, and manage workbook data, worksheets, tables, charts, and file permissions through the Microsoft Graph API.

## Setup

1. In Agent Studio, go to **Tools** → **Microsoft Excel** → **Connect**
2. Sign in with your Microsoft account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                             | Description                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `EXCEL_ADD_CHART`                  | Add a chart to a worksheet using the Microsoft Graph API.                                 |
| `EXCEL_ADD_SHAREPOINT_WORKSHEET`   | Add a new worksheet to a SharePoint Excel workbook.                                       |
| `EXCEL_ADD_TABLE`                  | Create a table in a workbook.                                                             |
| `EXCEL_ADD_TABLE_COLUMN`           | Add a column to an existing table.                                                        |
| `EXCEL_ADD_TABLE_ROW`              | Add a row to an existing table.                                                           |
| `EXCEL_ADD_WORKBOOK_PERMISSION`    | Grant access to a workbook by inviting recipients with specified roles.                   |
| `EXCEL_ADD_WORKSHEET`              | Add a new worksheet to an Excel workbook.                                                 |
| `EXCEL_APPLY_TABLE_FILTER`         | Apply a filter to a table column.                                                         |
| `EXCEL_APPLY_TABLE_SORT`           | Apply a sort to a table.                                                                  |
| `EXCEL_CLEAR_RANGE`                | Clear values, formats, or contents in a specified worksheet range.                        |
| `EXCEL_CLEAR_TABLE_FILTER`         | Clear a filter from a table column.                                                       |
| `EXCEL_CLOSE_SESSION`              | Close an existing Excel workbook session to release workbook locks.                       |
| `EXCEL_CONVERT_TABLE_TO_RANGE`     | Convert a table back to a plain cell range.                                               |
| `EXCEL_CREATE_WORKBOOK`            | Create a new workbook file at a specified OneDrive path.                                  |
| `EXCEL_DELETE_TABLE_COLUMN`        | Delete a column from a table.                                                             |
| `EXCEL_DELETE_TABLE_ROW`           | Delete a row from a table by index.                                                       |
| `EXCEL_DELETE_WORKSHEET`           | Delete a worksheet from a workbook.                                                       |
| `EXCEL_GET_CHART_AXIS`             | Retrieve a specific axis from a chart, including min, max, and interval properties.       |
| `EXCEL_GET_CHART_DATA_LABELS`      | Retrieve the data labels object of a chart, including position and visibility settings.   |
| `EXCEL_GET_CHART_LEGEND`           | Retrieve the legend object of a chart, including visibility and formatting details.       |
| `EXCEL_GET_RANGE`                  | Get the values and properties of a cell range from a worksheet.                           |
| `EXCEL_GET_SESSION`                | Create a persistent session for an Excel workbook.                                        |
| `EXCEL_GET_SHAREPOINT_RANGE`       | Get a cell range from a worksheet stored in SharePoint.                                   |
| `EXCEL_GET_SHAREPOINT_WORKSHEET`   | Get a worksheet by name or ID from a SharePoint Excel workbook.                           |
| `EXCEL_GET_TABLE_COLUMN`           | Retrieve a specific column from a workbook table by ID or name.                           |
| `EXCEL_GET_WORKBOOK`               | Retrieve the properties and relationships of a workbook, including worksheets and tables. |
| `EXCEL_GET_WORKSHEET`              | Get a worksheet by name or ID from an Excel workbook.                                     |
| `EXCEL_INSERT_RANGE`               | Insert a new cell range into a worksheet, shifting existing cells down or right.          |
| `EXCEL_LIST_CHARTS`                | List all charts in a worksheet.                                                           |
| `EXCEL_LIST_CHART_SERIES`          | List all data series in a chart.                                                          |
| `EXCEL_LIST_COMMENTS`              | List all comments in an Excel workbook.                                                   |
| `EXCEL_LIST_FILES`                 | List files and folders in a OneDrive root or specified folder path.                       |
| `EXCEL_LIST_NAMED_ITEMS`           | List all named items (named ranges and constants) in a workbook.                          |
| `EXCEL_LIST_SHAREPOINT_TABLES`     | List all tables in a SharePoint worksheet.                                                |
| `EXCEL_LIST_SHAREPOINT_WORKSHEETS` | List all worksheets in an Excel workbook stored in SharePoint.                            |
| `EXCEL_LIST_TABLE_COLUMNS`         | List all columns in a table.                                                              |
| `EXCEL_LIST_TABLE_ROWS`            | List all rows in a table.                                                                 |
| `EXCEL_LIST_TABLES`                | List all tables in a worksheet.                                                           |
| `EXCEL_LIST_WORKBOOK_PERMISSIONS`  | List all permissions set on a workbook file.                                              |
| `EXCEL_LIST_WORKSHEETS`            | List all worksheets in an Excel workbook.                                                 |
| `EXCEL_MERGE_CELLS`                | Merge a specified range of cells in a worksheet.                                          |
| `EXCEL_PROTECT_WORKSHEET`          | Protect a worksheet with optional granular protection options.                            |
| `EXCEL_SORT_RANGE`                 | Sort a cell range in a worksheet by specified fields.                                     |
| `EXCEL_UPDATE_CHART`               | Update a chart's name, position, or dimensions in a worksheet.                            |
| `EXCEL_UPDATE_CHART_LEGEND`        | Update the formatting or position of a chart legend.                                      |
| `EXCEL_UPDATE_RANGE`               | Write new values to a cell range in a worksheet.                                          |
| `EXCEL_UPDATE_SHAREPOINT_RANGE`    | Write new values to a cell range in a SharePoint worksheet.                               |
| `EXCEL_UPDATE_TABLE`               | Update a table's name, style, or header and totals visibility.                            |
| `EXCEL_UPDATE_WORKSHEET`           | Update a worksheet's name or position in a workbook.                                      |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Microsoft Excel**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated report generation:** An agent reads sales data from a database, writes the results into a worksheet using `EXCEL_UPDATE_RANGE`, creates a chart with `EXCEL_ADD_CHART`, and shares the workbook with stakeholders via `EXCEL_ADD_WORKBOOK_PERMISSION`.

**Data pipeline output:** An agent processing survey responses appends new rows to a tracking table with `EXCEL_ADD_TABLE_ROW` and applies filters using `EXCEL_APPLY_TABLE_FILTER` to keep only records that meet specific criteria.

**SharePoint workbook management:** An agent maintains project tracking spreadsheets in SharePoint by adding worksheets with `EXCEL_ADD_SHAREPOINT_WORKSHEET`, updating ranges with `EXCEL_UPDATE_SHAREPOINT_RANGE`, and listing worksheets with `EXCEL_LIST_SHAREPOINT_WORKSHEETS` to confirm the structure is correct.

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Snowflake

Snowflake lets your agent execute SQL statements against Snowflake databases via the SQL API, enabling it to query data, explore schemas, and manage database objects programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **Snowflake** → **Connect**
2. Sign in with your Snowflake account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                       | Description                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------ |
| `SNOWFLAKE__LIST_DATABASES`  | Lists all user-created databases in the connected Snowflake account, excluding system databases. |
| `SNOWFLAKE__SHOW_SCHEMAS`    | Lists all schemas within a specified Snowflake database.                                         |
| `SNOWFLAKE__SHOW_TABLES`     | Lists all tables within a specified schema in a Snowflake database.                              |
| `SNOWFLAKE__DESCRIBE_TABLE`  | Returns the column definitions and structure of a specified Snowflake table.                     |
| `SNOWFLAKE__EXPLORE_COLUMNS` | Retrieves detailed column metadata for a table by querying the INFORMATION\_SCHEMA.COLUMNS view. |
| `SNOWFLAKE__RUN_QUERY`       | Executes any SQL statement, including queries, DDL, and DML, against a Snowflake database.       |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Snowflake**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated data reporting**
An agent uses `SNOWFLAKE__RUN_QUERY` to pull sales or usage metrics on a schedule and formats the results into a summary report, removing the need for manual SQL runs.

**Schema discovery for data onboarding**
An agent calls `SNOWFLAKE__LIST_DATABASES`, `SNOWFLAKE__SHOW_SCHEMAS`, and `SNOWFLAKE__SHOW_TABLES` in sequence to map out the full structure of a Snowflake environment, helping new team members or downstream tools understand what data is available.

**Dynamic query generation from natural language**
An agent uses `SNOWFLAKE__DESCRIBE_TABLE` and `SNOWFLAKE__EXPLORE_COLUMNS` to understand a table's structure, then constructs and runs a precise SQL query with `SNOWFLAKE__RUN_QUERY` in response to a plain-English question from the user.

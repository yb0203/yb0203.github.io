> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Data Connectors

> Connect SQL and NoSQL databases to your agents for real-time data access and natural language querying.

Lyzr connects with leading SQL and NoSQL data sources, enabling your agents to access and analyze real data in real time.

To connect a database to an agent, you create a **Semantic Model**, which holds only the relevant subset of your database required for that agent. This scoping ensures optimal performance while giving the agent the context it needs to understand your data schema.

Once connected, your agent can convert natural language questions into database queries (SQL or equivalent) and return accurate insights on demand. Agents built on top of a Semantic Model are called **Data Query Agents** or **Text-to-SQL Agents**.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/yzn6xOGs9lk" title="How to build a Text-to-SQL agent in Lyzr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

## Supported data connectors

| Connector                      | Type  | Status    |
| ------------------------------ | ----- | --------- |
| Amazon Redshift                | SQL   | Available |
| PostgreSQL                     | SQL   | Available |
| MySQL                          | SQL   | Available |
| Google BigQuery                | SQL   | Available |
| MongoDB                        | NoSQL | Available |
| Azure SQL                      | SQL   | Available |
| Microsoft SQL Server           | SQL   | Available |
| File Upload (CSV, Excel, JSON) | File  | Available |
| Databricks                     | SQL   | Upcoming  |
| Snowflake                      | SQL   | Upcoming  |

Don't see your data source? Reach out to [support@lyzr.ai](mailto:support@lyzr.ai) and we'll prioritize adding it.

## Adding a connector

1. Go to **Connections > Data Connectors** in the sidebar.
2. Select the database type from the available cards.
3. Enter connection credentials. All credentials are encrypted at rest and never logged.
4. Test the connection before saving.

## Next steps

* [Semantic Model](../knowledge/semantic-model): configure the data model your agent uses to interpret and query your database.

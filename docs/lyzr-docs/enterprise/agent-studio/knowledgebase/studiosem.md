> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Semantic Model & Text-to-SQL

> Connect agents to structured databases using Text-to-SQL so users can ask questions in plain language.

Semantic Model connects agents to structured data. It enriches database tables with descriptions, column metadata, and sample records so an agent can translate natural language into SQL-backed answers.

## When to use Semantic Model

Use Semantic Model when users need to ask questions over live or uploaded tabular data:

* "Get top 10 customers by revenue this quarter."
* "Which regions had the highest churn last month?"
* "Compare pipeline value by sales rep."

For document Q\&A, use Classic Knowledge Base. For relationship-heavy entity traversal, use Knowledge Graph.

## Supported data sources

| Connector                      | Status      |
| ------------------------------ | ----------- |
| PostgreSQL                     | Available   |
| MySQL                          | Available   |
| MongoDB                        | Available   |
| Amazon Redshift                | Available   |
| Google BigQuery                | Available   |
| Azure SQL                      | Available   |
| Microsoft SQL Server           | Available   |
| File Upload (CSV, Excel, JSON) | Available   |
| Snowflake                      | Coming soon |
| Databricks                     | Coming soon |

## How it works

1. Lyzr connects to a database or uploaded structured file.
2. A schema documentation agent reviews selected tables and sample rows.
3. The agent generates table and column descriptions.
4. The semantic metadata is stored for retrieval.
5. A Studio agent with **Data Query** enabled uses that context to generate SQL and return human-readable answers.

## Step-by-step

1. Go to **Connections > Data Connectors**, choose the database type, enter credentials, and save the connection.
2. Go to **Knowledge Base**, click **Create New**, and select **Semantic Model**.
3. Select the connected database and create or choose a Schema Documentation Agent.
4. Select only the tables required for the use case.
5. Review and edit generated descriptions before saving.
6. Open an agent, enable **Data Query**, and select the Semantic Model.

## Business glossary

The schema documentation agent generates descriptions automatically, but you can enrich them manually. Adding a business glossary improves accuracy: for example, defining that "ARR" means annual recurring revenue in your context, or that "churn" is calculated as cancelled subscriptions divided by active subscriptions at the start of the period. The more precise the column and table descriptions, the more reliably the agent generates correct SQL.

## Best practices

* Start with a narrow set of tables and expand only after testing.
* Use business-friendly descriptions for tables and columns rather than raw schema names.
* Include representative sample rows so the agent understands value formats and data distributions.
* Review and edit the auto-generated descriptions before saving, particularly for ambiguous column names.
* Test generated SQL against known correct results before enabling the agent for production users.

## Next steps

* [Classic Knowledge Base for document retrieval](studiokb)
* [Knowledge Graph for relationship-based retrieval](studiokg)
* [Build an agent in Studio](../agents/studio)

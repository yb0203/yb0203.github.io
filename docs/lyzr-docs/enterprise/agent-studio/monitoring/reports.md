> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Reports

> Download and view usage reports for your organisation.

Reports lets you export usage data for your organisation as CSV files. Access it via **Monitoring > Reports** from the sidebar. Each report type focuses on a different dimension of usage - by agent, by user, or by model.

<img src="https://mintcdn.com/lyzrinc/bax-ME8xkD3envXQ/assets/images/studio/reports-overview.png?fit=max&auto=format&n=bax-ME8xkD3envXQ&q=85&s=8b41adadb3275ee54318daf37835b7f0" alt="Reports overview showing Usage by Agent, Usage by User, Usage by Model and Usage by Sub-Account cards" width="3022" height="1726" data-path="assets/images/studio/reports-overview.png" />

## Available reports

| Report                   | What it covers                                  | Status      |
| ------------------------ | ----------------------------------------------- | ----------- |
| **Usage by Agent**       | Runs, tokens, latency, and error rate per agent | Available   |
| **Usage by User**        | Credits, runs, and activity per user            | Available   |
| **Usage by Model**       | Aggregate usage broken down by model            | Coming soon |
| **Usage by Sub-Account** | Cross-account consumption for org-level views   | Coming soon |

***

## Usage by Agent

Breaks down agent performance and consumption over a selected time period. Use this report to identify high-traffic agents, spot latency outliers, and track error rates across your agent fleet.

**To generate the report:**

1. Select **Download** on the Usage by Agent card.
2. Choose a **Timeframe** - this field is required.
3. Optionally filter by **Agent Type**, **Model**, or **Created By**.
4. Select **Download**. The report downloads as a CSV file.

**Filters:**

| Filter         | Options                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Timeframe**  | This week, This month, Last week, Last month, Last 7 days, Last 30 days, Last 3 months, Last 6 months, Last 12 months |
| **Agent Type** | All agent types, or filter to a specific type (e.g. `single_task`)                                                    |
| **Model**      | All models, or filter to a specific model                                                                             |
| **Created By** | Anyone, or filter to a specific team member                                                                           |

The exported CSV includes one row per agent with the following columns:

| Column                 | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `agent_name`           | Display name of the agent                                          |
| `agent_id`             | Unique identifier for the agent                                    |
| `model_used`           | The LLM the agent ran on                                           |
| `agent_type`           | Type of agent (e.g. `single_task`)                                 |
| `total_runs`           | Total number of runs in the selected timeframe                     |
| `total_sessions`       | Total number of sessions in the selected timeframe                 |
| `avg_runs_per_session` | Average runs per session                                           |
| `credits_consumed`     | Total credits consumed                                             |
| `input_tokens_total`   | Total input tokens across all runs                                 |
| `output_tokens_total`  | Total output tokens across all runs                                |
| `avg_latency_ms`       | Average response latency in milliseconds                           |
| `p95_latency_ms`       | 95th percentile latency - the latency below which 95% of runs fall |
| `error_rate`           | Proportion of runs that resulted in an error                       |

***

## Usage by User

Shows credit consumption, run counts, and activity broken down by user. Use this report to understand how usage is distributed across your team and track credit spend per person.

**To generate the report:**

1. Select **Download** on the Usage by User card.
2. Choose a **Timeframe** - this field is required.
3. Toggle **Include sub-organisations** if you want to roll up usage from child organisations into the report.
4. Select **Download**. The report downloads as a CSV file.

The exported CSV includes one row per user with the following columns:

| Column                | Description                                      |
| --------------------- | ------------------------------------------------ |
| `user_email`          | Email address of the user                        |
| `role`                | The user's role in the organisation              |
| `user_id`             | Unique identifier for the user                   |
| `total_runs`          | Total number of agent runs triggered by the user |
| `agents_created`      | Number of agents created by the user             |
| `credits_consumed`    | Total credits consumed                           |
| `input_tokens_total`  | Total input tokens across all runs               |
| `output_tokens_total` | Total output tokens across all runs              |

***

## Coming soon

**Usage by Model** and **Usage by Sub-Account** are currently in development.

* **Usage by Model** will show aggregate token consumption and cost broken down by model, making it easier to compare spend across providers.
* **Usage by Sub-Account** will provide org-level views of cross-account consumption, useful for teams managing multiple sub-organisations under one parent account.

***

## Next steps

* [Tracing](../agent%20eval/tracing)
* [Transcripts](transcripts)

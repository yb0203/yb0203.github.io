> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# E2B

E2B is an open-source runtime that lets your agents execute AI-generated code securely in isolated cloud sandboxes.

## Setup

1. In Agent Studio, go to **Tools** → **E2B** → **Connect**
2. Paste your API key from the [E2B dashboard](https://e2b.dev/dashboard)

## Available actions

| Action          | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `E2B__RUN_CODE` | Runs a Python code snippet inside a secure E2B cloud sandbox and returns the output. |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **E2B**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated data analysis pipelines**
An agent receives a CSV file and writes Python code to clean, transform, and summarize the data, then executes it in the E2B sandbox to return results without any risk to the host environment.

**AI-generated report generation**
An agent dynamically writes and runs Python scripts to generate charts, perform statistical calculations, and produce formatted reports based on user-supplied datasets.

**Safe code execution for developer assistants**
A coding assistant agent writes Python solutions to user problems and immediately validates them by running the code in an isolated sandbox, confirming correctness before returning the answer.

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Node reference

Nodes are the building blocks of a SuperFlow. The left **node palette** in the editor groups them by category — Control Flow, Data Transform, I/O & Compute, Utility, AI, Document, and Human-in-the-Loop. Use the search box at the top of the palette to filter, then drag a node onto the canvas (or click to drop it at the center).

This page covers the 10 most-used nodes in detail. The full catalog of remaining nodes is in the [quick reference table](#quick-reference-table) at the bottom.

<Note>
  **Every node is durably journaled.** Once a node completes successfully, its output is recorded; the engine will never re-execute it during the same run, even if the service restarts. Nodes that talk to external systems (AI Agent, LLM, HTTP Request, Tool, document nodes) also support **automatic retry on failure** — configure max attempts and backoff in the **Retry** section of the node's config drawer. See [Reliability](./reliability) for the full guarantees.
</Note>

## Trigger

**What it does.** Every SuperFlow starts with exactly one Trigger node. It defines the shape of the input data the workflow accepts and decides *how* the workflow gets started.

**When to use it.** Always — your SuperFlow won't run without one. Configure it once to declare your input fields, then choose how runs are initiated.

**Key parameters.**

* **Trigger mode** — choose Manual, Webhook, or Schedule. See [Triggers & schedules](./triggers-and-schedules) for the full guide.
* **Webhook secret** — used when the trigger mode is Webhook. External callers must include the matching secret in the `X-Webhook-Secret` header.
* **Schedule** — when the mode is Schedule, a visual cron builder lets you pick frequency, time, and timezone.

**Output.** Downstream nodes can reference Trigger fields with expressions like `{{ $('Trigger').json.customer_message }}`.

## AI Agent

**What it does.** Runs an existing Lyzr agent as a step in your SuperFlow. The full agent — its model, system prompt, tools, knowledge bases, memory — is reused exactly as configured in the Agents section of Studio. The node receives the upstream data, runs the agent's reasoning/tool loop, and returns its response.

**When to use it.** When you've already built (or want to build) a reusable agent in Studio and want to drop it into a workflow. Common use cases: classification, content generation, multi-tool task execution, customer reply drafting — anything where the same agent might be called from multiple workflows or directly.

The AI Agent node is *only* for reusing existing agents. If you want a single model call configured inline — system prompt, model, query, no tools — use the [LLM](#llm) node instead.

**Key parameters.**

* **Agent** — pick an existing agent from the dropdown. Its agent ID is filled in automatically and all of its configuration is reused as-is.
* **Query** — the input you want to send to the agent. This is almost always an expression like `{{ $('Trigger').json.question }}`.
* **Run as sub-agent** — when this AI Agent node is connected downstream of an LLM node, enabling this turns it into a callable tool of the parent LLM, instead of running it as a separate DAG step.

**Output.** The agent's response is emitted as the node's output.

## LLM

**What it does.** Calls a model inline on the node — pick a provider/model, write a system prompt, supply a query, get a response. By default it's a single, one-shot model call: no tools, no loop.

But it can do more. If you connect downstream **LLM**, **AI Agent**, or **Tool** nodes and set **Run as sub-agent** on them, those downstream nodes become **tools** that this LLM can call. The LLM then runs in an **agentic ReAct loop** — reasoning, picking sub-agents/tools to call, getting their responses, and continuing — until it decides it's done. This is how you build hierarchical agents (a planner LLM coordinating worker LLMs / agents / tools) without building a separate agent definition.

**When to use it.** For pure text transformations: summarize, rewrite, classify, extract, or format. Or — when wired with sub-agent nodes downstream — as the brain of a multi-step, multi-tool workflow. The LLM node is the node to reach for when you want the agent loop but don't want to bounce out to the Agents section to build a reusable agent first.

**Key parameters.**

* **Provider / Model / Credentials** — pick the model to call.
* **System prompt** — the instructions for the LLM, written directly on the node. Use the **Generate with AI** button to draft one from a description.
* **Query** — the user-side prompt, usually an expression pulling from upstream. Leave empty to auto-pick a message from common field names on the input (`message`, `query`, `input`, etc.).
* **Temperature**, **Max tokens** — standard generation controls.
* **Run as sub-agent** — flip this on when *this* LLM node is itself meant to be a tool of an upstream LLM node. When enabled, the node is skipped in the main DAG and runs only when the upstream LLM calls it.

**Output.** The model's response — a string by default. If the LLM ran an agentic loop with sub-agents, the response is the final answer after the loop terminates.

**AI Agent vs LLM at a glance.** Use **AI Agent** to reuse a fully-built Lyzr agent (with its tools, knowledge bases, memory, system prompt). Use **LLM** when you want the model configured right there on the node — as a single call, or as the head of a downstream sub-agent loop.

## Sub-agents and tool calls

LLM, AI Agent, and Tool nodes can be **delegated to** by an upstream **LLM node**. When a downstream node is marked as a sub-agent, it stops running as a normal DAG step and instead becomes a **tool** that the upstream LLM can choose to call during its reasoning loop. This is how you compose hierarchical agents — a planner coordinating workers — without writing a separate agent definition.

Only the LLM node can act as the delegator. The AI Agent node runs its own internal reasoning loop using the underlying agent's pre-configured tools, so it doesn't pick up downstream sub-agent nodes — to build a hierarchy in SuperFlow, the head of the loop must be an LLM node.

### How to enable it

Connect the downstream node directly under an **LLM node**. The sub-agent toggle only appears when this structural condition is satisfied (a direct connection, or a one-hop connection through a Wait for Approval node — see below).

On the **downstream** node, flip on the toggle in its configuration drawer:

| Downstream node | Toggle label         | What it becomes when on                                                                            |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| **LLM**         | **Run as sub-agent** | A callable tool that runs an inline LLM call (with the configured provider, model, system prompt). |
| **AI Agent**    | **Run as sub-agent** | A callable tool that runs the underlying Lyzr agent (with its tools, knowledge bases, memory).     |
| **Tool**        | **Run as tool call** | A callable that invokes the configured platform tool directly — no LLM in the loop.                |

The tool's name shown to the parent LLM is `delegate_to_<NodeName>` (or the tool's action name for Tool nodes). When you give your sub-agent nodes clear names ("Researcher", "Drafter", "Refund Issuer"), the parent's tool list reads naturally.

### Describing the sub-agent to the parent LLM

When you flip the toggle on, additional fields appear that help the parent LLM decide *when* to call this sub-agent and *what* extra context to pass it:

* **Agent Description / Tool Description** (AI Agent and Tool nodes) — free-text description of what the sub-agent does. The parent LLM sees this alongside the tool name when deciding which tool to call. Write it like you'd write a function docstring: *"Issue a refund for a customer order. Use when the customer message expresses dissatisfaction and references a specific order ID."* Clear, specific descriptions dramatically improve which-tool-to-call accuracy.
* **Fixed Inputs** (all three node types) — a JSON object of extra context fields injected alongside whatever message the parent LLM generates. Useful for piping through identity context, environment flags, or any constants that the parent doesn't need to reason about. Values support expressions, so you can pull from upstream nodes (for example, `{"user_id": "{{ $('Trigger').json.userId }}"}`).

The LLM sub-agent doesn't have its own description field — its system prompt and node name play that role for the parent LLM.

### Purple edges on the canvas

Edges that feed a sub-agent node are drawn in **purple** instead of the default style. This is a visual cue that the connected downstream isn't running as a normal DAG step — it's a tool of the parent LLM. Edges fed into normal downstream nodes stay the default color, so a mixed graph (some sub-agents, some sequential next-steps from the same LLM) is easy to read at a glance.

### Approval gating before each delegation

You can place a **Wait for Approval** node between the upstream LLM and a sub-agent. When the LLM decides to call that sub-agent during its reasoning loop, the approval node fires first — pausing the loop, surfacing the request in the Approvals drawer, and resuming only when a human approves. This is the safest way to gate a sub-agent that has irreversible real-world side effects (a Tool that issues refunds, sends emails, mutates production data) while still letting the LLM choose when to invoke it.

### How the upstream LLM behaves

Once any downstream node is marked as a sub-agent, the upstream LLM stops being a single one-shot call and runs an **agentic ReAct loop**:

1. The LLM receives its prompt and the list of sub-agent tools available to it (each with its description).
2. It reasons about which sub-agent (if any) to call, and with what arguments.
3. The sub-agent runs — its output becomes a tool result fed back to the parent LLM.
4. The parent reasons again, calls more sub-agents if needed, and continues until it produces a final answer.

The non-sub-agent downstream nodes (those *without* the toggle enabled) keep running normally as the next steps in the DAG once the upstream LLM finishes its loop.

### Nesting

Sub-agents can themselves have sub-agents. A "Planner" LLM can delegate to a "Researcher" LLM, which in turn delegates to a "Web Search" Tool node. Each level runs as its own ReAct loop. There's no hard depth limit — keep it shallow enough that you can reason about it.

### When to reach for it

* **Multi-agent orchestration** — a planner deciding which specialist agent to call for each request.
* **Conditional tool use** — letting the model decide whether a tool is needed, instead of always calling it.
* **Multi-step research/drafting** — research → critique → revise, with the model in control of the loop.
* **Gated sub-agents** — combining sub-agent delegation with Wait for Approval for safety on irreversible actions.
* **Anywhere you'd otherwise write a custom agent with tools** — but you'd rather configure the pieces visually.

## HTTP Request

**What it does.** Makes an HTTP call to any URL and returns the response. The bridge between your SuperFlow and the outside world.

**When to use it.** Calling a third-party API, posting to a webhook, hitting your own backend, uploading or downloading files, fetching data to feed into a downstream agent.

**Key parameters.**

* **Method** — GET, POST, PUT, PATCH, DELETE.
* **URL** — the endpoint. Expressions are supported, so you can build URLs from upstream data (`https://api.example.com/users/{{ $json.user_id }}`).
* **Authentication** — pick a scheme and the node signs the request automatically. See [Authentication](#http-authentication) below.
* **Headers** — key/value pairs. Common ones: `Content-Type`, custom app-specific headers. Auth headers are set by the chosen scheme — you usually won't set `Authorization` by hand.
* **Query parameters** — key/value pairs appended to the URL.
* **Body** — JSON, form, multipart, or raw text. Expression-aware, so any field can be templated from upstream nodes. To send a file as the body or as a multipart field, reference an upstream [file item](#working-with-files) directly.
* **Response Format** — *Auto* (parse JSON when the response is JSON, otherwise text), *Raw text* (always return as text), or *Binary blob* (wrap the body as a [file item](#working-with-files) — for downloading PDFs, images, signed URLs returning binary, etc.).

**Output.** The response body (shape depends on Response Format), plus status code and response headers.

### HTTP authentication

The HTTP Request node ships with built-in authentication for the patterns real production APIs use. Pick a scheme in the **Authentication** section of the node config and fill in the credentials — no Function-node workaround, no signing code to maintain.

| Scheme                          | When to use                                                                                                                                                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Bearer**                      | OAuth-style APIs and internal services with token auth — anything that wants `Authorization: Bearer <token>`.                                                                                                                                          |
| **Basic**                       | Username + password APIs that use HTTP Basic.                                                                                                                                                                                                          |
| **API Key**                     | Header or query-parameter API keys. Configure the parameter name (e.g. `X-API-Key`) and where it goes.                                                                                                                                                 |
| **OAuth2 (client credentials)** | Services with `client_id` + `client_secret` token exchange. SuperFlow fetches and refreshes the token automatically, caching per credential so successive calls reuse the same token until expiry. Configure token URL, scopes, and optional audience. |
| **AWS SigV4**                   | Calling AWS REST APIs directly — S3, Lambda, DynamoDB, anything signed with Signature Version 4. Configure region + service; SuperFlow handles canonical signing of the request body, headers, and URL. No Lambda intermediary.                        |
| **JWT bearer**                  | Services that need a signed JWT. Supports RS, ES, HS, and EdDSA algorithm families with configurable issuer, audience, subject, key ID, and TTL.                                                                                                       |
| **mTLS**                        | Internal services that require client certificates. Configure cert + key (and optional custom CA). The TLS handshake is performed per request; certs are not persisted.                                                                                |

Combine any scheme with the rest of the HTTP node config — auth runs before the request is sent, and the body/headers/expressions you configured still apply.

## Working with files

Files (PDFs, images, signed documents — anything binary) flow through a SuperFlow as **first-class items**, the same way numbers and strings do. There's no separate "binary channel" or conversion step between nodes. Any node that needs to read a file can reference it directly; any node that produces a file emits it as a regular workflow item.

A file item carries the contents, filename, content type, and size:

```json theme={null}
{
  "file": {
    "$blob": {
      "bytes": "<base64-encoded contents>",
      "filename": "invoice.pdf",
      "content_type": "application/pdf",
      "size": 24300
    }
  }
}
```

The `$blob` marker tells the engine "this isn't a normal JSON object — it's a wrapped file." You generally don't see it directly — you reference the field that contains it (`{{ $('Parse').json.file }}`) and the engine handles the unwrapping when the next node needs the raw bytes.

### Where files come into a SuperFlow

* **Trigger node** — when the Trigger expects a file, the editor's **Upload & Run** button accepts a drag-and-drop file. Webhook callers can also supply a file URL or `asset_id` in the trigger payload.
* **HTTP Request node** — set **Response Format** to **Binary blob** to wrap a binary response body as a file item with the response's filename and content type. Use this for downloading PDFs, images, signed URLs that return binary, etc.
* **Wait for Approval form** — an approver can attach a file via a typed file field on the approval form (see [Wait for Approval](#wait-for-approval)). The uploaded file lands on the resumed run as a file item.

### Where files go

* **HTTP Request node** — reference a file item in the request body and the node streams the raw bytes on the wire (not base64). Works for direct PUT/POST uploads, multipart form fields, and signed-URL uploads.
* **Document nodes** (Parse, Extraction, Label) — accept either a file URL string *or* an upstream file item. No conversion node needed in between.
* **Display in the editor** — file items render as downloadable previews in the per-node output drawer and the execution panel (filename + content type + Download button).

### Size limit

A single file can be up to **100 MB**. Files larger than this should be uploaded directly to your storage (S3, GCS, Azure Blob) and referenced by URL — typically via a Code or HTTP Request node that generates a signed URL.

## Error edges

Most nodes that call an external system have retries. But what should happen when retries are exhausted and the node fails permanently? Two paths, picked per node.

**Default.** If you don't configure anything, a permanent failure of any node fails the entire run. The failed step shows up in History with its error message preserved for diagnosis. This is the right default for steps that must succeed for the workflow to make sense — a critical database write, an LLM call that produces the final answer.

**Opt-in error edges.** For steps where partial failure is acceptable (or where you want to escalate failures to a human), open the node's settings drawer and enable **Handle errors**. A second output handle appears on the node — coloured red — for the error path.

When the node fails permanently:

* The error output fires with an item containing the error message, error code, and the original input.
* Whatever you wire to the error output runs as normal — a fallback HTTP call, an escalation to a Wait for Approval node, a notification to Slack or email.
* The rest of the workflow continues; the run as a whole doesn't error out.

When the node succeeds, the success output fires and the error output stays silent. The two paths are independent — only one fires per execution.

### When to reach for error edges

* **Fallback paths.** Try one API; fall back to another on failure. *"If the primary payment processor is down, route to the backup."*
* **Human escalation.** Pipe failures into a Wait for Approval so an operator can take over manually when the automation can't recover. Combines well with [HITL forms](#approval-forms) — the operator sees the failure context and decides what to do.
* **Per-iteration recovery inside a Loop.** Let one bad row of input fail without killing the rest of the batch — the failed iteration's error flows out, the rest of the iterations continue.

### How it composes

Error edges work with retries, not against them. The error output fires *after* retries are exhausted — not on the first failure. So configure retries for transient flakiness (network blips, rate limits) and error edges for permanent failures you want to recover from gracefully. The two together give you a graceful-degradation pattern at the visual layer, no try/catch code to maintain.

Existing workflows without the toggle behave exactly as before — error edges are strictly opt-in.

## Code

**What it does.** Runs JavaScript inline. The Code node opens a Monaco editor in the config drawer (with an Expand button for a full-screen editor) where you can write arbitrary JS to transform data, do math, run regex, or anything else that's awkward to express with the visual nodes.

**When to use it.** Quick data shaping that no other node does cleanly — combining fields, generating IDs, custom date formatting, filtering with custom logic, etc.

**Key parameters.**

* **Code** — the JavaScript. The following globals are available:
  * `$input.all()` — the full list of input items
  * `$input.first()` — the first input item
  * `$json` — the first input item's `json` payload (shorthand)
  * `$items` — alias for the full list
* **Timeout** — code is sandboxed and capped at 10 seconds.

<Warning>
  The Code node does **not** use the `return` keyword. The **last expression evaluated** in your code is automatically used as the output. Don't write `return { foo: 'bar' }` — write `{ foo: 'bar' }` as the final line, or assign to a variable and reference it last. Using `return` outside of a function will error.
</Warning>

**Output.** The value of the last expression evaluated. Emit an object or array of objects for downstream nodes to consume.

## If

**What it does.** Binary conditional branch. Evaluates a condition on the input data and routes the items to one of two outputs: *true* (output 0) or *false* (output 1).

**When to use it.** Splitting flow based on a value — "is the customer priority urgent?", "did the LLM say yes or no?", "is the response longer than 200 characters?".

**Two modes.**

* **Rule mode** (default) — a visual condition builder. Each row is *left operand · operator · right operand*. Both operands can be literals or expressions, and multiple rows are joined with AND / OR. Best for deterministic checks: numeric comparisons, exact string matches, field presence.
* **AI mode** — write the condition as a natural-language statement (for example, *"the customer message expresses frustration"* or *"the document mentions a refund request"*). An LLM evaluates the statement against the upstream data and returns true or false. Best for fuzzy, judgment-call routing that's awkward to express as a strict rule.

**Key parameters.**

* **Mode** — *Rule* or *AI*.
* **Conditions** (Rule mode) — rows of *left · operator · right*. Combine with AND / OR when there's more than one.
* **Condition statement** (AI mode) — the natural-language condition for the LLM to evaluate. Use expressions to include upstream context (for example, `Is "{{ $json.message }}" expressing frustration?`).

**Output.** Two output handles. Items that match the condition go out of the top (true) handle; the rest go out of the bottom (false) handle. Connect each handle to its own downstream chain.

## Set

**What it does.** Reshapes the data. You define key/value pairs, and the Set node emits items with those fields populated.

**When to use it.** Renaming fields, adding constants, building a clean payload for the next node, "stamping" a record with metadata before saving it.

**Key parameters.**

* **Assignments** — a list of `key = value` rows. The value can be a literal, a field reference (use the picker), or any expression.

**Output.** Items shaped exactly as your assignments specify.

## Loop

**What it does.** Iterates over the input items. For every item (or every batch of items), the body of the loop runs once and its outputs accumulate.

**When to use it.** Processing a list — for example, looping over rows from an HTTP response and running an agent on each, or batching 100 emails into groups of 10 for an external API.

**Key parameters.**

* **Mode** — *each* (run the body once per input item) or *batches* (group input items into chunks).
* **Batch size** — when mode is *batches*, how many items per group.
* **Loop body** — the nodes between the Loop node and its loop-back edge form the body. Each iteration runs the entire body before moving to the next item or batch.

**Output.** The combined outputs of every iteration, available downstream of the loop.

## Wait for Approval

**What it does.** Pauses the SuperFlow and asks a human to approve or reject before continuing — optionally with a typed form for the approver to fill in. The run stays paused (durably — restarts won't lose it) until someone responds.

**When to use it.** Anywhere you want a safety gate: before sending an email an LLM drafted, before charging a customer, before deleting records, before publishing content. Reach for a form on top of the basic approve/reject when the approver needs to supply extra context — notes, a category, a signed document — that the rest of the workflow depends on.

**Key parameters.**

* **Approval message** — what the approver sees. Markdown is supported, and expressions are encouraged so the message can show upstream context. For example: `Please review the proposed reply to {{ $json.customer_email }}: {{ $json.draft_reply }}`.
* **Form schema** — an optional list of typed fields the approver fills in alongside the decision. See [Approval forms](#approval-forms) below.
* **Notification emails** — optional list of email addresses to ping when the approval pauses. The email links to the approval detail page.

**Output.** Two output handles:

* **Output 0 (approved)** — items continue down this path when a human approves. The input items flow through, **merged with any form values the approver submitted**.
* **Output 1 (rejected)** — items continue down this path when a human rejects, also merged with any form values submitted (plus a `rejection_reason` alias).

Approvers act from the **Approvals** drawer in the editor, the **Approvals** tab in History, or from any external system you wire up to the resume API.

### Approval forms

Open the **Form schema** editor on the Wait for Approval node to add fields the approver will fill in. Each field has:

| Setting         | What it does                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | The key the submitted value lands under on the output item (e.g. `reviewer_notes`, `signed_document`).                    |
| **Type**        | One of: *text*, *number*, *boolean*, *dropdown*, *date*, or *file*. The type controls which UI control the approver sees. |
| **Label**       | Display label shown to the approver. Defaults to the field name.                                                          |
| **Description** | Optional helper text rendered under the field.                                                                            |
| **Options**     | For *dropdown* fields — the list of selectable values.                                                                    |
| **Required on** | When the field must be filled. One of *Never*, *On approve*, *On reject*, or *On both*.                                   |

The **Required on** dropdown is what lets you say *"reviewer notes are mandatory if you reject, but optional if you approve"* — or the reverse. Boolean fields skip the Required check (they always have a value).

When the workflow pauses, the approver sees the message + the form. Submitting either decision validates the required fields for that decision, then merges the submitted values into the items flowing through the corresponding output. The same validation runs server-side, so direct API submissions can't bypass it.

**File fields specifically** — when an approver uploads a file, it becomes a [file item](#working-with-files) in the merged output. The next node downstream can send it to an HTTP endpoint, parse it, or display it as a download — same as any file produced anywhere else in the workflow.

A typical pattern:

1. Wait for Approval node with a form: `reviewer_notes` (text, required on reject), `category` (dropdown: expense / capex / refund, required on approve), `signed_approval` (file, required on approve).
2. The approve path connects to an HTTP Request that posts the original record + the form fields + the uploaded file to your system of record.
3. The reject path connects to an HTTP Request (or email node) that records the rejection with the reviewer's notes.

## Execute Workflow

**What it does.** Calls another SuperFlow as a single step. The sub-workflow runs to completion, and its final output is emitted as this node's output.

**When to use it.** Reuse — extract a common sub-flow (a "send notification" pipeline, a "validate customer" pipeline) into its own SuperFlow and call it from many parents.

**Key parameters.**

* **Source** — either pick an existing SuperFlow from the dropdown (recommended) or paste an inline workflow JSON.
* **Input** — the data passed to the sub-workflow's Trigger node.

**Output.** Whatever the sub-workflow's final node returned.

## Quick reference table

The remaining nodes — useful but typically less central to a first SuperFlow. Each is one drag away from the same node palette.

| Node                  | Category       | What it does                                                                                                             |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Switch**            | Control Flow   | Multi-way conditional. Routes items to one of several outputs based on which case matches first.                         |
| **Merge**             | Control Flow   | Combines outputs from multiple upstream branches back into a single stream.                                              |
| **Filter**            | Control Flow   | Drops items that don't satisfy a condition; items that do pass through unchanged.                                        |
| **Stop and Error**    | Control Flow   | Halts execution with a custom error message. Useful inside a conditional path you want to fail loudly.                   |
| **Wait**              | Control Flow   | Pauses for a fixed duration (seconds, minutes, hours, or days) before continuing.                                        |
| **NoOp**              | Control Flow   | Pass-through. Acts as a junction for cleaner graphs.                                                                     |
| **Aggregate**         | Data Transform | Roll up data across items into a single summary item.                                                                    |
| **Sort**              | Data Transform | Reorder items by a field.                                                                                                |
| **Limit**             | Data Transform | Take the first N items, drop the rest.                                                                                   |
| **Remove Duplicates** | Data Transform | Deduplicate items by a field or set of fields.                                                                           |
| **Rename Keys**       | Data Transform | Rename fields without otherwise changing the data.                                                                       |
| **DateTime**          | Utility        | Parse, format, or shift dates between timezones.                                                                         |
| **Crypto**            | Utility        | Hash, sign, or encode data (SHA, HMAC, base64, etc.).                                                                    |
| **XML**               | Utility        | Convert between XML and JSON.                                                                                            |
| **AI Swarm**          | AI             | Break a complex query into sub-tasks, run an agent on each in parallel, then aggregate the results into a single answer. |
| **Tool**              | AI             | Call a Lyzr platform tool directly, without an agent and without an LLM in the loop.                                     |
| **Parse**             | Document       | Extract text from PDFs, DOCX, images, and other documents. Tiers from basic OCR to vision-LLM-assisted parsing.          |
| **Extraction**        | Document       | Pull structured fields out of a document using a JSON schema you supply.                                                 |
| **Label**             | Document       | Classify text or a document against a set of rules and return the matching label.                                        |

For details on any node, hover its entry in the palette in the editor — every node ships with inline parameter descriptions next to each field.

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Studio

> The main entry point for the Lyzr ADK

The `Studio` class is the main entry point for the Lyzr ADK. It manages authentication, connections, and provides methods to create and manage all resources.

## Quick Start

```python theme={null}
from lyzr import Studio

# Initialize with API key
studio = Studio(api_key="your-api-key")

# Create an agent
agent = studio.create_agent(
    name="My Agent",
    provider="gpt-4o",
    role="Assistant",
    goal="Help users",
    instructions="Be helpful"
)

# Run the agent
response = agent.run("Hello!")
print(response.response)
```

## Initialization

```python theme={null}
Studio(
    api_key: str = None,      # API key (or use LYZR_API_KEY env var)
    log: str = "warning"      # Logging level
)
```

### Parameters

| Parameter | Type | Required | Default     | Description                                                                   |
| --------- | ---- | -------- | ----------- | ----------------------------------------------------------------------------- |
| `api_key` | str  | No       | None        | Lyzr API key. If not provided, reads from `LYZR_API_KEY` environment variable |
| `log`     | str  | No       | `"warning"` | Logging level: `"debug"`, `"info"`, `"warning"`, `"error"`, `"none"`          |

### Example

```python theme={null}
from lyzr import Studio

# With explicit API key
studio = Studio(api_key="sk-xxx")

# Using environment variable
import os
os.environ["LYZR_API_KEY"] = "sk-xxx"
studio = Studio()

# With debug logging
studio = Studio(api_key="sk-xxx", log="debug")
```

***

## Agent Methods

### create\_agent()

Create a new agent.

```python theme={null}
agent = studio.create_agent(
    name: str,                          # Agent name
    provider: str = None,               # LLM provider/model (e.g., "gpt-4o")
    role: str = None,                   # Agent role
    goal: str = None,                   # Agent goal
    instructions: str = None,           # Agent instructions
    temperature: float = 0.7,           # Creativity (0.0-2.0)
    top_p: float = 0.9,                 # Nucleus sampling (0.0-1.0)
    response_model: BaseModel = None,   # Pydantic model for structured output
    memory: int = None,                 # Number of messages to remember
    contexts: List[Context] = None,     # Background contexts
    rai_policy: RAIPolicy = None,       # Responsible AI policy
    file_output: bool = False,          # Enable file generation
    image_model: ImageModelConfig = None,  # Image generation model
    llm_credential_id: str = None,      # Custom LLM credential ID
)
```

```python theme={null}
agent = studio.create_agent(
    name="Support Bot",
    provider="gpt-4o",
    role="Customer support",
    goal="Resolve issues quickly",
    instructions="Be empathetic and professional"
)
```

### get\_agent()

Get an agent by ID.

```python theme={null}
agent = studio.get_agent(agent_id: str)
```

```python theme={null}
agent = studio.get_agent("agent_123")
print(agent.name)
```

### list\_agents()

List all agents.

```python theme={null}
agents = studio.list_agents()
```

```python theme={null}
agents = studio.list_agents()
for agent in agents:
    print(f"{agent.id}: {agent.name}")
```

### delete\_agent()

Delete an agent by ID.

```python theme={null}
success = studio.delete_agent(agent_id: str)
```

```python theme={null}
studio.delete_agent("agent_123")
```

### bulk\_delete\_agents()

Delete multiple agents.

```python theme={null}
success = studio.bulk_delete_agents(agent_ids: List[str])
```

```python theme={null}
studio.bulk_delete_agents(["agent_1", "agent_2", "agent_3"])
```

***

## Knowledge Base Methods

### create\_knowledge\_base()

Create a new knowledge base for RAG.

```python theme={null}
kb = studio.create_knowledge_base(
    name: str,                          # KB name
    vector_store: str = "qdrant",       # Vector store provider
    embedding_model: str = "text-embedding-3-large",  # Embedding model
    llm_model: str = "gpt-4o",          # LLM for query processing
    description: str = None,            # KB description
)
```

```python theme={null}
kb = studio.create_knowledge_base(
    name="Product Documentation",
    vector_store="qdrant",
    embedding_model="text-embedding-3-large"
)
```

### get\_knowledge\_base()

Get a knowledge base by ID.

```python theme={null}
kb = studio.get_knowledge_base(kb_id: str)
```

```python theme={null}
kb = studio.get_knowledge_base("kb_123")
print(kb.name)
```

### list\_knowledge\_bases()

List all knowledge bases.

```python theme={null}
kbs = studio.list_knowledge_bases()
```

```python theme={null}
kbs = studio.list_knowledge_bases()
for kb in kbs:
    print(f"{kb.id}: {kb.name}")
```

### delete\_knowledge\_base()

Delete a knowledge base.

```python theme={null}
success = studio.delete_knowledge_base(kb_id: str)
```

```python theme={null}
studio.delete_knowledge_base("kb_123")
```

***

## Context Methods

### create\_context()

Create a context (key-value background information).

```python theme={null}
context = studio.create_context(
    name: str,      # Context name/key
    value: str      # Context value
)
```

```python theme={null}
context = studio.create_context(
    name="company_info",
    value="Acme Corp - Founded 2020, serves 50k customers"
)
```

### get\_context()

Get a context by ID.

```python theme={null}
context = studio.get_context(context_id: str)
```

### list\_contexts()

List all contexts.

```python theme={null}
contexts = studio.list_contexts()
```

***

## RAI Policy Methods

### create\_rai\_policy()

Create a Responsible AI policy.

```python theme={null}
from lyzr import PIIType, PIIAction, SecretsAction

policy = studio.create_rai_policy(
    name: str,                                      # Policy name
    description: str,                               # Policy description
    toxicity_threshold: float = 0.4,                # Toxicity threshold (0.0-1.0)
    prompt_injection: bool = False,                 # Enable prompt injection detection
    secrets_detection: SecretsAction = SecretsAction.DISABLED,  # Secrets handling
    pii_detection: Dict[PIIType, PIIAction] = None, # PII handling
    banned_topics: List[str] = None,                # Topics to ban
    nsfw_check: bool = False,                       # Enable NSFW detection
    nsfw_threshold: float = 0.8,                    # NSFW threshold
)
```

```python theme={null}
from lyzr import PIIType, PIIAction, SecretsAction

policy = studio.create_rai_policy(
    name="SafePolicy",
    description="Content safety guardrails",
    toxicity_threshold=0.3,
    secrets_detection=SecretsAction.MASK,
    pii_detection={
        PIIType.CREDIT_CARD: PIIAction.BLOCK,
        PIIType.EMAIL: PIIAction.REDACT
    }
)
```

### get\_rai\_policy()

Get a RAI policy by ID.

```python theme={null}
policy = studio.get_rai_policy(policy_id: str)
```

### list\_rai\_policies()

List all RAI policies.

```python theme={null}
policies = studio.list_rai_policies()
```

***

## Memory Methods

### create\_memory\_credential()

Create a memory credential for Lyzr memory.

```python theme={null}
memory = studio.create_memory_credential(
    provider: str = "lyzr",     # Memory provider
    config: dict = None         # Provider-specific config
)
```

```python theme={null}
memory = studio.create_memory_credential(provider="lyzr")
```

***

## Module Access

You can also access methods through dedicated modules:

```python theme={null}
studio = Studio(api_key="sk-xxx")

# Agent methods
agent = studio.agents.create(...)
agent = studio.agents.get(agent_id)
agents = studio.agents.list()

# Knowledge base methods
kb = studio.knowledge_bases.create(...)
kb = studio.knowledge_bases.get(kb_id)

# Context methods
ctx = studio.contexts.create(...)
ctx = studio.contexts.get(context_id)

# RAI methods
policy = studio.rai.create_policy(...)
policy = studio.rai.get_policy(policy_id)

# Memory methods
memory = studio.memory.create_credential(...)
```

***

## Context Manager

Use Studio as a context manager for automatic cleanup:

```python theme={null}
with Studio(api_key="sk-xxx") as studio:
    agent = studio.create_agent(
        name="Assistant",
        provider="gpt-4o"
    )
    response = agent.run("Hello!")
# Connection automatically closed
```

***

## Logging

Control ADK logging verbosity:

```python theme={null}
# Debug - show all details
studio = Studio(log="debug")

# Info - general information
studio = Studio(log="info")

# Warning - warnings and errors only (default)
studio = Studio(log="warning")

# Error - errors only
studio = Studio(log="error")

# None - disable logging
studio = Studio(log="none")
```

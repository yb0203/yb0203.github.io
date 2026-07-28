> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing Knowledge Bases

> Update, delete, and manage knowledge base documents

Manage knowledge bases and their documents with operations like list, update, delete, and reset.

## Quick Start

```python theme={null}
from lyzr import Studio

studio = Studio(api_key="your-api-key")

# List all knowledge bases
kbs = studio.list_knowledge_bases()
for kb in kbs:
    print(f"{kb.id}: {kb.name}")

# Get a specific knowledge base
kb = studio.get_knowledge_base("kb_id")

# List documents
docs = kb.list_documents()

# Delete specific documents
kb.delete_documents(["doc_id_1", "doc_id_2"])

# Reset (clear all documents)
kb.reset()

# Delete the knowledge base
kb.delete()
```

***

## Get Knowledge Base

Retrieve a knowledge base by ID.

```python theme={null}
kb = studio.get_knowledge_base(kb_id: str) -> KnowledgeBase
```

### Example

```python theme={null}
kb = studio.get_knowledge_base("kb_abc123")

print(f"Name: {kb.name}")
print(f"Vector Store: {kb.vector_store_provider}")
print(f"Embedding: {kb.embedding_model}")
print(f"LLM: {kb.llm_model}")
```

***

## List Knowledge Bases

List all knowledge bases in your account.

```python theme={null}
kbs = studio.list_knowledge_bases() -> KnowledgeBaseList
```

### Example

```python theme={null}
kbs = studio.list_knowledge_bases()

print(f"Total knowledge bases: {len(kbs)}")

for kb in kbs:
    print(f"- {kb.id}: {kb.name}")
    print(f"  Provider: {kb.vector_store_provider}")
    print(f"  Created: {kb.created_at}")
```

### Filtering

```python theme={null}
kbs = studio.list_knowledge_bases()

# Find by name pattern
support_kbs = [kb for kb in kbs if "support" in kb.name]

# Find by vector store
qdrant_kbs = [kb for kb in kbs if "Qdrant" in kb.vector_store_provider]
```

***

## List Documents

List all documents in a knowledge base.

```python theme={null}
docs = kb.list_documents() -> List[Document]
```

### Example

```python theme={null}
docs = kb.list_documents()

print(f"Documents in {kb.name}:")
for doc in docs:
    print(f"- {doc.id}: {doc.source}")
```

### Document Properties

| Property     | Type | Description                  |
| ------------ | ---- | ---------------------------- |
| `id`         | str  | Document ID                  |
| `source`     | str  | Source identifier/filename   |
| `text`       | str  | Document text (if available) |
| `metadata`   | dict | Document metadata            |
| `created_at` | str  | Creation timestamp           |

***

## Delete Documents

Delete specific documents from a knowledge base.

```python theme={null}
kb.delete_documents(doc_ids: List[str]) -> bool
```

### Example

```python theme={null}
# List documents first
docs = kb.list_documents()
for doc in docs:
    print(f"{doc.id}: {doc.source}")

# Delete specific documents
kb.delete_documents(["doc_123", "doc_456"])

# Verify deletion
remaining = kb.list_documents()
print(f"Remaining documents: {len(remaining)}")
```

### Delete by Pattern

```python theme={null}
docs = kb.list_documents()

# Find outdated documents
old_docs = [doc.id for doc in docs if "2023" in doc.source]

# Delete them
if old_docs:
    kb.delete_documents(old_docs)
    print(f"Deleted {len(old_docs)} outdated documents")
```

***

## Reset Knowledge Base

Clear all documents from a knowledge base while keeping the configuration.

```python theme={null}
kb.reset() -> bool
```

### Example

```python theme={null}
# Clear all documents
kb.reset()

# Verify
docs = kb.list_documents()
print(f"Documents after reset: {len(docs)}")  # 0

# Re-add documents
kb.add_pdf("new_document.pdf")
```

<Note>
  Reset removes all documents but keeps the knowledge base configuration. Use this to refresh content without recreating the KB.
</Note>

***

## Update Knowledge Base

Update knowledge base configuration.

```python theme={null}
kb.update(
    description: str = None,
    meta_data: dict = None
) -> KnowledgeBase
```

### Parameters

| Parameter     | Type | Description         |
| ------------- | ---- | ------------------- |
| `description` | str  | New description     |
| `meta_data`   | dict | Additional metadata |

### Example

```python theme={null}
kb = kb.update(
    description="Updated customer support documentation - Q1 2024"
)

print(f"New description: {kb.description}")
```

***

## Delete Knowledge Base

Permanently delete a knowledge base and all its documents.

```python theme={null}
kb.delete() -> bool
```

### Example

```python theme={null}
kb = studio.get_knowledge_base("kb_abc123")
success = kb.delete()

if success:
    print("Knowledge base deleted")
```

### Delete by ID

```python theme={null}
studio.delete_knowledge_base("kb_abc123")
```

***

## Bulk Delete

Delete multiple knowledge bases at once.

```python theme={null}
studio.bulk_delete_knowledge_bases(kb_ids: List[str]) -> bool
```

### Example

```python theme={null}
# Get all knowledge bases
kbs = studio.list_knowledge_bases()

# Find old or unused ones
old_kb_ids = [kb.id for kb in kbs if "deprecated" in kb.name.lower()]

# Bulk delete
if old_kb_ids:
    studio.bulk_delete_knowledge_bases(old_kb_ids)
    print(f"Deleted {len(old_kb_ids)} knowledge bases")
```

***

## Knowledge Base Properties

Access KB properties directly:

```python theme={null}
kb = studio.get_knowledge_base("kb_id")

# Basic info
print(kb.id)
print(kb.name)
print(kb.description)
print(kb.collection_name)

# Configuration
print(kb.vector_store_provider)
print(kb.embedding_model)
print(kb.llm_model)

# Credentials
print(kb.vector_db_credential_id)
print(kb.embedding_credential_id)
print(kb.llm_credential_id)

# Timestamps
print(kb.created_at)
print(kb.updated_at)

# Convert to dict
data = kb.to_dict()
```

***

## Examples

### Content Refresh Workflow

```python theme={null}
kb = studio.get_knowledge_base("docs_kb")

# Clear old content
kb.reset()

# Add fresh content
kb.add_website("https://docs.example.com", max_pages=100)
kb.add_pdf("latest_manual.pdf")

print("Knowledge base refreshed")
```

### Document Management

```python theme={null}
kb = studio.get_knowledge_base("support_kb")

# List current documents
docs = kb.list_documents()
print(f"Current documents: {len(docs)}")

# Remove specific outdated docs
outdated = [doc.id for doc in docs if "v1" in doc.source]
if outdated:
    kb.delete_documents(outdated)

# Add new version
kb.add_pdf("manual_v2.pdf")

# Verify
new_docs = kb.list_documents()
print(f"Documents after update: {len(new_docs)}")
```

### Cleanup Script

```python theme={null}
kbs = studio.list_knowledge_bases()

# Find empty knowledge bases
for kb in kbs:
    docs = kb.list_documents()
    if len(docs) == 0:
        print(f"Empty KB: {kb.name} ({kb.id})")
        # Optionally delete
        # kb.delete()
```

### Backup and Recreation

```python theme={null}
# Get current KB info
old_kb = studio.get_knowledge_base("old_kb_id")

# Create new KB with same config
new_kb = studio.create_knowledge_base(
    name=f"{old_kb.name}_v2",
    vector_store="qdrant",
    embedding_model=old_kb.embedding_model,
    llm_model=old_kb.llm_model,
    description=old_kb.description
)

# Add documents to new KB
new_kb.add_website("https://docs.example.com")
new_kb.add_pdf("manual.pdf")

# Delete old KB
old_kb.delete()

print(f"Migrated to new KB: {new_kb.id}")
```

***

## Error Handling

```python theme={null}
from lyzr.exceptions import NotFoundError, ValidationError, APIError

try:
    kb = studio.get_knowledge_base("nonexistent_id")
except NotFoundError:
    print("Knowledge base not found")

try:
    kb.delete_documents([])  # Empty list
except ValidationError:
    print("No document IDs provided")

try:
    kb.delete()
except APIError as e:
    print(f"Failed to delete: {e.message}")
```

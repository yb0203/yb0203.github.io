> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Agent by ID Endpoint

> Retrieve agent details using the agent ID.

### Endpoint

**GET** `/v3/agents/{agent_id}`

### Authentication

* Requires an API key (`x-api-key`) in the request headers.

### Path Parameters

| Parameter  | Type   | Description                                 |
| ---------- | ------ | ------------------------------------------- |
| `agent_id` | string | Unique identifier of the agent to retrieve. |

### Request Example (cURL)

```sh theme={null}
curl -X GET "https://agent-prod.studio.lyzr.ai/v3/agents/{agent_id}"
-H "accept: application/json" ^
-H "x-api-key: sk-default-REPLACED-API-KEY"
```

### Response Example

```json theme={null}
{
  "agent_id": "67e21aecd0da0fb69fe95780",
  "name": "Finance Advisor",
  "description": "Personalized Financial Planning Assistant",
  "model": "gpt-4o-mini",
  "provider_id": "OpenAI",
  "features": [...]
}
```

***


## OpenAPI

````yaml get /agent/{agent_id}
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v2
security: []
paths:
  /agent/{agent_id}:
    get:
      summary: Get Agent by ID
      description: Retrieve agent details using the agent ID.
      parameters:
        - name: agent_id
          in: path
          required: true
          description: The ID of the agent to retrieve.
          schema:
            type: string
      responses:
        '200':
          description: Agent retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    example: 67e3aff94c4db47d2999cdef
                  name:
                    type: string
                    example: Sample Agent
                  description:
                    type: string
                    example: This is an example agent response
        '401':
          description: Unauthorized - Invalid API key
        '404':
          description: Agent not found
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
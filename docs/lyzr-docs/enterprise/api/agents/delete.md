> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Delete Agent Endpoint

> Deletes an agent from the system using its unique agent_id.

### Endpoint

**DELETE** `/v3/agents/{agent_id}`

### Authentication

* Requires an API key (`x-api-key`) in the request headers.

### Path Parameters

| Parameter  | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| `agent_id` | string | Unique identifier of the agent to delete. |

### Request Example (cURL)

```sh theme={null}
curl -X DELETE "https://agent-prod.studio.lyzr.ai/v3/agents/{agent_id}" ^
-H "accept: application/json" ^
-H "x-api-key: sk-default-REPLACED-API-KEY"
```

### Response Example

```json theme={null}
{
  "message": "Agent deleted successfully."
}
```

***


## OpenAPI

````yaml delete /agents/{agent_id}
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /agents/{agent_id}:
    delete:
      tags:
        - Agents
      summary: Delete Agent by ID
      description: Deletes an agent from the system using its unique agent_id.
      operationId: deleteAgentById
      parameters:
        - name: agent_id
          in: path
          required: true
          description: Unique identifier of the agent to delete.
          schema:
            type: string
      responses:
        '200':
          description: Agent deleted successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Agent deleted successfully.
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
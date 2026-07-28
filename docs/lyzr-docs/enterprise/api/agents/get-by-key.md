> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Agents By API Key

> Retrieves all agents associated with a given API key. This is useful for managing multiple agents and checking their configurations.

### **Endpoint:**

**GET** `/v3/agents/`

### **Request Headers:**

| Header    | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| x-api-key | String | Yes      | API key for authentication                  |
| accept    | String | Yes      | Expected response format (application/json) |

### **Request Example (cURL):**

```sh theme={null}
curl -X GET "https://agent-prod.studio.lyzr.ai/v3/agents/" ^
     -H "accept: application/json" ^
     -H "x-api-key: sk-default-XXXXXXX"
```

### **Request Example (Python):**

```python theme={null}
import requests

url = "https://agent-prod.studio.lyzr.ai/v3/agents/"
headers = {
    "accept": "application/json",
    "x-api-key": "sk-default-XXXXXXX"
}

response = requests.get(url, headers=headers)
print(response.status_code)
print(response.json())  # Print response data
```

### **Response:**

```json theme={null}
{
  "agents": [
    {
      "id": "12345",
      "name": "Finance Advisor",
      "description": "Personalized Financial Planning Assistant"
    }
  ]
}
```


## OpenAPI

````yaml get /agents/
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /agents/:
    get:
      tags:
        - Agents
      summary: Get Agents by API Key
      description: >-
        Retrieves all agents associated with a given API key. This is useful for
        managing multiple agents and checking their configurations.
      operationId: getAgentsByApiKey
      parameters: []
      responses:
        '200':
          description: A list of agents associated with the provided API key
          content:
            application/json:
              schema:
                type: object
                properties:
                  agents:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          example: '12345'
                        name:
                          type: string
                          example: Finance Advisor
                        description:
                          type: string
                          example: Personalized Financial Planning Assistant
        '401':
          description: Unauthorized - Invalid API key
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
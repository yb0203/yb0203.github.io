> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Agent Version

> Retrieve a specific version of an agent using agent ID and version ID.



## OpenAPI

````yaml get /agents/{agent_id}/versions/{version_id}
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /agents/{agent_id}/versions/{version_id}:
    get:
      summary: Get Agent Version
      description: Retrieve a specific version of an agent using agent ID and version ID.
      parameters:
        - name: agent_id
          in: path
          required: true
          description: The ID of the agent
          schema:
            type: string
            example: 683f4657fcc016e56d66dbe8
        - name: version_id
          in: path
          required: true
          description: The ID of the agent version
          schema:
            type: string
            example: e852cf2b-e1dc-4947-85ce-93edc7b885ee
      responses:
        '200':
          description: Agent version retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  version_id:
                    type: string
                    example: e852cf2b-e1dc-4947-85ce-93edc7b885ee
                  agent_id:
                    type: string
                    example: 683f4657fcc016e56d66dbe8
                  name:
                    type: string
                    example: My Custom Agent v1.2
                  created_at:
                    type: string
                    format: date-time
                    example: '2025-06-01T12:00:00.000Z'
                  metadata:
                    type: object
                    additionalProperties: true
                    example:
                      use_case: Customer Support
                      status: active
        '401':
          description: Unauthorized - Invalid API key
        '404':
          description: Agent or version not found
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
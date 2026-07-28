> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent versions

> Retrieve a list of all versions for a given agent.



## OpenAPI

````yaml get /agents/{agent_id}/versions
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /agents/{agent_id}/versions:
    get:
      summary: List Agent Versions
      description: Retrieve a list of all versions for a given agent.
      parameters:
        - name: agent_id
          in: path
          required: true
          description: The ID of the agent to retrieve versions for.
          schema:
            type: string
            example: 683f4657fcc016e56d66dbe8
      responses:
        '200':
          description: List of agent versions retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  versions:
                    type: array
                    items:
                      type: object
                      properties:
                        version_id:
                          type: string
                          example: v1.0.0
                        created_at:
                          type: string
                          format: date-time
                          example: '2025-06-03T12:00:00Z'
                        description:
                          type: string
                          example: Initial release
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
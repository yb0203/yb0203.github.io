> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Stream Chat

> Start a streaming chat interaction with an agent using the v3 inference stream endpoint.



## OpenAPI

````yaml post /inference/stream/
openapi: 3.0.3
info:
  title: Lyzr Agent Streaming Inference API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /inference/stream/:
    post:
      summary: Stream Chat With Agent (Inference v3)
      description: >-
        Start a streaming chat interaction with an agent using the v3 inference
        stream endpoint.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                user_id:
                  type: string
                  example: default_user
                system_prompt_variables:
                  type: object
                  description: Optional dynamic variables to fill in the system prompt
                  example: {}
                agent_id:
                  type: string
                  example: string
                session_id:
                  type: string
                  example: string
                message:
                  type: string
                  example: string
                filter_variables:
                  type: object
                  description: Optional filter values for prompt logic
                  example: {}
                features:
                  type: array
                  description: Optional features to modify behavior
                  items:
                    type: object
                    additionalProperties: true
                    example:
                      additionalProp1: {}
              required:
                - user_id
                - agent_id
                - session_id
                - message
      responses:
        '200':
          description: Streaming started successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  response:
                    type: string
                    example: Streamed response will appear here
        '400':
          description: Bad request – Invalid input
        '401':
          description: Unauthorized – Invalid API key
        '500':
          description: Server error (e.g., user not found)
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
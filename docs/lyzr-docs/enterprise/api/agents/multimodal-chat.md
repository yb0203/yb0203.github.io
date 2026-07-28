> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Initiate/Continue Agent Chat

> Initiates a new chat session or continues an existing one with a specified agent. Supports multimodal interaction by referencing uploaded asset IDs and optional feature configuration.




## OpenAPI

````yaml post /inference/chat/
openapi: 3.0.3
info:
  title: Lyzr Agent Inference API
  version: 1.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai/v3
security: []
paths:
  /inference/chat/:
    post:
      summary: Chat With Agent (Inference v3)
      description: >-
        Perform a chat interaction with an agent using the inference engine
        (v3).
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                user_id:
                  type: string
                  example: rohithchandra1952@gmail.com
                system_prompt_variables:
                  type: object
                  description: Optional dynamic variables to fill in the system prompt
                  example: {}
                agent_id:
                  type: string
                  example: 683f4657fcc016e56d66dbe8
                session_id:
                  type: string
                  example: 683f4657fcc016e56d66dbe8-o6aq76s9a5
                message:
                  type: string
                  example: Hello, what are you upto?
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
          description: Successful agent response
          content:
            application/json:
              schema:
                type: object
                properties:
                  response:
                    type: string
                    example: Hello! How can I assist you today?
        '400':
          description: Bad request – Invalid input
        '401':
          description: Unauthorized – Invalid API key
        '500':
          description: Server error
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
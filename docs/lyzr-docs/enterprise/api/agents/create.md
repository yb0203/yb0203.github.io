> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Agent

> Create a new agent by providing comprehensive configuration details. Returns the ID of the newly created agent.



## OpenAPI

````yaml post /v3/agents/
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 3.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai
security: []
paths:
  /v3/agents/:
    post:
      summary: Create Agent Endpoint
      description: >-
        Create a new agent by providing comprehensive configuration details.
        Returns the ID of the newly created agent.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Customer Support Agent
                description:
                  type: string
                  example: Handles level 1 customer inquiries.
                agent_role:
                  type: string
                agent_instructions:
                  type: string
                agent_goal:
                  type: string
                agent_context:
                  type: string
                agent_output:
                  type: string
                examples:
                  type: string
                features:
                  type: array
                  items:
                    type: string
                tools:
                  type: array
                  items:
                    type: string
                tool_usage_description:
                  type: string
                llm_credential_id:
                  type: string
                response_format:
                  type: object
                  additionalProperties: true
                provider_id:
                  type: string
                  example: openai
                model:
                  type: string
                  example: gpt-4o
                top_p:
                  type: number
                  format: float
                  example: 1
                temperature:
                  type: number
                  format: float
                  example: 0.7
                managed_agents:
                  type: array
                  items:
                    type: object
                    properties:
                      id:
                        type: string
                      name:
                        type: string
                      usage_description:
                        type: string
                tool_configs:
                  type: array
                  items:
                    type: object
                    properties:
                      tool_name:
                        type: string
                      tool_source:
                        type: string
                      action_names:
                        type: array
                        items:
                          type: string
                      persist_auth:
                        type: boolean
                        default: false
                      server_id:
                        type: string
                      provider_uuid:
                        type: string
                      credential_id:
                        type: string
                store_messages:
                  type: boolean
                  default: true
                file_output:
                  type: boolean
                  default: false
                a2a_tools:
                  type: array
                  items:
                    type: object
                    properties:
                      base_url:
                        type: string
                voice_config:
                  type: object
                  additionalProperties: true
                additional_model_params:
                  type: object
                  additionalProperties: true
                image_output_config:
                  type: object
                  properties:
                    model:
                      type: string
                    credential_id:
                      type: string
                max_iterations:
                  type: integer
                  default: 25
                git_agent:
                  type: object
                  properties:
                    enabled:
                      type: boolean
                      default: false
                    repo_name:
                      type: string
                    branch:
                      type: string
                      default: main
                    environments:
                      type: array
                      items:
                        type: string
                    branches:
                      type: array
                      items:
                        type: string
                    reviewers:
                      type: array
                      items:
                        type: string
                    pat:
                      type: string
                    org:
                      type: string
                    provider:
                      type: string
                      default: github
                    repo_url:
                      type: string
                    repo_full_name:
                      type: string
                proxy_config:
                  type: object
                  properties:
                    enabled:
                      type: boolean
                      default: false
                    endpoint_url:
                      type: string
                    api_key:
                      type: string
                    system_prompt_captured:
                      type: boolean
                      default: false
                    parameter_policies:
                      type: object
                      additionalProperties:
                        type: object
                        properties:
                          mode:
                            type: string
                            default: default
                          value:
                            type: string
                          min_value:
                            type: number
                          max_value:
                            type: number
                    passthrough_tools:
                      type: boolean
                      default: true
                    passthrough_tool_choice:
                      type: boolean
                      default: true
                    passthrough_response_format:
                      type: boolean
                      default: true
      responses:
        '200':
          description: Agent created successfully.
          content:
            application/json:
              schema:
                type: object
                properties:
                  agent_id:
                    type: string
                    description: The unique identifier of the created agent.
                    example: 654b9d3d451c1aeefd800xyz
        '403':
          description: Forbidden. API key is missing or invalid.
          content:
            application/json:
              schema:
                type: object
                properties:
                  detail:
                    type: string
                    example: API key missing
        '422':
          description: >-
            Validation Error. The request payload was malformed or missing
            required fields.
          content:
            application/json:
              schema:
                type: object
                properties:
                  detail:
                    type: array
                    items:
                      type: object
                      properties:
                        loc:
                          type: array
                          items:
                            type: string
                        msg:
                          type: string
                        type:
                          type: string
      security:
        - ApiKeyAuth: []
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key

````
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Agent Endpoint

> Update an existing agent's configuration. Requires `agents:update` permission or ownership of the agent.



## OpenAPI

````yaml put /v3/agents/{agent_id}
openapi: 3.0.3
info:
  title: Lyzr Agent API
  version: 3.0.0
servers:
  - url: https://agent-prod.studio.lyzr.ai
security: []
paths:
  /v3/agents/{agent_id}:
    put:
      summary: Update Agent Endpoint
      description: >-
        Update an existing agent's configuration. Requires `agents:update`
        permission or ownership of the agent.
      parameters:
        - name: agent_id
          in: path
          required: true
          description: The unique identifier of the agent to update.
          schema:
            type: string
            example: 654b9d3d451c1aeefd800xyz
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Updated Customer Support Agent
                description:
                  type: string
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
                model:
                  type: string
                top_p:
                  type: number
                  format: float
                temperature:
                  type: number
                  format: float
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
                      server_id:
                        type: string
                      provider_uuid:
                        type: string
                      credential_id:
                        type: string
                store_messages:
                  type: boolean
                file_output:
                  type: boolean
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
                git_agent:
                  type: object
                  properties:
                    enabled:
                      type: boolean
                    repo_name:
                      type: string
                    branch:
                      type: string
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
                    repo_url:
                      type: string
                    repo_full_name:
                      type: string
                proxy_config:
                  type: object
                  properties:
                    enabled:
                      type: boolean
                    endpoint_url:
                      type: string
                    api_key:
                      type: string
                    system_prompt_captured:
                      type: boolean
                    parameter_policies:
                      type: object
                      additionalProperties:
                        type: object
                        properties:
                          mode:
                            type: string
                          value:
                            type: string
                          min_value:
                            type: number
                          max_value:
                            type: number
                    passthrough_tools:
                      type: boolean
                    passthrough_tool_choice:
                      type: boolean
                    passthrough_response_format:
                      type: boolean
      responses:
        '200':
          description: Successful Response. Agent updated.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Agent updated successfully.
        '403':
          description: >-
            Forbidden. API key is missing, invalid, or you lack the required
            permissions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  detail:
                    type: string
                    example: API key missing
        '422':
          description: Validation Error. The request payload was malformed.
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
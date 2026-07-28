> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Lyzr Agent Full Conversation

> Retrieves the entire, raw conversation history associated with a specific session ID.



## OpenAPI

````yaml get /sessions/{session_id}/conversation
openapi: 3.0.3
info:
  title: Lyzr Agent Full Conversation
  version: 1.0.0
  description: >-
    API endpoint to retrieve the complete, unfiltered conversation transcript
    for a specified session ID.
servers:
  - url: https://agent-dev.test.studio.lyzr.ai/v1
security: []
paths:
  /sessions/{session_id}/conversation:
    get:
      summary: Get Session Full Conversation Endpoint
      description: >-
        Retrieves the entire, raw conversation history associated with a
        specific session ID.
      operationId: getSessionConversation
      parameters:
        - name: session_id
          in: path
          required: true
          description: The unique identifier of the session.
          schema:
            type: string
            example: '12445674345'
      responses:
        '200':
          description: Full conversation successfully retrieved.
          content:
            application/json:
              schema:
                type: object
                properties:
                  conversation:
                    type: array
                    description: The complete list of messages/turns in the conversation.
                    items:
                      type: object
                    example: []
        '422':
          description: Validation Error (e.g., incorrect path parameter format).
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
                            oneOf:
                              - type: string
                              - type: integer
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
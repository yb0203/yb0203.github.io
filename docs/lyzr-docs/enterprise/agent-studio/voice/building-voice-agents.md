> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Building Voice Agents

> Configure engine mode, behavior, knowledge, and advanced voice settings.

Voice agents use the same role, goal, instructions, tools, knowledge, and guardrail model as text agents, with additional audio and telephony settings.

## Create a voice agent

1. Open **Voice Agents** in Studio.
2. Click **Create Agent**.
3. Choose an engine mode: Realtime or Pipeline.
4. Configure the agent's role, goal, and instructions.
5. Choose who speaks first: the agent or the caller.
6. Optional: connect a Knowledge Base, tools, and dynamic variables.
7. Test the agent before assigning a phone number.

## Engine settings

| Mode     | Configure                                       |
| -------- | ----------------------------------------------- |
| Realtime | Realtime model, voice, instructions             |
| Pipeline | STT provider, LLM provider, TTS provider, voice |

## Advanced options

* Noise cancellation for noisy environments
* Preemptive generation for lower latency
* Call recording for QA and compliance
* Knowledge Base retrieval for grounded answers

## Bring your own voice providers

Pipeline voice agents can use your own speech and language infrastructure instead of Lyzr's built-in stack. Connect a BE8 voice gateway for streaming STT and TTS, or an OpenAI-compatible LLM server, under **Connections > Voice Providers**. See [Voice Providers](../connections/voice-providers) for setup.

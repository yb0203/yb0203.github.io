> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Voice Agents

> Build low-latency conversational phone agents in Lyzr Studio.

Lyzr Studio Voice Agents let you build low-latency conversational phone bots. They support phone number assignment, Realtime and Pipeline engines, knowledge base integration, call recordings, transcripts, and analytics.

## When to use Voice Agents

* Inbound customer support lines
* Outbound appointment reminders or sales follow-up calls
* Internal helpdesk by phone
* Voice-first experiences where users should not need a chat UI

## Architecture modes

### Realtime Engine

Realtime uses audio-to-audio models such as `gpt-realtime`. It avoids separate STT and TTS layers and is best for low-latency conversation.

### Pipeline Engine

Pipeline mode uses a modular stack: STT provider, LLM, and TTS provider. Each component can be configured independently.

## Getting started

Access Voice Agents from the voice icon in the Studio sidebar. See [Building Voice Agents](./building-voice-agents) for configuration and [Telephony & Analytics](./telephony) for phone numbers and transcripts.

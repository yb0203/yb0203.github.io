> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Voice Providers

> Bring your own STT, TTS, and OpenAI-compatible LLM providers for pipeline voice agents.

Voice Providers let you bring your own speech and language infrastructure into pipeline voice agents. Instead of using Lyzr's built-in voice stack, you connect your own streaming speech services and your own language model server. Open **Connections > Voice Providers** to configure them.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/voice-providers.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=aa4910ec160d4726230d64b7b9f46718" alt="The Voice Providers screen showing the BE8 voice gateway and OpenAI-compatible endpoint cards, each with a Setup action." width="1950" height="866" data-path="assets/images/lyzr-studio/voice-providers.png" />

> **Note:** Voice Providers apply to **pipeline** voice agents, which run separate speech-to-text, LLM, and text-to-speech stages. See [Building Voice Agents](../voice/building-voice-agents) for the difference between Realtime and Pipeline engine modes.

## BE8 voice gateway

BE8 is a voice gateway you can bring for streaming speech-to-text (STT) and text-to-speech (TTS) in pipeline agents. Select **Setup** on the BE8 card to connect your own BE8 gateway, after which it becomes available as the STT and TTS provider when you build a pipeline voice agent.

## OpenAI-compatible endpoint

The OpenAI-compatible endpoint option lets you bring any OpenAI-compatible LLM server as the language model in a pipeline agent, including Ollama, vLLM, and Groq-style endpoints. Select **Setup** on the OpenAI-compatible endpoint card to connect your server, after which it becomes available as the LLM provider when you build a pipeline voice agent.

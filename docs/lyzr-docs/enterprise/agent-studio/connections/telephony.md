> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Telephony

> Connect your voice agents to phone networks via Twilio, Telnyx, or Plivo.

Telephony lets your voice agents receive and make phone calls. Lyzr supports three carriers: Twilio, Telnyx, and Plivo.

## Supported carriers

| Carrier | Inbound | Outbound | Notes                         |
| ------- | ------- | -------- | ----------------------------- |
| Twilio  | ✓       | ✓        | Widest global coverage        |
| Telnyx  | ✓       | ✓        | Cost-effective, lower latency |
| Plivo   | ✓       | ✓        | Strong Asia-Pacific coverage  |

## Connecting a carrier

1. Open **Voice** in the sidebar, then select the **Telephony** tab
2. Select your carrier
3. Enter credentials (Account SID + Auth Token for Twilio; similar for Telnyx and Plivo)
4. Purchase or import a phone number
5. Assign the number to a voice agent

## Inbound vs. outbound

With **inbound** calling, users call your phone number and the call routes to your voice agent.

With **outbound** calling, your agent initiates calls to users, for example appointment reminders, proactive outreach, or campaign follow-ups.

## Analytics

All calls are logged with duration, transcript, message count, recording, and close reason. View call analytics in the **Transcripts** tab under **Voice**.

## Full voice agent reference

See [Voice Agents overview](../voice/overview) for engine configuration (Realtime vs. Pipeline), latency trade-offs, and transcript analysis.

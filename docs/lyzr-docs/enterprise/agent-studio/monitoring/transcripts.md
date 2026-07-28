> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Transcripts

> Full conversation logs, audio recordings, and call metadata for voice agents.

Transcripts is the monitoring view for Voice Agents. Every phone call handled by a Lyzr voice agent is logged with a full conversation transcript, audio recording, and call metadata.

Access it via **Monitoring > Transcripts**. This view is scoped to voice agents only. For text agent conversations, see [Tracing](../agent%20eval/tracing).

## Dashboard metrics

| Metric              | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| Total Sessions      | Total calls handled in the selected date range                  |
| Avg Duration        | Mean call length in seconds                                     |
| Sessions (last 24h) | Calls in the past 24 hours                                      |
| Completion Rate     | Percentage of calls that reached a natural end versus abandoned |

## Session log

Each row in the session log shows the call date and time, duration, phone number (masked for privacy), the agent that handled the call, and status (Completed, Abandoned, or Errored). Select any row to open the full session detail.

## Session detail

The session detail view shows:

* **Full transcript**: each turn labeled as Agent or User, with timestamps.
* **Audio playback**: replay the call recording if recording is enabled on the agent.
* **Event log**: speech detection events, transcription states (interim vs. final), and silence detection markers.
* **Metadata**: call duration, model used, and latency per turn.

## Using Transcripts for quality monitoring

Review transcripts regularly to catch issues that aggregate metrics miss. High drop-off at a specific agent turn indicates a confusing or unhelpful response. STT errors in the transcript reveal transcription misreads that caused incorrect agent behavior. Frequent interruption patterns suggest the agent's responses are too slow or too long. Transcripts also surface edge cases that can be added to the Simulation Engine as new test scenarios.

## Next steps

* [Tracing for text agent monitoring](../agent%20eval/tracing)
* [Simulation Engine](../agent%20eval/agentsimulation)

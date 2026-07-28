> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Version Control

> Track every change to an agent with automatic version snapshots and one-click restore.

Every time you save an agent in Studio, a version snapshot is created automatically. Version Control gives you a full history of every change made to an agent, with the ability to preview and restore any past version.

## How versioning works

Saving an agent creates a new immutable version snapshot with a timestamp and the author who made the change. Versions cannot be modified after creation.

## Viewing version history

1. Open an agent in the Agent Builder.
2. Select **Version History** in the top right toolbar.
3. The panel shows all versions with timestamp, author, and a change summary.
4. Select any version to preview its configuration without activating it.

## Restoring a version

1. Select the version to restore from the history panel.
2. Select **Restore**.
3. The restored version becomes the new active configuration.
4. A new version entry is recorded with the restore action: who did it, when, and which version was restored.

Restoring is non-destructive. The full version history is preserved, including the versions that existed before the restore.

## Version Control and Git for Agents

Native versioning is linear: it records every save in a single history, and the agent's latest version is the one your API key serves. When you need to isolate experimentation from production, connect the agent to Git. [Git for Agents](/enterprise/agent-studio/git-for-agents/overview) gives the agent branches, so you can test changes on a lower branch and promote them to production only when you are confident.

## Next steps

* [Git for Agents](/enterprise/agent-studio/git-for-agents/overview)
* [Branching and Promotion](/enterprise/agent-studio/git-for-agents/branching-and-promotion)
* [Approval Flows](../governance/approval-flows)

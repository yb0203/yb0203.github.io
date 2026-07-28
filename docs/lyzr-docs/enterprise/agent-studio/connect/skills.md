> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Skills

> Upload and manage reusable skill packages in Lyzr Studio.

Skills in Studio is where you upload, manage, and share reusable skill packages across your workspace. Once uploaded, a skill is available to any agent in the workspace through the Agent Builder.

If you want to understand what skills are and how they work conceptually, see [Skills](../../get-started/concepts/skills).

## Upload a skill

Skills are packaged as a zip file or a GitHub repository. Each skill must contain a `SKILL.md` file at the root that defines its interface and behavior.

1. Go to **Skills** in the Studio sidebar and select **Create New**.
2. Choose how to add the skill:
   * **Upload zip**: drag and drop or select a `.zip` file from your computer.
   * **GitHub repo**: paste the repository URL and branch name.
3. Lyzr validates the `SKILL.md` and displays the skill name, description, and parameters.
4. Save. The skill is now available workspace-wide.

## Lyzr built-in skill library

Lyzr provides a library of pre-built skills covering common patterns: web search, summarization, data extraction, code execution, and more. These appear in the skill selector without requiring you to upload anything.

## Attach a skill to an agent

1. Open the agent in the Agent Builder.
2. Scroll to the **Skills** section and select **Add**.
3. Choose from your uploaded skills or from the built-in skill library.
4. Add any required skill instructions that tell the agent when and how to use this skill.
5. Save the agent.

## Update or remove a skill

To update a skill, re-upload a new version of the zip or push to the connected GitHub branch and trigger a refresh in Studio. All agents using the skill pick up the updated version automatically.

To remove a skill from an agent, open the agent in the Agent Builder, find the skill under the **Skills** section, and remove it. Removing a skill from an agent does not delete it from the workspace.

## Next steps

* [Tools](../connections/tools)
* [Global Context](../agent%20features/global%20context)

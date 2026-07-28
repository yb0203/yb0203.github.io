> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# GitHub

GitHub is a platform for version control and collaboration that lets you manage repositories, track issues, automate workflows, and interact programmatically with pull requests, commits, and more.

## Setup

1. In Agent Studio, go to **Tools** → **GitHub** → **Connect**
2. Sign in with your GitHub account and authorize access
3. Review the requested permissions and click **Allow**

## Composio vs ACI: Which provider to use?

This tool is available through two providers. Both connect to the same underlying service but differ in action coverage and auth handling.

|                     | Composio                                   | ACI                                         |
| ------------------- | ------------------------------------------ | ------------------------------------------- |
| **Provider source** | Composio                                   | ACI                                         |
| **Auth type**       | oauth2                                     | oauth2                                      |
| **Best for**        | Broad action coverage, workflow automation | Targeted integrations, API-level operations |

Choose **Composio** when you need the widest selection of actions and deep workflow automation. Choose **ACI** when you need direct API-level control or a specific action not covered by Composio.

## Available actions: Composio

| Action                                                              | Description                                                                                                                       |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `GITHUB_ACCEPT_A_REPOSITORY_INVITATION`                             | Accepts a pending repository invitation that has been issued to the authenticated user.                                           |
| `GITHUB_ADD_AN_EMAIL_ADDRESS_FOR_THE_AUTHENTICATED_USER`            | Adds one or more email addresses to the authenticated user's GitHub account.                                                      |
| `GITHUB_ADD_APP_ACCESS_RESTRICTIONS`                                | Replaces GitHub App access restrictions for an existing protected branch.                                                         |
| `GITHUB_ADD_A_REPOSITORY_COLLABORATOR`                              | Adds a GitHub user as a repository collaborator, or updates their permission if already a collaborator.                           |
| `GITHUB_ADD_A_REPOSITORY_TO_AN_APP_INSTALLATION`                    | Adds a repository to a GitHub App installation, granting the app access.                                                          |
| `GITHUB_ADD_A_SELECTED_REPOSITORY_TO_A_USER_SECRET`                 | Grants a specified repository access to an authenticated user's existing Codespaces secret.                                       |
| `GITHUB_ADD_ASSIGNEES_TO_AN_ISSUE`                                  | Adds or removes assignees for a GitHub issue.                                                                                     |
| `GITHUB_ADD_LABELS_TO_AN_ISSUE`                                     | Adds labels to a repository issue, creating labels that do not already exist.                                                     |
| `GITHUB_ADD_ORG_RUNNER_LABELS`                                      | Adds new custom labels to an existing self-hosted runner for an organization.                                                     |
| `GITHUB_ADD_OR_UPDATE_TEAM_MEMBERSHIP_FOR_A_USER`                   | Adds a GitHub user to a team or updates their role, inviting them to the organization if not already a member.                    |
| `GITHUB_ADD_OR_UPDATE_TEAM_PROJECT_PERMISSIONS`                     | Grants or updates a team's permissions for a specific project within a GitHub organization.                                       |
| `GITHUB_ADD_OR_UPDATE_TEAM_REPOSITORY_PERMISSIONS`                  | Sets or updates a team's permission level for a repository within an organization.                                                |
| `GITHUB_ADD_PROJECT_COLLABORATOR`                                   | Adds a specified GitHub user as a collaborator to an existing organization project with a given permission level.                 |
| `GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_ACCESS`                | Adds a repository to an existing organization-level GitHub Actions secret configured for selected repository access.              |
| `GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_VISIBILITY`            | Grants an existing repository access to an existing organization-level Dependabot secret.                                         |
| `GITHUB_ADD_RUNNER_LABELS`                                          | Adds and appends custom labels to a self-hosted repository runner.                                                                |
| `GITHUB_ADD_SELECTED_REPOSITORY_TO_AN_ORGANIZATION_SECRET`          | Adds a repository to an organization secret's access list when the secret's visibility is set to selected.                        |
| `GITHUB_ADD_SELECTED_REPOSITORY_TO_AN_ORGANIZATION_VARIABLE`        | Grants a repository access to an organization-level GitHub Actions variable with selected visibility.                             |
| `GITHUB_ADD_SOCIAL_ACCOUNTS_FOR_THE_AUTHENTICATED_USER`             | Adds one or more social media links to the authenticated user's public GitHub profile.                                            |
| `GITHUB_ADD_STATUS_CHECK_CONTEXTS`                                  | Adds status check contexts to a protected branch.                                                                                 |
| `GITHUB_ADD_TEAM_ACCESS_RESTRICTIONS`                               | Overwrites the list of teams granted push access to a protected branch.                                                           |
| `GITHUB_ADD_USER_ACCESS_RESTRICTIONS`                               | Sets or replaces the list of users allowed to push to a protected branch.                                                         |
| `GITHUB_ADD_USERS_TO_CODESPACES_ACCESS_FOR_AN_ORGANIZATION`         | Sets or replaces the list of organization members granted Codespaces access billed to the organization.                           |
| `GITHUB_APPROVE_A_WORKFLOW_RUN_FOR_A_FORK_PULL_REQUEST`             | Approves a workflow run from a forked repository's pull request that requires manual approval.                                    |
| `GITHUB_ASSIGN_AN_ORGANIZATION_ROLE_TO_A_TEAM`                      | Assigns an existing organization-level role to a team within a GitHub organization.                                               |
| `GITHUB_ASSIGN_AN_ORGANIZATION_ROLE_TO_A_USER`                      | Assigns a specific organization role to a user who is a member or outside collaborator in a GitHub organization.                  |
| `GITHUB_AUTH_USER_DOCKER_CONFLICT_PACKAGES_LIST`                    | Lists Docker packages for the authenticated user that encountered conflicts during the Docker migration process.                  |
| `GITHUB_BLOCK_A_USER`                                               | Blocks an existing individual GitHub user from interacting with your account and repositories.                                    |
| `GITHUB_BLOCK_A_USER_FROM_AN_ORGANIZATION`                          | Blocks an existing GitHub user from an organization, preventing their contributions, collaboration, and forking.                  |
| `GITHUB_CANCEL_A_GITHUB_PAGES_DEPLOYMENT`                           | Cancels an existing ongoing or queued GitHub Pages deployment for a repository.                                                   |
| `GITHUB_CANCEL_A_WORKFLOW_RUN`                                      | Cancels a workflow run in a GitHub repository if it is in a cancellable state.                                                    |
| `GITHUB_CHECK_A_TOKEN`                                              | Checks if a GitHub App or OAuth access token is valid for the specified client ID and retrieves its details.                      |
| `GITHUB_CHECK_IF_A_GIST_IS_STARRED`                                 | Checks if a gist is starred by the authenticated user.                                                                            |
| `GITHUB_CHECK_IF_A_PERSON_IS_FOLLOWED_BY_THE_AUTHENTICATED_USER`    | Checks if the authenticated GitHub user follows a target GitHub user.                                                             |
| `GITHUB_CHECK_IF_A_PULL_REQUEST_HAS_BEEN_MERGED`                    | Checks if a specified GitHub pull request has been merged.                                                                        |
| `GITHUB_CHECK_IF_A_REPOSITORY_IS_STARRED_BY_THE_AUTHENTICATED_USER` | Determines if the authenticated user has starred a specific GitHub repository.                                                    |
| `GITHUB_CHECK_IF_A_USER_CAN_BE_ASSIGNED`                            | Verifies if a GitHub user can be assigned to issues in a repository.                                                              |
| `GITHUB_CHECK_IF_A_USER_CAN_BE_ASSIGNED_TO_A_ISSUE`                 | Checks if a specified GitHub user can be assigned to a given issue within a repository.                                           |
| `GITHUB_CHECK_IF_A_USER_FOLLOWS_ANOTHER_USER`                       | Checks if a GitHub user follows another specific user.                                                                            |
| `GITHUB_CHECK_IF_A_USER_IS_A_REPOSITORY_COLLABORATOR`               | Checks if a user is a collaborator on a specified GitHub repository.                                                              |
| `GITHUB_CHECK_IF_A_USER_IS_BLOCKED_BY_AN_ORGANIZATION`              | Checks if a GitHub user is blocked by an organization.                                                                            |
| `GITHUB_CHECK_IF_A_USER_IS_BLOCKED_BY_THE_AUTHENTICATED_USER`       | Checks if the specified GitHub user is blocked by the authenticated user.                                                         |
| `GITHUB_CHECK_PRIVATE_VULNERABILITY_REPORTING_STATUS`               | Checks if private vulnerability reporting is enabled for the specified repository.                                                |
| `GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_PROJECT`                       | Checks if a team has read, write, or admin permissions for an organization's specific classic project.                            |
| `GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_REPOSITORY`                    | Checks a team's permissions for a specific repository within an organization, including inherited permissions.                    |
| `GITHUB_CLEAR_REPOSITORY_CACHE_BY_KEY`                              | Deletes GitHub Actions caches from a repository matching a specific key and optional git ref.                                     |
| `GITHUB_CLEAR_SELF_HOSTED_RUNNER_ORG_LABELS`                        | Removes all custom labels from a self-hosted runner for an organization, leaving default labels intact.                           |
| `GITHUB_COMPARE_TWO_COMMITS`                                        | Compares two commit points within a repository or across forks.                                                                   |
| `GITHUB_CONFIGURE_JITRUNNER_FOR_ORG`                                | Generates a JIT configuration for a GitHub organization's new self-hosted runner to run a single job then unregister.             |
| `GITHUB_CONFIGURE_OIDCSUBJECT_CLAIM_TEMPLATE`                       | Sets or updates the OIDC subject claim customization template for an existing GitHub organization.                                |
| `GITHUB_CONVERT_AN_ORGANIZATION_MEMBER_TO_OUTSIDE_COLLABORATOR`     | Converts an existing organization member to an outside collaborator, restricting their access to explicitly granted repositories. |
| `GITHUB_CREATE_A_BLOB`                                              | Creates a git blob in a repository with specified content and encoding.                                                           |
| `GITHUB_CREATE_A_CHECK_RUN`                                         | Creates a new check run for a specific commit in a repository to report CI/CD status and feedback in the GitHub UI.               |
| `GITHUB_CREATE_A_CHECK_SUITE`                                       | Creates a new check suite for a specific commit in an original repository.                                                        |
| `GITHUB_CREATE_A_CODESPACE_FOR_THE_AUTHENTICATED_USER`              | Creates a GitHub Codespace for the authenticated user from a repository or pull request.                                          |
| `GITHUB_CREATE_A_CODESPACE_FROM_A_PULL_REQUEST`                     | Creates a GitHub Codespace for an open pull request in a Codespaces-enabled repository.                                           |
| `GITHUB_CREATE_A_CODESPACE_IN_A_REPOSITORY`                         | Creates a GitHub Codespace for the authenticated user in a specified repository.                                                  |
| `GITHUB_CREATE_A_COMMIT`                                            | Creates a new commit in a GitHub repository using an existing tree SHA and parent SHAs.                                           |
| `GITHUB_CREATE_A_COMMIT_COMMENT`                                    | Creates a comment on a specific commit, optionally targeting a specific line.                                                     |
| `GITHUB_CREATE_A_COMMIT_STATUS`                                     | Sets a commit's CI/CD status (error, failure, pending, or success) for a given SHA.                                               |
| `GITHUB_CREATE_A_CUSTOM_ORGANIZATION_ROLE`                          | Creates a custom role with defined permissions within a GitHub organization.                                                      |
| `GITHUB_CREATE_A_DEPLOY_KEY`                                        | Creates an SSH deploy key for a repository.                                                                                       |
| `GITHUB_CREATE_A_DEPLOYMENT`                                        | Creates a GitHub deployment for an existing repository, targeting a specific branch, tag, or SHA.                                 |
| `GITHUB_CREATE_A_DEPLOYMENT_BRANCH_POLICY`                          | Creates a deployment branch or tag policy for an existing environment in a GitHub repository.                                     |
| `GITHUB_CREATE_A_DEPLOYMENT_STATUS`                                 | Creates a status for an existing deployment, updating its operational state, URLs, and description.                               |
| `GITHUB_CREATE_A_DISCUSSION`                                        | Creates a new discussion post on a specific team's page within an organization.                                                   |
| `GITHUB_CREATE_A_DISCUSSION_COMMENT`                                | Creates a new comment on an existing team discussion within a GitHub organization.                                                |
| `GITHUB_CREATE_A_FORK`                                              | Creates a fork of an accessible repository, optionally into a specific organization.                                              |
| `GITHUB_CREATE_A_GIST`                                              | Creates a new gist on GitHub with provided files, an optional description, and visibility settings.                               |
| `GITHUB_CREATE_A_GIST_COMMENT`                                      | Creates a new comment on a specified GitHub gist.                                                                                 |
| `GITHUB_CREATE_A_GITHUB_APP_FROM_A_MANIFEST`                        | Finalizes a GitHub App's creation by exchanging a temporary manifest code for the app's full configuration.                       |
| `GITHUB_CREATE_A_GITHUB_PAGES_DEPLOYMENT`                           | Creates a GitHub Pages deployment for a repository using a specified artifact and OIDC token.                                     |
| `GITHUB_CREATE_A_GITHUB_PAGES_SITE`                                 | Configures or updates GitHub Pages for a repository, setting build type and source.                                               |
| `GITHUB_CREATE_A_LABEL`                                             | Creates a new label in a specified GitHub repository.                                                                             |
| `GITHUB_CREATE_A_MILESTONE`                                         | Creates a milestone in a GitHub repository for tracking progress on issues or pull requests.                                      |
| `GITHUB_CREATE_AN_AUTOLINK_REFERENCE_FOR_A_REPOSITORY`              | Creates a repository autolink to automatically convert text references into hyperlinks.                                           |
| `GITHUB_CREATE_AN_ENVIRONMENT_VARIABLE`                             | Creates an encrypted environment variable for a pre-existing environment within a GitHub repository.                              |
| `GITHUB_CREATE_AN_ISSUE`                                            | Creates a new issue in a GitHub repository.                                                                                       |
| `GITHUB_CREATE_AN_ISSUE_COMMENT`                                    | Creates a new comment on an existing GitHub issue or pull request.                                                                |
| `GITHUB_CREATE_AN_ORGANIZATION_PROJECT`                             | Creates a new classic project board within a specified GitHub organization.                                                       |
| `GITHUB_CREATE_AN_ORGANIZATION_REPOSITORY`                          | Creates a new repository within a specified GitHub organization with detailed configuration options.                              |
| `GITHUB_CREATE_AN_ORGANIZATION_VARIABLE`                            | Creates a new GitHub Actions variable for an organization with configurable repository access visibility.                         |
| `GITHUB_CREATE_AN_ORGANIZATION_WEBHOOK`                             | Creates a webhook for a GitHub organization to deliver event notifications to a configured URL.                                   |
| `GITHUB_CREATE_A_PROJECT_CARD`                                      | Creates a project card in a GitHub project column from a note or linked issue/pull request.                                       |
| `GITHUB_CREATE_A_PROJECT_COLUMN`                                    | Creates a new column in a GitHub project (classic).                                                                               |
| `GITHUB_CREATE_A_PULL_REQUEST`                                      | Creates a pull request in a GitHub repository from existing base and head branches.                                               |
| `GITHUB_CREATE_A_REFERENCE`                                         | Creates a git reference such as a branch or tag in a repository.                                                                  |
| `GITHUB_CREATE_A_REGISTRATION_TOKEN_FOR_AN_ORGANIZATION`            | Generates a temporary one-hour token to add a new self-hosted runner to an organization for GitHub Actions.                       |
| `GITHUB_CREATE_A_REGISTRATION_TOKEN_FOR_A_REPOSITORY`               | Generates a time-limited token required to register a new self-hosted runner with a specific repository.                          |
| `GITHUB_CREATE_A_RELEASE`                                           | Creates a release in a GitHub repository for a specified tag.                                                                     |
| `GITHUB_CREATE_A_REMOVE_TOKEN_FOR_AN_ORGANIZATION`                  | Generates a one-hour token to authenticate removing a self-hosted runner from an organization.                                    |
| `GITHUB_CREATE_A_REMOVE_TOKEN_FOR_A_REPOSITORY`                     | Generates a temporary token required to unregister and remove a self-hosted runner from a repository.                             |
| `GITHUB_CREATE_A_REPLY_FOR_A_REVIEW_COMMENT`                        | Posts a reply to a specific review comment on a GitHub pull request.                                                              |
| `GITHUB_CREATE_A_REPOSITORY_DISPATCH_EVENT`                         | Triggers a GitHub Actions workflow or webhook on a repository by creating a repository dispatch event.                            |
| `GITHUB_CREATE_A_REPOSITORY_FOR_THE_AUTHENTICATED_USER`             | Creates a new repository for the authenticated user.                                                                              |
| `GITHUB_CREATE_A_REPOSITORY_FROM_AN_UNPUBLISHED_CODESPACE`          | Publishes a Codespace to a new repository using its current state as the initial commit.                                          |
| `GITHUB_CREATE_A_REPOSITORY_PROJECT`                                | Creates a new classic project board within a specified repository.                                                                |

## Available actions: ACI

| Action                                | Description                                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| `GITHUB__LIST_REPOSITORIES`           | Lists public repositories for the specified user.                                             |
| `GITHUB__GET_REPOSITORY`              | Gets information about a repository.                                                          |
| `GITHUB__LIST_COMMITS`                | Lists commits for a repository.                                                               |
| `GITHUB__GET_COMMIT`                  | Gets a specific commit from a repository.                                                     |
| `GITHUB__LIST_ISSUES`                 | Lists issues in a repository.                                                                 |
| `GITHUB__GET_ISSUE`                   | Gets a specific issue from a repository.                                                      |
| `GITHUB__CREATE_ISSUE`                | Creates a new issue in a repository.                                                          |
| `GITHUB__LIST_STARGAZERS`             | Lists the users who have starred a specified repository.                                      |
| `GITHUB__GET_USER`                    | Provides publicly available information about someone with a GitHub account.                  |
| `GITHUB__GET_ORGANIZATION`            | Gets information about an organization.                                                       |
| `GITHUB__GET_USER_SOCIAL_ACCOUNTS`    | Lists social media accounts for a user.                                                       |
| `GITHUB__STAR_REPOSITORY`             | Stars a repository on behalf of the authenticated user.                                       |
| `GITHUB__CREATE_PULL_REQUEST`         | Creates a new pull request in a GitHub repository.                                            |
| `GITHUB__FORK_REPOSITORY`             | Forks a repository to the authenticated user's account.                                       |
| `GITHUB__CREATE_BRANCH`               | Creates a new branch in a GitHub repository.                                                  |
| `GITHUB__LIST_PULL_REQUESTS`          | Lists pull requests in a repository.                                                          |
| `GITHUB__GET_PULL_REQUEST`            | Gets a specific pull request from a repository.                                               |
| `GITHUB__MERGE_PULL_REQUEST`          | Merges a pull request.                                                                        |
| `GITHUB__SEARCH_CODE`                 | Searches for code in repositories on GitHub.                                                  |
| `GITHUB__SEARCH_USERS`                | Searches for users on GitHub.                                                                 |
| `GITHUB__GET_FILE_CONTENT`            | Gets the content of a file from a repository.                                                 |
| `GITHUB__CREATE_OR_UPDATE_FILE`       | Creates a new file or updates an existing file in a repository.                               |
| `GITHUB__LIST_BRANCHES`               | Lists all branches for a repository.                                                          |
| `GITHUB__GET_BRANCH`                  | Gets a specific branch of a repository.                                                       |
| `GITHUB__GET_COMMIT_STATUS`           | Gets the combined status for a specific commit.                                               |
| `GITHUB__CREATE_COMMIT_STATUS`        | Creates a status for a specific commit.                                                       |
| `GITHUB__SEARCH_REPOSITORIES`         | Searches for repositories on GitHub.                                                          |
| `GITHUB__UPDATE_PULL_REQUEST`         | Updates an existing pull request.                                                             |
| `GITHUB__LIST_PULL_REQUEST_COMMITS`   | Lists commits in a pull request.                                                              |
| `GITHUB__UPDATE_PULL_REQUEST_BRANCH`  | Updates the branch of a pull request.                                                         |
| `GITHUB__CREATE_ISSUE_COMMENT`        | Creates a comment on an issue.                                                                |
| `GITHUB__ADD_ISSUE_LABELS`            | Adds labels to an issue.                                                                      |
| `GITHUB__CREATE_REPOSITORY`           | Creates a new repository for the authenticated user.                                          |
| `GITHUB__DELETE_REPOSITORY`           | Deletes a repository, requiring admin access; this action cannot be undone.                   |
| `GITHUB__UPDATE_REPOSITORY`           | Updates a repository's settings including name, description, visibility, and archived status. |
| `GITHUB__DELETE_FILE`                 | Deletes a file from a repository.                                                             |
| `GITHUB__COMPARE_COMMITS`             | Compares two commits and shows the differences between them.                                  |
| `GITHUB__LIST_COLLABORATORS`          | Lists the collaborators for a repository.                                                     |
| `GITHUB__ADD_COLLABORATOR`            | Adds a collaborator to a repository.                                                          |
| `GITHUB__REMOVE_COLLABORATOR`         | Removes a collaborator from a repository.                                                     |
| `GITHUB__GET_COLLABORATOR_PERMISSION` | Gets the permission level of a specific collaborator for a repository.                        |
| `GITHUB__GET_REPOSITORY_STATS`        | Gets repository statistics including code frequency and participation data.                   |
| `GITHUB__LIST_CONTRIBUTORS`           | Lists repository contributors sorted by the number of commits.                                |
| `GITHUB__GET_REPOSITORY_LANGUAGES`    | Gets the languages used in a repository with their percentage breakdown.                      |
| `GITHUB__LIST_USER_ORGANIZATIONS`     | Lists the organizations a user is a member of.                                                |
| `GITHUB__CREATE_DEPLOY_KEY`           | Adds an SSH deploy key to a repository granting access to a single repository.                |
| `GITHUB__LIST_DEPLOY_KEYS`            | Lists deploy keys for a repository.                                                           |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **GitHub**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated PR review assistant**
An agent monitors new pull requests in a repository, fetches the changed files and commits, posts review comments, and updates the PR status, reducing manual review overhead for repetitive checks.

**Issue triage and labeling**
An agent watches for new issues, searches the codebase for related files using `GITHUB__SEARCH_CODE`, automatically adds relevant labels, and assigns team members based on the affected area of the codebase.

**Release notes generator**
An agent compares the latest release tag to the current HEAD using commit comparison actions, summarizes merged pull requests and commit messages, and creates a formatted release with auto-generated notes.

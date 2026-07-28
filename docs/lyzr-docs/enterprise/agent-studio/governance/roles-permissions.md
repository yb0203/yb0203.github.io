> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Roles & Permissions

> How Lyzr Studio's role-based access control works and what each role can do.

Lyzr Studio controls access through a three-tier role-based access control (RBAC) model. Each member of an organization is assigned one role, and that role determines which resources the member can view, create, or manage. Multi-user team management is available on the Enterprise plan.

## Roles

Lyzr Studio has three roles. Every organization must have at least one Owner.

**Owner** is the most privileged role. An Owner can manage all organization resources, including users, sub-organizations, custom models, data connectors, billing, agents, knowledge bases, and RAI policies.

**Admin** can configure the technical infrastructure of an organization and manage its AI resources. An Admin can add custom models, manage data connectors, create and edit agents, manage knowledge bases, apply RAI policies, share agents, and view audit logs. An Admin cannot manage users, billing, or sub-organizations.

**Member** can build and share AI resources within the organization. A Member can create and edit agents, manage knowledge bases, apply RAI policies, and share agents. A Member cannot access organization settings, billing, custom models, data connectors, or audit logs.

## Permission matrix

The table below shows which actions each role can perform. An empty cell means the role does not have that permission.

| Action                         | Owner | Admin | Member |
| ------------------------------ | ----- | ----- | ------ |
| Manage users                   | Yes   |       |        |
| Manage billing                 | Yes   |       |        |
| Manage sub-organizations       | Yes   |       |        |
| Add custom models              | Yes   | Yes   |        |
| Add data connectors            | Yes   | Yes   |        |
| View audit log                 | Yes   | Yes   |        |
| Create or edit agents          | Yes   | Yes   | Yes    |
| Create or edit knowledge bases | Yes   | Yes   | Yes    |
| Create or edit RAI policies    | Yes   | Yes   | Yes    |
| Share agents                   | Yes   | Yes   | Yes    |

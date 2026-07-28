> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Knowledge Graph

> Connect a Neo4j database to build a relationship-aware knowledge layer for multi-hop question answering.

The Knowledge Graph option in Lyzr's Knowledge Base uses a Neo4j graph database to map entities and their relationships across your documents. Where Classic Knowledge Base retrieves isolated text chunks, a Knowledge Graph traverses typed connections between concepts, enabling accurate answers to queries that span multiple documents or require understanding how things relate.

Use this option when your content has strong entity relationships: legal documents, SOPs, org charts, process documentation, or any domain where "how does X relate to Y" matters as much as "what is X."

## Prerequisites

You must bring your own Neo4j instance. Lyzr does not provision Neo4j for you.

1. Go to [https://neo4j.com/cloud](https://neo4j.com/cloud) and sign up for a **Neo4j Aura** free or paid account.
2. Create a new project and launch a database instance.
3. Copy the following credentials from your Neo4j dashboard:
   * **URI** (for example, `neo4j+s://yourdb.neo4j.io`)
   * **Username**
   * **Password**
4. Optionally, test the connection in the Neo4j Console before proceeding.

## Connect Neo4j to Lyzr

Data Connectors are managed under **Connections > Data Connectors** in the Studio sidebar.

1. Select **Connections** in the sidebar, then open **Data Connectors**.
2. Find the **Neo4J GraphDB** card and select **+** to add a new connection.
3. Enter a **Name**, the **URI**, **Username**, and **Password** from your Neo4j account.
4. Save the connector.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-kg.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=edcc21b2957041a6026d4fd1107de9fa" alt="Screenshot of the Data Connectors page in Lyzr Studio showing the Neo4J GraphDB card with a + button and a count of connected databases." width="1672" height="678" data-path="assets/images/studio/new-kg.png" />

Lyzr uses this connection to store and query the graph it builds from your documents.

## Create a Knowledge Graph KB

1. Go to **Knowledge Base** and select **+ New**.
2. Select **Graph** as the Knowledge Base Type.
3. Select the Neo4j connector you configured above.
4. Select **Create Knowledge Base**.

## Upload and parse documents

Upload the documents you want to index. Supported formats: PDF, DOCX, TXT, Markdown. Multiple files can be uploaded at once.

Lyzr automatically parses each document to:

* Identify named entities (people, organizations, tools, concepts) and their types.
* Extract semantic relationships between entities, for example "Person A manages Team B" or "Tool X is used for Task Y".
* Construct a graph schema from the extracted data.

Entities become nodes in the Neo4j graph. Relationships become typed, directional edges. The resulting graph is stored in your Neo4j instance and is browsable through Neo4j's native visual tools.

<img src="https://mintcdn.com/lyzrinc/pFzjveMQpnpv1NYR/assets/images/studio/kg5.png?fit=max&auto=format&n=pFzjveMQpnpv1NYR&q=85&s=163fcbb1f27215d0604a42777df18e8a" alt="Screenshot of a sample entity-relationship graph in Neo4j, showing nodes connected by labeled edges." width="880" height="555" data-path="assets/images/studio/kg5.png" />

## Playground Retrieval

Once the graph is built, open the Knowledge Base and use the **Playground Retrieval** panel to test queries before attaching the KB to an agent. Type a natural language question and select **Retrieve** to see which entities and relationships are returned. This helps verify that the graph has been constructed correctly and that multi-hop queries resolve as expected.

## Query the Knowledge Graph

Once the graph is built, agents can query it using natural language. Lyzr translates the question into a Cypher graph traversal and returns results that span multiple documents and entities.

Example queries:

* "How does the approval process work across departments?"
* "Which tools are linked to a specific use case?"
* "What dependencies exist between tasks or agents?"

## When to use Knowledge Graph vs. Classic KB

| Need                                           | Use                    |
| ---------------------------------------------- | ---------------------- |
| Document Q\&A, topic search                    | Classic Knowledge Base |
| Cross-document reasoning, entity relationships | Knowledge Graph        |
| Structured data, SQL-backed answers            | Semantic Model         |

## Next steps

* [Classic Knowledge Base for document retrieval](studiokb)
* [Semantic Model for structured data queries](studiosem)
* [Build an agent in Studio](../agents/studio)

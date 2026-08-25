/* ==========================================================================
   YASHVI BANSAL — INTERACTIVE AGENT & MCP PLAYGROUND TERMINAL
   Allows visitors to test real simulated commands on Yashvi's projects & skills
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const shortcutChips = document.querySelectorAll('.shortcut-chip');

  if (!terminalBody || !terminalInput) return;

  const COMMANDS = {
    help: {
      desc: "List all available interactive terminal commands",
      exec: () => [
        `<span class="terminal-line info">Available Commands:</span>`,
        `  <span class="terminal-line cmd">pitch --founders-office</span> : Yashvi's 0-to-1 high-agency operator pitch`,
        `  <span class="terminal-line cmd">court-scout --status</span>    : Inspect Legal Owl's live eCourts multi-agent pipeline`,
        `  <span class="terminal-line cmd">git-vibe --summarize</span>    : Run natural language Git diff translation demo`,
        `  <span class="terminal-line cmd">eval-safety --banking</span>   : View 100+ banking AI safety metrics & DeepEval setup`,
        `  <span class="terminal-line cmd">skills</span>                  : Output full skills matrix (Product, AI, Systems)`,
        `  <span class="terminal-line cmd">contact</span>                 : Direct channels (Email, LinkedIn, Phone, GitHub)`,
        `  <span class="terminal-line cmd">clear</span>                   : Clear the terminal screen`
      ]
    },

    "pitch --founders-office": {
      desc: "Founder's Office & 0-to-1 builder pitch",
      exec: () => [
        `<span class="terminal-line success">=== FOUNDER'S OFFICE & 0-TO-1 OPERATOR PITCH ===</span>`,
        `<span class="terminal-line output">"I operate as a high-agency builder who bridges business ambiguity with technical execution.</span>`,
        `<span class="terminal-line output">Over 3+ years at Kotak Mahindra Bank and through 0-to-1 builds (Legal Owl, GitaBae, Vibe Check):</span>`,
        `<span class="terminal-line output">  ✓ 0-to-1 Platform Ownership: Took reporting from zero to org-wide adoption (95% speedup).</span>`,
        `<span class="terminal-line output">  ✓ Cross-Functional Translation: Aligned compliance, risk, engineering, and operations on core flows.</span>`,
        `<span class="terminal-line output">  ✓ Ruthless Metrics Focus: Slashed test cycles by 90%, cut storage costs by 99%, eliminated triage drag.</span>`,
        `<span class="terminal-line output">  ✓ AI-Native Instincts: Built multi-agent guardrails and citation ledgers before buzzwords caught up.</span>`,
        `<span class="terminal-line success">Status: Ready to unblock bottlenecks and scale product velocity in Founder's Office / PM roles."</span>`
      ]
    },

    "court-scout --status": {
      desc: "Legal Owl Multi-Agent Pipeline Status",
      exec: () => [
        `<span class="terminal-line info">[Legal Owl Multi-Agent Swarm Status]</span>`,
        `<span class="terminal-line output">● Court Scout Agent: <span class="success">ONLINE</span> (eCourts India API CNR Sync active)</span>`,
        `<span class="terminal-line output">● Intake Registrar:  <span class="success">ONLINE</span> (Schema-locked PDF parser active)</span>`,
        `<span class="terminal-line output">● Limitation Clerk:  <span class="success">ONLINE</span> (Statutory deadline calculator active)</span>`,
        `<span class="terminal-line output">● Citation Ledger:   <span class="success">ENFORCED</span> (Abstain threshold: &lt;95% confidence)</span>`,
        `<span class="terminal-line output">● Trust Gate:        <span class="warning">APPROVE-BEFORE-ACT</span> (Human-in-the-loop enabled)</span>`,
        `<span class="terminal-line success">✓ 0 Hallucinations allowed. All filings linked to verifiable source coordinates.</span>`
      ]
    },

    "git-vibe --summarize": {
      desc: "Vibe Check Natural Language MCP Demonstration",
      exec: () => [
        `<span class="terminal-line info">[Vibe Check MCP Server — Diff Synthesis]</span>`,
        `<span class="terminal-line output">Input Prompt: "Summarize recent commits for marketing and flag any breaking API changes."</span>`,
        `<span class="terminal-line output">Parsing git diff across 14 files...</span>`,
        `<span class="terminal-line success">Generated Release Summary (Intent Confidence: 98.4%):</span>`,
        `<span class="terminal-line output">  1. Customer Portal: Added instant PDF receipt downloads for corporate accounts.</span>`,
        `<span class="terminal-line output">  2. Settlement Engine: Optimized batch processing latency by 45%.</span>`,
        `<span class="terminal-line warning">  ⚠ Breaking Change: v1/auth webhook payload deprecated in favor of signed JWT v2.</span>`
      ]
    },

    "eval-safety --banking": {
      desc: "AI Trust & Safety Evaluation Metrics",
      exec: () => [
        `<span class="terminal-line info">[AI Trust & Safety Standard — DeepEval Benchmark]</span>`,
        `<span class="terminal-line output">Evaluated across 100+ Banking Domain Metrics:</span>`,
        `<span class="terminal-line output">  [✓] Prompt Injection Resilience: 99.2%</span>`,
        `<span class="terminal-line output">  [✓] Hallucination Abstention Rate: 100.0% (Zero tolerance on regulatory specs)</span>`,
        `<span class="terminal-line output">  [✓] PII Redaction & Data Leakage Shield: PASSED</span>`,
        `<span class="terminal-line output">  [✓] OWASP Top 10 for LLMs: 8 Vulnerabilities identified & remediated pre-prod</span>`,
        `<span class="terminal-line success">Compliance Rating: Production-Ready (Bank-Grade Audited)</span>`
      ]
    },

    skills: {
      desc: "List core technical & product skills",
      exec: () => [
        `<span class="terminal-line info">=== CORE CAPABILITIES MATRIX ===</span>`,
        `<span class="terminal-line cmd">Product & Strategy:</span> <span class="output">0-to-1 Ownership, DevEx, Cross-Team Alignment, PLM, Agile/Scrum, Data-Driven Prioritization</span>`,
        `<span class="terminal-line cmd">AI & LLM Systems:</span>   <span class="output">RAG, Multi-Agent Orchestration, Model Context Protocol (MCP), DeepEval, Trust/Safety, LangChain, Pinecone</span>`,
        `<span class="terminal-line cmd">Core Tech Stack:</span>     <span class="output">Java, Spring Boot, Python, TypeScript, Next.js, ISO8583, FIXML, DynamoDB, PostgreSQL, AWS, Docker, CI/CD</span>`
      ]
    },

    contact: {
      desc: "Direct contact information",
      exec: () => [
        `<span class="terminal-line success">=== CONTACT YASHVI BANSAL ===</span>`,
        `  <span class="terminal-line info">Email:</span>    <a href="mailto:bansaly0203@gmail.com" target="_blank">bansaly0203@gmail.com</a>`,
        `  <span class="terminal-line info">Phone:</span>    +91 62831 62131`,
        `  <span class="terminal-line info">LinkedIn:</span> <a href="https://linkedin.com/in/yb0203" target="_blank">linkedin.com/in/yb0203</a>`,
        `  <span class="terminal-line info">GitHub:</span>   <a href="https://github.com/yb0203" target="_blank">github.com/yb0203</a>`,
        `  <span class="terminal-line info">Location:</span> Mumbai / Remote / Relocation Open`
      ]
    },

    clear: {
      desc: "Clear the terminal screen",
      exec: () => []
    }
  };

  function printLine(htmlContent) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = htmlContent;
    terminalBody.appendChild(line);
  }

  function handleCommand(cmdInput) {
    const cleanCmd = cmdInput.trim().toLowerCase();

    // Print command entered by user
    printLine(`<span class="terminal-prompt">yashvi@builder-os:~$</span> <span class="terminal-line cmd">${escapeHtml(cmdInput)}</span>`);

    if (cleanCmd === '') return;

    if (cleanCmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    if (COMMANDS[cleanCmd]) {
      const outputLines = COMMANDS[cleanCmd].exec();
      outputLines.forEach(line => printLine(line));
    } else {
      printLine(`<span class="terminal-line warning">Command not recognized: '${escapeHtml(cleanCmd)}'. Type '<span class="cmd">help</span>' to see available commands.</span>`);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      handleCommand(val);
    }
  });

  shortcutChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        handleCommand(cmd);
      }
    });
  });
});

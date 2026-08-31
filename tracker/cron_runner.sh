#!/usr/bin/env bash
# ==============================================================================
# Scheduled Daily Sourcing Runner (Layer 3: macOS Cron / Launchd Daemon)
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR/.."

LOG_FILE="$DIR/sourcing.log"
DATE_STR=$(date "+%Y-%m-%d %H:%M:%S")

echo "==========================================================" >> "$LOG_FILE"
echo "🚀 Sourcing Sweep Started: $DATE_STR" >> "$LOG_FILE"
echo "==========================================================" >> "$LOG_FILE"

# Run Python Sourcing Engine
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3 "$DIR/sourcing_engine.py" --ingest --sync >> "$LOG_FILE" 2>&1

EXIT_CODE=$?
if [ $EXIT_CODE -eq 0 ]; then
    echo "✓ Sourcing Sweep Completed Successfully at $(date "+%Y-%m-%d %H:%M:%S")" >> "$LOG_FILE"
else
    echo "❌ Sourcing Sweep Failed with exit code $EXIT_CODE at $(date "+%Y-%m-%d %H:%M:%S")" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"

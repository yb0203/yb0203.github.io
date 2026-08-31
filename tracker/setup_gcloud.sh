#!/usr/bin/env bash
# ==============================================================================
# Google Cloud CLI & Workspace Setup Script
# Configures gcloud CLI, Application Default Credentials (ADC), and required APIs
# ==============================================================================

set -e

echo "🚀 Setting up Google Cloud CLI for Job Search Pipeline..."
echo ""

# Check gcloud
if ! command -v gcloud &> /dev/null; then
    if [ -f "/opt/homebrew/bin/gcloud" ]; then
        export PATH="/opt/homebrew/bin:$PATH"
    else
        echo "❌ gcloud CLI not found in PATH."
        exit 1
    fi
fi

echo "✓ Found gcloud: $(gcloud --version | head -n 1)"
echo ""

# Step 1: Login with Google Account & ADC + Drive access
echo "👉 Step 1: Authenticating with your Google Account..."
echo "This will open your browser to log into your Google Account and grant access for Google Sheets & Drive."
echo ""
gcloud auth login --update-adc --enable-gdrive-access

echo ""
echo "👉 Step 2: Select or Create a Google Cloud Project..."
PROJECT_NAME="job-prep-pipeline"
EXISTING_PROJECT=$(gcloud projects list --filter="name:$PROJECT_NAME OR id:$PROJECT_NAME" --format="value(projectId)" | head -n 1)

if [ -n "$EXISTING_PROJECT" ]; then
    echo "✓ Found existing project: $EXISTING_PROJECT"
    gcloud config set project "$EXISTING_PROJECT"
else
    echo "Creating project: $PROJECT_NAME..."
    # Generate random suffix if needed
    RAND_SUFFIX=$((1000 + RANDOM % 9000))
    PROJECT_ID="${PROJECT_NAME}-${RAND_SUFFIX}"
    gcloud projects create "$PROJECT_ID" --name="Job Prep Pipeline" || true
    gcloud config set project "$PROJECT_ID"
fi

CURRENT_PROJECT=$(gcloud config get-value project)
echo "✓ Active Project set to: $CURRENT_PROJECT"
echo ""

# Step 3: Enable Required APIs
echo "👉 Step 3: Enabling Google Sheets, Drive, and Gmail APIs..."
gcloud services enable sheets.googleapis.com drive.googleapis.com gmail.googleapis.com --project="$CURRENT_PROJECT" || {
    echo "ℹ️ If billing is required to enable APIs via CLI, you can also enable them in Google Cloud Console:"
    echo "   https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=$CURRENT_PROJECT"
    echo "   https://console.cloud.google.com/apis/library/gmail.googleapis.com?project=$CURRENT_PROJECT"
}

echo ""
echo "🎉 Google Cloud CLI setup complete!"
echo "Current Account: $(gcloud auth list --filter=status:ACTIVE --format="value(account)")"
echo "Current Project: $(gcloud config get-value project)"

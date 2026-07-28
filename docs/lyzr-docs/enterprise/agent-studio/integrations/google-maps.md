> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Maps

Google Maps lets your agents search for places, get directions, reverse geocode coordinates, retrieve elevation data, and generate static map images across over 220 countries and territories.

## Setup

1. In Agent Studio, go to **Tools** → **Google Maps** → **Connect**
2. Paste your API key from the [Google Maps Platform dashboard](https://console.cloud.google.com/google/maps-apis)

## Available actions

| Action                         | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| `GOOGLE_MAPS__TEXT_SEARCH`     | Returns a list of places matching a text query such as "pizza in Sydney" or "shops near Main St". |
| `GOOGLE_MAPS__GET_DIRECTIONS`  | Returns step-by-step directions between two locations for walking, driving, cycling, or transit.  |
| `GOOGLE_MAPS__REVERSE_GEOCODE` | Converts a latitude/longitude coordinate pair into a human-readable address.                      |
| `GOOGLE_MAPS__GET_STATIC_MAP`  | Generates a static map image centered on a given location with optional markers and zoom level.   |
| `GOOGLE_MAPS__GET_ELEVATION`   | Returns elevation data in meters for one or more geographic coordinate pairs.                     |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Google Maps**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Local business discovery**
An agent can use Text Search to find nearby restaurants, pharmacies, or service providers based on a user's current location or any address they provide.

**Route planning assistant**
An agent can use Get Directions to calculate travel routes between two points and present walking, driving, or transit options with estimated travel times.

**Location enrichment pipeline**
An agent can use Reverse Geocode to convert raw GPS coordinates from IoT devices or user check-ins into readable addresses for logging, display, or downstream processing.

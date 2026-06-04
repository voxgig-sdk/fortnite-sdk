# Fortnite SDK

Community-run Fortnite data hub for cosmetics, item shop, player stats and news

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fortnite API

[Fortnite-API](https://fortnite-api.com/) is a community-maintained REST service that mirrors Fortnite game data into a clean JSON API. It is updated automatically with each Fortnite patch and is run independently of Epic Games.

What you get from the API:

- Cosmetic catalogue, including unreleased variants
- Daily and featured item shop inventory (refreshed at midnight UTC)
- Battle royale player statistics, with optional generated stat images
- Game news across the available modes
- Supporting reference data: playlists, minimap with points of interest, banners, AES pak decryption keys, and creator code lookups

Operationally, most read-only endpoints are open, while player-stats endpoints expect an API key issued from the [dashboard](https://dash.fortnite-api.com/). CORS is disabled, so calls should be made server-side. The published health dashboard reports the service running at high reliability with sub-400ms responses.

## Try it

**TypeScript**
```bash
npm install fortnite
```

**Python**
```bash
pip install fortnite-sdk
```

**PHP**
```bash
composer require voxgig/fortnite-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fortnite-sdk/go
```

**Ruby**
```bash
gem install fortnite-sdk
```

**Lua**
```bash
luarocks install fortnite-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FortniteSDK } from 'fortnite'

const client = new FortniteSDK({})

// List all cosmetics
const cosmetics = await client.Cosmetic().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fortnite-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fortnite": {
      "command": "/abs/path/to/fortnite-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Cosmetic** | Fortnite cosmetic items (outfits, back blings, pickaxes, emotes, etc.), including unreleased variants, served from the `/v2/cosmetics` family of endpoints. | `/cosmetics/br` |
| **Shop** | Snapshots of the in-game item shop — daily and featured inventory refreshed at midnight UTC, served from the `shop` endpoints. | `/shop/br` |
| **Statistic** | Battle royale player statistics keyed by account, served from the `stats` endpoints; these require an API key from the dashboard. | `/stats/br/v2` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fortnite_sdk import FortniteSDK

client = FortniteSDK({})

# List all cosmetics
cosmetics, err = client.Cosmetic(None).list(None, None)
```

### PHP

```php
<?php
require_once 'fortnite_sdk.php';

$client = new FortniteSDK([]);

// List all cosmetics
[$cosmetics, $err] = $client->Cosmetic(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fortnite-sdk/go"

client := sdk.NewFortniteSDK(map[string]any{})

// List all cosmetics
cosmetics, err := client.Cosmetic(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Fortnite_sdk"

client = FortniteSDK.new({})

# List all cosmetics
cosmetics, err = client.Cosmetic(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("fortnite_sdk")

local client = sdk.new({})

-- List all cosmetics
local cosmetics, err = client:Cosmetic(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FortniteSDK.test()
const result = await client.Cosmetic().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FortniteSDK.test(None, None)
result, err = client.Cosmetic(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FortniteSDK::test(null, null);
[$result, $err] = $client->Cosmetic(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Cosmetic(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FortniteSDK.test(nil, nil)
result, err = client.Cosmetic(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Cosmetic(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Fortnite API

- Upstream: [https://fortnite-api.com/](https://fortnite-api.com/)
- API docs: [https://dash.fortnite-api.com/](https://dash.fortnite-api.com/)

- Independent, community-driven project — not affiliated with or endorsed by Epic Games.
- All Fortnite trademarks and game data belong to Epic Games.
- Some endpoints (notably player stats) require a free API key obtained from the dashboard account section.
- CORS is disabled on the endpoints; use the API from a server-side context.

---

Generated from the Fortnite API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

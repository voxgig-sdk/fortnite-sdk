# Fortnite SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Fortnite",
            "slug": "fortnite",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://fortnite-api.com/v2",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "cosmetic": {},
                "shop": {},
                "statistic": {},
            },
        },
        "entity": {
      "cosmetic": {
        "fields": [
          {
            "format": "date-time",
            "name": "added",
            "short": "Date when the item was added",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of the cosmetic item",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the cosmetic item",
            "type": "`$STRING`",
          },
          {
            "name": "images",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "short": "Name of the cosmetic item",
            "type": "`$STRING`",
          },
          {
            "name": "rarity",
            "type": "`$OBJECT`",
          },
          {
            "name": "type",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "cosmetic",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cosmetics/br",
                "segments": [
                  {
                    "lit": "cosmetics",
                  },
                  {
                    "lit": "br",
                  },
                ],
                "select": {
                  "$action": "br",
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "cosmetics",
                  "br",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "shop": {
        "fields": [
          {
            "name": "daily",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "date",
            "short": "Date when the shop was last updated",
            "type": "`$STRING`",
          },
          {
            "name": "featured",
            "type": "`$ARRAY`",
          },
          {
            "name": "hash",
            "short": "Unique hash of the current shop",
            "type": "`$STRING`",
          },
        ],
        "name": "shop",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/shop/br",
                "segments": [
                  {
                    "lit": "shop",
                  },
                  {
                    "lit": "br",
                  },
                ],
                "select": {
                  "$action": "br",
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "shop",
                  "br",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "statistic": {
        "fields": [
          {
            "name": "account",
            "type": "`$OBJECT`",
          },
          {
            "name": "battlePass",
            "type": "`$OBJECT`",
          },
          {
            "name": "stats",
            "type": "`$OBJECT`",
          },
        ],
        "name": "statistic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "image",
                      "orig": "image",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "lifetime",
                      "kind": "query",
                      "name": "time_window",
                      "orig": "time_window",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/stats/br/v2",
                "segments": [
                  {
                    "lit": "stats",
                  },
                  {
                    "lit": "br",
                  },
                  {
                    "lit": "v2",
                  },
                ],
                "select": {
                  "exist": [
                    "account_id",
                    "image",
                    "name",
                    "time_window",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "stats",
                  "br",
                  "v2",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

# Fortnite SDK configuration

module FortniteConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Fortnite",
        "slug" => "fortnite",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://fortnite-api.com/v2",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "cosmetic" => {},
          "shop" => {},
          "statistic" => {},
        },
      },
      "entity" => {
        "cosmetic" => {
          "fields" => [
            {
              "format" => "date-time",
              "name" => "added",
              "short" => "Date when the item was added",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Description of the cosmetic item",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the cosmetic item",
              "type" => "`$STRING`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "short" => "Name of the cosmetic item",
              "type" => "`$STRING`",
            },
            {
              "name" => "rarity",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "cosmetic",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/cosmetics/br",
                  "segments" => [
                    {
                      "lit" => "cosmetics",
                    },
                    {
                      "lit" => "br",
                    },
                  ],
                  "select" => {
                    "$action" => "br",
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "cosmetics",
                    "br",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "shop" => {
          "fields" => [
            {
              "name" => "daily",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "date-time",
              "name" => "date",
              "short" => "Date when the shop was last updated",
              "type" => "`$STRING`",
            },
            {
              "name" => "featured",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "hash",
              "short" => "Unique hash of the current shop",
              "type" => "`$STRING`",
            },
          ],
          "name" => "shop",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/shop/br",
                  "segments" => [
                    {
                      "lit" => "shop",
                    },
                    {
                      "lit" => "br",
                    },
                  ],
                  "select" => {
                    "$action" => "br",
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "shop",
                    "br",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "statistic" => {
          "fields" => [
            {
              "name" => "account",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "battlePass",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "stats",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "statistic",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "image",
                        "orig" => "image",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "lifetime",
                        "kind" => "query",
                        "name" => "time_window",
                        "orig" => "time_window",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stats/br/v2",
                  "segments" => [
                    {
                      "lit" => "stats",
                    },
                    {
                      "lit" => "br",
                    },
                    {
                      "lit" => "v2",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "account_id",
                      "image",
                      "name",
                      "time_window",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "stats",
                    "br",
                    "v2",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FortniteFeatures.make_feature(name)
  end
end

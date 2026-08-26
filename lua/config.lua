-- Fortnite SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Fortnite",
      slug = "fortnite",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://fortnite-api.com/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["cosmetic"] = {},
        ["shop"] = {},
        ["statistic"] = {},
      },
    },
    entity = {
      ["cosmetic"] = {
        ["fields"] = {
          {
            ["name"] = "added",
            ["short"] = "Date when the item was added",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Description of the cosmetic item",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the cosmetic item",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "images",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the cosmetic item",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rarity",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "cosmetic",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cosmetics/br",
                ["parts"] = {
                  "cosmetics",
                  "br",
                },
                ["select"] = {
                  ["$action"] = "br",
                  ["exist"] = {
                    "language",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["shop"] = {
        ["fields"] = {
          {
            ["name"] = "daily",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "date",
            ["short"] = "Date when the shop was last updated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "featured",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hash",
            ["short"] = "Unique hash of the current shop",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "shop",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/shop/br",
                ["parts"] = {
                  "shop",
                  "br",
                },
                ["select"] = {
                  ["$action"] = "br",
                  ["exist"] = {
                    "language",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["statistic"] = {
        ["fields"] = {
          {
            ["name"] = "account",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "battlePass",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "stats",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "statistic",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "image",
                      ["orig"] = "image",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "lifetime",
                      ["kind"] = "query",
                      ["name"] = "time_window",
                      ["orig"] = "time_window",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/stats/br/v2",
                ["parts"] = {
                  "stats",
                  "br",
                  "v2",
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "image",
                    "name",
                    "time_window",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

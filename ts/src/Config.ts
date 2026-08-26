
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Fortnite',
        slug: "fortnite",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://fortnite-api.com/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      cosmetic: {
      },

      shop: {
      },

      statistic: {
      },

    }
  }


  entity = {
    "cosmetic": {
      "fields": [
        {
          "name": "added",
          "short": "Date when the item was added",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of the cosmetic item",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the cosmetic item",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "Name of the cosmetic item",
          "type": "`$STRING`"
        },
        {
          "name": "rarity",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "type": "`$OBJECT`"
        }
      ],
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cosmetics/br",
              "parts": [
                "cosmetics",
                "br"
              ],
              "select": {
                "$action": "br",
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "shop": {
      "fields": [
        {
          "name": "daily",
          "type": "`$ARRAY`"
        },
        {
          "name": "date",
          "short": "Date when the shop was last updated",
          "type": "`$STRING`"
        },
        {
          "name": "featured",
          "type": "`$ARRAY`"
        },
        {
          "name": "hash",
          "short": "Unique hash of the current shop",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/shop/br",
              "parts": [
                "shop",
                "br"
              ],
              "select": {
                "$action": "br",
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "statistic": {
      "fields": [
        {
          "name": "account",
          "type": "`$OBJECT`"
        },
        {
          "name": "battlePass",
          "type": "`$OBJECT`"
        },
        {
          "name": "stats",
          "type": "`$OBJECT`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "lifetime",
                    "kind": "query",
                    "name": "time_window",
                    "orig": "time_window",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/stats/br/v2",
              "parts": [
                "stats",
                "br",
                "v2"
              ],
              "select": {
                "exist": [
                  "account_id",
                  "image",
                  "name",
                  "time_window"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


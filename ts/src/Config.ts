
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "format": "date-time",
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
      "id": {
        "field": "id",
        "name": "id"
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cosmetics/br",
              "segments": [
                {
                  "lit": "cosmetics"
                },
                {
                  "lit": "br"
                }
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
              },
              "parts": [
                "cosmetics",
                "br"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "shop": {
      "fields": [],
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
              "segments": [
                {
                  "lit": "shop"
                },
                {
                  "lit": "br"
                }
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
              },
              "parts": [
                "shop",
                "br"
              ]
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
              "segments": [
                {
                  "lit": "stats"
                },
                {
                  "lit": "br"
                },
                {
                  "lit": "v2"
                }
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
              },
              "parts": [
                "stats",
                "br",
                "v2"
              ]
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
  config,
  FEATURE_PLUGINS,
}


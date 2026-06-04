
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://fortnite-api.com/v2',

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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "image",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "rarity",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "type",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 6
        }
      ],
      "name": "cosmetic",
      "op": {
        "list": {
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "shop": {
      "fields": [
        {
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "status",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 1
        }
      ],
      "name": "shop",
      "op": {
        "load": {
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "statistic": {
      "fields": [
        {
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "status",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 1
        }
      ],
      "name": "statistic",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "account_id",
                    "orig": "account_id",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "image",
                    "orig": "image",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "lifetime",
                    "kind": "query",
                    "name": "time_window",
                    "orig": "time_window",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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


package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Fortnite",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://fortnite-api.com/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cosmetic": map[string]any{},
				"shop": map[string]any{},
				"statistic": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cosmetic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "added",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rarity",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$OBJECT`",
					},
				},
				"name": "cosmetic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cosmetics/br",
								"parts": []any{
									"cosmetics",
									"br",
								},
								"select": map[string]any{
									"$action": "br",
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"shop": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "daily",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "featured",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hash",
						"type": "`$STRING`",
					},
				},
				"name": "shop",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/shop/br",
								"parts": []any{
									"shop",
									"br",
								},
								"select": map[string]any{
									"$action": "br",
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"statistic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "battlePass",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stats",
						"type": "`$OBJECT`",
					},
				},
				"name": "statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "image",
											"orig": "image",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "lifetime",
											"kind": "query",
											"name": "time_window",
											"orig": "time_window",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stats/br/v2",
								"parts": []any{
									"stats",
									"br",
									"v2",
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"image",
										"name",
										"time_window",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

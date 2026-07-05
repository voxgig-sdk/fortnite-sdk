// Typed models for the Fortnite SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Cosmetic is the typed data model for the cosmetic entity.
type Cosmetic struct {
	Added *string `json:"added,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Rarity *map[string]any `json:"rarity,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
}

// CosmeticListMatch is the typed request payload for Cosmetic.ListTyped.
type CosmeticListMatch struct {
	Added *string `json:"added,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Rarity *map[string]any `json:"rarity,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
}

// Shop is the typed data model for the shop entity.
type Shop struct {
	Data *map[string]any `json:"data,omitempty"`
	Status *int `json:"status,omitempty"`
}

// ShopLoadMatch is the typed request payload for Shop.LoadTyped.
type ShopLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Status *int `json:"status,omitempty"`
}

// Statistic is the typed data model for the statistic entity.
type Statistic struct {
	Data *map[string]any `json:"data,omitempty"`
	Status *int `json:"status,omitempty"`
}

// StatisticLoadMatch is the typed request payload for Statistic.LoadTyped.
type StatisticLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Status *int `json:"status,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

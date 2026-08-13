// Typed models for the Fortnite SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/fortnite-sdk/go/core"
)

// Cosmetic is the typed data model for the cosmetic entity.
type Cosmetic struct {
	Added *string `json:"added,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	Rarity *map[string]any `json:"rarity,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
}

// CosmeticListMatch is the typed request payload for Cosmetic.ListTyped.
type CosmeticListMatch struct {
	Added *string `json:"added,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	Rarity *map[string]any `json:"rarity,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
}

// Shop is the typed data model for the shop entity.
type Shop struct {
	Daily *[]any `json:"daily,omitempty"`
	Date *string `json:"date,omitempty"`
	Featured *[]any `json:"featured,omitempty"`
	Hash *string `json:"hash,omitempty"`
}

// ShopLoadMatch is the typed request payload for Shop.LoadTyped.
type ShopLoadMatch struct {
	Daily *[]any `json:"daily,omitempty"`
	Date *string `json:"date,omitempty"`
	Featured *[]any `json:"featured,omitempty"`
	Hash *string `json:"hash,omitempty"`
}

// Statistic is the typed data model for the statistic entity.
type Statistic struct {
	Account *map[string]any `json:"account,omitempty"`
	BattlePass *map[string]any `json:"battlePass,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
}

// StatisticLoadMatch is the typed request payload for Statistic.LoadTyped.
type StatisticLoadMatch struct {
	Account *map[string]any `json:"account,omitempty"`
	BattlePass *map[string]any `json:"battlePass,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

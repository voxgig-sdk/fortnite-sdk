// Typed models for the Fortnite SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Cosmetic {
  added?: string
  description?: string
  id?: string
  image?: Record<string, any>
  name?: string
  rarity?: Record<string, any>
  type?: Record<string, any>
}

export type CosmeticListMatch = Partial<Cosmetic>

export interface Shop {
  data?: Record<string, any>
  status?: number
}

export type ShopLoadMatch = Partial<Shop>

export interface Statistic {
  data?: Record<string, any>
  status?: number
}

export type StatisticLoadMatch = Partial<Statistic>


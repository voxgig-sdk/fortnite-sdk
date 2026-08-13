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
  images?: Record<string, any>
  name?: string
  rarity?: Record<string, any>
  type?: Record<string, any>
}

export interface CosmeticListMatch {
  added?: string
  description?: string
  id?: string
  images?: Record<string, any>
  name?: string
  rarity?: Record<string, any>
  type?: Record<string, any>

  // Selects a custom action instead of the plain list:
  //   'br'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Shop {
  daily?: any[]
  date?: string
  featured?: any[]
  hash?: string
}

export interface ShopLoadMatch {
  daily?: any[]
  date?: string
  featured?: any[]
  hash?: string

  // Selects a custom action instead of the plain load:
  //   'br'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Statistic {
  account?: Record<string, any>
  battlePass?: Record<string, any>
  stats?: Record<string, any>
}

export interface StatisticLoadMatch {
  account?: Record<string, any>
  battlePass?: Record<string, any>
  stats?: Record<string, any>
}


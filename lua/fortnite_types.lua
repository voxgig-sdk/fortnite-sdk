-- Typed models for the Fortnite SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Cosmetic
---@field added? string
---@field description? string
---@field id? string
---@field image? table
---@field name? string
---@field rarity? table
---@field type? table

---@class CosmeticListMatch
---@field added? string
---@field description? string
---@field id? string
---@field image? table
---@field name? string
---@field rarity? table
---@field type? table

---@class Shop
---@field data? table
---@field status? number

---@class ShopLoadMatch
---@field data? table
---@field status? number

---@class Statistic
---@field data? table
---@field status? number

---@class StatisticLoadMatch
---@field data? table
---@field status? number

local M = {}

return M

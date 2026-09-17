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
---@field images? table
---@field name? string
---@field rarity? table
---@field type? table

---@class CosmeticListMatch
---@field language? string

---@class Shop

---@class ShopLoadMatch
---@field language? string

---@class Statistic
---@field account? table
---@field battlePass? table
---@field stats? table

---@class StatisticLoadMatch
---@field account_id? string
---@field image? string
---@field name? string
---@field time_window? string

local M = {}

return M

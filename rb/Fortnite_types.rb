# frozen_string_literal: true

# Typed models for the Fortnite SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Cosmetic entity data model.
#
# @!attribute [rw] added
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [Hash, nil]
Cosmetic = Struct.new(
  :added,
  :description,
  :id,
  :images,
  :name,
  :rarity,
  :type,
  keyword_init: true
)

# Request payload for Cosmetic#list.
#
# @!attribute [rw] added
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [Hash, nil]
CosmeticListMatch = Struct.new(
  :added,
  :description,
  :id,
  :images,
  :name,
  :rarity,
  :type,
  keyword_init: true
)

# Shop entity data model.
#
# @!attribute [rw] daily
#   @return [Array, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Array, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
Shop = Struct.new(
  :daily,
  :date,
  :featured,
  :hash,
  keyword_init: true
)

# Request payload for Shop#load.
#
# @!attribute [rw] daily
#   @return [Array, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Array, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
ShopLoadMatch = Struct.new(
  :daily,
  :date,
  :featured,
  :hash,
  keyword_init: true
)

# Statistic entity data model.
#
# @!attribute [rw] account
#   @return [Hash, nil]
#
# @!attribute [rw] battlePass
#   @return [Hash, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
Statistic = Struct.new(
  :account,
  :battlePass,
  :stats,
  keyword_init: true
)

# Request payload for Statistic#load.
#
# @!attribute [rw] account
#   @return [Hash, nil]
#
# @!attribute [rw] battlePass
#   @return [Hash, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
StatisticLoadMatch = Struct.new(
  :account,
  :battlePass,
  :stats,
  keyword_init: true
)


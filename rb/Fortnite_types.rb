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
# @!attribute [rw] image
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
  :image,
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
# @!attribute [rw] image
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
  :image,
  :name,
  :rarity,
  :type,
  keyword_init: true
)

# Shop entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
Shop = Struct.new(
  :data,
  :status,
  keyword_init: true
)

# Request payload for Shop#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
ShopLoadMatch = Struct.new(
  :data,
  :status,
  keyword_init: true
)

# Statistic entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
Statistic = Struct.new(
  :data,
  :status,
  keyword_init: true
)

# Request payload for Statistic#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
StatisticLoadMatch = Struct.new(
  :data,
  :status,
  keyword_init: true
)


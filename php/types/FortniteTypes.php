<?php
declare(strict_types=1);

// Typed models for the Fortnite SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Cosmetic entity data model. */
class Cosmetic
{
    public ?string $added = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?array $images = null;
    public ?string $name = null;
    public ?array $rarity = null;
    public ?array $type = null;
}

/** Request payload for Cosmetic#list. */
class CosmeticListMatch
{
    public ?string $language = null;
}

/** Shop entity data model. */
class Shop
{
}

/** Request payload for Shop#load. */
class ShopLoadMatch
{
    public ?string $language = null;
}

/** Statistic entity data model. */
class Statistic
{
    public ?array $account = null;
    public ?array $battlePass = null;
    public ?array $stats = null;
}

/** Request payload for Statistic#load. */
class StatisticLoadMatch
{
    public ?string $account_id = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?string $time_window = null;
}


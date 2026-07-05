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
    public ?array $image = null;
    public ?string $name = null;
    public ?array $rarity = null;
    public ?array $type = null;
}

/** Request payload for Cosmetic#list. */
class CosmeticListMatch
{
    public ?string $added = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?string $name = null;
    public ?array $rarity = null;
    public ?array $type = null;
}

/** Shop entity data model. */
class Shop
{
    public ?array $data = null;
    public ?int $status = null;
}

/** Request payload for Shop#load. */
class ShopLoadMatch
{
    public ?array $data = null;
    public ?int $status = null;
}

/** Statistic entity data model. */
class Statistic
{
    public ?array $data = null;
    public ?int $status = null;
}

/** Request payload for Statistic#load. */
class StatisticLoadMatch
{
    public ?array $data = null;
    public ?int $status = null;
}


# Typed models for the Fortnite SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Cosmetic:
    added: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    name: Optional[str] = None
    rarity: Optional[dict] = None
    type: Optional[dict] = None


@dataclass
class CosmeticListMatch:
    added: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    name: Optional[str] = None
    rarity: Optional[dict] = None
    type: Optional[dict] = None


@dataclass
class Shop:
    data: Optional[dict] = None
    status: Optional[int] = None


@dataclass
class ShopLoadMatch:
    data: Optional[dict] = None
    status: Optional[int] = None


@dataclass
class Statistic:
    data: Optional[dict] = None
    status: Optional[int] = None


@dataclass
class StatisticLoadMatch:
    data: Optional[dict] = None
    status: Optional[int] = None


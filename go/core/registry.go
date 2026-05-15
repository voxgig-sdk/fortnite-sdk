package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCosmeticEntityFunc func(client *FortniteSDK, entopts map[string]any) FortniteEntity

var NewShopEntityFunc func(client *FortniteSDK, entopts map[string]any) FortniteEntity

var NewStatisticEntityFunc func(client *FortniteSDK, entopts map[string]any) FortniteEntity


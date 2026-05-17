package voxgigfortnitesdk

import (
	"github.com/voxgig-sdk/fortnite-sdk/go/core"
	"github.com/voxgig-sdk/fortnite-sdk/go/entity"
	"github.com/voxgig-sdk/fortnite-sdk/go/feature"
	_ "github.com/voxgig-sdk/fortnite-sdk/go/utility"
)

// Type aliases preserve external API.
type FortniteSDK = core.FortniteSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FortniteEntity = core.FortniteEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FortniteError = core.FortniteError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCosmeticEntityFunc = func(client *core.FortniteSDK, entopts map[string]any) core.FortniteEntity {
		return entity.NewCosmeticEntity(client, entopts)
	}
	core.NewShopEntityFunc = func(client *core.FortniteSDK, entopts map[string]any) core.FortniteEntity {
		return entity.NewShopEntity(client, entopts)
	}
	core.NewStatisticEntityFunc = func(client *core.FortniteSDK, entopts map[string]any) core.FortniteEntity {
		return entity.NewStatisticEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFortniteSDK = core.NewFortniteSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

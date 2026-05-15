# Fortnite SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FortniteUtility.registrar = ->(u) {
  u.clean = FortniteUtilities::Clean
  u.done = FortniteUtilities::Done
  u.make_error = FortniteUtilities::MakeError
  u.feature_add = FortniteUtilities::FeatureAdd
  u.feature_hook = FortniteUtilities::FeatureHook
  u.feature_init = FortniteUtilities::FeatureInit
  u.fetcher = FortniteUtilities::Fetcher
  u.make_fetch_def = FortniteUtilities::MakeFetchDef
  u.make_context = FortniteUtilities::MakeContext
  u.make_options = FortniteUtilities::MakeOptions
  u.make_request = FortniteUtilities::MakeRequest
  u.make_response = FortniteUtilities::MakeResponse
  u.make_result = FortniteUtilities::MakeResult
  u.make_point = FortniteUtilities::MakePoint
  u.make_spec = FortniteUtilities::MakeSpec
  u.make_url = FortniteUtilities::MakeUrl
  u.param = FortniteUtilities::Param
  u.prepare_auth = FortniteUtilities::PrepareAuth
  u.prepare_body = FortniteUtilities::PrepareBody
  u.prepare_headers = FortniteUtilities::PrepareHeaders
  u.prepare_method = FortniteUtilities::PrepareMethod
  u.prepare_params = FortniteUtilities::PrepareParams
  u.prepare_path = FortniteUtilities::PreparePath
  u.prepare_query = FortniteUtilities::PrepareQuery
  u.result_basic = FortniteUtilities::ResultBasic
  u.result_body = FortniteUtilities::ResultBody
  u.result_headers = FortniteUtilities::ResultHeaders
  u.transform_request = FortniteUtilities::TransformRequest
  u.transform_response = FortniteUtilities::TransformResponse
}

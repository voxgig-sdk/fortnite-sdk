<?php
declare(strict_types=1);

// Fortnite SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FortniteUtility::setRegistrar(function (FortniteUtility $u): void {
    $u->clean = [FortniteClean::class, 'call'];
    $u->done = [FortniteDone::class, 'call'];
    $u->make_error = [FortniteMakeError::class, 'call'];
    $u->feature_add = [FortniteFeatureAdd::class, 'call'];
    $u->feature_hook = [FortniteFeatureHook::class, 'call'];
    $u->feature_init = [FortniteFeatureInit::class, 'call'];
    $u->fetcher = [FortniteFetcher::class, 'call'];
    $u->make_fetch_def = [FortniteMakeFetchDef::class, 'call'];
    $u->make_context = [FortniteMakeContext::class, 'call'];
    $u->make_options = [FortniteMakeOptions::class, 'call'];
    $u->make_request = [FortniteMakeRequest::class, 'call'];
    $u->make_response = [FortniteMakeResponse::class, 'call'];
    $u->make_result = [FortniteMakeResult::class, 'call'];
    $u->make_point = [FortniteMakePoint::class, 'call'];
    $u->make_spec = [FortniteMakeSpec::class, 'call'];
    $u->make_url = [FortniteMakeUrl::class, 'call'];
    $u->param = [FortniteParam::class, 'call'];
    $u->prepare_auth = [FortnitePrepareAuth::class, 'call'];
    $u->prepare_body = [FortnitePrepareBody::class, 'call'];
    $u->prepare_headers = [FortnitePrepareHeaders::class, 'call'];
    $u->prepare_method = [FortnitePrepareMethod::class, 'call'];
    $u->prepare_params = [FortnitePrepareParams::class, 'call'];
    $u->prepare_path = [FortnitePreparePath::class, 'call'];
    $u->prepare_query = [FortnitePrepareQuery::class, 'call'];
    $u->result_basic = [FortniteResultBasic::class, 'call'];
    $u->result_body = [FortniteResultBody::class, 'call'];
    $u->result_headers = [FortniteResultHeaders::class, 'call'];
    $u->transform_request = [FortniteTransformRequest::class, 'call'];
    $u->transform_response = [FortniteTransformResponse::class, 'call'];
});

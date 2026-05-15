<?php
declare(strict_types=1);

// Fortnite SDK utility: prepare_body

class FortnitePrepareBody
{
    public static function call(FortniteContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

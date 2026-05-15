<?php
declare(strict_types=1);

// Fortnite SDK utility: result_body

class FortniteResultBody
{
    public static function call(FortniteContext $ctx): ?FortniteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

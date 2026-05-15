<?php
declare(strict_types=1);

// Fortnite SDK utility: result_headers

class FortniteResultHeaders
{
    public static function call(FortniteContext $ctx): ?FortniteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

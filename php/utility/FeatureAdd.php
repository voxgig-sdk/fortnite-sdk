<?php
declare(strict_types=1);

// Fortnite SDK utility: feature_add

class FortniteFeatureAdd
{
    public static function call(FortniteContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

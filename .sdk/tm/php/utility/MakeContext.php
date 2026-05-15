<?php
declare(strict_types=1);

// Fortnite SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FortniteMakeContext
{
    public static function call(array $ctxmap, ?FortniteContext $basectx): FortniteContext
    {
        return new FortniteContext($ctxmap, $basectx);
    }
}

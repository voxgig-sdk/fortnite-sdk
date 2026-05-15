<?php
declare(strict_types=1);

// Fortnite SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FortniteFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FortniteBaseFeature();
            case "test":
                return new FortniteTestFeature();
            default:
                return new FortniteBaseFeature();
        }
    }
}

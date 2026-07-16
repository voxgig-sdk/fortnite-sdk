<?php
declare(strict_types=1);

// Fortnite SDK base feature

class FortniteBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FortniteContext $ctx, array $options): void {}
    public function PostConstruct(FortniteContext $ctx): void {}
    public function PostConstructEntity(FortniteContext $ctx): void {}
    public function SetData(FortniteContext $ctx): void {}
    public function GetData(FortniteContext $ctx): void {}
    public function GetMatch(FortniteContext $ctx): void {}
    public function SetMatch(FortniteContext $ctx): void {}
    public function PrePoint(FortniteContext $ctx): void {}
    public function PreSpec(FortniteContext $ctx): void {}
    public function PreRequest(FortniteContext $ctx): void {}
    public function PreResponse(FortniteContext $ctx): void {}
    public function PreResult(FortniteContext $ctx): void {}
    public function PreDone(FortniteContext $ctx): void {}
    public function PreUnexpected(FortniteContext $ctx): void {}
}

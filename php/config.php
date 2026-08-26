<?php
declare(strict_types=1);

// Fortnite SDK configuration

class FortniteConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Fortnite",
                "slug" => "fortnite",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://fortnite-api.com/v2",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "cosmetic" => [],
                    "shop" => [],
                    "statistic" => [],
                ],
            ],
            "entity" => [
        'cosmetic' => [
          'fields' => [
            [
              'name' => 'added',
              'short' => 'Date when the item was added',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description of the cosmetic item',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the cosmetic item',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the cosmetic item',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rarity',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'type',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'cosmetic',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cosmetics/br',
                  'parts' => [
                    'cosmetics',
                    'br',
                  ],
                  'select' => [
                    '$action' => 'br',
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'shop' => [
          'fields' => [
            [
              'name' => 'daily',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'date',
              'short' => 'Date when the shop was last updated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'featured',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'hash',
              'short' => 'Unique hash of the current shop',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'shop',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/shop/br',
                  'parts' => [
                    'shop',
                    'br',
                  ],
                  'select' => [
                    '$action' => 'br',
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'statistic' => [
          'fields' => [
            [
              'name' => 'account',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'battlePass',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'stats',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'statistic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'image',
                        'orig' => 'image',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'lifetime',
                        'kind' => 'query',
                        'name' => 'time_window',
                        'orig' => 'time_window',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/stats/br/v2',
                  'parts' => [
                    'stats',
                    'br',
                    'v2',
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'image',
                      'name',
                      'time_window',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FortniteFeatures::make_feature($name);
    }
}

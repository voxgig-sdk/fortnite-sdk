"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ShopEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FORTNITE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FORTNITE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FortniteSDK.test();
        const ent = testsdk.Shop();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FORTNITE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'shop.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "shop", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "en", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /shop/br", "json": "{\"operationId\":\"getBRShop\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"daily\":{\"items\":{\"properties\":{\"bundle\":{\"properties\":{\"image\":{\"format\":\"uri\",\"type\":\"string\"},\"info\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"displayDescription\":{\"description\":\"Description of the shop entry\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the shop entry\",\"type\":\"string\"},\"items\":{\"items\":{\"properties\":{\"added\":{\"description\":\"Date when the item was added\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the cosmetic item\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the cosmetic item\",\"type\":\"string\"},\"images\":{\"properties\":{\"featured\":{\"format\":\"uri\",\"type\":\"string\"},\"icon\":{\"format\":\"uri\",\"type\":\"string\"},\"smallIcon\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the cosmetic item\",\"type\":\"string\"},\"rarity\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the rarity\",\"type\":\"string\"},\"value\":{\"description\":\"Rarity level\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the type\",\"type\":\"string\"},\"value\":{\"description\":\"Type of cosmetic (outfit, pickaxe, glider, etc.)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"mainId\":{\"description\":\"Main item ID\",\"type\":\"string\"},\"mainType\":{\"description\":\"Type of the main item\",\"type\":\"string\"},\"offerId\":{\"description\":\"Unique offer ID\",\"type\":\"string\"},\"price\":{\"properties\":{\"finalPrice\":{\"description\":\"Final price in V-Bucks\",\"type\":\"integer\"},\"regularPrice\":{\"description\":\"Regular price in V-Bucks\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"date\":{\"description\":\"Date when the shop was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"featured\":{\"items\":{\"properties\":{\"bundle\":{\"properties\":{\"image\":{\"format\":\"uri\",\"type\":\"string\"},\"info\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"displayDescription\":{\"description\":\"Description of the shop entry\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the shop entry\",\"type\":\"string\"},\"items\":{\"items\":{\"properties\":{\"added\":{\"description\":\"Date when the item was added\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the cosmetic item\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the cosmetic item\",\"type\":\"string\"},\"images\":{\"properties\":{\"featured\":{\"format\":\"uri\",\"type\":\"string\"},\"icon\":{\"format\":\"uri\",\"type\":\"string\"},\"smallIcon\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the cosmetic item\",\"type\":\"string\"},\"rarity\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the rarity\",\"type\":\"string\"},\"value\":{\"description\":\"Rarity level\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the type\",\"type\":\"string\"},\"value\":{\"description\":\"Type of cosmetic (outfit, pickaxe, glider, etc.)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"mainId\":{\"description\":\"Main item ID\",\"type\":\"string\"},\"mainType\":{\"description\":\"Type of the main item\",\"type\":\"string\"},\"offerId\":{\"description\":\"Unique offer ID\",\"type\":\"string\"},\"price\":{\"properties\":{\"finalPrice\":{\"description\":\"Final price in V-Bucks\",\"type\":\"integer\"},\"regularPrice\":{\"description\":\"Regular price in V-Bucks\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"hash\":{\"description\":\"Unique hash of the current shop\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with shop data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/shop/br", "segments": [{ "lit": "shop" }, { "lit": "br" }], "select": { "$action": "br", "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "shop", "name__orig": "shop", "Name": "Shop", "name_": "shop", "name-": "shop", "NAME": "SHOP", "index$": 1 }, { "active": true, "entity": "shop", "key$": "BasicShopFlow", "kind": "basic", "name": "BasicShopFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "shop_ref01", "srcdatavar": "shop_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-shop_ref01" } }], "index$": 0 }] }, 'Shop');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let shop_ref01_data = Object.values(setup.data.existing.shop)[0];
        // LOAD
        const shop_ref01_ent = client.Shop();
        const shop_ref01_match_dt0 = {};
        const shop_ref01_data_dt0 = (await shop_ref01_ent.load(shop_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != shop_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/shop/ShopTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FortniteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['shop01', 'shop02', 'shop03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FORTNITE_TEST_SHOP_ENTID': idmap,
        'FORTNITE_TEST_LIVE': 'FALSE',
        'FORTNITE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FORTNITE_TEST_SHOP_ENTID'];
    const live = 'TRUE' === env.FORTNITE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FORTNITE_TEST_SHOP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FortniteSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FORTNITE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ShopEntity.test.js.map
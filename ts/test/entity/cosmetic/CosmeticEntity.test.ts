

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FortniteSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CosmeticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FORTNITE_TEST_LIVE=TRUE.
  afterEach(liveDelay('FORTNITE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FortniteSDK.test()
    const ent = testsdk.Cosmetic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FORTNITE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cosmetic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"added","req":false,"short":"Date when the item was added","type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"short":"Description of the cosmetic item","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the cosmetic item","type":"`$STRING`","index$":2},{"active":true,"name":"images","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"name","req":false,"short":"Name of the cosmetic item","type":"`$STRING`","index$":4},{"active":true,"name":"rarity","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"type","req":false,"type":"`$OBJECT`","index$":6}],"id":{"field":"id","name":"id"},"name":"cosmetic","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"en","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cosmetics/br","json":"{\"operationId\":\"getBRCosmetics\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"ar\",\"de\",\"es\",\"es-419\",\"fr\",\"it\",\"ja\",\"ko\",\"pl\",\"pt-BR\",\"ru\",\"tr\",\"zh-CN\",\"zh-Hant\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"added\":{\"description\":\"Date when the item was added\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the cosmetic item\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the cosmetic item\",\"type\":\"string\"},\"images\":{\"properties\":{\"featured\":{\"format\":\"uri\",\"type\":\"string\"},\"icon\":{\"format\":\"uri\",\"type\":\"string\"},\"smallIcon\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the cosmetic item\",\"type\":\"string\"},\"rarity\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the rarity\",\"type\":\"string\"},\"value\":{\"description\":\"Rarity level\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"properties\":{\"displayValue\":{\"description\":\"Display name of the type\",\"type\":\"string\"},\"value\":{\"description\":\"Type of cosmetic (outfit, pickaxe, glider, etc.)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with cosmetics data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cosmetics/br","segments":[{"lit":"cosmetics"},{"lit":"br"}],"select":{"$action":"br","exist":["language"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cosmetic","name__orig":"cosmetic","Name":"Cosmetic","name_":"cosmetic","name-":"cosmetic","NAME":"COSMETIC","index$":0}, {"active":true,"entity":"cosmetic","key$":"BasicCosmeticFlow","kind":"basic","name":"BasicCosmeticFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"cosmetic_ref01"}}],"index$":0}]}, 'Cosmetic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cosmetic_ref01_data = Object.values(setup.data.existing.cosmetic)[0] as any

    // LIST
    const cosmetic_ref01_ent = client.Cosmetic()
    const cosmetic_ref01_match: any = {}

    const cosmetic_ref01_list = (await cosmetic_ref01_ent.list(cosmetic_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cosmetic/CosmeticTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FortniteSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cosmetic01','cosmetic02','cosmetic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FORTNITE_TEST_COSMETIC_ENTID': idmap,
    'FORTNITE_TEST_LIVE': 'FALSE',
    'FORTNITE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FORTNITE_TEST_COSMETIC_ENTID']

  const live = 'TRUE' === env.FORTNITE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FORTNITE_TEST_COSMETIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FortniteSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

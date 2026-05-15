-- ProjectName SDK exists test

local sdk = require("fortnite_sdk")

describe("FortniteSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

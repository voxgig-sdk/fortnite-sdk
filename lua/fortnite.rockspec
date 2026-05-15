package = "voxgig-sdk-fortnite"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fortnite-sdk.git"
}
description = {
  summary = "Fortnite SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fortnite_sdk"] = "fortnite_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

-- Fortnite SDK error

local FortniteError = {}
FortniteError.__index = FortniteError


function FortniteError.new(code, msg, ctx)
  local self = setmetatable({}, FortniteError)
  self.is_sdk_error = true
  self.sdk = "Fortnite"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FortniteError:error()
  return self.msg
end


function FortniteError:__tostring()
  return self.msg
end


return FortniteError

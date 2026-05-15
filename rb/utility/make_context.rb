# Fortnite SDK utility: make_context
require_relative '../core/context'
module FortniteUtilities
  MakeContext = ->(ctxmap, basectx) {
    FortniteContext.new(ctxmap, basectx)
  }
end

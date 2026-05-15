# Fortnite SDK utility: feature_add
module FortniteUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

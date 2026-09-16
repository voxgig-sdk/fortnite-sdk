# Fortnite SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FortniteFeatures
  def self.make_feature(name)
    case name
    when "base"
      FortniteBaseFeature.new
    when "ratelimit"
      FortniteRatelimitFeature.new
    when "retry"
      FortniteRetryFeature.new
    when "test"
      FortniteTestFeature.new
    when "timeout"
      FortniteTimeoutFeature.new
    else
      FortniteBaseFeature.new
    end
  end
end

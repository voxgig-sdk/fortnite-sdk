# Fortnite SDK feature factory

from fortnite_sdk.feature.base_feature import FortniteBaseFeature
from fortnite_sdk.feature.test_feature import FortniteTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FortniteBaseFeature(),
        "test": lambda: FortniteTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

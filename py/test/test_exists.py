# ProjectName SDK exists test

import pytest
from fortnite_sdk import FortniteSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FortniteSDK.test(None, None)
        assert testsdk is not None

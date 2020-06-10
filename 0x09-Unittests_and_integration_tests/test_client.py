#!/usr/bin/env python3
""" Unit test
"""
import unittest
from parameterized import parameterized
from unittest import mock
from unittest.mock import patch, Mock
import client


class TestGithubOrgClient(unittest.TestCase):
    """ GithubOrgClient unit test
    """
    @parameterized.expand([
        ("GithubOrgClient.org", {"payload": True}),
        ("test.org", {"payload": True})
    ])
    @mock.patch("client.get_json")
    def test_org(self, url, payload, mockJson):
        """ test org property
        """
        mockJson.return_value = payload
        data = client.GithubOrgClient(url)
        response = data.org
        self.assertEqual(response, payload)
        mockJson.assert_called_once()


if __name__ == '__main__':
    unittest.main()

#!/usr/bin/env python3
""" Unit test
"""
import unittest
from parameterized import parameterized
from unittest.mock import patch, Mock
from utils import access_nested_map, get_json, memoize


class TestAccessNestedMap(unittest.TestCase):
    """ access nested map unit test
    """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """ test assert equal
        """
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        """ Test KeyError case
        """
        with self.assertRaises(KeyError):
            access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """ Get json unit test
    """
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    def test_get_json(self, test_url, test_payload):
        """ test get json.
        """
        class MockObject(Mock):
            """ MockObject class
            """

            def json(self):
                """ json method
                """
                return test_payload
        with patch('utils.requests.get') as MockClass:
            MockClass.return_value = MockObject()
            response = get_json(test_url)
            self.assertEqual(response, test_payload)


class TestMemoize(unittest.TestCase):
    """ Memoize unit test
    """

    def test_memoize(self):
        """ test memoize property
        """
        class TestClass:
            """ TestClass class
            """

            def a_method(self):
                """ returns 42
                """
                return 42

            @memoize
            def a_property(self):
                """ returns response a_method """
                return self.a_method()

        with patch.object(TestClass, "a_method",
                          return_value=42)as mock_method:
            test = TestClass()
            test.a_property
            test.a_property
            mock_method.assert_called_once()


if __name__ == '__main__':
    unittest.main()

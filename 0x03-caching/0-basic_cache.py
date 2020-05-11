#!/usr/bin/python3
""" Basic dictionary
"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Inherits from BaseCaching and is a caching system
    """

    def put(self, key, item):
        """ Put value in cache
        """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None

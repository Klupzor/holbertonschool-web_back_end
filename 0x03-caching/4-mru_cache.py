#!/usr/bin/python3
""" LIFO caching
"""
from collections import deque
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ Inherits from BaseCaching and is a MRU caching system
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.index = deque()
        self.fullCache = False

    def put(self, key, item):
        """ Put value in cache
        """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                return
            if self.fullCache:
                delKey = self.index.pop()
                del self.cache_data[delKey]
                print("DISCARD:", delKey)

            self.index.append(key)
            self.cache_data[key] = item
            if len(self.cache_data) >= self.MAX_ITEMS:
                self.fullCache = True

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            self.index.remove(key)
            self.index.append(key)
            return self.cache_data[key]
        return None

#!/usr/bin/python3
""" BFIFO caching
"""
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ Inherits from BaseCaching and is a FIFO caching system
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.index = []

    def put(self, key, item):
        """ Put value in cache
        """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                return
            if len(self.index) >= BaseCaching.MAX_ITEMS:
                delKey = self.index.pop(0)
                del self.cache_data[delKey]
                print("DISCARD:", delKey)
            self.index.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None

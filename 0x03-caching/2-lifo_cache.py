#!/usr/bin/python3
""" LIFO caching
"""
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ Inherits from BaseCaching and is a LIFO caching system
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.index = []

    def put(self, key, item):
        """ Put value in cache
        """
        top = BaseCaching.MAX_ITEMS
        if key and item:
            if len(self.index) >= top:
                if key in self.cache_data:
                    del self.cache_data[key]
                    self.index.remove(key)
                else:
                    del self.cache_data[self.index[top - 1]]
                    delKey = self.index.pop(top - 1)
                    print("DISCARD:", delKey)
            self.index.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None

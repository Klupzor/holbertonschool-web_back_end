#!/usr/bin/python3
""" LIFO caching
"""
BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """ Inherits from BaseCaching and is a LRU caching system
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.index = []
        self.p = 0
        self.fullCache = False

    def put(self, key, item):
        """ Put value in cache
        """
        top = BaseCaching.MAX_ITEMS - 1
        if key and item:
            if self.p > top:
                self.p = 0
                self.fullCache = True
            if key in self.cache_data:
                self.cache_data[key] = item
                self.p = self.index.index(key)
                self.p += 1
                return
            if self.fullCache:
                del self.cache_data[self.index[self.p]]
                print("DISCARD:", self.index[self.p])
                self.index[self.p] = key
            else:
                self.index.append(key)
            self.cache_data[self.index[self.p]] = item
            self.p += 1

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None

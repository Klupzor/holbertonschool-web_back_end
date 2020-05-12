#!/usr/bin/python3
""" LIFO caching
"""
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ Inherits from BaseCaching and is a MRU caching system
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.index = []
        self.p = 0
        self.incr = True
        self.fullCache = False

    def moveP(self):
        if self.incr:
            self.p += 1
        else:
            self.p -= 1

        if len(self.index) == BaseCaching.MAX_ITEMS:
            self.fullCache = True

        if self.p == BaseCaching.MAX_ITEMS - 1:
            self.incr = False
        elif self.p == 0:
            self.incr = True

    def put(self, key, item):
        """ Put value in cache
        """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                return
            if self.fullCache:
                # print("valor p: {} index: {}".format(self.p, self.index))
                del self.cache_data[self.index[self.p]]
                print("DISCARD:", self.index[self.p])
                self.index[self.p] = key
            else:
                self.index.append(key)
            self.cache_data[self.index[self.p]] = item
            self.moveP()

    def get(self, key):
        """ Get value from cache
        """
        if key in self.cache_data:
            self.p = self.index.index(key)
            return self.cache_data[key]
        return None

    def print_cache(self):
        self.p = len(self.index) - 1
        super().print_cache()

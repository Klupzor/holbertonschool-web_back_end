#!/usr/bin/env python3
""" NoSQL Pymongo
"""


def list_all(mongo_collection):
    """ lists all documents in a collection
    """
    documents = mongo_collection.find()
    return documents

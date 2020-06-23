#!/usr/bin/env python3
""" NoSQL Pymongo
"""


def top_students(mongo_collection):
    """ returns all students sorted by average score
    """
    return mongo_collection.aggregate([
        {
            "$addFields": {
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {"$sort": {"averageScore": -1}}
    ])

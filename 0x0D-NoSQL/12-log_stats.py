#!/usr/bin/env python3
""" NoSQL Pymongo
"""
from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
data = client.logs.nginx
logs = data.count_documents({})
get = data.count_documents({"method": "GET"})
post = data.count_documents({"method": "POST"})
put = data.count_documents({"method": "PUT"})
patch = data.count_documents({"method": "PATCH"})
delete = data.count_documents({"method": "DELETE"})
status = data.count_documents({"method": "GET", "path": "/status"})

message = f"{logs} logs\n\
Methods:\n\
    method GET: {get}\n\
    method POST: {post}\n\
    method PUT: {put}\n\
    method PATCH: {patch}\n\
    method DELETE: {delete}\n\
{status} status check\
"

print(message)

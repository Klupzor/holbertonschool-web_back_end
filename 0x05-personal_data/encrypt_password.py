#!/usr/bin/env python3
""" Personal data
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """Returns encrypt password
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """Returns true if password is correct
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)

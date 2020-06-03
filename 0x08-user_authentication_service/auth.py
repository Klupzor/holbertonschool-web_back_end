#!/usr/bin/env python3
""" Hash password
"""
from db import DB
import bcrypt
from user import User


def _hash_password(password: str) -> str:
    """ takes in a password string arguments and returns a string
    """
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        """ Auth class constructor
        """
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """ Register user
        """
        if email and password:
            user = self._db.find_user_by(email=email)
            if user:
                raise ValueError("User {} already exists".format(email))
            else:
                new_user = self._db.add_user(email, _hash_password(password))
                return new_user

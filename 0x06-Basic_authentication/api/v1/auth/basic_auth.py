#!/usr/bin/env python3
""" Module of auth
"""
import base64
from api.v1.auth.auth import Auth
from models.user import User
from typing import TypeVar


class BasicAuth(Auth):
    """ class to manage the API authentication.
    """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """ returns the Base64 part of the Authorization header
        """
        if (authorization_header and
            type(authorization_header) == str and
                authorization_header.startswith("Basic ")):
            return "".join(authorization_header.split(" ")[1:])

    def decode_base64_authorization_header(self, base64_str: str) -> str:
        """ returns the decoded value of a Base64 string
        """
        if base64_str and type(base64_str) == str:
            try:
                b = base64_str.encode('utf-8')
                base = base64.b64decode(b)
                return base.decode('utf-8')
            except Exception:
                return None

    def extract_user_credentials(self, decoded_b64: str) -> (str, str):
        """ returns the user email and password from the Base64 decoded value
        """
        if decoded_b64 and type(decoded_b64) == str and ":" in decoded_b64:
            email = decoded_b64.split(':')[0]
            password = "".join(decoded_b64.split(':', 1)[1:])
            return (email, password)
        return (None, None)

    def user_object_from_credentials(self, user_email: str,
                                     user_pwd: str) -> TypeVar('User'):
        """ returns the User instance based on his email and password
        """
        if user_email and user_pwd:
            users = User.search({"email": user_email})
            for user in users:
                if user and user.is_valid_password(user_pwd):
                    return user
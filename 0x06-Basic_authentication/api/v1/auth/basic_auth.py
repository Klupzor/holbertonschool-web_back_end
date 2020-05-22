#!/usr/bin/env python3
""" Module of auth
"""
import base64
from api.v1.auth.auth import Auth


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

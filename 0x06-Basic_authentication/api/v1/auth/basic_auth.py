#!/usr/bin/env python3
""" Module of auth
"""
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

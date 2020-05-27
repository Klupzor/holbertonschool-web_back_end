#!/usr/bin/env python3
""" Module of auth
"""
from flask import request
from typing import List, TypeVar


class Auth:
    """ class to manage the API authentication.
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ auth method
        """
        if path is None or excluded_paths is None:
            return True

        path = path + '/' if path[-1] != '/' else path
        wildcard = any(ex.endswith("*") for ex in excluded_paths)
        if not wildcard:
            if path in excluded_paths:
                return False
        for ex in excluded_paths:
            if ex.endswith("*"):
                if path.startswith(ex[:-1]):
                    return False
            if ex == path:
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """ auth method
        returns authorization header
        """
        if not request:
            return None
        return request.headers.get("Authorization")

    def current_user(self, request=None) -> TypeVar('User'):
        """ auth method
        """
        return None

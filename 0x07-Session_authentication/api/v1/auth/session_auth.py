#!/usr/bin/env python3
""" Module of auth
"""

from api.v1.auth.auth import Auth
from uuid import uuid4
from models.user import User
from typing import TypeVar


class SessionAuth(Auth):
    """ class to manage the API authentication.
    """
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """ creates a Session ID for a user_id
        """
        if not user_id or type(user_id) != str:
            return None
        session_id = str(uuid4())
        SessionAuth.user_id_by_session_id[session_id] = user_id
        return session_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """ Returns a User ID based on a Session ID
        """
        if not session_id or type(session_id) != str:
            return None
        return SessionAuth.user_id_by_session_id.get(session_id)

    def current_user(self, request=None) -> TypeVar('User'):
        """ Returns a User instance based on a cookie value
        """
        if not request:
            return None
        session_cookie = self.session_cookie(request)
        if session_cookie:
            user_id = self.user_id_for_session_id(session_cookie)
            return User.get(user_id)

    def destroy_session(self, request=None) -> bool:
        """ Deletes the user session / logout
        """
        if not request:
            return False
        session_cookie = self.session_cookie(request)
        if not session_cookie:
            return False
        user_id = self.user_id_for_session_id(session_cookie)
        if not user_id:
            return False
        self.user_id_by_session_id.pop(session_cookie)
        return True

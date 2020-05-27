#!/usr/bin/env python3
""" Module of auth
"""

from api.v1.auth.auth import Auth
from uuid import uuid4


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

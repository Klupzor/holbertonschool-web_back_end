#!/usr/bin/env python3
""" Module of auth
"""

from api.v1.auth.session_auth import SessionAuth
from datetime import datetime, timedelta
from os import getenv


class SessionExpAuth(SessionAuth):
    """ class to manage the API authentication.
    """

    def __init__(self):
        """ init method
        """
        self.session_duration = 0
        try:
            self.session_duration = int(getenv('SESSION_DURATION'))
        except Exception:
            pass

    def create_session(self, user_id=None):
        """ Creates a Session id
        """
        if not user_id:
            return None
        session = super().create_session(user_id)
        if not session:
            return
        user_id = self.user_id_by_session_id.get(session)
        if not user_id:
            return
        session_dictionary = {'user_id': user_id, 'created_at': datetime.now()}
        self.user_id_by_session_id[session] = session_dictionary
        return session

    def user_id_for_session_id(self, session_id=None):
        """ returns user id by session id.
        """
        if not session_id:
            return None
        session_dictionary = self.user_id_by_session_id.get(session_id)
        if session_dictionary:
            user = session_dictionary.get('user_id')
            if user:
                if self.session_duration <= 0:
                    return user
                created_at = session_dictionary.get('created_at')
                if not created_at:
                    return None
                if (created_at + timedelta(seconds=self.session_duration) <
                        datetime.now()):
                    return None
                return user

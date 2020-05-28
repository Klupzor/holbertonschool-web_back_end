#!/usr/bin/env python3
""" Module of session auth views
"""
from flask import jsonify, abort, request
from api.v1.views import app_views
from models.user import User
from os import getenv


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """  Handles all routes for the Session authentication
    """
    email = request.form.get('email')
    pwd = request.form.get('password')
    if not email:
        return jsonify(error="email missing"), 400
    if not pwd:
        return jsonify(error="password missing"), 400
    users = User.search({"email": email})
    if not users:
        return jsonify(error="no user found for this email"), 404

    for user in users:
        if user.is_valid_password(pwd):
            from api.v1.app import auth
            session = auth.create_session(user.id)
            json = jsonify(user.to_json())
            json.set_cookie(getenv('SESSION_NAME'), session)
            return json
        else:
            return jsonify(error="wrong password"), 401


@app_views.route('/auth_session/logout', methods=['DELETE'],
                 strict_slashes=False)
def logout():
    """ Destroy the session
    """
    from api.v1.app import auth
    if not auth.destroy_session(request):
        abort(404)
    return jsonify({}), 200

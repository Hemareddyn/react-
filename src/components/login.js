import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-log-in"></span>
                Log In
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="uid"
                    name="uid"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Log In
                </button>
              </form>
            </div>
          </div>
        )
    }
}

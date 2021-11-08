import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div className="alert alert-success alert-dismissible" role="alert">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Synergize:</strong> Seamlessly visualize quality
              intellectual capital!
            </div>

        )
    }
}

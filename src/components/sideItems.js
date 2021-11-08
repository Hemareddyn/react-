import React, { Component } from "react";

class Sidemodel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { sideProps } = this.props;
    return (
      <>
        {sideProps.map((value) => (
          <div class="panel panel-default">
            <div class="panel-heading">
              <h1 class="panel-title">
                <span class={`glyphicon ${value.icon}`}></span>
                {value.title}
              </h1>
            </div>
            {value.data ? (
              <div class="panel-body">
                <p>{value.data}</p>
                <div class="btn-group" role="group">
                  {value.btn_list.map((btn) => (
                    <button type="button" class="btn btn-default">
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div class="list-group">
                {value.btn_list.map((btn) => (
                  <a href="/something" class="list-group-item">
                    {btn}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
}

export default Sidemodel;

import React, { Component } from "react";

export default class Addmedicalform extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };

  render() {
    return (
      <div>
        <div className="col-md-12 portlets">
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="pull-left">Quick Post</div>
              <div className="widget-icons pull-right">
                <a href="#" className="wminimize">
                  <i className="fa fa-chevron-up" />
                </a>
                <a href="#" className="wclose">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="panel-body">
              <div className="padd">
                <div className="form quick-post">
                  {/* Edit profile form (not working)*/}
                  <form className="form-horizontal">
                    {/* Title */}
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="title">
                        Title
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="form-group">
                      <label
                        className="control-label col-lg-2"
                        htmlFor="content"
                      >
                        Content
                      </label>
                      <div className="col-lg-10">
                        <textarea
                          className="form-control"
                          id="content"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* Cateogry */}
                    <div className="form-group">
                      <label className="control-label col-lg-2">Category</label>
                      <div className="col-lg-10">
                        <select className="form-control">
                          <option value>- Choose Cateogry -</option>
                          <option value={1}>General</option>
                          <option value={2}>News</option>
                          <option value={3}>Media</option>
                          <option value={4}>Funny</option>
                        </select>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="tags">
                        Tags
                      </label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" id="tags" />
                      </div>
                    </div>
                    {/* Buttons */}
                    <div className="form-group">
                      {/* Buttons */}
                      <div className="col-lg-offset-2 col-lg-9">
                        <button type="submit" className="btn btn-primary">
                          Publish
                        </button>
                        <button type="submit" className="btn btn-danger">
                          Save Draft
                        </button>
                        <button type="reset" className="btn btn-default">
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="widget-foot">{/* Footer goes here */}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

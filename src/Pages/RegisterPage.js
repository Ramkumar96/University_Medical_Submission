import React, { Component } from "react";

export default class Registerpage extends Component {
  render() {
    return (
      <div className="login-img3-body">
          
<div className="container">
  <form className="login-form" action="index.html">
    <div className="login-wrap">
      <p className="login-img"><i className="icon_lock_alt" /></p>
      <div className="input-group">
        <span className="input-group-addon"><i className="icon_profile" /></span>
        <input type="text" className="form-control" placeholder="Username" autofocus />
      </div>
      <div className="input-group">
        <span className="input-group-addon"><i className="icon_key_alt" /></span>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <label className="checkbox">
        <input type="checkbox" defaultValue="remember-me" /> Remember me
        <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
      </label>
      <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
    </div>
  </form>
</div>

      </div>
    );
  }
}

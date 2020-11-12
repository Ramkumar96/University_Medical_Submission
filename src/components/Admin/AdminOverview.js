import React, { Component } from 'react'

export default class Adminoverview extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
         <div>
  {/*main content start*/}
  <section id="main-content">
    <section className="wrapper">
      {/*overview start*/}
      <div className="row">
        <div className="col-lg-12">
          <h3 className="page-header"><i className="fa fa-laptop" /> Dashboard</h3>
          <ol className="breadcrumb">
            <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
            <li><i className="fa fa-laptop" />Dashboard</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="info-box blue-bg">
            <i className="fa fa-cloud-download" />
            <div className="count">6.674</div>
            <div className="title">Download</div>
          </div>
          {/*/.info-box*/}
        </div>
        {/*/.col*/}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="info-box brown-bg">
            <i className="fa fa-shopping-cart" />
            <div className="count">7.538</div>
            <div className="title">Purchased</div>
          </div>
          {/*/.info-box*/}
        </div>
        {/*/.col*/}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="info-box dark-bg">
            <i className="fa fa-thumbs-o-up" />
            <div className="count">4.362</div>
            <div className="title">Order</div>
          </div>
          {/*/.info-box*/}
        </div>
        {/*/.col*/}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="info-box green-bg">
            <i className="fa fa-cubes" />
            <div className="count">1.426</div>
            <div className="title">Stock</div>
          </div>
          {/*/.info-box*/}
        </div>
        {/*/.col*/}
      </div>
      {/* Today status end */}
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2><i className="fa fa-flag-o red" /><strong>Registered Users</strong></h2>
              <div className="panel-actions">
                <a  className="btn-setting"><i className="fa fa-rotate-right" /></a>
                <a  className="btn-minimize"><i className="fa fa-chevron-up" /></a>
                <a  className="btn-close"><i className="fa fa-times" /></a>
              </div>
            </div>
            <div className="panel-body">
              <table className="table bootstrap-datatable countries">
                <thead>
                  <tr>
                    <th />
                    <th>Country</th>
                    <th>Users</th>
                    <th>Online</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>Germany</td>
                    <td>2563</td>
                    <td>1025</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={100} style={{width: '73%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={27} aria-valuemin={0} aria-valuemax={100} style={{width: '27%'}}>
                        </div>
                      </div>
                      <span className="sr-only">73%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/India.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>India</td>
                    <td>3652</td>
                    <td>2563</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{width: '57%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '43%'}}>
                        </div>
                      </div>
                      <span className="sr-only">57%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/Spain.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>Spain</td>
                    <td>562</td>
                    <td>452</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{width: '93%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} style={{width: '7%'}}>
                        </div>
                      </div>
                      <span className="sr-only">93%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/India.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>Russia</td>
                    <td>1258</td>
                    <td>958</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        </div>
                      </div>
                      <span className="sr-only">20%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/Spain.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>USA</td>
                    <td>4856</td>
                    <td>3621</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        </div>
                      </div>
                      <span className="sr-only">20%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>Brazil</td>
                    <td>265</td>
                    <td>102</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        </div>
                      </div>
                      <span className="sr-only">20%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>Coloumbia</td>
                    <td>265</td>
                    <td>102</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        </div>
                      </div>
                      <span className="sr-only">20%</span>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                    <td>France</td>
                    <td>265</td>
                    <td>102</td>
                    <td>
                      <div className="progress thin">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        </div>
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        </div>
                      </div>
                      <span className="sr-only">20%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* statics end */}
    </section>
  </section>
  {/*main content end*/}</div>

        )
    }
}

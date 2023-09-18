import React, { Component } from 'react'
import './style.css';

export default class Banner extends Component {
  render() {
    return (
        <div className="py-5">
        <div className="container px-lg-5">
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div className="m-4 m-lg-5">
                    <h1 className="display-5 fw-bold">A warm welcome!</h1>
                    <p style={{fontSize:"1.5rem"}}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <a className="btn btn-primary btn-lg">Call to action</a>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

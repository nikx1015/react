import React, { Component } from "react"
import "../candy.css"
import Candy from './candy-icon.png'


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="candy">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Candy} className="icon--candy" />
                            {employee.name}
                        </h4>
                        <h6 className="card-title">{employee.detail}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}
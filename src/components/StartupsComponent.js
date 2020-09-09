import React from 'react'
import Company from './Company'



const StartupsComponent = (props) => {
    return (
        <div>
            <div class="panel panel-default">

                <div class="second-panel-heading"> All Startups </div>
                <div class="panel-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <form>
                                    <div class="form-group">
                                        <input type="search" class="form-control" id="searchbar" placeholder="Filter Startups"/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <tbody>
                        <tr className="heading-row">
                            <th>Company</th>
                            <th>Market/Industry</th>
                            <th>Location</th>
                            <th>Joined</th>
                            <th>Approve</th>
                            <th>Action</th>
                        </tr>

                        {
                            props.companies.map(item => (
                                <tr key={item.id}>
                                    <td><span className="glyphicon glyphicon-briefcase" ariaa-hidden="true"></span> {item.CompanyName}</td>
                                    <td>{item.Market}</td>
                                    <td>{item.Location}</td>
                                    <td>{item.Joined}</td>
                                    <td>{
                                        <button type="button" className="btn btn-success">
                                            <span className="glyphicon glyphicon-ok" ariaa-hidden="true"></span>
                                        </button>}
                                    </td>
                                    <td> {
                                        <button type="button" className="btn btn-primary">
                                            <span className="glyphicon glyphicon-pencil" ariaa-hidden="true"></span>
                                        </button>}
                                        {
                                            <button type="button" className="btn btn-danger btnpadding">
                                                <span className="glyphicon glyphicon-trash" ariaa-hidden="true"></span>
                                            </button>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupsComponent;
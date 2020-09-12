import DashboardComponent from './DashboardComponent'
import StartupsComponent from './StartupsComponent'
import React, { Component } from 'react'
import Form from './Form'

export default class AppComponent extends Component {
    constructor (props){
        super (props)
        this.state = {

            companies:[
                {
                    CompanyName: 'Company Name',
                    Market: 'Real Estate',
                    Location: 'Lagos',
                    Joined: 'Dec 12, 2016',
                    id: "1"
                },
                {
                    CompanyName: 'Company Name',
                    Market: 'Local Business',
                    Location: 'Accra',
                    Joined: 'Dec 13, 2016',
                    id: "2"
                },
                {
                    CompanyName: 'Company Name',
                    Market: 'Specialty Food',
                    Location: 'Texas',
                    Joined: 'Dec 13, 2016',
                    id: "3"
                },
                {
                    CompanyName: 'Company Name',
                    Market: 'E-commerce',
                    Location: 'Nairobi',
                    Joined: 'Dec 14, 2016',
                    id: "4"
                }
            
            
            ]
        }
    }

    updateCompanies =(company)=> {
        this.setState((oldState)=>{
            return {
                companies:[...oldState.companies, company]
            }
        })
    }
    
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-body">
                                <div class="panelheading">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <h1> <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard</h1>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="dropdown btn">
                                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="modal" data-target="#myModal" aria-haspopup="true" aria-expanded="true">
                                                    Add Startup <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12"><ol class="breadcrumb">
                                                <li><a href="#" class="a-style"> Dashboard</a></li>
                                            </ol></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <DashboardComponent />
                                            </div>
                                            <div class="col-md-9">
                                                <StartupsComponent companies={this.state.companies} />
                                            </div>
                                        </div>


                                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                        <h4 class="modal-title" id="myModalLabel">Add a Startup</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                    <Form newCompany={this.state.newCompany} updateCompanies={this.updateCompanies}/>
                                                    </div>
                             
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
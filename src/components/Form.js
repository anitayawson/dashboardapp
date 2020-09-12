import React, { Component } from 'react'

export default class form extends Component {
    submitForm = (event)=>{
        event.preventDefault()
        console.log(event.target.elements.CompanyName.value)
        let newCompany = {
            CompanyName: event.target.elements.CompanyName.value,
            Market: event.target.elements.Market.value,
            Location: event.target.elements.Location.value,
            Joined: event.target.elements.Joined.value,
            id: "3"
        }
        this.props.updateCompanies(newCompany)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div class="form-group">
                        <label for="InputCompanyName">Company Name</label>
                        <input type="text"  onChange={this.props.updateInput} name="CompanyName" class="form-control" style={{width: "70%"}} id="InputCompanyName"></input>
                    </div>
                    <div class="form-group">
                        <label for="InputMarket">Market/Industry</label>
                        <input type="text" class="form-control" style={{width: "70%"}} id="InputMarket" name="Market"></input>
                    </div>
                    <div class="form-group">
                        <label for="InputLocation">Location</label>
                        <input type="text"  class="form-control" style={{width: "70%"}} id="InputLocation" name="Location"></input>
                    </div>
                    <div class="form-group">
                        <label for="InputDate">Date Joined</label>
                        <input type="date"  class="form-control" style={{width: "70%"}} id="InputDate" name="Joined"></input>
                    </div>
                    <button class="btn btn-primary"> Submit </button>
                </form>
            
            </div>
                        )
                    }
                }

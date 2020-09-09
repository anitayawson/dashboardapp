import React from 'react'

const DashboardComponent = () => {
    return (
        <div>
            <div class="list-group">
                <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
  </a>
                <a href="#" class="list-group-item"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Startup</a>
                <a href="#" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Startup Details</a>
            </div>
        </div>
    )
}
export default DashboardComponent;
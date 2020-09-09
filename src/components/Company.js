import React from 'react'

const Company = (props) => {
    return (
        <div>

            <table> 
                <tr> 
                    <td>{props.name}</td>
                    <td>{props.market}</td>
                    <td>{props.location}</td>
                    <td>{props.joined}</td>
                    <td> 
                        <button className="btn btn-primary"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
                        <button className="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                    
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default Company;

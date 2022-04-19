import React from 'react'
import "./styles.css";
import Form from 'react-bootstrap/Form'

const TableRow = ({ clients }) => {
    return (
        <tr>
            <td className="text-center">{clients.id}</td>
            <td>{clients.name}</td>
            <td className="text-center">{clients.price}</td>
            <td className="text-center">{clients.stock}</td>
            <td>-</td>
            <td className="text-center"><Form.Check type="checkbox" checked={clients.active} /></td>
        </tr>
    )
}

export default TableRow;
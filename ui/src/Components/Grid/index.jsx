import React, { useState, useEffect } from 'react';
import "./styles.css";
import Table from 'react-bootstrap/Table';
import TableRow from '../../Components/TableRow';
import { GLOBAL } from '../../Config/global';
import Form from 'react-bootstrap/Form'

const Grid = ({ data }) => {
    const [fetchData, setFetchData] = useState();

    const fetchingData = data.clients;

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        if (fetchingData.length === 0) {
            setFetchData(
                <span>No hay datos</span>
            )
        } else {
            setFetchData(
                fetchingData.map((i) => (
                    <tr>
                        <td className="text-center">{i.id ? i.id : "ERROR.CLIENTS.CLIENTS_DATA_GET_FAILS"}</td>
                        <td>{i.name ? i.name : "ERROR.CLIENTS.CLIENTS_DATA_GET_FAILS"}</td>
                        <td className="text-center">{i.price ? i.id : "ERROR.CLIENTS.CLIENTS_DATA_GET_FAILS"}</td>
                        <td className="text-center">{i.stock>=0 ? i.stock : "ERROR.CLIENTS.CLIENTS_DATA_GET_FAILS"}</td>
                        <td>-</td>
                        <td className="text-center"><Form.Check type="checkbox" checked={i.active} /></td>
                    </tr>
                ))
            )
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr className="text-muted">
                    <th className="text-center">{GLOBAL.GRID.ID}</th>
                    <th>{GLOBAL.GRID.NAME}</th>
                    <th className="text-center">{GLOBAL.GRID.PRICE}</th>
                    <th className="text-center">{GLOBAL.GRID.STOCK}</th>
                    <th>{GLOBAL.GRID.PRICE_HISTORY}</th>
                    <th className="text-center">{GLOBAL.GRID.ACTIVE}</th>
                </tr>
            </thead>
            <tbody>
                {fetchData}
            </tbody>
        </Table>
    )
}

export default Grid;
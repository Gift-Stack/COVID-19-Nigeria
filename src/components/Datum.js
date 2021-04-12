import React from 'react';

export const Datum = ({ datum }) => {
    return (
        <tr>
            <td>{datum.state}</td>
            <td>{datum.confirmedCases}</td>
            <td>{datum.casesOnAdmission}</td>
            <td>{datum.discharged}</td>
            <td>{datum.death}</td>
        </tr>
    );
};

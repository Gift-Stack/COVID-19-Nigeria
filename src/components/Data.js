import { useEffect } from 'react';
import { getData } from '../actions/fetchAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Preloader from './layout/Preloader';
import { Datum } from './Datum';

const Data = ({ data: { data, loading }, getData }) => {
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div>
            <div className='sample-tested border'>
                <p>Total Samples Tested</p>
                <h3>{data.length !== 0 && data.data.totalSamplesTested}</h3>
            </div>
            <div className='others'>
                <div className='confirmed border p child'>
                    <p>Total Confirmed Cases</p>
                    <h3>
                        {data.length !== 0 && data.data.totalConfirmedCases}
                    </h3>
                </div>
                <div className='active border p child'>
                    <p>Total Active Cases</p>
                    <h3>{data.length !== 0 && data.data.totalActiveCases}</h3>
                </div>
                <div className='discharged border p child'>
                    <p>Total Discharged Cases</p>
                    <h3>{data.length !== 0 && data.data.discharged}</h3>
                </div>
                <div className='death border p child'>
                    <p>Total Death</p>
                    <h3>{data.length !== 0 && data.data.death}</h3>
                </div>
            </div>

            {/* Card */}
            <div>
                <h2>Confirmed Cases by State</h2>
                <table id='state-cases'>
                    <tr>
                        <th>States Affected</th>
                        <th>No. of Confirmed Cases</th>
                        <th>No. of cases on admission</th>
                        <th>No. Discharged </th>
                        <th>Death</th>
                    </tr>
                    {!loading && data.length === 0 ? (
                        <p>No data to show</p>
                    ) : (
                        data.data.states.map(datum => (
                            <Datum key={datum._id} datum={datum} />
                        ))
                    )}
                </table>
            </div>
        </div>
    );
};

Data.propTypes = {
    data: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    data: state.data,
});
export default connect(mapStateToProps, { getData })(Data);

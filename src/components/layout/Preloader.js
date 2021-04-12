import { Fragment } from 'react';
import loader from '../loader.gif';

const Preloader = () => {
    <Fragment>
        <img
            src={loader}
            alt='Loading...'
            style={{ width: '200px', margin: 'auto', display: 'block' }}
        />
        ;
    </Fragment>;
};

export default Preloader;

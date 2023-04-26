import React from 'react';
import Qzone1 from '../../../../assets/qZone1.png'
import Qzone2 from '../../../../assets/qZone2.png'
import Qzone3 from '../../../../assets/qZone3.png'

const Qzon = () => {
    return (
        <div className='my-4 text-center'>
            <h4>Q-zone</h4>
            <img className='img-fluid' src={Qzone1} alt="" />
            <img className='img-fluid' src={Qzone2} alt="" />
            <img className='img-fluid' src={Qzone3} alt="" />
        </div>
    );
};

export default Qzon;
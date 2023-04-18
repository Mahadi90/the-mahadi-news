import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img className='w-50 mt-4 rounded' src={logo} alt="" />
                <p className='text-secondary '>Journalism Without Fear or Favour</p>
                <p className='fw-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const id = useParams()
    return (
        <div>
            <h2>news details</h2>
        </div>
    );
};

export default NewsDetails;
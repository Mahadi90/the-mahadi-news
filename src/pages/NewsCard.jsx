import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark , FaShareAlt, FaStar, FaStarHalfAlt, FaEye} from "react-icons/fa";

const NewsCard = ({news}) => {

    const {_id,image_url,details,total_view,title,author,rating} = news;
    return (
        <Card className='mb-3'>
        <Card.Header as="h5" className='d-flex align-items-center'>
        <Image style={{height: '40px'}} src={author?.img} roundedCircle/>
        <div className='flex-grow-1 ms-3 mt-2'>
            <h6 className='mb-0'>{author?.name}</h6>
            <p className='mt-0'><small style={{fontSize: '16px'}}>{moment().format("YYYY-MM-D")}</small></p>
        </div>
        <div>
        <FaBookmark className='me-2'></FaBookmark>
        <FaShareAlt/>
        </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <>{details}</> : <>
            {details.slice(0, 250)}..... <Link to={`/news/${_id}`}>Read More</Link>
            </>}
          </Card.Text>
          <Card.Header as="h5" className='d-flex align-items-center justify-content-between'>
         <div className='d-flex'>
            <FaStar className='text-warning'/>
            <FaStar className='text-warning'/>
            <FaStar className='text-warning'/>
            <FaStar className='text-warning'/>
            <FaStarHalfAlt className='text-warning'/>
            <p className='ms-2'>{rating?.number}</p>
         </div>
         <div className='d-flex'>
            <FaEye/>
            <p className='ms-2'>{total_view}</p>
         </div>
        </Card.Header>
        </Card.Body>
      </Card>
    );
};

export default NewsCard;
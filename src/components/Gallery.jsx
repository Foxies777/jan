import React, { useState } from 'react';
import GridElem1 from '../assets/img/App/gallery/grid-row-1.jpg'
import GridElem2 from '../assets/img/App/gallery/grid-col-1.jpg'
import GridElem3 from '../assets/img/App/gallery/grid-row-2.jpg'
import GridElem4 from '../assets/img/App/gallery/grid-col-2.jpg'
import GridElem5 from '../assets/img/App/gallery/grid-col-3.jpg'
import GridElem6 from '../assets/img/App/gallery/grid-row-3.jpg'
import GridElem7 from '../assets/img/App/gallery/grid-row-4.jpg'
import GridElem8 from '../assets/img/App/gallery/grid-col-4.jpg'
import GridElem9 from '../assets/img/App/gallery/grid-col-5.jpg'
import GridElem10 from '../assets/img/App/gallery/grid-row-5.jpg'
import GridElem11 from '../assets/img/App/gallery/grid-row-6.jpg'
import GridElem12 from '../assets/img/App/gallery/grid-col-6.jpg'
import {
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

const Gallery = () => {
    const allImages = [GridElem1, GridElem2, GridElem3, GridElem4, GridElem5, GridElem6, GridElem7, GridElem8, GridElem9, GridElem10, GridElem11, GridElem12]
    const imagesPerPage = 1;
    const [visibleImages, setVisibleImages] = useState(allImages.slice(0, imagesPerPage));
    const showMoreImages = () => {
        const currentVisibleCount = visibleImages.length;
        const newVisibleImages = allImages.slice(currentVisibleCount, currentVisibleCount + imagesPerPage);
        const uniqueNewVisibleImages = newVisibleImages.filter(img => !visibleImages.includes(img));
        setVisibleImages((prevVisibleImages) => [...prevVisibleImages, ...uniqueNewVisibleImages]);
    }
    // console.log(visibleImages);
    // visibleImages.map((img, index) => {
    //     console.log(allImages[index]);
    // })

    return (
        <>
            {visibleImages.map((image, index) => (
                <MDBRow key={index}>
                    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src={image}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 1}`} />

                        <img
                            src={allImages[index * 2 + 1]}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 2}`} />
                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src={allImages[index * 2 + 2]}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 3}`} />

                        <img
                            src={allImages[index * 2 + 3]}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 4}`} />
                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src={allImages[index * 2 + 4]}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 5}`} />

                        <img
                            src={allImages[index * 2 + 5]}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={`Image ${index * 2 + 6}`} />
                    </MDBCol>
                </MDBRow>

            ))}
            {visibleImages.length < allImages.length && (
                <button onClick={showMoreImages}>Показать еще</button>
            )}
        </>
    );
}

export default Gallery;

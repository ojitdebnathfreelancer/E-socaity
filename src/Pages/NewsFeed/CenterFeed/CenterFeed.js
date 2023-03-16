import React from 'react';
import Slider from 'react-slick';
import PostModal from '../../../Componets/PostModal/PostModal';
import AllPosted from './AllPosted/AllPosted';
import Post from './Post/Post';
import Stotry from './Story/Stotry';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterFeed = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };
    return (
        <div className='center-feed-compo lg:pb-0 pb-10 lg:h-[87vh] h-[84vh]'>
            <div>
                <Slider className='story' {...settings}>
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                    <Stotry />
                </Slider>
            </div>
            {/* story part of center feed  */}

            <div className='post mt-5 lg:block md:block hidden'>
                <Post />
            </div>
            <PostModal />
            {/* post part of center feed  */}

            <div className='all-posted'>
                <AllPosted />
            </div>
            {/* all posted data show part of center feed  */}

        </div>
    );
};

export default CenterFeed;
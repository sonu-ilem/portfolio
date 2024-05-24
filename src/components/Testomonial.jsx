"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testomonial() {
    // Next arrow component
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 right-[-40px] cursor-pointer z-10 arrowButton"
            onClick={onClick}
        >
            <span className="bg-gray-200 text-black px-2.5 py-2 rounded hover:bg-gray-300 ">
                Next
            </span>
        </div>
    );

    // Previous arrow component
    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 left-[-40px] cursor-pointer z-10 arrowButton"
            onClick={onClick}
        >
            <span className="bg-gray-200 text-black px-2.5 py-2 rounded hover:bg-gray-300">
                Prev
            </span>
        </div>
    );

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // centerMode: true,
        // centerPadding: "20px",
    };

    return (
        <div className="w-full md:max-w-[55%] mx-auto relative">
            <Slider {...settings}>
                <div className="text-center my-16">
                    <div className="flex flex-col justify-center">
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-300 bg-white">
                            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                <img
                                    src="https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=2048x2048&w=is&k=20&c=iFBySg9gYWU20rRPhwafcTBroJB_0qCBuotH2BcPQGs="
                                    alt="tailwind logo"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                                <h3 className="font-black text-gray-800 md:text-2xl text-xl deskTopTitle">
                                    John Doe
                                </h3>
                                <p className="md:text-[1rem] text-gray-700 desktopdescription">
                                    The best kept secret of The Bahamas is the country’s sheer
                                    size and diversity. With 16 major islands, The Bahamas is an
                                    unmatched destination
                                </p>
                                <p className="text-xl font-black text-gray-800 flex justify-end desktopSubTitle ">
                                    ilem japan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-16">
                    <div className="flex flex-col justify-center">
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-300 bg-white">
                            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                <img
                                    src="https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=2048x2048&w=is&k=20&c=iFBySg9gYWU20rRPhwafcTBroJB_0qCBuotH2BcPQGs="
                                    alt="tailwind logo"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                                <h3 className="font-black text-gray-800 md:text-2xl text-xl deskTopTitle">
                                    John Doe
                                </h3>
                                <p className="md:text-[1rem] text-gray-700 desktopdescription">
                                    The best kept secret of The Bahamas is the country’s sheer
                                    size and diversity. With 16 major islands, The Bahamas is an
                                    unmatched destination
                                </p>
                                <p className="text-xl font-black text-gray-800 flex justify-end desktopSubTitle ">
                                    ilem japan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-16">
                    <div className="flex flex-col justify-center">
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-300 bg-white">
                            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                <img
                                    src="https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=2048x2048&w=is&k=20&c=iFBySg9gYWU20rRPhwafcTBroJB_0qCBuotH2BcPQGs="
                                    alt="tailwind logo"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                                <h3 className="font-black text-gray-800 md:text-2xl text-xl deskTopTitle">
                                    John Doe
                                </h3>
                                <p className="md:text-[1rem] text-gray-700 desktopdescription">
                                    The best kept secret of The Bahamas is the country’s sheer
                                    size and diversity. With 16 major islands, The Bahamas is an
                                    unmatched destination
                                </p>
                                <p className="text-xl font-black text-gray-800 flex justify-end desktopSubTitle ">
                                    ilem japan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

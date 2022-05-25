import React from 'react';
import mouse from './carosel_img/carousol_mouse.jpg'
import hdd from './carosel_img/carousol_hdd.jpg'
import keyboard from './carosel_img/carousol_keyboard.jpg'
import ram from './carosel_img/carousol_ram.jpg'
const Carosel = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full justify-center">
                <img src={hdd} className=" w-4/5 h-4/5  rounded-3xl" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full justify-center">
                <img src={mouse}  className="w-4/5 h-4/5  rounded-3xl " />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full justify-center">
                <img src={keyboard}  className=" w-4/5 h-4/5  rounded-3xl " />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full justify-center">
                <img src={ram} className=" w-4/5 h-4/5  rounded-3xl " />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carosel;
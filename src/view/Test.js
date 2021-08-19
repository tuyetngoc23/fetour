/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
// //   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
// //   for (i = 0; i < dots.length; i++) {
//     // dots[i].className = dots[i].className.replace(" active", "");
// //   }
//   slides[slideIndex-1].style.display = "block";  
// //   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

function Test() {

    return (

        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%' }} />
                <div className="text">Caption Text</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%' }} />
                <div className="text">Caption Two</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={`${process.env.PUBLIC_URL}/asset/images/songhuong.jpg`} style={{ width: '100%' }} />
                <div className="text">Caption Three</div>
            </div>
        </div>


    )

}

export default Test

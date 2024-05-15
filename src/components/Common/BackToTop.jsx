import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./backtotop.css";

function BackToTop() {
    // Get the button
    let mybutton = document.querySelector(".back-to-top");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
  return (
    <div className='back-to-top' 
        onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }}
    >
      <ArrowUpwardRoundedIcon style={{color: "var(--blue)"}}/>
    </div>
  )
}

export default BackToTop
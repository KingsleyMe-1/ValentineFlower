import React, { useEffect } from "react";
import "../styles/FlowersNight.scss";

const FlowersNight = () => {
  // Remove 'not-loaded' class after mount to trigger animations
  useEffect(() => {
    const body = document.body;
    body.classList.remove("not-loaded");
  }, []);

  return (
    <>
      <div className="night"></div>
      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Optional: Grass / extra growth animations */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__grass__overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowersNight;

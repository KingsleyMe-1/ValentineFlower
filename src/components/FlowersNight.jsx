import { useEffect, useState } from "react";
import "../styles/FlowersNight.scss";

const FlowersNight = () => {
  const [showFlowers, setShowFlowers] = useState(false);

  useEffect(() => {
    const body = document.body;

    body.classList.remove("not-loaded");

    if (!showFlowers) {
      body.classList.add("centered");
    } else {
      body.classList.remove("centered");
    }
  }, [showFlowers]);

  return (
    <>
      {!showFlowers && (
        <div className="intro">
          <h1>Surprise to my special person!</h1>
          <button className="intro-button" onClick={() => setShowFlowers(true)} style={{ marginTop: "20px" }}>
            Click Here
          </button>
        </div>
      )}

      {showFlowers && (
        <>
          <div className="night"></div>
          <div className="flowers">
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

            <div className="grow-ans" style={{ '--d': '3.2s' }}>
              <div className="flower__g-long">
                <div className="flower__g-long__top"></div>
                <div className="flower__g-long__bottom"></div>
              </div>
            </div>

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

            <div className="grow-ans" style={{ '--d': '2.8s' }}>
              <div className="flower__g-right flower__g-right--1">
                <div className="leaf"></div>
              </div>
            </div>

            <div className="grow-ans" style={{ '--d': '3.2s' }}>
              <div className="flower__g-right flower__g-right--2">
                <div className="leaf"></div>
              </div>
            </div>

            <div className="long-g long-g--0">
              <div className="grow-ans" style={{ '--d': '3s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '2.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.4s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--1">
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.8s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--2">
              <div className="grow-ans" style={{ '--d': '4s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.4s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--3">
              <div className="grow-ans" style={{ '--d': '4s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--4">
              <div className="grow-ans" style={{ '--d': '4s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--5">
              <div className="grow-ans" style={{ '--d': '4s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '3.6s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>

            <div className="long-g long-g--6">
              <div className="grow-ans" style={{ '--d': '4.2s' }}>
                <div className="leaf leaf--0"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.4s' }}>
                <div className="leaf leaf--1"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.6s' }}>
                <div className="leaf leaf--2"></div>
              </div>
              <div className="grow-ans" style={{ '--d': '4.8s' }}>
                <div className="leaf leaf--3"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default FlowersNight;

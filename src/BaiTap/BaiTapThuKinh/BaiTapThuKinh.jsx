import React, { Component } from "react";
import Kinh from "./Kinh";

export default class BaiTapThuKinh extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlass = (newGlass) => {
    this.setState({
      glassCurrent: newGlass,
    });
  };

  render() {
    const keyFrame = `@keyframes animateChangeGlass${Date.now()} {
      from {
        width: 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      to {
        width: 130px;
        transform: rotate(0deg);
        opacity: 0.7;
      }
    }`;

    const styleGlass = {
      position: "absolute",
      width: "130px",
      top: "80px",
      right: "95px",
      opacity: "0.8",
      transform: "rotate(0deg)",
      animation: `animateChangeGlass${Date.now()} 2s`,
    };

    const infoGlass = {
      position: "relative",
      width: "250px",
      left: "270px",
      top: "200px",
      height: "105px",
      backgroundColor: "rgba(218, 165, 32,0.8)",
      textAlign: "left",
      paddingLeft: "10px",
    };

    return (
      <div>
        <div
          style={{
            backgroundImage: "url(./img/glassesImage/background.jpg)",
            backgroundSize: "1500px",
            minHeight: "1500px",
          }}
        >
          <style>{keyFrame}</style>
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "1500px" }}
          >
            <h3
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              className="text-light p-5 text-center"
            >
              TRY GLASSES APP ONLINE
            </h3>
            <div className="container mt-5">
              <div className="row text-center">
                <div style={{ position: "relative" }} className="col-6">
                  <img
                    style={{ position: "absolute" }}
                    src="./img/glassesImage/model.jpg"
                    width={250}
                    alt="model1.jpg"
                  />
                  <img
                    style={styleGlass}
                    src={this.state.glassCurrent.url}
                    alt=""
                  />
                  <div style={infoGlass}>
                    <span
                      style={{ color: "#A020F0" }}
                      className="font-weight-bold"
                    >
                      {this.state.glassCurrent.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "13px" }}>
                      {this.state.glassCurrent.desc}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src="./img/glassesImage/model.jpg"
                    width={250}
                    alt="model2.jpg"
                  />
                </div>
              </div>
              <div className="container">
                <div className="row d-flex justify-content-center bg-light mt-5 p-2">
                  {this.dataGlasses.map((glassItem, index) => {
                    return (
                      <div key={index}>
                        <Kinh kinh={glassItem} hamDoiKinh={this.changeGlass} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

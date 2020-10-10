import React, { Component } from "react";
import Sakura from "../components/Sakura";
import Scroll from "../components/Scroll";
import "../styles/Invitation.css";

export default class Invitation extends Component {
  componentDidMount() {
    const sak = new Sakura("body", {
      colors: [
        {
          gradientColorStart: "rgba(242, 7, 54, 1)",
          gradientColorEnd: "rgba(242, 7, 54, 1)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(242, 7, 54, 1)",
          gradientColorEnd: "rgba(255, 115, 143, 0.9)",
          gradientColorDegree: 25,
        },
        {
          gradientColorStart: "rgba(240, 146, 24, 1)",
          gradientColorEnd: "rgba(250, 169, 65, 1)",
          gradientColorDegree: 50,
        },
        {
          gradientColorStart: "rgba(240, 146, 24, 1)",
          gradientColorEnd: "rgba(250, 169, 65, 1)",
          gradientColorDegree: 100,
        },
      ],
      maxSize:20,
    });
  }

  render() {
    return (
      <>
        <section id="info" className="invitation parent-vertical-center">
          <article className="center info">
            <h3>Invite you to celebrate the joy of their wedding day</h3>
          </article>
          <article className="center name">
            <h1>Kishore Kumar</h1>
            <h1>&</h1>
            <h1>Evangelin Raja Kiruba</h1>
          </article>
          <article className="center info">
            <h2>
              on OCT 30<sup>th</sup> 2020, Friday
            </h2>
            <h2>@St Andrews Church, West Pavoorchatram, Tenkasi District.</h2>
          </article>
          <article className="center info">
            <Scroll />
          </article>
        </section>
        <section id="event">
          <article className="center info">
            <h1 className="heading">Events</h1>
          </article>
          <article className="flex-parent info">
            <div class="card">
              <h3>30-October</h3>
              <h3>Marriage - Tenkasi</h3>
              <hr />
              <p>9am - 10:30am - St Andrews's Church</p>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/dir//Bell+Amma+CSI+Church,+SH+40,+Tamil+Nadu+627808/@8.9189798,77.3749495,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b0428831a2bd0bd:0x92b8f79d84f96141!2m2!1d77.3749495!2d8.9189798"
                >
                  GMap Link - Click Here
                </a>
              </span>
              <p>
                Breakfast, Lunch & Accommodation - PRK ARUN SUBHA LODGE AND
                COTTAGES
              </p>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/dir//PRK+ARUN+SUBHA+LODGE+AND+COTTAGES/@8.901633,77.3982907,16z/"
                >
                  GMap Link - Click Here
                </a>
              </span>
            </div>
            <div class="card">
              <h3>07-November</h3>
              <h3>Reception - Chennai</h3>
              <hr />
              <p>11am - 12pm - Prayer's</p>
              <p>12pm onwards - Reception</p>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/dir//12.9934074,80.1046598/@12.9933406,80.1050983,19z/data=!4m2!4m1!3e0"
                >
                  GMap Link - Click Here
                </a>
              </span>
            </div>
          </article>
        </section>
      </>
    );
  }
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrows_line from "../assets/img/png/Linearrow.png";
import line_img from "../assets/img/png/line_img.png";
import clock_vector from "../assets/img/png/clock_vector.png";
import criea_vector from "../assets/img/png/cirea_vector.png";
import dots_img from "../assets/img/png/dots.png";
import arrow_vector from "../assets/img/png/arrow_vector.png";
import black_arrow from "../assets/img/png/black_arrow.png";
function HeaderSection() {
  return (
    <section className="py-lg-5 my-lg-5 mt-5 position-relative overflow_hidden ">
      <div className="header_blur_circle  position-absolute bottom-0 end-0"></div>
      <div className="header_blur_circle1 opacity_3 position-absolute blur_circle_adjust"></div>
      <Container>
        <Row className="align-items-start">
          <Col xl={7} lg={6}>
            {" "}
            <div className="position-relative ">
              {" "}
              <div className="jorden_card animation_card1 jordan_card_adjust position_absolute position_static">
                <div className="d-flex align-items-start">
                  <h3 className="fw-semibold fs_lg mb-0">Jordan Wentworth</h3>
                  <button className="fs_md border-0 fw-semibold ms-2">
                    New
                  </button>
                </div>
                <h3 className="mb-0 fw-semibold fs_lg clr_green pt-2">
                  $1,293,200
                </h3>{" "}
                <h4 className="mb-0 fw-normal fs_md pt-2 clr_brown">
                  Boston, MA Inheritance
                </h4>
                <div className="d-flex align-items-center mt-2">
                  <div className="small_box"></div>
                  <h3 className="mb-0 fw-semibold fs_md ms-2">Contacted</h3>
                </div>
              </div>
              <div className="line_box_adjust animation_card2 position_absolute z_index  position_static">
                <img className="mw_100" src={line_img} alt="line_img" />
              </div>
              <div className="mihail_card pe-3 ps-2 mihali_box_adjust animation_card3 position_absolute position_static">
                <div className="d-flex justify-content-end">
                  <img src={clock_vector} alt="clock_vector" />
                  <p className="mb-0 fw-normal fs_sm"> 2 days ago</p>
                </div>
                <h4 className="mb-0 fw-normal fs_md pt-2">Mihail Lacusta</h4>
                <h4 className="mb-0 fw-normal fs_md clr_green pt-2">
                  $1,329,0139
                </h4>
                <h5 className="mb-0 fw-normal fs_sm pt-2">Business Sale</h5>
                <div className="d-flex align-items-center mt-4">
                  <div className="small_box"></div>
                  <h3 className="mb-0 fw-semibold fs_md ms-2">Contacted</h3>
                </div>
              </div>
              <div className=" cirea_card animation_card4 position_absolute position_static position_absolute">
                <div className="ciera_box position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex ">
                      <img src={criea_vector} alt="criea_vector" />
                      <div className="ms-3">
                        <h4 className="mb-0 fw-normal fs_md">Ciera Thomas</h4>
                        <p className="mb-0 fw-normal fs_md">Edit</p>
                      </div>
                    </div>
                    <img src={dots_img} alt="dots_img" />
                  </div>
                  <div className="big_line mt-3"></div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className=" d-flex align-items-center">
                      <h3 className="fw-normal fs_md mb-0">1.</h3>
                      <div className="ms-2 ps-2">
                        <div className="line_black line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_green line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_black line_black2width"></div>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img src={arrow_vector} alt="arrow_vector" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className=" d-flex align-items-center">
                      <h3 className="fw-normal fs_md mb-0">2.</h3>
                      <div className="ms-2 ps-2">
                        <div className="line_black line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_green line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_black line_black2width"></div>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img src={arrow_vector} alt="arrow_vector" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className=" d-flex align-items-center">
                      <h3 className="fw-normal fs_md mb-0">3.</h3>
                      <div className="ms-2 ps-2">
                        <div className="line_black line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_green line_black1width"></div>
                      </div>
                      <div className="ms-1">
                        <div className="line_black line_black2width"></div>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img src={arrow_vector} alt="arrow_vector" />
                    </div>
                  </div>
                  <div className="box_small position_absolute end-0 adjust_box ">
                    <h2 className="mb-0 fw-normal fs_sm">5500 72nd Ave N</h2>
                    <h2 className="mb-0 fw-normal clr_green fs_sm mt-1">
                      $150,000
                    </h2>
                    <h2 className="mb-0 fw-normal clr_green fs_xsm mt-1">
                      Pinellas Park, FL inheritance
                    </h2>
                    <div className="arrow_bg ">
                      <img
                        className="ms-5"
                        src={black_arrow}
                        alt="black_arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="active_box animation_card5    position_absolute position_static d-flex align-items-center active_box_adjust p-2 ">
                <h3 className="mb-0 fw-semibold fs_sm">Active leads</h3>
                <div className="dot_green ms-3"></div>
              </div>
            </div>
            <Row className="  justify-content-between  position_absolute transform_translate set_text position_static  d-flex">
              <Col sm={4} xs={6} className="text-center">
                <h2 className="mb-0 fw-semibold  fs_xxl">400mm+</h2>
                <p className="mb-0 fw-normal fs_xl pt-3">
                  Data point used <span className="d-block">for analytics</span>
                </p>
              </Col>
              <Col sm={4} xs={6} className="text-center  ">
                <h2 className="mb-0 fw-semibold  fs_xxl">$3Tn</h2>
                <p className="mb-0 fw-normal fs_xl pt-3">
                  Investable assets{" "}
                  <span className="d-block">predicted per year</span>
                </p>
              </Col>
              <Col sm={4} xs={6} className="text-center mt-4 ms- mt-sm-0">
                <h2 className="mb-0 fw-semibold  fs_xxl">$77Br</h2>
                <p className="mb-0 fw-normal fs_xl pt-3">
                  Predicted home{" "}
                  <span className="d-block">value transacted</span> per year{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col xl={5} lg={6} className="trensform_20">
            <h1 className="mb-0 fw-semibold fs_4xl">
              Grow your business with Event-Driven Predictive Analytics
            </h1>
            <p className="mb-0 fw-normal fs_xl clr_brownlight pt-3">
              It is a long established fact that a reader will be distracted by
              the using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it the look at you.
            </p>
            <Row className="mt-5 ">
              <Col md={6} className="mt-3">
                <div className="green_box d-flex flex-column justify-content-between h-100">
                  <div className="">
                    <h4 className="fw-semibold fs_xl clr_lightwhite mb-0">
                      boost your
                    </h4>
                    <h2 className="fw-semibold fs_xxl mb-0 pt-1 text-white">
                      Financial Services
                    </h2>
                  </div>
                  <a
                    className="fw-semibold fs_xl  mt-4  text-white learn_more_btn d-flex justify-content-between"
                    href="#"
                  >
                    <span> Learn more</span>
                    <svg
                      width="26"
                      height="20"
                      viewBox="0 0 26 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5303 6.59094C25.8232 6.29804 25.8232 5.82317 25.5303 5.53028L20.7574 0.757307C20.4645 0.464414 19.9896 0.464414 19.6967 0.757307C19.4038 1.0502 19.4038 1.52507 19.6967 1.81797L23.9393 6.06061L19.6967 10.3032C19.4038 10.5961 19.4038 11.071 19.6967 11.3639C19.9896 11.6568 20.4645 11.6568 20.7574 11.3639L25.5303 6.59094ZM0 6.81061H25V5.31061H0V6.81061Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </a>
                </div>
              </Col>
              <Col md={6} className="mt-3 ">
                <div className="blue_box d-flex flex-column  justify-content-between h-100">
                  <div>
                    <h4 className="fw-semibold fs_xl clr_lightwhite mb-0">
                      boost your
                    </h4>
                    <h2 className="fw-semibold fs_xxl mb-0 pt-1 text-white">
                      Real Estate{" "}
                    </h2>
                  </div>{" "}
                  <a
                    className="fw-semibold  fs_xl text-white learn_more_btn mt-4 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span> Learn more</span>
                    <svg
                      width="26"
                      height="20"
                      viewBox="0 0 26 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5303 6.59094C25.8232 6.29804 25.8232 5.82317 25.5303 5.53028L20.7574 0.757307C20.4645 0.464414 19.9896 0.464414 19.6967 0.757307C19.4038 1.0502 19.4038 1.52507 19.6967 1.81797L23.9393 6.06061L19.6967 10.3032C19.4038 10.5961 19.4038 11.071 19.6967 11.3639C19.9896 11.6568 20.4645 11.6568 20.7574 11.3639L25.5303 6.59094ZM0 6.81061H25V5.31061H0V6.81061Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeaderSection;

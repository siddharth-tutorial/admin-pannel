import React from "react";
import Sidebar from "./Sidebar";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router";
import "./Billing.css";

import Footer from "./Footer";

function Billing() {
  return (
    <div>
      {/* import sidebar page start */}
      <Sidebar />
      {/* import sidebar page end */}

      <main className="main-content relative max-h-screen h-100 rounded-lg ps ps--active-y">
        {/* header start */}
        <Nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none rounded-xl"
          id="navbarBlur"
          navbarScroll="true"
        >
          <div className="container-fluid py-1 px-3">
            {/* breadcrumb start */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <NavLink to="#" className="opacity-1 text-dark nav-link">
                    Pages
                  </NavLink>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Billing
                </li>
              </ol>
              <h6 className="font-bold mb-0">Billing</h6>
            </nav>
            {/* breadcrumd end */}

            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group text-body">
                <input
                  type="text"
                  className="form-control border-0 ps-3"
                  placeholder="Type here..."
                />

                <ul className="navbar-nav justify-content-end mb-0">
                  <li className="nav-item d-flex align-items-center">
                    <NavLink
                      className="btn btn-outline-primary btn-sm mb-0 me-3"
                      target="_blank"
                      to="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard"
                    >
                      Online Builder
                    </NavLink>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <NavLink
                      className="nav-links text-body font-bold px-0"
                      target="_blank"
                      to="#"
                    >
                      <span className="d-sm-inline d-none">Sign In</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Nav>
        {/* header end */}
        <Container fluid className="py-4">
          <Row>
            <Col lg={8}>
              <Row>
                <Col xl={6} className="mb-xl-0 mb-4">
                  <Card className="bg-transparent shadow-xl">
                    <div className="overflow-hidden position-relative rounded-xl curve">
                      <span className="mask1 bg-gradient-dark"></span>
                      <CardBody className="position-relative z-index-1 p-3">
                        <h5 className="text-white mt-4 mb-5 pb-2">
                          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                        </h5>
                        <div className="d-flex">
                          <div className="d-flex">
                            <div className="me-4">
                              <p className="text-white text-sm opacity-8 mb-0">
                                Card Holder
                              </p>
                              <h6 className="text-white mb-0">Jack Peterson</h6>
                            </div>
                            <div>
                              <p className="text-white text-sm opacity-8 mb-0">
                                Expires
                              </p>
                              <h6 className="text-white mb-0">11/22</h6>
                            </div>
                          </div>
                          <div className="ms-auto w-20 d-flex items-end justify-end">
                            <img
                              src={require("../img/mastercard.webp")}
                              alt="logo"
                              className="w-60 mt-2"
                            />
                          </div>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </Col>
                <Col xl={6}>
                  <Row>
                    <Col md={6}>
                      <Card>
                        <CardHeader className="mx-4 p-3 d-flex justify-center text-center">
                          <div className="icon icon-shape icon-lg bg-primary shadow text-center rounded-lg">
                            <i class="fas fa-landmark opacity-10"></i>
                          </div>
                        </CardHeader>
                        <CardBody className="pt-0 p-3  text-center">
                          <h6 className="text-center mb-0">Salary</h6>
                          <span className="text-xs">Belong Interactive</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">+$2000</h5>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={6} className="mt-md-0 mt-4">
                      <Card>
                        <CardHeader className="mx-4 p-3 d-flex justify-center text-center">
                          <div className="icon icon-shape icon-lg bg-primary shadow text-center rounded-lg">
                            <i class="fab fa-paypai opacity-10"></i>
                          </div>
                        </CardHeader>
                        <CardBody className="pt-0 p-3  text-center">
                          <h6 className="text-center mb-0">Paypal</h6>
                          <span className="text-xs">Freelance Payment</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">$455.00</h5>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                {/* payment method */}

                <Col md={12} className="mb-lg-0 mb-4">
                  <Card className="mt-4">
                    <CardHeader className="pb-0 p-3">
                      <Row>
                        <Col xs={6} className="d-flex items-center">
                          <h6 className="mb-0">Payment Method</h6>
                        </Col>
                        <Col xs={6} className="text-end">
                          <NavLink
                            className="btn text-dark bg-gradient mb-0"
                            hrefLang="/javascript:;"
                          >
                            &nbsp; &nbsp;Add New Card
                          </NavLink>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody className="p-3">
                      <Row>
                        <Col md={6} className="mb-md-0 mb-4">
                          <CardBody className="card border card-plain rounded-lg d-flex items-center flex-row">
                            <img
                              src={require("../img/mastercard.webp")}
                              alt="logo"
                              className="w-10 me-3 mb-0"
                            />
                            <h6 className="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                            </h6>
                            <i
                              className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Edit Card"
                              data-bs-original-title="Edit Card"
                            />
                          </CardBody>
                        </Col>
                        <Col md={6} className="mb-md-0 mb-4">
                          <CardBody className="card border card-plain rounded-lg d-flex items-center flex-row">
                            <img
                              src={require("../img/visa.webp")}
                              alt="logo"
                              className="w-10 me-3 mb-0"
                            />
                            <h6 className="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                            </h6>
                            <i
                              className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Edit Card"
                              data-bs-original-title="Edit Card"
                            />
                          </CardBody>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/*invoices  */}
            <Col lg={4}>
              <Card className="h-100">
                <CardHeader className="pb-0 p-3">
                  <Row>
                    <Col xs={6} className="d-flex items-center">
                      <h6 className="mb-0">Invoices</h6>
                    </Col>
                    <Col xs={6} className="text-end">
                      <button className="btn btn-outline-primary btn-sm mb-0">
                        View All
                      </button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="p-3 pb-0">
                  <ListGroup>
                    <ListGroupItem className=" border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark font-bold text-sm">
                          March, 01, 2020
                        </h6>
                        <span className="text-xs">#MS-415646</span>
                      </div>
                      <div className="d-flex items-center text-sm">
                        $180
                        <button className="btn  text-dark text-sm mb-0 px-0 ms-4">
                          PDF
                        </button>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark font-bold text-sm">
                          February, 10, 2021
                        </h6>
                        <span className="text-xs">#RV-126749</span>
                      </div>
                      <div className="d-flex items-center text-sm">
                        $250
                        <button className="btn  text-dark text-sm mb-0 px-0 ms-4">
                          PDF
                        </button>
                      </div>
                    </ListGroupItem>

                    <ListGroupItem className=" border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark font-bold text-sm">
                          April, 05, 2020
                        </h6>
                        <span className="text-xs">#FB-212562</span>
                      </div>
                      <div className="d-flex items-center text-sm">
                        $560
                        <button className="btn text-dark text-sm mb-0 px-0 ms-4">
                          PDF
                        </button>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className=" border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark font-bold text-sm">
                          June, 25, 2019
                        </h6>
                        <span className="text-xs">#QW-103578</span>
                      </div>
                      <div className="d-flex items-center text-sm">
                        $120
                        <button className="btn  text-dark text-sm mb-0 px-0 ms-4">
                          PDF
                        </button>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className=" border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark font-bold text-sm">
                          March, 01, 2019
                        </h6>
                        <span className="text-xs">#AR-803481</span>
                      </div>
                      <div className="d-flex items-center text-sm">
                        $300
                        <button className="btn  text-dark text-sm mb-0 px-0 ms-4">
                          PDF
                        </button>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* billing information */}
          <Row>
            <Col md={7} className="mt-4">
              <Card>
                <CardHeader className="pb-0 px-3">
                  <h6 className="mb-0">Billing Information</h6>
                </CardHeader>
                <CardBody className="pt-4 p-3">
                  <ListGroup>
                    <ListGroupItem className="border-0 d-flex p-4 mb-2 bg-gray-100 rounded-lg item">
                      <div className="d-flex flex-col">
                        <h6 className="mb-3 text-sm">Oliver Liam</h6>
                        <span className="mb-2 text-xs ">
                          Company Name:
                          <span className="text-dark font-bold ms-sm-2">
                            Viking Burrito
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          Email Address:
                          <span className="text-dark font-bold ms-sm-2">
                            oliver@burrito.com
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          VAT Number:
                          <span className="text-dark font-bold ms-sm-2">
                            FRB1235476
                          </span>
                        </span>
                      </div>
                      <div className="ms-auto text-end">
                        <NavLink
                          className=" text-danger  px-3 mb-0 m-2 pb-2"
                          hrefLang="/javascript:;"
                        >
                          Delete
                        </NavLink>
                        <NavLink
                          className= " text-dark  px-3 mb-0 m-2 p-2"
                          hrefLang="/javascript:;"
                        >
                          Edit
                        </NavLink>
                      </div>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 d-flex p-4 mb-2 bg-gray-100 rounded-lg item">
                      <div className="d-flex flex-col">
                        <h6 className="mb-3 text-sm">Lucas Harper</h6>
                        <span className="mb-2 text-xs ">
                          Company Name:
                          <span className="text-dark font-bold ms-sm-2">
                          Stone Tech Zone
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          Email Address:
                          <span className="text-dark font-bold ms-sm-2">
                          lucas@stone-tech.com
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          VAT Number:
                          <span className="text-dark font-bold ms-sm-2">
                          FRB1235476
                          </span>
                        </span>
                      </div>
                      <div className="ms-auto text-end ">
                        <NavLink
                          className=" text-danger  px-3 mb-0 m-2 pb-2"
                          hrefLang="/javascript:;"
                        >
                          Delete
                        </NavLink>
                        <NavLink
                          className=" text-dark  px-3 mb-0 m-2 p-2"
                          hrefLang="/javascript:;"
                        >
                          Edit
                        </NavLink>
                      </div>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 d-flex p-4 mb-2 bg-gray-100 rounded-lg item">
                      <div className="d-flex flex-col">
                        <h6 className="mb-3 text-sm">Ethan James</h6>
                        <span className="mb-2 text-xs ">
                          Company Name:
                          <span className="text-dark font-bold ms-sm-2">
                          Fiber Notion
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          Email Address:
                          <span className="text-dark font-bold ms-sm-2">
                          ethan@fiber.com
                          </span>
                        </span>
                        <span className="mb-2 text-xs ">
                          VAT Number:
                          <span className="text-dark font-bold ms-sm-2">
                          FRB1235476
                          </span>
                        </span>
                      </div>
                      <div className="ms-auto text-end ">
                        <NavLink
                          className=" text-danger  px-3 mb-0 m-2 pb-2"
                          hrefLang="/javascript:;"
                        >
                          Delete
                        </NavLink>
                        <NavLink
                          className=" text-dark  px-3 mb-0 m-2 p-2"
                          hrefLang="/javascript:;"
                        >
                          Edit
                        </NavLink>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>

            <Col md={5} className="mt-4">
            <Card className="h-100 mb-4">
              <CardHeader className="pb-0 px-3">
                <Row>
                  <Col md={6}>
                  <h6 className="mb-0">Your Transaction's</h6>
                  </Col>
                  <Col md={6} className="d-flex justify-end items-center">
                  <small>23 - 30 March 2020</small>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="pt-4 p-3">
                <h6 className="text-uppercase text-body text-xs font-bold mb-3">Newest</h6>
                <ListGroup>
                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                        <span className="text-xs">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-danger  text-sm font-bold">-$ 2,500</div>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">Apple</h6>
                        <span className="text-xs">27 March 2020, at 04:30 PM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-success  text-sm font-bold">+$ 2,000</div>
                  </ListGroupItem>
                </ListGroup>
                <h6 className="text-uppercase text-body text-xs font-bold my-3">Yesterday</h6>

                <ListGroup>
                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                        <span className="text-xs">26 March 2020, at 13:45 PM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-success  text-sm font-bold">+$ 750</div>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                        <span className="text-xs">26 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-success  text-sm font-bold">+ $ 1,000</div>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                        <span className="text-xs">26 March 2020, at 08:30 AM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-success  text-sm font-bold">+ $ 2,500</div>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 d-flex justify-between ps-0 mb-2 rounded-lg ">
                    <div className="d-flex items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex items-center justify-center "></button>
                      <div className="d-flex flex-col">
                        <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                        <span className="text-xs">26 March 2020, at 05:00 AM</span>
                      </div>
                    </div>
                    <div className="d-flex items-center text-dark  text-sm font-bold">Pending</div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
          </Row>

          <Footer/>
        </Container>
      </main>
    </div>
  );
}

export default Billing;

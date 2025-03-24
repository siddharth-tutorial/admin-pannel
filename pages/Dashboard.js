import React from "react";
import Sidebar from "./Sidebar";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Dropdown,
  Nav,
  Row,
  Table,
} from "react-bootstrap";
import { NavLink } from "react-router";
// import { CiSearch } from "react-icons/ci";
import "./Dashboard.css";
import { FaCircleUser } from "react-icons/fa6";
import { PiMouseLeftClick } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import xd from "../img/xd.svg";
import atlassian from "../img/atlassian.svg";
import slack from "../img/slack.svg";
import jira from "../img/jira.svg";
import spotify from "../img/spotify.svg";
import invision from "../img/invision.svg";
import { FaBell } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
import { TbCoins } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import waves from "../img/waves.svg";
import { IoDocumentOutline } from "react-icons/io5";
import { RiSpaceShipLine } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Footer from "./Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const bardata = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // X-axis labels
    datasets: [
      {
        label: "Sales", // Label for the dataset
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500], // Data values
        backgroundColor: "#ffffff", // Color of the bars
        borderColor: "borderColors", // Border color for the bars
        borderWidth: 1, // Border width of the bars
        barThickness: 10, // You can adjust the bar thickness as needed
        borderRadius: 15,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Tooltip still enabled
      },
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        display: false, // Hides the x-axis (no labels)
        grid: {
          display: true, // Hides the grid lines on the x-axis
        },
      },
      y: {
        display: true, // Hides the y-axis (no labels)
        grid: {
          display: false, // Hides the grid lines on the y-axis
        },
      },
    },
  };

  // line chart

  // const lineData = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       borderColor: 'rgba(75,192,192,1)',
  //       backgroundColor: 'rgba(75,192,192,0.2)',
  //       fill: true,
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: [28, 48, 40, 19, 86, 27, 90],
  //       borderColor: 'rgba(255,99,132,1)',
  //       backgroundColor: 'rgba(255,99,132,0.2)',
  //       fill: true,
  //     },
  //   ],
  // };

  // const lineOptions = {
  //   responsive: true,
  //   interaction: {
  //     mode: 'index',
  //     intersect: false,
  //   },
  //   stacked: false,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Multi-Line Chart Example',
  //     },
  //   },
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: 'Months',
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: 'Values',
  //       },
  //     },
  //   },
  // };
  // const lineData=[
  //   ["Month","Mobile apps","Websites"],
  //   ["Apr", 50, 30],
  //   ["May", 40, 50],
  //   ["Jun", 300, 40],
  //   ["Jul", 220, 140],
  //   ["Aug", 500, 290],
  //   ["Sep", 250, 290],
  //   ["Oct", 400, 340],
  //   ["Nov", 230, 230],
  //   ["Dec", 500, 400],
  // ]
  // const lineOptions = {
  //   title: "Sales Overview",
  //   curveType: "function",
  //   legend: { position: "bottom" },
  // };

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
                  Dashboard
                </li>
              </ol>
              <h6 className="font-bold mb-0">Dashboard</h6>
            </nav>
            {/* breadcrumd end */}

            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group text-body">
                <input
                  type="text"
                  className="form-control border-0 ps-3" // padding left for the input
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
            <Col lg={6} xs={12}>
              <Row>
                <Col lg={6} md={6} xs={12}>
                  <Card>
                    <span className="mask bg-primary opacity-1 rounded-lg"></span>
                    <CardBody className=" p-3 relative">
                      <Row>
                        <Col xs={8} className="text-start">
                          <div className="icons icon-shapes bg-white shadow text-center rounded-2xl d-flex justify-content-center align-items-center">
                            <FaCircleUser
                              className=" ni text-dark text-lg opacity-1 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <h5 className="text-white font-bold mb-0 mt-3">
                            1600
                          </h5>
                          <span className="text-white text-sm">
                            Users Active
                          </span>
                        </Col>
                        <Col xs={4}>
                          <div className="dropdown text-end mb-6">
                            <ul
                              className="dropdown-menu px-2 py-3"
                              aria-labelledby="dropdownUsers1"
                            >
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  {" "}
                                  Another action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Something else here
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <p className="text-white text-sm text-end font-bold mt-auto mb-0">
                            +55%
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={6} md={6} xs={12} className="mt-4 mt-md-0">
                  <Card>
                    <span className="mask bg-dark opacity-1 rounded-lg"></span>
                    <CardBody className=" p-3 relative">
                      <Row>
                        <Col xs={8} className="text-start">
                          <div className="icons icon-shapes bg-white shadow text-center rounded-2xl d-flex justify-content-center align-items-center">
                            <PiMouseLeftClick
                              className="ni text-dark text-lg opacity-1 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <h5 className="text-white font-bold mb-0 mt-3">
                            357
                          </h5>
                          <span className="text-white text-sm">
                            Click Events
                          </span>
                        </Col>
                        <Col xs={4}>
                          <div className="dropdown text-end mb-6">
                            <ul
                              className="dropdown-menu px-2 py-3"
                              aria-labelledby="dropdownUsers2"
                            >
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  {" "}
                                  Another action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Something else here
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <p className="text-white text-sm text-end font-bold mt-auto mb-0">
                            +124%
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col lg={6} md={6} xs={12}>
                  <Card>
                    <span className="mask bg-dark opacity-1 rounded-lg"></span>
                    <CardBody className=" p-3 relative">
                      <Row>
                        <Col xs={8} className="text-start">
                          <div className="icons icon-shapes bg-white shadow text-center rounded-2xl d-flex justify-content-center align-items-center">
                            <FaShoppingCart
                              className="ni text-dark text-lg opacity-1 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <h5 className="text-white font-bold mb-0 mt-3">
                            2300
                          </h5>
                          <span className="text-white text-sm">Purchases</span>
                        </Col>
                        <Col xs={4}>
                          <div className="dropdown text-end mb-6">
                            <ul
                              className="dropdown-menu px-2 py-3"
                              aria-labelledby="dropdownUsers2"
                            >
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  {" "}
                                  Another action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Something else here
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <p className="text-white text-sm text-end font-bold mt-auto mb-0">
                            +15%
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={6} md={6} xs={12} className="mt-4 mt-md-0">
                  <Card>
                    <span className="mask bg-dark opacity-1 rounded-lg"></span>
                    <CardBody className=" p-3 relative">
                      <Row>
                        <Col xs={8} className="text-start">
                          <div className="icons icon-shapes bg-white shadow text-center rounded-2xl d-flex justify-content-center align-items-center">
                            <BiSolidLike
                              className="ni text-dark text-lg opacity-1 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <h5 className="text-white font-bold mb-0 mt-3">
                            940
                          </h5>
                          <span className="text-white text-sm">Likes</span>
                        </Col>
                        <Col xs={4}>
                          <div className="dropdown text-end mb-6">
                            <ul
                              className="dropdown-menu px-2 py-3"
                              aria-labelledby="dropdownUsers2"
                            >
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  {" "}
                                  Another action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item rounded-md"
                                  hrefLang="javascript"
                                >
                                  Something else here
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <p className="text-white text-sm text-end font-bold mt-auto mb-0">
                            +90%
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={6} xs={12} className="mt-4 mt-lg-0">
              <Card className=" shadow h-100">
                <CardHeader className=" pb-0 p-3">
                  <h6 className="mb-0">Reviews</h6>
                </CardHeader>
                <CardBody className=" pb-0 p-3">
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex items-center px-0 mb-0">
                      <div className="w-100">
                        <div className="d-flex mb-2">
                          <span className="me-2 text-sm font-bold text-dark">
                            Positive Reviews
                          </span>
                          <span className="ms-auto text-sm font-bold ">
                            80%
                          </span>
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-primary w-80"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item border-0 d-flex items-center px-0 mb-0">
                      <div className="w-100">
                        <div className="d-flex mb-2">
                          <span className="me-2 text-sm font-bold text-dark">
                            Neutral Reviews
                          </span>
                          <span className="ms-auto text-sm font-bold ">
                            17%
                          </span>
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-primary w-10"
                            role="progressbar"
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item border-0 d-flex items-center px-0 mb-0">
                      <div className="w-100">
                        <div className="d-flex mb-2">
                          <span className="me-2 text-sm font-bold text-dark">
                            Negative Reviews
                          </span>
                          <span className="ms-auto text-sm font-bold ">3%</span>
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-primary w-5"
                            role="progressbar"
                            aria-valuenow={5}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter className=" pt-0 p-3 d-flex items-center">
                  <div className="w-60">
                    <p className="text-sm">
                      More than <b>1,500,000</b>developers used Creative Tim's
                      products and over<b>700,000</b> projects were created.
                    </p>
                  </div>
                  <div className="w-40 text-end">
                    <NavLink
                      className="btn btn-dark mb-0 text-end"
                      hrefLang="/javascript:;"
                    >
                      View all reviews
                    </NavLink>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row className="my-4">
            <Col lg={8} md={6} className="mb-md-0 mb-4">
              <Card>
                <CardHeader className=" pb-0">
                  <Row>
                    <Col lg={6} xs={7}>
                      <h6>Project</h6>
                      <p className="text-sm mb-0">
                        {/* <CiBookmarkCheck aria-hidden='true'/> */}
                        <span className="font-semibold ms-1">30 done</span>
                        this month
                      </p>
                    </Col>
                    <Col lg={6} xs={5} className="my-auto text-end">
                      <Dropdown className="float-lg-end pe-4">
                        <ul
                          className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item rounded-md"
                              hrefLang="javascript"
                            >
                              Action
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item rounded-md"
                              hrefLang="javascript"
                            >
                              {" "}
                              Another action
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item rounded-md"
                              hrefLang="javascript"
                            >
                              Something else here
                            </NavLink>
                          </li>
                        </ul>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="px-0 pb-2">
                  <div className="table-responsive">
                    <Table className="table items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Companies
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            {" "}
                            Members
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Budget
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Completion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* table-1 */}
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={xd}
                                  alt="xd-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">Soft UI XD Version</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Ryan Tompson"
                                data-bs-original-title="Ryan Tompson"
                              >
                                <img
                                  src={require("../img/team-1.jpg")}
                                  alt="team1"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Romina Hadid"
                                data-bs-original-title="Romina Hadid"
                              >
                                <img
                                  src={require("../img/team-2.jpg")}
                                  alt="team-2"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Alexander Smith"
                                data-bs-original-title="Alexander Smith"
                              >
                                <img
                                  src={require("../img/team-3.jpg")}
                                  alt="team-3"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">
                              $14,000
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-60"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        {/* table-2 */}
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={atlassian}
                                  alt="atlassiand-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">
                                  {" "}
                                  Add Progress Track
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Romina Hadid"
                                data-bs-original-title="Romina Hadid"
                              >
                                <img
                                  src={require("../img/team-2.jpg")}
                                  alt="team-2"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">
                              $3,000
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow={10}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {/* table-3 */}
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={slack}
                                  alt="slack-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">
                                  Fix Platform Errors
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Alexander Smith"
                                data-bs-original-title="Alexander Smith"
                              >
                                <img
                                  src={require("../img/team-3.jpg")}
                                  alt="team-3"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Ryan Tompson"
                                data-bs-original-title="Ryan Tompson"
                              >
                                <img
                                  src={require("../img/team-1.jpg")}
                                  alt="team1"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">
                              Not set
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {/* table-4 */}
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={spotify}
                                  alt="spotify-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">
                                  Launch our Mobile App
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Alexander Smith"
                                data-bs-original-title="Alexander Smith"
                              >
                                <img
                                  src={require("../img/team-3.jpg")}
                                  alt="team-3"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Ryan Tompson"
                                data-bs-original-title="Ryan Tompson"
                              >
                                <img
                                  src={require("../img/team-1.jpg")}
                                  alt="team1"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">
                              $20,500
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {/*table-5*/}

                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={jira}
                                  alt="jira-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">
                                  Add the New Pricing Page
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">$500</span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-25"
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {/* table-6 */}
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={invision}
                                  alt="invision-logo"
                                  className="avatar avatar-sm me-2 rounded-circle"
                                />
                              </div>
                              <div className="d-flex flex-col justify-center">
                                <h6 class="mb-0 text-xs">
                                  Redesign New Online Shop
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Ryan Tompson"
                                data-bs-original-title="Ryan Tompson"
                              >
                                <img
                                  src={require("../img/team-1.jpg")}
                                  alt="team1"
                                />
                              </NavLink>
                              <NavLink
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                aria-label="Jessica Doe"
                                data-bs-original-title="Jessica Doe"
                              >
                                <img
                                  src={require("../img/team-4.jpg")}
                                  alt="team-4"
                                />
                              </NavLink>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-semibold">$2000</span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-semibold">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-40"
                                  role="progressbar"
                                  aria-valuenow={40}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className=" h-100">
                <CardHeader className=" pb-0">
                  <h6>Orders overview</h6>
                  <p className="text-sm">
                    <span className="font-bold">24%</span> this month
                  </p>
                </CardHeader>
                <CardBody className="p-3">
                  <div className="timeline timeline-one-side">
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <FaBell className="text-success text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          $2400, Design changes
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>

                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <FaHtml5 className="text-danger text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          New order #1832412
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>

                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <FaShoppingCart className="text-info text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          Server payments for April
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>

                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <CiCreditCard1 className="text-warning text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          New card added for order #4395133
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>

                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <IoIosKey className="text-primary text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          Unlock packages for development
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>

                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <TbCoins className="text-dark text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          New order #9583120
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0 ">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={7} className="mb-lg-0 mb-4">
              <Card>
                <CardBody className="p-3">
                  <Row>
                    <Col lg={6}>
                      <div className="d-flex flex-column h-100">
                        <p className="mb-1 pt-2 text-bold">
                          Built by developers
                        </p>
                        <h5 className="font-bold">Soft UI Dashboard</h5>
                        <p className="mb-5">
                          From colors, cards, typography to complex elements,
                          you will find the full documentation.
                        </p>
                        <NavLink
                          className="text-body text-sm font-bold mb-0 icon-move-right mt-auto"
                          hrefLang="/javascript:;"
                        >
                          Read More
                          <MdKeyboardArrowRight
                            className="text-sm ms-1"
                            aria-hidden="true"
                          />
                        </NavLink>
                      </div>
                    </Col>
                    <Col lg={5} className="ms-auto text-center mt-5 mt-lg-0">
                      <div className="bg-primary rounded-lg h-100">
                        <img
                          src={waves}
                          alt="white-waves"
                          className="position-absoulte h-100 w-50 top-0  d-none"
                        />
                        <div className="position-relative d-flex items-center justify-center h-100">
                          <img
                            src={require("../img/rocket.webp")}
                            alt="rocket"
                            className="position-relative z-index-2 w-100 pt-4"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="h-100 p-3">
                <div className="overflow-hidden position-relative rounded-lg bg-cover h-100 msd">
                  <span className="mask1 bg-gradient-dark"></span>
                  <CardBody className="position-relative z-index-1 d-flex flex-column h-100 p-3">
                    <h5 className="text-white font-bold mb-4 pt-2">
                      Work with the rockets
                    </h5>
                    <p className="text-white">
                      Wealth creation is an evolutionarily recent positive-sum
                      game. It is all about who take the opportunity first.
                    </p>
                    <NavLink
                      className="text-white text-sm font-semibold mb-0 icon-move-right mt-auto"
                      hrefLang="/javascript:'"
                    >
                      Read More{" "}
                      <MdKeyboardArrowRight
                        className="text-sm ms-1"
                        aria-hidden="true"
                      />
                    </NavLink>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* bar chart-js */}
          <Row className="mt-4">
            <Col lg={5} className="mb-lg-0 mb-4">
              <Card className="z-index-2">
                <CardBody className="p-2">
                  <div className="bg-dark border-radius-md py-3 pe-1 mb-3">
                    <div className="chart">
                      <Bar
                        data={bardata}
                        options={options}
                        className="chart-canvas"
                        id="chart-bars"
                        height={212}
                        width={589}
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "170px",
                          width: "471px",
                        }}
                      />
                    </div>
                  </div>
                  <h6 className="ms-2 mt-4 mb-0">Active Users</h6>
                  <p className="text-sm ms-2">
                    (<span className="font-semibold">+23%</span>) than last week
                  </p>
                  <Container className="border-radius-lg ">
                    <Row>
                      <Col xs={3} className="py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-primary text-center me-2 d-flex items-center justify-center">
                            <IoDocumentOutline />
                          </div>
                          <p className="text-xs mt-1 mb-0 font-bold">Users</p>
                        </div>
                        <h4 className="font-bold">36k</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-60"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </Col>

                      <Col xs={3} className="py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex items-center justify-center">
                            <RiSpaceShipLine />
                          </div>
                          <p className="text-xs mt-1 mb-0 font-bold">Clicks</p>
                        </div>
                        <h4 className="font-bold">2m</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-90"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </Col>

                      <Col xs={3} className="py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex items-center justify-center">
                            <FaCreditCard />
                          </div>
                          <p className="text-xs mt-1 mb-0 font-bold">Sales</p>
                        </div>
                        <h4 className="font-bold"> 435$</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-30"
                            role="progressbar"
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </Col>

                      <Col xs={3} className="py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex items-center justify-center">
                            <IoSettingsSharp />
                          </div>
                          <p className="text-xs mt-1 mb-0 font-bold">Items</p>
                        </div>
                        <h4 className="font-bold">43</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-50"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </Col>
            {/* line chart */}
            <Col lg={7}>
              <Card className="z-index-2">
                <CardHeader className="pb-0">
                  <h6>Sales Overview</h6>
                  <p className="text-sm">
                    <MdKeyboardArrowRight className="text-success" />
                    <span className="font-bold">4% more</span> in 2021
                  </p>
                </CardHeader>
                <CardBody className="p-3">
                  {/* Correct usage of Chart component */}
                  {/* <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={lineData}
            options={lineOptions}
          /> */}
          
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Footer />
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;

import React from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router";
// import { CiSearch } from "react-icons/ci";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  Row,
} from "react-bootstrap";
import "./Table.css";
// import images
import spotify from "../img/spotify.svg";
import invision from "../img/invision.svg";
import jira from "../img/jira.svg";
import slack from "../img/slack.svg";
import webdev from "../img/webdev.svg";
import xd from "../img/xd.svg";
import Footer from "./Footer";
function Table() {
  return (
    <div>
      {/* import sidebar page start */}
      <Sidebar />
      {/* import sidebar page end */}
      <main className="main-content relative max-h-screen h-100 rounded-lg ps ps--active-y">
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
                  Tables
                </li>
              </ol>
              <h6 className="font-bold mb-0">Tables</h6>
            </nav>
            {/* breadcrumd end */}

            {/* <div className="ms-md-auto pe-md-3 d-flex items-center">
              <div className="input-group-text text-body">
                <input
                  type="text"
                  className="form-control border-0 ps-3"
                  placeholder="Type here..."
                />

                <ul className="navbar-nav justify-end">
                  <li className="nav-item d-flex items-center">
                    <NavLink
                      className="btn btn-outline-primary btn-sm mb-0 me-3"
                      target="_blank"
                      to="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard"
                    >
                      Online Builder
                    </NavLink>
                  </li>
                  <li className="nav-item d-flex items-center">
                    <NavLink
                      className="nav-link text-body font-bold px-0"
                      target="_blank"
                      to="#"
                    >
                      <span className="d-sm-inline d-none">Sign In</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
  <div className="input-group text-body">
    <input
      type="text"
      className="form-control border-0 ps-3"  // padding left for the input
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

        <Container fluid className="py-">
          <Row>
            <Col xs={12}>
              <Card className="mb-4">
                <div className="table-responsive">
                  <CardHeader className="pb-0">
                    <h6>Author table</h6>
                  </CardHeader>
                  <CardBody className="px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Author
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Function
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Technology
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Employed
                            </th>
                            <th className="text-secondary opacity-7" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-2.jpg")}
                                    alt="team-2"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Manager
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Organization
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                23/04/18
                              </span>
                            </td>
                            <td className="align-middle">
                              <NavLink
                                href="/javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-3.jpg")}
                                    alt="team-3"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">Alexa Liras</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                11/01/19
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="#!"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-4.jpg")}
                                    alt="team-4"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">
                                    Laurent Perrier
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    laurent@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Executive
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Projects
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                19/09/17
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="#!"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-3.jpg")}
                                    alt="team-3"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">Michael Levi</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    michael@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                24/12/08
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="#!"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-2.jpg")}
                                    alt="team-2"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">Richard Gran</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    richard@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Manager
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Executive
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                04/10/21
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="#!"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={require("../img/team-4.jpg")}
                                    alt="team-4"
                                    className="avatar avatar-sm me-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-xs">Miriam Eric</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    miriam@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programtor
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="#!"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card className="mb-4">
                <CardHeader className="pb-0">
                  <h6>Projects table</h6>
                </CardHeader>
                <CardBody className="px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Project
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Budget
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Status
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Completion
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={spotify}
                                  alt="spotify-logho"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Spotify</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $2,500
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-info" />
                              <span className="text-dark text-xs">working</span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">60%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0">
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={invision}
                                  alt="invision-logo"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Invision</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $5,000
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-success" />
                              <span className="text-dark text-xs">done</span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">100%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={jira}
                                  alt="jira-logo"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Jira</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $3,400
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-danger" />
                              <span className="text-dark text-xs">
                                canceled
                              </span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">30%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={30}
                                    style={{ width: "30%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={slack}
                                  alt="slack"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Slack</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $1,000
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-danger" />
                              <span className="text-dark text-xs">
                                canceled
                              </span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">0%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow={0}
                                    aria-valuemin={0}
                                    aria-valuemax={0}
                                    style={{ width: "0%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={webdev}
                                  alt="webdev-logo"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Webdev</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $14,000
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-info" />
                              <span className="text-dark text-xs">working</span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">80%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={80}
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={xd}
                                  alt="xd-logo"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs">Adobe XD</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              $2,300
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-dot me-4">
                              <i className="bg-success" />
                              <span className="text-dark text-xs">done</span>
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center">
                              <span className="me-2 text-xs">100%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v text-xs"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* footer section */}
          <Footer />
        </Container>
      </main>
    </div>
  );
}

export default Table;

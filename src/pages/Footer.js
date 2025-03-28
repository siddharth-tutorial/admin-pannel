import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div>
      <footer className="pt-3">
            <Container fluid>
              <Row className="items-center justify-content-lg-between">
                <Col lg={6} className="mb-lg-0 mb-4 d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    &copy; <script >document.write(new Date().getFullyear())</script> 2025, made with <FaHeart className="text-red-400" /> by
                    <NavLink href="https://www.creative-tim.com" className="font-bold" target="_blank" rel="noopener noreferrer">
                      Creative Tim
                    </NavLink>
                    for a better web.
                  </div>
                </Col>
                <Col lg={6}>
                <ul className="nav nav-footer justify-center justify-lg-end">
                  <li className="nav-item1">
                    <NavLink href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank"  rel="noopener noreferrer">Creative Tim</NavLink>
                  </li>
                  <li className="nav-item1">
                    <NavLink href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank"  rel="noopener noreferrer">About Us</NavLink>
                  </li>
                  <li className="nav-item1">
                    <NavLink href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank"  rel="noopener noreferrer">Blog</NavLink>
                  </li>
                  <li className="nav-item1">
                    <NavLink href="https://www.creative-tim.com/license" className="nav-link text-muted" target="_blank"  rel="noopener noreferrer">License</NavLink>
                  </li>
                </ul>
                </Col>
              </Row>
            </Container>
          </footer>
    </div>
  )
}

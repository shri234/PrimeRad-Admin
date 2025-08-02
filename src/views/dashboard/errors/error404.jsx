import React,{memo,Fragment} from 'react'

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// react-router
import { Link } from 'react-router-dom'

// img
import img404 from '/assets/images/error/404.png'

const Error404 = memo(() => {
    return (
        <Fragment>
            <Container className="pt-5">
                <Row className="no-gutters height-self-center">
                    <Col sm="12" className="text-center align-self-center">
                        <div className="iq-error position-relative">
                            <img src={img404} className="img-fluid iq-error-img" alt=""/>
                            <h2 className="mb-0 mt-4">Oops! This Page is Not Found.</h2>
                            <p>The requested page dose not exist.</p>
                            <Link className="btn btn-primary mt-3" to="/"><i className="ri-home-4-line"></i>Back to Home</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
})

Error404.displayName = "Error404"
export default Error404;
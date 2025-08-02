import React,{memo,Fragment} from 'react'

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// react-router
import { Link } from 'react-router-dom'

// img
import img500 from '/assets/images/error/500.png'


const Error500 = memo(() => {
    return (
        <Fragment>
            <Container className="pt-5 vh-100">
                <Row className="no-gutters height-self-center h-100">
                    <Col sm="12" className="text-center align-self-center">
                        <div className="iq-error position-relative">
                            <img src={img500} className="img-fluid iq-error-img" alt=""/>
                            <h1 className="text-in-box">500</h1>
                            <h2 className="mb-0">Oops! This Page is Not Working.</h2>
                            <p>The requested is Internal Server Error.</p>
                            <Link className="btn btn-primary mt-3" to="/"><i className="ri-home-4-line"></i>Back to Home</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
})

Error500.displayName = "Error500"
export default Error500;
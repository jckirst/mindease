import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap"

function Articles(){
    return (
        <div>
            Artigos

            <Container>
                <Row>

                    <Col className="bg-light border" xs="3">
                        <Card
                        style={{
                            width: '18rem'
                        }}
                        >
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card title
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Card subtitle
                                </CardSubtitle>
                                <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="bg-light border" xs="3">
                        <Card
                        style={{
                            width: '18rem'
                        }}
                        >
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card title
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Card subtitle
                                </CardSubtitle>
                                <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="bg-light border" xs="3">
                        <Card
                        style={{
                            width: '18rem'
                        }}
                        >
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card title
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Card subtitle
                                </CardSubtitle>
                                <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            

        </div>
    )
}

export default Articles
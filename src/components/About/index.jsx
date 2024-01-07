import React from "react";
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const AboutUsComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Project Overview - Folder Structure, Development Challenges, and Initialization Steps</h1>
          </Col>
        </Row>
        {/* Project Folder Structure */}
        <Row>
          <Col>
            <h2>Folder Structure:</h2>
            <ListGroup as="ul">
              <ListGroup.Item as="li"><strong>src:</strong>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Assets:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                          <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Images:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            logo.png
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            search.svg
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            constants.js
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Components:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            About
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            ErrorBoundary
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Footer
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Loading
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Login-form
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            NavBar
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Products
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            TopButton
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            RouterComponent.jsx
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Enhancers:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                           monitorReducer.js
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Middeleware:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            logger.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            constants.js
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Pages:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            About
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Login
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            Products
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            AppRoutes.jsx
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            index.jsx
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Reducers:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            auth.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            index.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            products.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            types.js
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Redux:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            auth.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            configureStore.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            products.js
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Session:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            AuthContext.js
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            withAuthentication.jsx
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">App.css</ListGroup.Item>
                  <ListGroup.Item as="li">App.js</ListGroup.Item>
                  <ListGroup.Item as="li">index.css</ListGroup.Item>
                  <ListGroup.Item as="li">index.js</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>

              <ListGroup.Item as="li"><strong>public:</strong>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                  <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Assets:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                          <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>Images:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                          <ListGroup as="ul">
                      <ListGroup.Item as="li"><strong>favicon:</strong>
                        <ListGroup as="ul">
                          <ListGroup.Item as="li">
                            ... Images
                          </ListGroup.Item>
                          
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                          </ListGroup.Item>
                    
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                          </ListGroup.Item>
                          
                        </ListGroup>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">index.html</ListGroup.Item>
                  <ListGroup.Item as="li">manifest.json</ListGroup.Item>
                  <ListGroup.Item as="li">robots.txt</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item as="li"><strong>node_modules</strong></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Development Difficulties */}
        <Row className="mt-4">
          <Col>
            <h2>Development Difficulties</h2>
            <p>
              While developing the application, several challenges were encountered. Some of the difficulties include:
            </p>
            <ul>
              <li>
                <strong>Login Module Integration:</strong> Integrating the login module with secure email and password
                validation proved challenging, especially ensuring proper validation and encryption.
              </li>
              <li>
                <strong>Search Functionality:</strong> Implementing the search functionality with Angular Material cards
                in the product list module required meticulous handling to ensure a smooth user experience and accurate results.
              </li>
              <li>
                <strong>Authentication Handling:</strong> Managing authentication and correctly passing the access token as
                a header in API requests posed challenges, requiring thorough understanding of security measures.
              </li>
              <li>
                <strong>API Clarification:</strong> While communicating with Kailash about the API, there was a need for
                clarification on fetching the access token. This required additional communication to resolve the issue and
                ensure proper API integration.However, After Reviewing and updating the API server, Including "Authorization" header in the POST API from the updated assignment requirements pdf, the issue was successfully resolved.
              </li>
              
            <p>
            <b>***</b>   The resolved code for fetching the authentication token is as follows:
            </p>
            <div
  style={{
    color: "rgb(204, 204, 204)",
    backgroundColor: "rgb(31, 31, 31)",
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: 14,
    whiteSpace: "pre"
  }}
>
  <div>
    <span style={{ color: "rgb(197, 134, 192)" }}>export</span>{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>login</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span> (
    <span style={{ color: "rgb(156, 220, 254)" }}>username</span>,{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>password</span>){" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>=&gt;</span> {"{"}
  </div>
  <div>
    &nbsp; &nbsp; <span style={{ color: "rgb(197, 134, 192)" }}>return</span>{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>async</span> (
    <span style={{ color: "rgb(156, 220, 254)" }}>dispatch</span>){" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>=&gt;</span> {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>loginRequest</span>());
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>try</span> {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>hashedPassword</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>sha256</span>(
    <span style={{ color: "rgb(156, 220, 254)" }}>password</span>).
    <span style={{ color: "rgb(220, 220, 170)" }}>toString</span>();
  </div>
  <br />
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>var</span>{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>myHeaders</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>new</span>{" "}
    <span style={{ color: "rgb(78, 201, 176)" }}>Headers</span>();
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>myHeaders</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>append</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>"Authorization"</span>,{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>
      "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=="
    </span>
    );
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>formData</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>new</span>{" "}
    <span style={{ color: "rgb(78, 201, 176)" }}>FormData</span>();
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>formData</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>append</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>'username'</span>,{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>username</span>);
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>formData</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>append</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>'password'</span>,{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>hashedPassword</span>);
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>formData</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>append</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>'grant_type'</span>,{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>'password'</span>);
  </div>
  <br />
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>response</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>await</span>{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>fetch</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>
      'https://apiv2stg.promilo.com/user/oauth/token'
    </span>
    , {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>method</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>'POST'</span>,
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>headers</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>myHeaders</span>,
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>body</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>formData</span>,
  </div>
  <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"}"});</div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>if</span> (
    <span style={{ color: "rgb(79, 193, 255)" }}>response</span>) {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>await</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>response</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>json</span>();
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>if</span> (
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>status</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>code</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>===</span>{" "}
    <span style={{ color: "rgb(181, 206, 168)" }}>200</span>) {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>const</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>token</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>response</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>access_token</span>;
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>localStorage</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>setItem</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>'authToken'</span>,{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>token</span>);
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>localStorage</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>setItem</span>(
    <span style={{ color: "rgb(206, 145, 120)" }}>'userData'</span>,{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>JSON</span>.
    <span style={{ color: "rgb(220, 220, 170)" }}>stringify</span>(
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>response</span>));
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>loginSuccess</span>(
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>));
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>notify</span>({"{"}{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>message</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>`Login success`</span>,{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>status</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>'success'</span> {"}"}))
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>notify</span>({"{"}{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>message</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>
      `Redirecting to Products`
    </span>
    , <span style={{ color: "rgb(156, 220, 254)" }}>status</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>"loading"</span> {"}"}));
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>setTimeout</span>((){" "}
    <span style={{ color: "rgb(86, 156, 214)" }}>=&gt;</span> {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; <span style={{ color: "rgb(156, 220, 254)" }}>window</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>location</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>href</span>{" "}
    <span style={{ color: "rgb(212, 212, 212)" }}>=</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>'/products'</span>
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"}"},{" "}
    <span style={{ color: "rgb(181, 206, 168)" }}>1000</span>)
  </div>
  <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>else</span> {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>loginFailure</span>(
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>));
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>notify</span>({"{"}{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>message</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(79, 193, 255)" }}>data</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>status</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>message</span>,{" "}
    <span style={{ color: "rgb(156, 220, 254)" }}>status</span>
    <span style={{ color: "rgb(156, 220, 254)" }}>:</span>{" "}
    <span style={{ color: "rgb(206, 145, 120)" }}>'error'</span> {"}"}))
  </div>
  <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
  <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; {"}"}{" "}
    <span style={{ color: "rgb(197, 134, 192)" }}>catch</span> (
    <span style={{ color: "rgb(156, 220, 254)" }}>error</span>) {"{"}
  </div>
  <div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
    <span style={{ color: "rgb(220, 220, 170)" }}>dispatch</span>(
    <span style={{ color: "rgb(220, 220, 170)" }}>loginFailure</span>(
    <span style={{ color: "rgb(156, 220, 254)" }}>error</span>.
    <span style={{ color: "rgb(156, 220, 254)" }}>message</span>));
  </div>
  <div>&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</div>
  <div>&nbsp; &nbsp; {"}"};</div>
  <div>{"}"};</div>
</div>

            </ul>
          </Col>
        </Row>

        {/* Project Start Guide */}
        <Row className="mt-4">
          <Col>
            <h2>Project Start Guide</h2>
            <p>
              To start the project, follow these step-by-step instructions:
            </p>
            <ol>
              <li>Clone the project repository from the provided Git URL.</li>
              <li>Install project dependencies using the command: <code>npm install</code>.</li>
              <li>Run the development server with: <code>npm start</code>.</li>
              <li>Access the application in your web browser at <code>http://localhost:3000</code>.</li>
            </ol>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row className="mt-4">
          <Col>
            <h2>Additional Information</h2>
            <Card>
              <Card.Body>
                <p>
                  For more details and updates about the project, please visit our GitHub repository:
                  <a href="https://github.com/hanu7674/">Project Repository</a>.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Project Initialization Steps:</h2>
            <ListGroup as="ol">
              <ListGroup.Item as="li">
                <strong>Clone the Repository:</strong>
                <pre><code>git clone &lt;repository_url&gt;</code></pre>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <strong>Install Dependencies:</strong>
                <pre><code>npm install</code></pre>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <strong>Run the Application:</strong>
                <pre><code>npm start</code></pre>
                <p>This will launch the development server, and you can access the application at <code>http://localhost:3000</code> by default.</p>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <strong>Testing:</strong>
                <pre><code>npm test</code></pre>
                <p>Execute tests to ensure the integrity of components and functionalities.</p>
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <strong>Build for Production:</strong>
                <pre><code>npm run build</code></pre>
                <p>This command generates the optimized and minified production build in the <code>build</code> directory.</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )

}
export default AboutUsComponent;
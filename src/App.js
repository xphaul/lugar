import { useEffect, useState } from "react";
import Header from "./components/header";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GeoAlt } from "react-bootstrap-icons";
import "./App.css";
import { fetchProperties } from "./services/propertyServices";
import Select from "react-select";

const App = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [filteredProperty, setFilteredProperty] = useState([]);
  const [propSize, setPropSize] = useState(3);
  const [categories] = useState([
    {
      value: `All`,
      label: `All Categories`,
    },
    {
      value: `Apartment`,
      label: `Apartment`,
    },
    {
      value: `House`,
      label: `House`,
    },
    {
      value: `Penthouse`,
      label: `Penthouse`,
    },
    {
      value: `Villa`,
      label: `Villa`,
    },
  ]);

  useEffect(() => {
    const getPropertyDetails = async () => {
      try {
        const res = await fetchProperties();
        console.log({ res });
        setPropertyDetails(res.data.propertyCollection.items);
        setFilteredProperty(res.data.propertyCollection.items);
      } catch (error) {
        console.error(error);
      }
    };

    getPropertyDetails();
  }, []);

  const filterCategories = (value) => {
    let filteredProp;
    if (value === `All`) {
      filteredProp = propertyDetails.filter(
        (props) => props.category === value
      );
      setFilteredProperty(propertyDetails);
      return;
    }

    filteredProp = propertyDetails.filter((props) => props.category === value);
    setFilteredProperty(filteredProp);
  };

  console.log({ filteredProperty });

  return (
    <div className="App">
      <div className="banner">
        <Header />
        <Container fluid="md" className="pt-5">
          <Row>
            <Col lg="7">
              <h2 className="banner-text mt-5">
                A home is <br />
                built with love
                <br /> and dreams
              </h2>
              <h4 className="mt-4 subtitle">
                Real estate farm that makes your dreams true
              </h4>
              <div className="mt-5">
                <Button variant="dark" className="button">
                  Our Projects
                </Button>
                <Button variant="outline-dark" className="button">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-property">
        >
        <Container fluid="md" className="pt-5">
          <Row>
            <Col>
              <h1 className="title">Properties</h1>
              <h4 className="text-muted mt-4 subtitle">
                Turpis facilisis tempor pulvinar in lobortis ornare magna.
              </h4>
              <div className="d-flex justify-content-end">
                <Select
                  className="property-list"
                  options={categories}
                  isSearchable={false}
                  defaultValue={categories[0]}
                  onChange={(value) => filterCategories(value.value)}
                />
              </div>
              <Row>
                {propertyDetails
                  ? filteredProperty.slice(0, propSize).map((prop) => {
                      return (
                        <Col lg={4} className="m-0" id={prop.id}>
                          <div
                            className="property-image"
                            style={{
                              backgroundImage: `url(${prop.image.url})`,
                            }}
                          >
                            <div className="property-details">
                              <h3 className="property-title">{prop.title}</h3>
                              <h4 className="property-address">
                                <GeoAlt />
                                {prop.address}
                              </h4>
                            </div>
                          </div>
                        </Col>
                      );
                    })
                  : null}
                {filteredProperty.length > 3 ? (
                  <Button
                    onClick={() =>
                      setPropSize(() => {
                        return propSize === 3 ? 6 : 3;
                      })
                    }
                    variant="dark"
                    className="button mx-auto"
                  >
                    {propSize === 3 ? `Load More` : `Show Less`}
                  </Button>
                ) : null}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;

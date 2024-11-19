import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import photo from "./photo_2024-09-29_00-52-59.jpg";
import { useState } from "react";

function App() {
  const person = [
    { id: "0", name: "حسن", date: "5 مساء", img: "p1.jpg" },
    { id: "1", name: "محمد", date: "4 مساء", img: "p1.jpg" },
    { id: "2", name: "على", date: "3 مساء", img: "p1.jpg" },
    { id: "3", name: "محمود", date: "2 مساء", img: "p1.jpg" },
    { id: "4", name: "حسن", date: "1 مساء", img: "p1.jpg" },
    { id: "5", name: "حسن", date: "1 مساء", img: "p1.jpg" },
    { id: "6", name: "حسن", date: "1 مساء", img: "p1.jpg" },
  ];

  const [view, setView] = useState(person);

  const deletView = () => {
    setView([]);
  };

  const showView = () => {
    setView(person);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Container className="m-5   ">
          <Row className="text-center  mb-3 title">
            <Col >
              <h5>لديك اليوم {person.length} مواعيد</h5>
            </Col>
          </Row>

          <Row className="content">
            <Col>
              <div className="rectangler p-3 ">
                {person.length ? (
                  view.map((item) => {
                    return (
                      <div key={item.id} className="d-flex">
                        <img src={photo} className="img-avatar" alt=" " />
                        <div className="px-2 ">
                          <p className="d-inline fs-5">{item.name}</p>
                          <p className="fs-6">{item.date}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1>ليس هناك مواعيد الان </h1>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-between pt-2">
              <button onClick={showView} className="btn btn-success">
                عرض البيانات
              </button>
              <button onClick={deletView} className="btn btn-danger">
                مسح الكل
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

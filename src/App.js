import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { question } from "./components/data";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [data , setData]=useState(question)
const [qu , setQ]=useState("")
const [an, setA]=useState("")

const additem =()=>{
  if(qu === "" || an === "" ){
    notify("من فضلك اكمل البيانات" , "Error")
    return;
  
  }
    question.push({id : Math.random() , q : qu , a : an})
    setA('')
    setQ('')
    onAdd()
    
}

const onAdd = ()=>{
  setData([...question])
  notify("ـم الاضافه بنجاح" , "Success")
}

const deletALLData =()=>{
  question.splice(0 , question.length)
  setData([])
  notify("ـم المسح بنجاح" , "Error")
}

const deletoneitem = (question) => {
  setData([...question])
  notify("ـم المسح بنجاح" , "Error")
}

const deletItem = (ID)=>{

  if (data.length >= 1){
    const index = question.findIndex((item)=> item.id === ID)
    question.splice(index,1)
    deletoneitem(question)
  }


}


const notify = (message ,type) => {
  if (type === "Error"){
    toast.error(message)
   
  }
  else if (type === "Success"){

    toast.success(message)
  }
};

  return (
    <>
      <div className="m-5">
        <Container>
          <Row>
            <Col sm="4">
              <p className="fs-3 text-center">اسئله واجوبه شائعه</p>
            </Col>
            <Col sm="8">
              <Row>
                <Col sm="5">
                  <Form.Control value={qu} onChange={(e)=>{setQ( e.target.value)}} type="text" placeholder="ادخل االسوال" />
                </Col>
                <Col sm="5">
                  {" "}
                  <Form.Control value={an} onChange={(e)=>{setA( e.target.value)}}  type="text" placeholder="ادخل الاجابه" />
                </Col>
                <Col sm="2">
                  <button onClick={additem} className="btn btn-success  w-100 ">اضافه</button>
                </Col>
              </Row>
              <Row className="mt-2">
                <Accordion>
                  {data.length >= 1 ? (
                    question.map((item , index ) => {
                      return (
                        <Accordion.Item key={index} eventKey={item.id}>
                          <Accordion.Header>
                            <div className="m-auto">{item.q}</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="d-inline px-3">{item.a}</div>
                            <button onClick={() => deletItem(item.id)} className="btn btn-outline-danger">
                              مسح السوال
                            </button>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })
                  ) : (
                    <h1 className="text-center m-5">لا يوجد اساله</h1>
                  )}
                </Accordion>
              </Row>

              {question.length >= 1 ? (
                <button onClick={deletALLData} className="btn btn-success w-100 mt-2">مسح الكل</button>
              ) : null}
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </>
  );
}

export default App;

import { on } from "events";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Comparepage.css";
const axios = require("axios");
const Comparepage = () => {
  const [onderneming1, setOnderneming1] = useState<any>({});
  const [onderneming2, setOnderneming2] = useState<any>({});
  const [btw1, setbtw1] = useState<any>("");
  const [btw2, setbtw2] = useState<any>("");
  const[isloading,setIsloading] = useState<any>(false);

  const getData: MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .get(
        `https://itproject-api20220315181828.azurewebsites.net/company/${btw1}`
      )
      .then((resp: any) => {
        setOnderneming1(resp.data);
        console.log(resp.data);
        setIsloading(false)
       
      });
    axios
      .get(
        `https://itproject-api20220315181828.azurewebsites.net/company/${btw2}`
      )
      .then((resp: any) => {
        setOnderneming2(resp.data);
        console.log(resp.data);
       
      });
      
  };

  const handleChange1: ChangeEventHandler<HTMLInputElement> = (event) => {
    setbtw1(event.target.value);
   
  };
  const handleChange2: ChangeEventHandler<HTMLInputElement> = (event) => {
    setbtw2(event.target.value);
  };

  return (
    <div className="comparecontainer">
      <Container>
        <form action="">
          <Row>
            <Col>
              <label htmlFor="">Ondernemingsnummer 1</label>
              <input
                className="inputfieldstyle"
                type="text"
                placeholder="08132546987"
                value={btw1}
                onChange={handleChange1}
              />

              
               { isloading && btw1 != null ? (<div> <Spinner animation="border" variant="success" /></div>): <div>
               {onderneming1.enterpriseName && onderneming2.enterpriseName && <div><strong>Naam</strong> {onderneming1.enterpriseName}
              
              <br />
               <p><strong>Adres</strong> {onderneming1.completeAddress}</p> <br />
              <p><strong>Datum neerlegging</strong> {onderneming1.depositDate}</p>
              <p style={onderneming1.eigenVermogen > onderneming2.eigenVermogen? {color: "green"} : {color:"red"}}> <strong>Eigen Vermogen</strong> {onderneming1.eigenVermogen} EUR{" "}</p>
              <p style={onderneming1.schulden < onderneming2.schulden ? {color: "green"} : {color:"red"}}> <strong>Schulden</strong> {onderneming1.schulden} EUR{" "}</p>
              <p style={onderneming1.bedrijfswinst > onderneming2.bedrijfswinst ? {color: "green"} : {color:"red"}}> <strong>Bedrijfswinst</strong> {onderneming1.bedrijfswinst} EUR{" "}</p>
              
               </div>}
                
               </div>
}
              
              
            </Col>

            <Col>
              <Button
                variant="primary"
                className="vergliljkbtn"
                onClick={getData}
              >
                Vergelijk
              </Button>{" "}
            </Col>

            <Col>
              <label htmlFor="">Ondernemingsnummer 2</label>
              <input
                className="inputfieldstyle"
                type="text"
                placeholder="08132546987"
                value={btw2}
                onChange={handleChange2}
              />
              
               
               {onderneming2.enterpriseName && onderneming1.enterpriseName &&
                <div>  <strong>Naam</strong> {onderneming2.enterpriseName} <br />
               <p><strong>Adres</strong> {onderneming2.completeAddress}</p>  <br />
                <p><strong>Datum neerlegging</strong> {onderneming2.depositDate}</p>
                 <p style={onderneming2.eigenVermogen > onderneming1.eigenVermogen ? {color: "green"} : {color:"red"}}> <strong>Eigen Vermogen</strong> {onderneming2.eigenVermogen} EUR{" "}</p>
                 <p style={onderneming2.schulden < onderneming1.schulden ? {color: "green"} : {color:"red"}}> <strong>Schulden</strong> {onderneming2.schulden} EUR{" "}</p>
                <p style={onderneming2.bedrijfswinst > onderneming1.bedrijfswinst ? {color: "green"} : {color:"red"}}> <strong >Bedrijfswinst</strong> {onderneming2.bedrijfswinst} EUR{" "}</p>
               
  
              </div>
}
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Comparepage;

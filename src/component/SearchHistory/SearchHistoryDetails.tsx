import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchHistory.css";
import { ReactTypical } from "@deadcoder0904/react-typical";
import { Table } from "react-bootstrap";

const Searchhistorydetails = () => {
  const { titel } = useParams<any>();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://itproject-api20220315181828.azurewebsites.net/searchhistory"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="searchdetailscontainer">
      {data
        .filter((value: any) => value.dateSearched === titel)
        .map((value: any, index: number) => {
          return (
            <div key={index}>
              <h3>
                <ReactTypical
                  loop={Infinity}
                  steps={["Geschiedenis van het bedrijf 📋🖋", 3000]} 
                  wrapper="p"
                />
              </h3>
              <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
                
                <th>Naam</th>
                <th>Adres</th>
                <th>Datum Neerlegging</th>
                <th>Eigen Vermogen</th>
                <th>Schulden</th>
                <th>Bedrijfswinst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>{value.enterpriseName} </td>
                <td>{value.completeAddress}</td>
                <td>{value.depositDate}</td>
                <td>{value.eigenVermogen} EUR</td>
                <td>{value.schulden} EUR</td>
                <td>{value.bedrijfswinst} EUR</td>
              </tr>
              
            </tbody>
          </Table>
            </div>
           
            
          );
        })}
    </div>
  );
};

export default Searchhistorydetails;

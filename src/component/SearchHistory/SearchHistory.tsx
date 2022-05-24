import axios from "axios";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchHistory.css";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";


const Searchgeschidenis = () => { 
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [wordEntered, setWordEntered] = useState("");
  const[datashow,setDataShow] = useState("")

  useEffect(() => {
    axios
      .get(
        "https://itproject-api20220315181828.azurewebsites.net/searchhistory"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
var data_to_show = res.data.map((e:any)=>e.enterpriseName);
setDataShow(data_to_show);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: any) => {
      return value.enterpriseName
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="searchcontainer">
      <h3>Zoek bedrijfsgeschiedenis</h3>
      <div className="search">
        <div className="searchInputs">
          <input
            className="searchInputfield"
            type="text"
            placeholder="Zoek bedrijfsgeschiedenis"
            value={wordEntered}
            onChange={handleFilter}
          />


          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.lenght !== 0 && (
          <div className="dataResult">
            {filteredData.map((value: any, key: any) => {
              
              return (
                <>
                <Link to={`/Searchhistorydetails/${value.dateSearched}`}>
                  <p key={key}>
                    <CircleIcon />
                    {value.enterpriseName}
                  </p>
                  
                </Link>
                
                
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchgeschidenis;

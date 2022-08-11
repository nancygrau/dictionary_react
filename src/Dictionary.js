import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css"

export default function Dictionary(){
let [keyword, setKeyword] = useState("");
let[results, setResults]= useState(null);
let [photos, setPhotos]=useState(null);

function handleResponse(response){
  setResults(response.data[0]);
  
}

function handlePexelsResponse(response){
  setPhotos(response.data.photos);
}

function search(event){
  event.preventDefault();


  //documentation: https://dictionaryapi.dev/

  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelsApiKey= "563492ad6f91700001000001d89f10c9d8b64b5c87061e20a2e4f3c1";
  let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  let headers={ Authorization: `Bearer ${pexelsApiKey}`}
  axios.get(pexelsApiUrl, {headers: headers,}).then(handlePexelsResponse);

}

function handleKeywordChange(event){
  setKeyword(event.target.value);
}


  return (
  <div className="Dictionary">
    <section>
      <form onSubmit={search}>
        <input type="search" placeholder="look up a word..." onChange={handleKeywordChange}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
    <Results results={results} />
    <Photos photos={photos}/>
  </div>);
}
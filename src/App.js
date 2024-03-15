import { useState } from 'react';
import './App.css';
import Search from './component/Search';
import Table from './component/Table';
import axios from "axios";
import Pagination from './component/Pagination';


function App() {
  const [city, setCity] = useState([])
  const [state, setState] = useState()
  const [limit,setLimit] = useState(5)
  const[current,setCurrent] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const newData =  city.slice(5*(pageNumber-1)+1,5*(pageNumber-1)+7)
    setCurrent(newData)
    
  };
  const collectData = (data) => {
   
    var options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: { countryIds: 'IN', namePrefix: data, limit:limit },
        headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
        }
    };

    axios.request(options).then(function (response) {
      const limitdata = response.data.data.slice(0,5)
  setCurrent(limitdata)
      setCity(response.data.data)
    }).catch(function (error) {

    });
   
}

const handleLimit =(e)=>{
  
if(Number(e.target.value) > 10){
  alert('Limit can not be more than 10')
}else{
  setLimit(e.target.value)
}
}


  return (
  <>
  <Search collectData={collectData} state={state} setState={setState}/>
  <Table city={current} state={state}  />
  {city.length?<Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(city?.length/5)}
        onPageChange={handlePageChange}
      />:''}

      <span className='limit' >Limit: <input value={limit}  onChange={handleLimit}/></span>
      
  </>
  
  );
}

export default App;


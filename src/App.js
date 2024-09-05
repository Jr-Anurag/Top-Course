
// import './App.css';
import React, { useState } from 'react';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Spinner from './Components/Spinner';
import { apiUrl, filterData } from './Data';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const resp = await fetch(apiUrl);
      const output = await resp.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className='flex flex-col min-h-screen' >
      <div>
        <Navbar />
      </div>

      <div className=' bg-slate-600'>
        <div >
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }

        </div>

      </div>


    </div>
  );
}

export default App;

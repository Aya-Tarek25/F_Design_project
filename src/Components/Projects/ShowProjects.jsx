import React, { useState,useEffect } from 'react';
import './ShowProjects.scss';
import { axiosInstance } from '../../axios/instance';
import ShowProjectBox from './ShowProjectBox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getproject } from '../../Redux/Slices/projectSlice';
function ShowProjects() {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    // const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState(true); // Add loading state
 
    // const flag=false;
    // useEffect(() => {
    //     axiosInstance.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c").then(data => {
    //         console.log(data.data.results)
    //         setProjects([...data.data.results]);
    //         setLoading(false); // Set loading to false after data is fetched
    //       })
    //       .catch(error => {
    //         console.error('Error fetching projects:', error);
    //         setLoading(false); // Set loading to false even if there's an error
    //       });
    //   }, []); // Empty dependency array to fetch projects only once





      const dispatch = useDispatch();
      const nav = useNavigate();
    const projects = useSelector(state => state.projectReducer.projects);
    const loading = useSelector(state => state.projectReducer.loading);
    console.log(projects)
    useEffect(() => {
            dispatch(getproject());     
    
    }, [])
      
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = projects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  function addproject() {
    nav('/addproject');
    
  
}
    return ( <div className='showpage'>
    <div className='showtitle'>
    <div>
      <h2>Show Projects</h2>
        <label  htmlFor='search' className='searchlabel'>Search</label>
        <input className='form-control search' type='text' name='search' id='search' />

  <div className="list-group category">
  <h3 className="card-header mb-2 p-2">Category</h3> 
  <button type="button" className="list-group-item list-group-item-action activebtn">Flats</button>
  <button type="button" className="list-group-item list-group-item-action">Offices</button>
  <button type="button" className="list-group-item list-group-item-action">Company</button>
  <button type="button" className="list-group-item list-group-item-action">Hotels</button>
  <button type="button" className="list-group-item list-group-item-action">Resturants</button>
</div>







        </div>
       <select  >
        <option>New Offers</option>
        <option>Old Offers</option>
        <option>Lowest offers</option>
        <option>Most Offers</option>
        </select>
        </div>
       
      
        {loading ? (
           <div className="d-flex justify-content-center" >
           <div className="spinner-grow text-secondary my-5 mydiv" role="status">
             <span className="visually-hidden ">Loading...</span>
           </div>
         </div>
        ) : (
          <div className='row display'>
         
            {currentData.map((item) => (
              <div key={item.id} className='col-12'>
                <ShowProjectBox data={item} />
              </div>
            ))}
              <button className='plus-button'   onClick={addproject}><i className="fa-solid fa-plus" ></i></button>
          </div>
        )}
      
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)}  >
             <span> {page}</span>
            </button>
          ))}
        </div>
       
      </div>
    )
}

export default ShowProjects;
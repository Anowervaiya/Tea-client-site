import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import CustomHook from '../CustomHook/CustomHook';

function Home() {
  //  
 const { data, isLoading, refetch } = CustomHook();
  // const {} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const [tea, setTea] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/tea').then(res => {
      setTea(res.data);
      setLoading(false);
    });
  }, []);

  function deleteTea(id) {
    axios.delete(`http://localhost:3000/tea/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          console.log('delete hoice');
          refetch()
       }
    

    })
  }

  if (loading) return <div>loading.....</div>;
  console.log(tea);
  return (
    <>
      <div className="*:ml-8">
        <Link to={'/SignUp'}>SignUP</Link>
        <Link to={'/SignIn'}>SignIn</Link>
        <Link to={'/AddTea'}>Add</Link>
        <Link to={'/Update'}>Update</Link>
      </div>

      <div>
        {data.map(item => {
          return (
            <div>
              <p>Name:{item.Name}</p>,<p>Name:{item.Email}</p>,
              <img src={item.photoUrL} alt="" className="w-1/4" />
              <button className="btn" onClick={() => deleteTea(item._id)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

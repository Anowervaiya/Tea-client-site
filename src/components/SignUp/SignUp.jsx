import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    
    console.log(email, password,name,photo);
    createUser(email, password)
      .then(res => {
        form.reset()
        console.log(res, 'created user successfull')

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            alert('account is created successfully')
            // navigate('/')
            axios.post('http://localhost:3000/tea', {
              Name: name,
              photoUrL: photo,
              Email: email,
              Password: password,
            })
              
            .then(res=>console.log(res))
          })
          .catch(error => {
            // An error occurred
            // ...
          });
      })
      .catch();
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign UP now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name='password'
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
           
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name='name'
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
           
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name='photo'
                type="url"
                placeholder="photo"
                className="input input-bordered"
                required
              />
           
            </div>
            <div className="form-control mt-6">
              <button  className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
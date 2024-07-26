import React, { useEffect } from 'react';
import Navigate from './Navigation';
import { useContext } from 'react';
import { cartContext } from './App';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const {globalUser,setGlobalUser} = useContext(cartContext);
    const {globalIsLogin,setGlobalIsLogin} = useContext(cartContext);
    const navigate = useNavigate();
    const logoutaction = () => {
        setGlobalIsLogin(false);
        navigate('/');
    }
    useEffect(() => {
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
    })
  return (
    <div>
        <Navigate/>
      <div className="card" style={{ width: '300px', margin: '70px auto' }}>
        <div className="card-body">
          <h1>Profile</h1>
          <p>Your details</p><br />
          <p>College Id<br /><strong>  {globalUser.collegeIdValue} </strong></p>
          <p>Password<br /><strong>    {globalUser.passwordValue}</strong></p>
          <p>Email address<br /><strong> {globalUser.emailValue}</strong></p>
          <p>Branch<br /><strong> {globalUser.branchValue}</strong></p>
          <p>Year<br /><strong>{globalUser.yearValue} </strong></p>
          <p>Gender<br /><strong>  {globalUser.genderValue}</strong></p>
          <button className='btn btn-secondary' onClick={logoutaction}>Logout</button>
        </div>
      </div>
      </div>
  );
}
export default Profile

import React, { useContext, useState } from 'react';
import {cartContext} from './App';
function Register() {
    const [collegeIdValue, SetCollegeId] = useState('');
    const [passwordValue, SetPassword] = useState('');
    const [emailValue, SetEmail] = useState('');
    const [branchValue, SetBranch] = useState('');
    const [yearValue, SetYear] = useState('');
    const [genderValue, SetGender] = useState('');
    const {globalUser, setGlobalUser, globalIsLogin, setGlobalIsLogin} = useContext(cartContext);
    const [user, SetUser] = useState({});

    const getCollegeId = (event) => {
        SetCollegeId(event.target.value);
        console.log(collegeIdValue);
    }
    const getPassword = (event) => {
        SetPassword(event.target.value);
        console.log(passwordValue);
    }
    const getEmail = (event) => {
        SetEmail(event.target.value);
        console.log(emailValue);
    }
    const getBranch = (event) => {
        SetBranch(event.target.value);
        console.log(event.target.value);
    }
    const getYear = (event) => {
        SetYear(event.target.value);
        console.log(event.target.value);
    }
    const getGender = (event) => {
        SetGender(event.target.value);
        console.log(event.target.value);
    }
    const formSubmitted = (event) => {
        event.preventDefault();
        const obj = {
            collegeIdValue, passwordValue, emailValue, branchValue, yearValue, genderValue
        }
        SetUser(obj);
        setGlobalUser(obj);
        // setGlobalIsLogin(true);
        console.log(obj);
        console.log(user);
        console.log("Registration successfull")
    }

    return (   
        <div className="card" style={{width:'400', marginLeft:'530px', marginTop:'10px'}}>    
            <div className="card-body">            
                <h4>Register</h4>
                <p>Provide your details to login</p>
                <form onSubmit={formSubmitted} style = {{display:'flex', flexDirection:'column'}}>
                <h6>College Id</h6>
                <input type="text" placeholder="college id" onChange = {getCollegeId}/>
                <br></br>
                <h6>Password</h6>
                <input type="password" placeholder="password" onChange={getPassword}/> <br></br>
                <h6>Email address</h6>
                <input type="email" placeholder="Email address" onChange={getEmail} /><br></br>
                <h6>Branch</h6>
                <select className="form-select" value={branchValue} onChange={getBranch}>
                    <option value="">Select branch</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                    <option value="CSE">CSE</option>
                </select>
                <br></br>
                <h6>Year</h6>
                <select className="form-select" value={yearValue} onChange={getYear}>
                    <option value="">Select year</option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year</option>
                    <option value="3rd year">3rd year</option>
                </select>
                <br></br>
                <h6>Gender</h6>
                <div><input type="radio" name="gender" value="male" onChange={getGender} />Male &nbsp;
                <input type="radio" name="gender" value="female" onChange={getGender} />Female &nbsp;
                <input type="radio" name="gender" value="other" onChange={getGender}/>Other
                </div>
                <br></br>
                <button type="submit" className="btn btn-secondary" style = {{width:'100px', marginLeft:'260px'}}>Register</button>
                </form>
            </div>
        </div>
    );
}
export default Register;
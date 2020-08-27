import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';




class Login extends React.Component {

    constructor(props){
        super();
        this.state={
            email:"",password:""
        }
     }
 


	 name=(event)=>{
 
        let target = event.target;

        if(target.name === "email"){
            console.log(target.value)
            this.setState({
                email : target.value
            })
        }
        else if(target.name === "password"){
            console.log(target.value)
            this.setState({
                password : target.value
            })}
        

}


handler = (e) =>{
	e.preventDefault()
	console.log("hello")
let data = {
    "email":this.state.email,
    "password":this.state.password
}   
axios.post("http://localhost:4000/login",data)
.then((res)=>
this.props.history.push("/dashboard"))
.catch((err)=>console.log("error"))

}



render(){
	console.log(this.props)
    return(
  <div>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>LOG IN</h3>
				
			</div>
			<div class="card-body">
				<form onSubmit={this.handler}>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="email" id="email" 
                        value ={this.state.email} onChange={this.name} name="email"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" id="password"
                        value ={this.state.password} onChange={this.name} name="password"/>
					</div>
				
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right btn-primary"/>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?  <Link to="/register" >Sign Up	
								</Link>
                                
				</div>
				
			</div>
		</div>
	</div>
</div>

  </div> );
}

}

export default Login;
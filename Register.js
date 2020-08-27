import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';



class Register extends React.Component{
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


handler = () =>{
let data = {
    "email":this.state.email,
    "password":this.state.password
}   
axios.post("http://localhost:4000/register",data)
.then((res)=>res.json())
.then((data)=>alert(data.message))
.catch((err)=>console.log(err))
}


render(){
    return(
        <div>
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Registration</h3>
                        
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.handler}>
                            <div class="input-group form-group">
                                
                                <input type="text" class="form-control" placeholder="Full Name" id="name" 
                                />
                                
                            </div>
                            <div class="input-group form-group">
                                
                                <input type="text" class="form-control" placeholder="email" id="email" 
                                value ={this.state.email} onChange={this.name} name="email"/>
                                
                            </div>
                            <div class="input-group form-group">
                               
                                <input type="password" class="form-control" placeholder="password" id="password"
                                value ={this.state.password} onChange={this.name} name="password"/>
                            </div>
                        
                            <div class="form-group">
                                <input type="submit" value="Register" class="btn float-right btn-primary"/>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
        
          </div>
    );
}
}

export default Register;
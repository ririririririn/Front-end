import axios from "axios"


const authAxois = axios.create({
  baseURL:'http://101.101.218.43/',
})



export const signup = async(name,email,password)=>{
 const {status} = await authAxois.post('/register',{
    name,email,password,
  });
  console.log(status)
  return status;
 }

 export const login = async(form)=>{

  const {status} = await authAxois.post('/login',form)
return status
 }
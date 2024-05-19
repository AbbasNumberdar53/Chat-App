import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext();

  const signin= async ({fullname, username, password, confirmPassword, gender}) =>{
    //console.log(fullname, username, password, confirmPassword, gender);

    const isValid = checkValidity(fullname, username, password, confirmPassword, gender);
    if(!isValid){
        return;
    }

    setLoading(true)
    try {
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullname, username, password, confirmPassword, gender})
        })

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        localStorage.setItem("app-user", JSON.stringify(data));
        setAuthUser(data);


        //console.log(data);
    } catch (error) {
        toast.error(error.message);
        console.log(error.message);
    }finally{
        setLoading(false);
    }

  };

  return {loading, signin}

}

export default useSignIn

function checkValidity (fullname, username, password, confirmPassword, gender){
    //console.log(fullname, username, password, confirmPassword, gender)
    if(!fullname || !username ||!password || !confirmPassword || !gender){
        //console.log("Please fill all the details")
        toast.error("Please fill all the details");
        return false;
    }

    if(password !== confirmPassword){
        //console.log("Confirm Password does not match match with Password")
        toast.error("Password does not match");
        return false;
    }

    if(password.length < 6){
        //console.log("Password must be atleast 6 characters long")
        toast.error("Password must be atleast 6 characters long");
        return false;
    }

    //console.log("Nothing is wrong");

    return true;


}
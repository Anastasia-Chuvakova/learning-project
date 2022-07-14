import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import UserService from "../services/UserServise";
import { IUserData } from "../types/IUserData";

const User: React.FC = () => {
    const { id }= useParams();
    let navigate = useNavigate();
    const initialUserState = {
        id: 0,
        name: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }

    }
    const [currentUser, setCurrentUser] = useState(initialUserState);

   const getUser = () => {

        UserService.getUser(id).then((response: any) => {
            setCurrentUser(response.data);
            console.log(response.data);
        }).catch((error: Error) => {
            console.log(error);
        }).finally(() => {
            navigate("/");
        }
        );
    }
        
            
    
    useEffect(() => {
        if(id)
        getUser(id);
    }
    , [id]);
return(
    <div>
        {currentUser?(
            <>
            <h4>User Info:</h4>
            <p>{currentUser.name}</p>
            <p>{currentUser.email}</p>
            <p>{currentUser.phone}</p>
            <p>{currentUser.address.zipcode}</p>
            <p>{currentUser.website}</p>
            </>
        ):(
            <div>
            <br />
            <p>Please click on a User..</p>
          </div> 
        )}
    </div>
)
} 
export default User;
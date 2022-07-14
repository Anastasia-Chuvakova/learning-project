import React, { useState, useEffect, ChangeEvent } from "react";
import UserService from "../services/UserServise";
import { IUserData } from "../types/IUserData";

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<IUserData[]>([]);
    const [currentUser, setCurrentUser] = useState<IUserData | null>(null);
    const [search, setSearch] = useState<string>(""); // try general for now but to do by name, email

    useEffect(() => {
        retrieveUsers();
    }, []);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        setSearch(search); //try general for now but to do search by name, email
    }

    const retrieveUsers = async () => {
        UserService.getAllUsers().then((response: any) =>{
            setUsers(response.data);
            console.log(response.data);
        }).catch((error: Error) => {
            console.log(error);
    });
}

return(
    <>
    <div><h2>List of users</h2>
    <br/>
    </div>
    {users.map((user: IUserData, index: number) => {
        return(
            <>
            <div key={user.id}>
                <a href="#"><p>{user.name}</p></a>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address.zipcode}</p>
                <p>{user.website}</p>
            </div>
            <br/>
            </>
        )
    })}
   </>
)
}
export default UsersList;
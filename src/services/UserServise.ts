import http from "../http";
import { IUserData } from "../types/IUserData";

const getAllUsers = () => {
    return http
};
const getUser = (id: any) => {
  http.then((response) => {
    return response.data.map((user: IUserData) => {
      return user;
    }, [])
});
}

const UserService = {
    getAllUsers,
    getUser
}

export default UserService;
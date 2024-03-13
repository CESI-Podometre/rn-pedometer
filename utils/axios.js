import axios from "axios";
import {useUserContext} from "context/UserContext";

export default axios.create({
    baseURL: "https://www.storymakerapi.fr/api/v1/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + useUserContext().userToken
    }
});
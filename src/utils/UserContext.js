import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Test Name",
        email: "testname@gmail.com"
    }
});

UserContext.displayName="UserContext";
export default UserContext;
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "admin",
    email: "admin@gmail.com",
  },
});

export default UserContext;

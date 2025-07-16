import LibraryApplicationBackend from "./LibraryApplicationBackend";

export const loginUser = async ({email, password}) =>{
    const{data} = await LibraryApplicationBackend.post("/user/login", {
        email,
        password,
    });
    return data;
};

export const signUpUser = async (userData) => {
  const { data } = await LibraryApplicationBackend.post(
    "/user/signup",
    userData,
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }
  );
  return data;
};

export const logoutUser = async () => {
    const response = await LibraryApplicationBackend.get("/user/logout");
    return response;
}

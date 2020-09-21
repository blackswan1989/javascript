//global
export const home = (req, res) => res.send("Home"); //home controller

export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

//user
export const confirmAccount = (req, res) => res.send("Confirm Account");

//cures
export const courses = (req, res) => res.send("courses");
export const coursesNew = (req, res) => res.send("courses New");
export const coursesMine = (req, res) => res.send("courses Mine");

//api
export const api = (req, res) => res.send("API");
export const documentaion = (req, res) => res.send("documentaion");

//api-version
export const v1 = (req, res) => res.send("V1");
export const buy = (req, res) => res.send("buy");
export const refund = (req, res) => res.send("refund");
export const v2 = (req, res) => res.send("V1");
export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";

// Users
const CONFIRM_ACCOUNT = "/confirm-account";

// courses
const COURSES = "/courses";
const COURSES_NEW = "/new";
const COURSES_MINE = "/mine";

//api
const API = "/api";
const DOCUMENTAION = "/documentaion";

//api-version
const V1 = "/v1";
const BUY = "/v1/buy";
const REFUND = "/v1/refund";
const V2 = "/v2";
const REMOVE = "/v2/remove";
const EDIT = "/v2/edit";

const routes = {
  //global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  //users
  confirmAccount: CONFIRM_ACCOUNT,
  //courses
  courses: COURSES,
  coursesNew: COURSES_NEW,
  coursesMine: COURSES_MINE,
  //api
  api: API,
  documentaion: DOCUMENTAION,
  //api-version
  v1: V1,
  buy: BUY,
  refund: REFUND,
  v2: V2,
  remove: REMOVE,
  edit: EDIT,
};

export default routes;

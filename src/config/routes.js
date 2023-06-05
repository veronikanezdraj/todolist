import LocalStorage from "../pages/localStorage/localStorage";
import Apishka from "../pages/apishka/apishka";
const pathObject = {
  local_storage: "local_storage",
  apishka: "apishka",
};

export const routes = [
  {
    path: `/${pathObject.local_storage}`,
    element: <LocalStorage />,
    name: pathObject.local_storage,
  },
  {
    path: `/${pathObject.apishka}`,
    element: <Apishka />,
    name: pathObject.apishka,
  },
];

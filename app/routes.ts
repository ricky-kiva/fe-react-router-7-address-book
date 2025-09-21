import { index, route, type RouteConfig } from "@react-router/dev/routes";

const ROUTES_DIR = "routes"; 

export default [
  index(`${ROUTES_DIR}/home.tsx`),
  route("contacts/:contactId", `${ROUTES_DIR}/contact.tsx`)
] satisfies RouteConfig;

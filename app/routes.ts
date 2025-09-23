import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

const ROUTES_DIR = "routes"; 
const LAYOUTS_DIR = "layouts";

export default [
  layout(`${LAYOUTS_DIR}/sidebar.tsx`, [
    index(`${ROUTES_DIR}/home.tsx`),
    route("contacts/:contactId", `${ROUTES_DIR}/contact.tsx`),
    route("contacts/:contactId/edit", `${ROUTES_DIR}/edit-contact.tsx`),
    route("contacts/:contactId/destroy", `${ROUTES_DIR}/destroy-contact.tsx`)
  ]),
  route("about", `${ROUTES_DIR}/about.tsx`)
] satisfies RouteConfig;

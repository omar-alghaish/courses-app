import express from "express";
import { isAuthenticated } from "../middlewares/auth";
import { authorizeRoles } from "../controllers/user.controller";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRouter.post(
  "/get-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  getLayoutByType
);

export default layoutRouter;

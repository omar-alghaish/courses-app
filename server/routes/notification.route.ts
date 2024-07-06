import express from "express";
import { authorizeRoles } from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);


notificationRoute.put(
    "/update-notification/:id",
    isAuthenticated,
    authorizeRoles("admin"),
    updateNotification
  );


export default notificationRoute
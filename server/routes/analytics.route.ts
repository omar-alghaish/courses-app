import express from "express";
import { isAuthenticated } from "../middlewares/auth";
import { authorizeRoles } from "../controllers/user.controller";
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";

const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-users-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUserAnalytics
);

analyticsRouter.get(
    "/get-courses-analytics",
    isAuthenticated,
    authorizeRoles("admin"),
    getCoursesAnalytics
  );

  analyticsRouter.get(
    "/get-orders-analytics",
    isAuthenticated,
    authorizeRoles("admin"),
    getOrderAnalytics
  );


export default analyticsRouter
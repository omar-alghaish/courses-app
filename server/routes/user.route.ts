import express from "express";
import { registrationUser, activateUser, loginUser, logoutUser, updateAccessToken, getUserInfo, socialAuth, updateUserInfo, updatePassword, updateProfilePicture } from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.post('/resgistration', registrationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout',isAuthenticated, logoutUser);
userRouter.get('/refreshtoken', updateAccessToken)
userRouter.get('/me', isAuthenticated, getUserInfo)
userRouter.post('/social-auth', socialAuth)
userRouter.put('/update-user-info', isAuthenticated, updateUserInfo)
userRouter.put('/update-user-password', isAuthenticated, updatePassword)
userRouter.put('/update-user-avatar', isAuthenticated, updateProfilePicture)









export default  userRouter;
import express from "express";
import UserController from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getList);
UserRouter.get("/:id", UserController.getById);
UserRouter.post("/", UserController.add);
UserRouter.put("/:id", UserController.update);
UserRouter.delete("/:id", UserController.delete);

export default UserRouter;
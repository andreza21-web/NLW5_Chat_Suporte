import { Router } from "express";
import { MessagesContoller } from "./controllers/MessagesController";
import { SettingsController} from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const userController = new UsersController();
const messagesController = new MessagesContoller();


routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.post("/settings/:username", settingsController.update);

routes.post("/users", userController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
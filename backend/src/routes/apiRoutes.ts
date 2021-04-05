import { Router } from "express";

import { NotificationController } from "../controllers/NotificationsController";
import { ProtocolsController } from "../controllers/ProtocolsController";
import { StrategiesController } from "../controllers/StrategiesController";
import { UsersController } from "../controllers/UsersController";

const apiRoutes = Router();

apiRoutes
    .route("/notifications")
    .get(NotificationController.getNotifications)
    .post(NotificationController.createNotification)
    .put(NotificationController.updateNotification)
    .delete(NotificationController.deleteNotification);

apiRoutes
    .route("/strategies")
    .get(StrategiesController.getStrategies)
    .post(StrategiesController.createStrategies)
    .put(StrategiesController.updateStrategies)
    .delete(StrategiesController.deleteStrategies);

apiRoutes
    .route("/users")
    .get(UsersController.getUsers)
    .post(UsersController.createUser);
apiRoutes
    .route("/users/settings")
    .get(UsersController.getUserSettings)
    .put(UsersController.updateUserSettings);

apiRoutes
    .route("/users/:id")
    .get(UsersController.getUsersById)
    .put(UsersController.updateUser)
    .delete(UsersController.deleteUser);

apiRoutes
    .route("/protocols")
    .get(ProtocolsController.getProtocols)
    .post(ProtocolsController.createProtocols);

apiRoutes
    .route("/categories")
    .get(ProtocolsController.getProtocolCategories)
    .post(ProtocolsController.createCategory);

apiRoutes
    .route("/categories/:categoryId")
    .get(ProtocolsController.getProtocolByCategoryId)
    .put(ProtocolsController.updateCategory)
    .delete(ProtocolsController.deleteCategory)

apiRoutes
    .route("/categories/:categoryid/protocols/:protocolid")
    .put(ProtocolsController.addProtocolToCategory)
    .delete(ProtocolsController.deleteProtocolFromCat);

apiRoutes
    .route("/protocols/:id")
    .get(ProtocolsController.getProtocols)
    .delete(ProtocolsController.deleteProtocols)
    .put(ProtocolsController.updateProtocols);

apiRoutes.post("/protocols/:id/actions", ProtocolsController.addAction);
apiRoutes.put(
    "/protocols/:id/actions/:actionid",
    ProtocolsController.updateAction
);
apiRoutes.delete(
    "/protocols/:id/actions/:actionid",
    ProtocolsController.deleteAction
);

apiRoutes
    .route("/protocols/:id/categories")
    .put(ProtocolsController.addProtocolToCategories);

export { apiRoutes };

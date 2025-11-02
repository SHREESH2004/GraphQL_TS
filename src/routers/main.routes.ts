import { Router, Request, Response, NextFunction } from "express";
import { getMainController } from "../controller/main.controller.js";
import { body, validationResult } from "express-validator";

const router: Router = Router();

router.post(
  "/add",
  [
    body("username")
      .isString()
      .isAlpha()
      .withMessage("Username must be a string")
      .notEmpty()
      .withMessage("Username is required")
      .custom((value) => {
        if (!isNaN(value)) {
          throw new Error("Username cannot be a number");
        }
        return true;
      })
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  getMainController
);

export default router;

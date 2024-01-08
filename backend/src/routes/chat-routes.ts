import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { generateChatCompletion } from "../controllers/chat-controller.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";

//Protected API only authenticated authorized users can use it.
const chatRoutes = Router();
chatRoutes.post(
  '/new', 
  validate(chatCompletionValidator), 
  verifyToken, 
  generateChatCompletion
);

export default chatRoutes;
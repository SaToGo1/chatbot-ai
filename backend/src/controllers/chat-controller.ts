import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { openAIClient } from "../config/openai-config.js";
import OpenAI from 'openai';

export async function generateChatCompletion(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if(!user) return res.status(401).json({ message: 'User not registered or token malfunctioned' });

    // grab chats of user
    const chats = user.chats.map(({ role, content }) => ({ role, content })) as OpenAI.Chat.ChatCompletionMessageParam[];

    chats.push({ content: message, role: 'user' });
    user.chats.push({ content: message, role: 'user' });

    // get response
    const chatResponse = await openAIClient.chat.completions.create({ 
      model: 'gpt-3.5-turbo', 
      messages: chats, 
    })
    user.chats.push(chatResponse.choices[0].message)
    await user.save();
    return res.status(200).json({ chats: user.chats })

  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
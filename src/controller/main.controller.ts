import type { Request, Response } from "express";


export const getMainController = (req: Request, res: Response) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  const users: string[] = [];
  users.push(username);

  res.json({ message: "Hello User", data: users });
};

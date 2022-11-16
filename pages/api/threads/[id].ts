/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const threadId = req.query.id as string;
  if (req.method === "GET") {
    try {
      const threads = await prisma.thread.findUnique({
        include: {
          author: true,
          posts: {
            include: {
              author: true,
            },
          },
        },
        where: {
          id: threadId,
        },
      });
      if (threads) {
        return res.status(200).json(threads);
      }
    } catch (error) {
      console.log(error);

      return res.status(422).json(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      const threads = await prisma.thread.delete({
        where: {
          id: threadId,
        },
      });
      if (threads) {
        return res.status(200).json(threads);
      }
    } catch (error) {
      console.log(error);

      return res.status(422).json(error);
    }
  }

  res.end();
};

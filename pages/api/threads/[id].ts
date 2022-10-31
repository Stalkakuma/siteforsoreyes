/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const threadId = req.query.id as string;

    try {
      const threads = await prisma.thread.findUnique({
        include: {
          author: true,
          posts: true,
        },
        where: {
          id: threadId,
        },
      });

      return res.status(200).json(threads);
    } catch (error) {
      console.log(error);

      return res.status(422).json(error);
    }
  }

  res.end();
};

/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const thread = await prisma.thread.create({
        data: JSON.parse(body),
      });

      return res.status(200).json(thread);
    } catch (error) {
      return res.status(422).json(error);
    }
  } else if (req.method === "GET") {
    try {
      const threads = await prisma.thread.findMany({
        include: {
          posts: true,
          author: true,
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });

      return res.status(200).json(threads);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};

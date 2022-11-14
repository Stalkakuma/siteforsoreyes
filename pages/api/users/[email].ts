/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const posts = await prisma.user.findUnique({
        where: {
          email: req.query.email as string,
        },
        include: {
          posts: true,
        },
      });

      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);

      return res.status(422).json(error);
    }
  }

  res.end();
};

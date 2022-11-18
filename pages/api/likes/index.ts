/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const likes = await prisma.likes.create({
        data: JSON.parse(body),
      });

      return res.status(200).json(likes);
    } catch (error) {
      return res.status(422).json(error);
    }
  } else if (req.method === "GET") {
    try {
      const likes = await prisma.likes.findMany();

      return res.status(200).json(likes);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};

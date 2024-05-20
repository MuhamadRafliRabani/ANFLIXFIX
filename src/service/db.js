import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getCollecUser = async (user_email) => {
  return await prisma.collection.findMany({
    where: {
      user_email: user_email,
    },
  });
};

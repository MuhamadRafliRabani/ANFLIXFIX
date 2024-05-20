import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function FetchDb(user_email) {
  const email = user_email;
  console.log(email);
  const dataDb = await prisma.collection.findMany({
    where: {
      user_email: email,
    },
  });
  console.log(dataDb);
  const db = dataDb;
  return db;
}

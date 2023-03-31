import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.user.create({
  //     data: {
  //       email: "shamim@gmail.com",
  //       name: "shamim",
  //     },
  //   });
  const result = await prisma.user.findMany();
  console.log(result);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });

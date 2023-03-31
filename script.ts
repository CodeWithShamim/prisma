import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // const result = await prisma.user.create({
  //   data: {
  //     email: "shamim3@gmail.com",
  //     name: "shamim3",
  //   },
  // });

  // const result = await prisma.user.create({
  //   data: {
  //     email: "shamim4@gmail.com",
  //     name: "shamim4",
  //     posts: {
  //       create: {
  //         title: "test title",
  //       },
  //     },
  //   },
  // });
  const result = await prisma.user.findMany({
    where: {
      id: 8,
    },
    include: {
      posts: true,
    },
  });
  console.dir(result, { depth: null })
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

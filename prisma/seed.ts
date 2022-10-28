import { faker } from "@faker-js/faker";
import prisma from "../lib/clients/prisma";

async function main() {
  const listOfNewUsers = [...new Array(5)].map(() => {
    return {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      image: faker.image.image(),
      posts: {
        create: {
          title: faker.lorem.paragraph(),
        },
      },
    };
  });

  for (let data of listOfNewUsers) {
    const user = await prisma.user.create({
      data,
    });

    console.log(user);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

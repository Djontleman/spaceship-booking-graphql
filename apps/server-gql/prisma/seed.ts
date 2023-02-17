import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function seed() {
  await prisma.$connect();

  await prisma.journey.deleteMany({});

  await prisma.journey.create({
    data: {
      origin: "Earth",
      destination: "Mars"
    }
  });
  await prisma.journey.create({
    data: {
      origin: "Mars",
      destination: "Earth"
    }
  });
}

seed()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

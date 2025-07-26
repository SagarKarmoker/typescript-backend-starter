import { prisma } from "./prisma";

export async function seed() {
  // Add your seed data here
  console.log("Seeding database...");
  
  // Example: Create a test user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      hashedPassword: "123456"
    }
  });
  
  console.log("Seeding completed!");
}

// Run seed if this file is executed directly
if (require.main === module) {
  seed()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}


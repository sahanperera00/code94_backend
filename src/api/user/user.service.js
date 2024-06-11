import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(userData) {
  const { email, password, name } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
}

export async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
  });
}

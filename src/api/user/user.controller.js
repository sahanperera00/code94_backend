import { createUser, findUserByEmail } from './user.service';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function registerUser(req, res, next) {
  const { email, password, name } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const newUser = await createUser({ email, password, name });
    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const payload = {
      userId: user.id,
      email: user.email,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '60m',
    });

    res.status(200).json({ token, user: payload });
  } catch (error) {
    next(error);
  }
}

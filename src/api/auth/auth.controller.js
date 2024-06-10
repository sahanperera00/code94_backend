import jwt from 'jsonwebtoken';

const getToken = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const payload = { username: username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30m',
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export default {
  getToken,
};

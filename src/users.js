let users = [
  {
    id: 1,
    name: "Nurul",
    email: "nurul@gmail.com",
  },
  {
    id: 2,
    name: "Bilkis",
    email: "bilkis@gmail.com",
  },
  {
    id: 3,
    name: "Iqmal",
    email: "iqmal@gmail.com",
  },
];

export const getAll = (req, res) => {
  res.json(users);
};

export const getById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((b) => b.id === userId);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    return res.json(user);
  }
};

export const create = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
};
export const update = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((b) => b.id === userId);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    user.name = req.body.name;
    user.email = req.body.email;
    return res.json(user);
  }
};

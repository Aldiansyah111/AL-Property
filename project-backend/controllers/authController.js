const { readUsers, writeUsers } = require('../utils/fileHandler'); // ✅ path yang benar


function register(req, res) {
    const { username, password } = req.body;
    const users = readUsers();

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    const newUser = { id: Date.now(), username, password };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'Registration successful', user: newUser });
}

function login(req, res) {
    const { username, password } = req.body;
    const users = readUsers();

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
}

module.exports = { register, login };

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors()); // agar frontend bisa akses backend
app.use(express.json()); // pengganti body-parser (lebih modern)

// Routes
app.use('/auth', authRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

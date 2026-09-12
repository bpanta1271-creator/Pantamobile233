const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact form backend
app.post("/api/contact", (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields."
    });
  }

  console.log("New Contact Request:");
  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Your message has been received!"
  });
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API is healthy ✅",
    timestamp: new Date(),
  });
});
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
}
// Export for Vercel
module.exports = app;
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     responses:
 *       200:
 *         description: Welcome String
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *
 */
router.get("/", (req, res) => {
  res.send("Hello welcome from Express Server");
});

module.exports = router;

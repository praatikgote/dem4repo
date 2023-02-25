const express = require('express');
const router = express.Router();

const wallpaperRoutes = require("./wallpaperRoutes");
router.use("/wallpaper", wallpaperRoutes);

const userRoutes = require("./userRoutes");
router.use("/user", userRoutes)

const categoryRoutes = require("./categoryRoutes")
router.use("/category", categoryRoutes)

const searchRoutes = require("./searchRoutes")
router.use("/search", searchRoutes)

const bannerRoutes = require("./bannerRoutes")
router.use("/banner", bannerRoutes)

const tagRoutes = require("./tagRoutes")
router.use("/tag", tagRoutes)

const adminRoutes = require("./adminAuthRoute")
router.use("/admin", adminRoutes)

module.exports = router
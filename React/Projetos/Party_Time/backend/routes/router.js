const router = require("express").Router();

// Service Router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;

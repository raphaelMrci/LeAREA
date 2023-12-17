const authControllers = require("../controllers/auth.controller.js");
const { auth } = require("../middlewares/auth.middleware.js");

// preHandlers are like middleware !
module.exports = function (fastify, opts, done) {
    fastify.post("/register", authControllers.register);
    fastify.post("/login", authControllers.login);
    fastify.get("/me", { preHandler: [auth] }, authControllers.me);
    done();
};

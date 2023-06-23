const indexR = require("./index");
const usersR = require("./users");
const placesR = require("./places");
const categoriesR = require("./categories");
const tagsR = require("./tags");
const postsR = require("./posts");
const typesR = require("./types");
const commentsR = require("./comments");




exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/places", placesR);
  app.use("/categories", categoriesR);
  app.use("/tags", tagsR);
  app.use("/posts", postsR);
  app.use("/types", typesR);
  app.use("/comments", commentsR);


  app.use("/*", (req, res) => {
    res.status(404).json({ msg: "Endpoint/page not found, 404" })
  })
}
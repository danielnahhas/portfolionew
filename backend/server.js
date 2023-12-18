const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");
const { users, user_experiences, user_projects } = require("./models");

app.use(
  cors({
    origin: "*",
  })
);

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log(`Server is listening at http://localhost:${3000}`);
  });
});

app.get("/portfolio", async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      console.log("there is no Id");
      res.status(400).json();
    } else {
      console.log("id was found", id);
      const user = await users.findByPk(id);
      console.log("Fetched user:", user);
      const experiences = await user_experiences.findAll({
        where: {
          user_id: id,
        },
      });
      console.log("Fetched experiences:", experiences);

      const projects = await user_projects.findAll({
        where: {
          user_id: id,
        },
      });
      console.log("Fetched projects:", projects);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log("true", user);

      return res
        .status(200)
        .json({ user: user, experiences: experiences, projects: projects });
      // const exp = await user_experiences.findByPk(id);
    }
  } catch (error) {
    console.log(error);
  }
});

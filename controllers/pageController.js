module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/exercise", (req, res) => {
    res.render("exercise");
  });
  
  app.get("/stats", (req, res) => {
    res.render("stats");
  });
};

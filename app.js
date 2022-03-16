const express = require("express");

const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  const data = {
    title: "Michael Jackson",
    paragraph:
      "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded individual music artist in history.",
  }};

  // app.get('/Pictures', (request, response, next) =>
  //   response.sendFile(__dirname + '/views/otherpage.html')
  // )

  app.get("/about", (request, response, next) => {
    const data = {
        title: "Facts",
        paragraph:
          "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and danc"
      };

  response.render("template", data);
});

app.listen(3001, () => console.log("My first app listening on port 3001!"));

app.get("/works", (request, response, next) => {
  const data = {
    title: "jsp",
    author: "idk",
  };

  response.render("template", data);
});

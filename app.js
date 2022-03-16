const express = require("express");

const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  const data = {
    title: "Michael Jackson, the King Of Pop",
    paragraph:
      "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded individual music artist in history.",
  };
});

app.get("/about", (request, response, next) => {
  const data = {
    title: "Facts about Michael Jackson:",
    paragraph:
      "Jackson is one of the best-selling music artists of all time, with estimated sales of over 400 million records worldwide.[nb 2] He had 13 Billboard Hot 100 number-one singles (more than any other male artist in the Hot 100 era) and was the first artist to have a top-ten single in the Billboard Hot 100 in five different decades. His honors include 15 Grammy Awards, 6 Brit Awards, a Golden Globe Award, and 39 Guinness World Records, including the 'Most Successful Entertainer of All Time'. Jackson's inductions include the Rock and Roll Hall of Fame (twice), the Vocal Group Hall of Fame, the Songwriters Hall of Fame, the Dance Hall of Fame (the only recording artist to be inducted), and the Rhythm and Blues Music Hall of Fame. In 2016, his estate earned $825 million, the highest yearly amount for a celebrity ever recorded by Forbes.",
  };

  response.render("template", data);
});

app.listen(3001, () => console.log("My first app listening on port 3001!"));

app.get("/works", (request, response, next) => {
  const data = {
    title: "Career",
    paragraph:
      "The eighth child of the Jackson family, Jackson made his professional debut in 1964 with his elder brothers Jackie, Tito, Jermaine, and Marlon as a member of the Jackson 5 (later known as the Jacksons). Jackson began his solo career in 1971 while at Motown Records. He became a solo star with his 1979 album Off the Wall. His music videos, including those for 'Beat It', 'Billie Jean', and 'Thriller' from his 1982 album Thriller, are credited with breaking racial barriers and transforming the medium into an artform and promotional tool. He helped propel the success of MTV and continued to innovate with videos for the albums Bad (1987), Dangerous (1991), and HIStory: Past, Present and Future, Book I (1995). Thriller became the best-selling album of all time, while Bad was the first album to produce five U.S. Billboard Hot 100 number-one singles.[nb 1]",
  };

  response.render("template", data);
});

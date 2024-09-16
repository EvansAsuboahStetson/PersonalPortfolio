import pro1 from "../../assets/Workday.jpeg";
import mongoDb from "../../assets/MongoDb.jpeg";
import amazon from "../../assets/amazon.jpg";
import asu from "../../assets/asu.png";
import Presentation from "../../assets/Presentation.jpg";
import speech from "../../assets/speech.png";
import chimeTeam from "../../assets/chimeTeam.png"

const ExperiencesData = [
  {
    imgsrc: amazon,
    title: "Amazon SWE Internship",
    text: "Worked on the Amazon Alexa Music Multimodal Experience team as a Software Engineer Intern.",
    extraText:
      "The summers of 2023, I landed a full-time internship with Amazon as a software engineer intern on the Alexa  Music Multimodal Experience team. Over the three months, I had the incredible opportunity to contribute to innvoative projects that hopefully will be shipped sometime soon \n. I immensed myself in a dynamic and fast paced environment, gaining hands on experience with cutting edge technologies and industry best practices. The internship provided me with invaluable insights into scalable software development agile methologies and the significance of teamwork in delivering succeful projects",
    date: "2023-05-07"
  },
  {
    imgsrc: chimeTeam,
    title: "Amazon Chime SDK Team",
    text: "I worked on automating ticket resolution processes for Amazon Chime SDK using tools like Tickety and EVA. My contributions focused on integrating logs and performance metrics to streamline workflows for recurring issues, such as service limit increases, latency problems, and dead-letter queue tickets.",
    extraText:"I developed plugins for ChimeSDKTickety to automate the retrieval of logs and other operational data, significantly reducing the time engineers spent on resolving tickets during on-call. My work saved over 49 hours of engineering time in six months by improving automation and reducing manual efforts",
    date: "2024-09-12"
  },
  {
    imgsrc: pro1,
    title: "SITE FullStack Internship",
    text: "Out of 2500 applicants, I was chosen as one of the 50 cohort members for the Codepath Internship with Workday.",
    extraText:
      "My professional life has benefited greatly from this internship because it taught me a lot about working in a team environment. I had a mentor from Workday who worked with me one-on-one once a week to keep me on track with my projects and professional development. I have grown as an individual understanding how to work in a professional setting and also collaborate with other students. Over the course of 10 weeks, I learn backend and frontend development using React js, PostgreSQL, Html, Css, Node.js, and Express. Aside from learning, I made some amazing connections and friendships online.",
    date: '2022-05-07'
  },
  {
    imgsrc: mongoDb,
    title: "MongoDB DEI Scholarship 2022",
    text: "I was given the chance to be chosen as a MongoDB World Scholarship recipient.",
    extraText:
      "I traveled to New York for the three-day program, where I had the chance to meet the other 11 scholarship recipients, entrepreneurs from various companies, and MongoDB employees. During the community cafe, I was given the opportunity to talk about my life in tech and how I got here.",
    date: "2022-05-12"
  },
  {
    imgsrc: asu,
    title: "African Student Union ",
    text: "From Vision to Empowerment: A Transformative Journey Leading Africa's Youth. As President of the African Students Union, I seek to  work tirelessly to foster unity, provide educational opportunities, and empower the next generation of African leaders, paving the way for a brighter and more prosperous continent.",
    extraText:
      "The African Students Union at Stetson University was revived with a clear purpose- to address the unique challenges faced by African students studying at Stetson University and also to create a sense of community for the students. I personally experienced the difficulties of adapting to a new environment, culture and education system. I realized that many African students encountered similar hurdles. I knew there had to be a change and It had to start with me. In light of these. I envisioned a community where African students could come together to share their experiences, learn from each other and also have fun",
    date: "2024-05-12"
  },
  {
    imgsrc: Presentation,
    title: "Maris Price Award ",
    text: "Won the Maris Price Award for my presentation on revamping the website of black home schoolers of central Florida.",
    extraText:
      "I was completely surprised to learn that I had been selected for the Maris prize award. As someone who regularly undertakes projects, I always strive to find ways to apply my classroom knowledge to the needs of my community. In my view, many of the challenges that face humanity can be addressed, at least in part, by using technology. Therefore, when my supervisor informed me that donations were  needed to secure new spaces for local organizations' activities, I immediately began exploring technological solutions. I asked myself, How can I contribute to this?",
    date: "2023-03-12"
  },
  {
    imgsrc: speech,
    title: "Bonner Speech",
    text: "In this heartfelt speech, I reflect on my transformative journey from Kumasi, Ghana, to pursuing computer science in the United States. Initially aiming for medical school, I found a new path in computer science, leading to significant personal growth and community involvement.",
    videoUrl:"9Z4vA4zI0xY", // YouTube video ID,
    date: "2024-05-12"
  },

];
export default ExperiencesData;

import pro1 from "../../assets/alumni.gif"
import facade from "../../assets/facade.png"
import Terralearn from "../../assets/terraLearn.png"
const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Alumni Connect",
        text: "Hey Evans, Looks like your free DashPass Student membership is paying off! Be sure to check out all the ways you can save on delivery with DashPass, thanks to Chegg.",
        view: "/github.com",
        extraText: "I led a team of four students in developing a MERN stack-based web application that facilitates connections between students and alumni. The project included a chat feature powered by Twilio API. Additionally, I gained valuable experience in product development and attended industry panels with renowned professionals",
        second_button_title: "Source"
    },
    {
        imgsrc: facade,
        title: "Kinetic Facade Prototype",
        text: "During my professor's final year of Ph.D., I was chosen to assist him during the summer with his Ph.D. paper. The research focused on a kinetic facade, exploring how sunlight affects people's moods. I contributed by coding the moving components of the facade and collaborating with him to assemble all the parts successfully.",
        view: "https://youtu.be/nj48IkEjLQc",
        second_button_title: "Source"
    },
    {
        imgsrc: Terralearn,
        title: "Terra Learn",
        text: "Worked with a team of junior engineers to develop a game called Terralearn where in which players are dropped somewhere in the world in a street view panorama and it is the players mission is to find clues and guess their location on the world map.",
        view: "https://youtu.be/ozIahxawHOI",
        second_button_title: "Source"
    },
];
export default ProjectCardData;

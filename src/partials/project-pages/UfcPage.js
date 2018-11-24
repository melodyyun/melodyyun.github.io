import React from "react";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";
import Border from "../Border";

class UfcPage extends React.Component {
  render() {
    const projectInfo = {
      name: "Khabib vs. McGregor",
      quote: "The world is watching",
      textblock1: [
        "On October 6th, 2018, millions of people around the world huddled around their TV’s, anticipating the biggest UFC match of all time between two of the fiercest rivals to ever enter The Octagon - Khabib Nurmagomedov and Conor McGregor. Some would watch at their favourite local pub and others would round up the gang on Saturday night at home.",
        "I had the opportunity to spearhead a multi-level marketing campaign at Bell Canada to showcase this fight to our millions of customers. Working alongside numerous cross-functional teams from product to content to marketing communications, we made sure our targeted communications hit over 1 million Canadian households and our call centers were equipped to deal with the info needed to guide customers."
      ],
      textblock2: [
        "The project required communication and strategy with key internal and external to understand the story behind Khabib and Conor. We showcased the excitement leading up the event with social messaging via Facebook, Twitter and Instagram stories and then dropped an email to  customers before the event. Our social focused on positioning the fight as the most exciting of the year and available on our leading platform service.",
        "We executed flawlessly and saw the biggest numbers for a UFC event in 2018, and the second biggest of all time, only behind UFC 217: Bisping vs. St-Pierre, our hometown hero."
      ],
      imgMain:
        "https://img.maximummedia.ie/sportsjoe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtc3BvcnRzam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzA4XFxcLzE1MDkzNTE3XFxcL1VGQy0yMjktdGlja2V0LXByaWNlcy5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuc3BvcnRzam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvc3BvcnRzam9lXFxcL25vLWltYWdlLnBuZz92PTVcIn0iLCJoYXNoIjoiNWUyYTMxMmJkOWM3YWM5MGE3NjM4YTZlZmI0ZmQ3NWI3ZDBkODExNiJ9/ufc-229-ticket-prices.png",
      imgMainAlt: "Khabib vs McGregor faceoff",
      nextLink: "flipgive",
      nextProject: "FlipGive"
    };
    return (
      <ProjectContainer id={"ufc-page"}>
        <Template project={projectInfo} />
        <Border />
      </ProjectContainer>
    );
  }
}

export default UfcPage;

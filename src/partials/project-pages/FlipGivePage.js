import React from "react";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";
import Border from "../Border";

class FlipGivePage extends React.Component {
  render() {
    const projectInfo = {
      name: "FlipGive",
      quote: "Team Funding Made Easy",
      textblock1: [
        "The difficulty of providing access to sports for their children is an issue many parents know all too well. Every day, millions of kids are unable to participate in their favourite sports due to the skyrocketing costs of participation. In the US, athletic participation for kids aged 6 through 12 is down almost 8% over the last decade, according to SFIA and Aspen data. Children from low-income backgrounds are half as likely to play team sports than children from households earning a least $100,000.",
        "At FlipGive, we saw an opportunity to marry the need and the trend together in the easiest way to raise money for kids - shop online for the things you already buy and give back to the causes you care about.",
      ],
      textblock2: [
        "As the Partnership Marketing Manager, I had the amazing role of partnering with large scale sports organizations like USA Football to create activation marketing plans and custom sites for their athletes to raise money through. Our key marketing initiatives came through digital (email, SEO, SEM, social media) and in person activation. At conferences attended by hundreds of sports commissioners, we were able to spread the news to show that raising money can be easier and much more scalable than setting up a bake sale.",
        "Working with key retail partners like UnderArmour and Nike, I was responsible for driving value through partner marketing campaigns to our base through seasonal promotions and events to drive sales. Driving users to our site was extremely rewarding because at the end of the day, the message was that money was being left on the table and raising money could be easier to provide access to sports to those who cannot afford it.",
      ],
      imgMain:
        "https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2253a1d8c16428c76d5706083a8cb1ab&auto=format&fit=crop&w=1050&q=80",
      imgMainAlt: "Child playing",
      nextLink: "product",
      nextProject: "Product"
    };
    return (
      <ProjectContainer id={"ufc-page"}>
        <Template project={projectInfo} />
        <Border />
      </ProjectContainer>
    );
  }
}

export default FlipGivePage;

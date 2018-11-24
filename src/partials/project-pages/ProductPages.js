import React from "react";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";
import Border from "../Border";

class ProductPage extends React.Component {
  render() {
    const projectInfo = {
      name: "Product - On Demand Movies",
      quote: "I'm going to make you an offer you can't refuse.",
      textblock1: [
        "Movies inspire us, delight us, make us cry, and make us dream. With all of our hectic schedules these days, people are turning to the comfort of their homes more and more than the big screen to catch the films they love.",
        "My most challenging, rewarding role has been leading both targeted and mass level marketing campaigns at Bell for On Demand movies. Bringing stunning quality films to millions of Canadians and promoting them digitally through social media, email and on screen platforms was something I could definitely get behind. It was a role where I was able to connect my passion for entertainment and digital marketing while executing continuous new campaigns to excite our customers."
      ],
      textblock2: [
        "In order to drive sales, it was paramount that you understood your customer, your marketing channels, seasonality in your campaigns and promotions and lastly, understood the competitive market. Leading our On Demand storefront merchandising strategy was another key responsibility that helped develop my product management knowledge. Through the exciting enhancements created like the Santa Tracker for Fibe TV customers, we were able to delight customers over the holidays with a Free Movie, brought right to your storefront.",
        "When a TV was left inactive, brilliant screensavers would showcase the latest and greatest films available. When there was a new installment in a franchise coming out in theatres, a bundle of the previous could be available to customers for a discounted price. The marketing possibilities were endless and it allowed us to bring the love of the big screen home on the best platform to watch."
      ],
    
      imgMain:
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=672765fc591fb6401d969b8c2e03517b&auto=format&fit=crop&w=1190&q=80",
      imgMainAlt: "Television with Bell screensaver featuring The Avengers: Infinity War",
      nextLink: "khabib-vs-mcgregor",
      nextProject: "UFC 229"
    };
    return (
      <ProjectContainer id={"ufc-page"}>
        <Template project={projectInfo} />
        <Border />
      </ProjectContainer>
    );
  }
}

export default ProductPage;

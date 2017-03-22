// Import React
import React from "react";
// Import Spectacle Core tags
import {BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, List, ListItem, Slide, Text} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";

import {ResizableBox} from "react-resizable";
import {applyContainerQuery} from "react-container-query";
import classnames from "classnames";

// Require CSS
require("normalize.css");
require("../assets/style.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cry: require("../assets/cry.jpg"),
  feature: require("../assets/feature.jpg"),
  profil: require("../assets/profil.jpg"),
  responsive: require("../assets/responsive.png"),
  danger: require("../assets/danger.jpg"),
  everything: require("../assets/everything.jpg"),
  grampy: require("../assets/grampy.jpg"),
  google: require("../assets/google.gif"),
  magic: require("../assets/magic.gif"),
  boring: require("../assets/boring.jpg"),
  before: require("../assets/before.png"),
  between: require("../assets/between.png"),
  after: require("../assets/after.png"),
  secret: require("../assets/secret.jpg"),
  toolbar: require("../assets/toolbar.png"),
  angry: require("../assets/angry.jpg"),
  scared: require("../assets/scared.jpg"),
  twitter: require("../assets/twitter.png"),
  slack: require("../assets/slack.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#092c62",
  secondary: "#0aff00",
  tertiary: "#fff",
  dark: "#000",
  quartenary: "#0aff00",
  link: "#fff"
}, {
  primary: "Sofia Pro Light",
  secondary: "Sofia Pro Light",
  tertiary: "Sofia Pro Light"
});

const Demo = applyContainerQuery(class extends React.Component {
  render() {
    return (
      <div>
        <div className={classnames("demo__container", "demo__container--desktop", this.props.containerQuery)}>
          <div className="demo__logo"/>
          <div className="demo__intro">
            <div className="demo__line demo__line-1"/>
            <div className="demo__line demo__line-2"/>
            <div className="demo__line demo__line-3"/>
          </div>
          <ol className="demo__list">
            <li className="demo__item demo__item--feature">
              <div className="demo__item-pic">image</div>
              <div className="demo__item-content" />
            </li>
            <li className="demo__item">
              <div className="demo__item-pic">image</div>
              <div className="demo__item-content"/>
            </li>
            <li className="demo__item">
              <div className="demo__item-pic">image</div>
              <div className="demo__item-content"/>
            </li>
            <li className="demo__item">
              <div className="demo__item-pic">image</div>
              <div className="demo__item-content"/>
            </li>
            <li className="demo__item">
              <div className="demo__item-pic">image</div>
              <div className="demo__item-content"/>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}, {
  middle: {
    minWidth: 501,
    maxWidth: 599
  },
  wide: {
    minWidth: 600
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            { headline('Responsive-Components') }
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} bold>
            with ReactJS
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.profil.replace("/", "")}/>
            </Fill>
            <Fill>
              <Heading padding={5} textAlign="left" size={5} textColor="secondary" caps>David Badura</Heading>

              <Text textAlign="left" textColor="tertiary" textSize={32} padding={5}>Software Developer</Text>
              <Text textAlign="left" textColor="tertiary" textSize={32} padding={5}>@ i22 Digitalagentur GmbH</Text>
              <Text textAlign="left" textColor="tertiary" textSize={32} padding={5}>Loves ReactJS, Symfony &
                Simplicity</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>What is ReactJS?</Heading>
        </Slide>

        <Slide bgImage={images.boring} bgDarken={0.6}>
          <Heading size={2} textColor="tertiary" caps>Skip please</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>What we want?</Heading>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps>1) Encapsulated Components</Heading>
          <Image height={300} src={images.everything}/>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps>2) Responsive Layouts</Heading>
          <Image height={300} src={images.responsive}/>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>We want more</Heading>
          <List>
            <ListItem>Performance</ListItem>
            <ListItem>Simplicity</ListItem>
            <ListItem>Pizza</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>But Focus on</Heading>
          <Layout>
            <Fill>
              <Image height={200} src={images.everything}/>
            </Fill>
            <Fill>
              <Image height={200} src={images.responsive}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>What we have?</Heading>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>Media Query</Heading>
          <CodePane lang="css" source={require('../assets/code/css_1.example')}/>
        </Slide>

        <Slide>
          <Image src={images.before} height={400}/>
        </Slide>

        <Slide>
          <Image src={images.between} height={400}/>
        </Slide>

        <Slide>
          <Image src={images.after} height={400}/>
        </Slide>

        <Slide bgImage={images.grampy} bgDarken={0.7}>
          <Heading size={2} textColor="tertiary" caps>Encapsulated?</Heading>
          <Text textColor="tertiary">
            not really
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>What we really want?</Heading>
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary" caps>Encapsulated Responsive Components</Heading>
          <Image height={300} src={images.google}/>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>Container Query</Heading>
          <CodePane lang="css" source={require('../assets/code/css_2.example')}/>
        </Slide>


        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>Container Query</Heading>

          <BlockQuote>
            <Text fontSize={24} textColor="tertiary">
              Container queries allow an author to control styling based on the size of a containing element rather than
              the size of the user’s viewport.
            </Text>
            <Cite>Container Queries - Editor’s Draft, 5 June 2015</Cite>
          </BlockQuote>
        </Slide>


        <Slide bgImage={images.cry} bgDarken={0.4}>
          <Heading size={5} textColor="tertiary" caps>No Support in Any Browser</Heading>
        </Slide>

        <Slide>
          <ResizableBox width={920} height={620} axis="x">
            <Demo />
          </ResizableBox>
        </Slide>

        <Slide bgImage={images.magic} bgDarken={0.4}>
          <Heading size={5} textColor="tertiary" caps>Magic!</Heading>
        </Slide>

        <Slide>
          <CodePane lang="javascript" source={require('../assets/code/demo.example')}/>
        </Slide>

        <Slide bgImage={images.secret} bgDarken={0.6}>
          <Heading size={5} textColor="tertiary" caps>How?</Heading>

          <Text textColor="tertiary">
            Never ask questions you don't want to known the answers to
          </Text>
        </Slide>

        <Slide>
          <CodePane lang="javascript" source={require('../assets/code/demo2.example')}/>
        </Slide>

        <Slide bgImage={images.angry} bgDarken={0.6}>
          <Heading size={5} textColor="tertiary" caps>But How?</Heading>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>react-container-query</Heading>

          <Text fontSize={24} textColor="tertiary">
            Modular responsive component. With dependency on...
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>element-resize-detector</Heading>

          <Text fontSize={24} textColor="tertiary">
            Super-optimized cross-browser resize listener for elements.
          </Text>
        </Slide>

        <Slide bgImage={images.danger} bgDarken={0.8}>
          <Heading size={5} textColor="tertiary" caps>!!! Warning !!!</Heading>
          <Text textColor="tertiary">
            For information on risks and side-effects please read the documentaion and ask your doctor or pharmacist.
          </Text>
        </Slide>

        <Slide>
          <Image src={images.toolbar} width={800}/>
        </Slide>

        <Slide bgImage={images.scared} bgDarken={0.6}>
          <Heading size={5} textColor="tertiary" caps>But it works!</Heading>
          <Text textColor="tertiary">
            And it's super fast!
          </Text>
        </Slide>

        <Slide bgImage={images.feature} bgDarken={0.6}>
          <Heading size={5} textColor="tertiary" caps>This feature is coming soon</Heading>
          <Text textColor="tertiary">
            ... in one or two years ... maybe ...
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>ResizeObserver</Heading>

          <Text fontSize={24} textColor="tertiary">
            ResizeObserver allows you to be notified when an element’s content rectangle has changed its size, and react accordingly.
          </Text>

          <Text fontSize={24} textColor="tertiary" margin={30}>
            (ResizeObserver is in Chrome 54)
          </Text>
        </Slide>

        <Slide>
          <CodePane lang="javascript" source={require('../assets/code/js.example')}/>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>Questions?</Heading>
        </Slide>

        <Slide bgImage={images.twitter} bgDarken={0.7}>
          <Heading size={5} textColor="tertiary">@DavidBadura</Heading>
        </Slide>

        <Slide bgImage={images.slack} bgDarken={0.7}>
          <Heading size={5} textColor="tertiary">#bonn-devs</Heading>
          <Text textColor="tertiary">
            https://slackinvite.me/to/bonn-devs
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary" caps padding={20}>References</Heading>
          <Text textColor="tertiary" textSize={24}>
            http://responsiveimagescg.github.io/container-queries
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://tomhodgins.github.io/element-queries-spec/element-queries.html
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://developers.google.com/web/updates/2016/10/resizeobserver
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://www.sitepoint.com/responsive-web-components
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://github.com/wnr/element-resize-detector
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://github.com/d6u/react-container-query
          </Text>
          <Text textColor="tertiary" textSize={24}>
            https://www.i22.de/
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps padding={20}>{ headline('Thanks!') }</Heading>
        </Slide>


      </Deck>
    );
  }
}

function headline(text) {
  return "<" + text + "/>";
}

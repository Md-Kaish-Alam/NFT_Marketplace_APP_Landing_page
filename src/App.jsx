import React from "react";

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange& earn crypto. Join 25+ million people using ProNef Marketplace..."
        showBtn
        mackupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface MarketPlace"
        description="Experince a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design..."
        mackupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands..."
        mackupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creatve way to showcase the store"
        description="The app contains two screens. The first screen shows the list of all NFTs while the second screen shows the details of a Specific NFT."
        mackupImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with loved by {"  "} <span className="bold">@anonymouskaish</span></p>
      </div>
    </>
  );
};

export default App;

import Image from "next/image";

import classes from "../../styles/pages/hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alejandro.png"
          alt="alejandro"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I am Alejandro Rodarte.</h1>
      <p>I am a fucking failure of a person.</p>
    </section>
  );
};

export default Hero;

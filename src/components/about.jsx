import React from 'react';

const About = () => {
  return (
    <div className="container outer-about">
      <p>
        This website was made with the intention to visualize algorithms that solves a problem.
        <br />
        All the problems or challenges visualized are property of Edabit and not mine.
        <br />
        Check out the challenges{' '}
        <a href="https://edabit.com/challenges" target="_blank">
          Here.
        </a>
        <br />
        <br />
        <br />
        Each problem is visualized in a different way, but they're all aimed at visualizing the pattern/algorithm
        <br />
        used to solve the problem and to basically show you what happens under the hood.
        <br />
        The problems' difficulty level varies between very hard and expert.
      </p>
    </div>
  );
};

export default About;

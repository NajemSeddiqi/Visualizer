import React from 'react';
import AccurateReversal from './../components/challenges/accurateReversal';
import Bookend from './../components/challenges/bookend';
import HasSamePattern from './../components/challenges/hasSamePattern';
import OddOne from './../components/challenges/oddOne';
import PalindromeDescendant from './../components/challenges/palindromeDescendant';
import PopOff from './../components/challenges/popOff';
import ReverseOddOnes from './../components/challenges/reverseOddOnes';
import SameVowelGroup from './../components/challenges/sameVowelGroup';
import SumDigProd from './../components/challenges/sumDigProd';
import TotalPoints from './../components/challenges/totalPoints';
import Truncatable from './../components/challenges/truncatable';
import ValidateCard from './../components/challenges/validateCard';

export function getAll() {
  return [
    <PalindromeDescendant key={6} />,
    <PopOff key={7} />,
    <SumDigProd key={8} />,
    <ReverseOddOnes key={0} />,
    <HasSamePattern key={1} />,
    <TotalPoints key={2} />,
    <Truncatable key={3} />,
    <ValidateCard key={4} />,
    <SameVowelGroup key={5} />,
    <Bookend key={10} />,
    <OddOne key={11} />,
    <AccurateReversal key={9} />,
  ];
}

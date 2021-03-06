import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postAString } from '../../services/challengeService';
import * as SVGLoaders from 'svg-loaders-react';
import Instructions from '../instructions';

const AccurateReversal = () => {
  const data = ['The UPPERCASE/lowercase positions will be kept in the same order as the original string.', 'Spaces will be kept in the same order as well.'];
  const examples = ['UPPER lower ➞ "REWOL reppu"', '1 23 456 ➞ "6 54 321"', 'I WondeR If ThIs iS UseFuL? ➞ "? LufesU Si SiHt fI RedNoWi"'];
  const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange' });
  const [value, setValue] = useState();
  const [input, setInput] = useState();
  const [stages, setStages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const submit = async (val, e) => {
    const data = await postAString('accurateReversal', val.input).then((res) => res.json());
    doMagic(val.input);
    setValue(null);
    setInput(null);
    setTimeout(() => {
      setInput(val.input);
      setValue(data.s);
    }, 1500);
  };

  const doMagic = (val) => {
    const rev = [...val].reverse().join('');
    let spaces = [];
    let upperCases = [];

    for (let i = 0; i < val.length; i++) {
      if (val[i] === ' ') spaces[i] = i;

      if (val[i] === val[i].toUpperCase() && val[i] !== ' ') upperCases[i] = i;
    }

    console.log(rev);
    console.log(spaces);
    console.log(upperCases);
  };
  return (
    <React.Fragment>
      <h1>AccurateReversal</h1>
      <div className="main">
        <div className="left">
          <form className="form-group" onSubmit={handleSubmit(submit)}>
            <div className="label">
              <label htmlFor="input">
                {errors.input ? <span className="text-danger pt-1">This field is required to have atleast 4 characters</span> : 'The string you want reversed'}
              </label>
            </div>
            <div className="input-and-btn-reversal">
              <input
                className="reverse-string-input background-input focus-input"
                type="text"
                name="input"
                aria-invalid={errors.input ? true : false}
                ref={register({ required: true, minLength: 4 })}
              />
              <button className="btn btn-success" type="submit" disabled={!formState.isValid ? true : false}>
                Reverse
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <Instructions data={data} examples={examples} />
        </div>
      </div>
      <div className="above">
        <div className="center">
          <b>{input}</b>
        </div>
      </div>
      <div className="display-area">
        <div className="center">{value !== null ? <b>{value}</b> : <SVGLoaders.Bars className="display-area-loader" />}</div>
      </div>
    </React.Fragment>
  );
};

export default AccurateReversal;

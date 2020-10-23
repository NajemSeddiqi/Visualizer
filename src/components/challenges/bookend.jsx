import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Instructions from './../instructions';

const Bookend = () => {
  const data = [
    'Suppose a pair of identical characters serve as book ends for all characters in between them.',
    'We will return the total number of unique characters (books, so to speak) between all pairs of book ends.',
    'No book characters will be identical to the bookend character.',
    'There will always be an even number of bookends.',
  ];
  const examples = ['&3&3&3& ➞ 1 where book end is &', 'ABBACVABA ➞ 3 where book end is A'];
  const { register, handleSubmit, errors, formState } = useForm({ mode: 'onTouched' });

  const submit = async (val, e) => {
    console.log();
  };

  return (
    <React.Fragment>
      <h1>Bookend</h1>
      <div className="main">
        <div className="left">
          <form className="form-group" onSubmit={handleSubmit(submit)}>
            <div className="label">
              <label htmlFor="inputSequence">
                {errors.inputSequence ? <span className="text-danger pt-1">This field is required to have atleast 4 characters</span> : 'String sequence'}
              </label>
            </div>
            <div className="input-and-btn-bookend">
              <input
                className="string-sequence-bookend background-input focus-input"
                type="text"
                name="inputSequence"
                aria-invalid={errors.inputSequence ? true : false}
                ref={register({ required: true, minLength: 4 })}
              />
              <input
                className="bookend-input focus-input background-input"
                type="text"
                placeholder={errors.bookend ? 'You need to specify a bookend' : 'bookend'}
                name="bookend"
              />
              <button className="btn btn-success" type="submit" disabled={!formState.isValid ? true : false}>
                Count
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <Instructions data={data} examples={examples} key={0} />
        </div>
      </div>
      <div className="above">
        <div className="center"></div>
      </div>
      <div className="display-area">
        <div className="center"></div>
      </div>
    </React.Fragment>
  );
};

export default Bookend;

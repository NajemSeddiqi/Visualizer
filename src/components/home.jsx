import React, { Component } from 'react';
import { getChallenges } from '../services/challengeService';
import { getAll } from './../helpers/getChallengeComponents';
import * as SVGLoaders from 'svg-loaders-react';
import httpService from '../services/httpService';
import ChallengeCard from './challengeCard';

class Home extends Component {
  state = {
    isLoading: false,
    data: [],
  };

  async componentDidMount() {
    httpService.setLoading(this);
    const { data } = await getChallenges();
    const all = getAll();
    let items = data.map((d, idx) => ({
      id: idx + 1,
      name: d.trim().replace(/^\w/, (c) => c.toUpperCase()),
      focus: false,
      view: all[idx],
    }));
    this.setState({ data: items });
  }

  handleFocus = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((i) => (i.id === id ? { ...i, focus: true } : { ...i, focus: false })),
    }));
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <React.Fragment>
        <div className="container pt-4">
          <div className="row">
            {!isLoading ? (
              data.map((d, idx) => (
                <div key={idx} className="col-lg-2 col-md-3 col-sm-6">
                  <ChallengeCard name={d.name} key={idx} id={d.id} focus={d.focus} onFocus={this.handleFocus} />
                </div>
              ))
            ) : (
              <SVGLoaders.Rings className="loader" />
            )}
          </div>
          <div className="challenge-box">{data.map((d) => (d.focus ? d.view : null))}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

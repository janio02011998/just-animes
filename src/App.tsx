import { Section } from "./components/Section/Index";
import React from 'react';
import animes from './animes.json';

import './global.css';
import { Search } from "./components/Search";

interface AnimesProps {
  name: string;
  sinopse: string;
  genero: string;
  url: string;
  color: string;
}

interface IState {
  searchString?: any;
}

interface IProps {

}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      searchString: animes
    };

  }

  componentDidMount() {
    this.setState({ searchString: animes })
  }

  onChange(fieldName: string) {

    if (fieldName === '' || fieldName === null) this.setState({ searchString: animes });

    const arrayAnimes = animes.filter((item, i) => {
      return item.name.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1;
    });
    this.setState({ searchString: arrayAnimes });
  }

  render() {

    const arrayAnimes = this.state.searchString;
    return (
      <div className="wrapper">
        <Search onChange={this.onChange.bind(this)} />

        {arrayAnimes.map((animes: AnimesProps, key: number) => {
          return <Section
            key={key}
            title={animes.name}
            sinopse={animes.sinopse}
            url={animes.url}
            genero={animes.genero}
            color={animes.color}
          ></Section>
        })}
      </div>
    );
  }
}
import React from "react";

import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

      <div className="bg-grey-1 pv4">
        <div className="flex-l mhn1-l ph3 center mw7">
          <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p className="w-60-l mb0">{entry.getIn(["data", "intro", "text"])}</p>
        </div>
      </div>
    </div>;
  }
}

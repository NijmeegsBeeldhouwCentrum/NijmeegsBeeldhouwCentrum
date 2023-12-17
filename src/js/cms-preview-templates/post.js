import React from "react";
import format from "date-fns/format";
import Jumbotron from "./components/jumbotron";
import { nl } from "date-fns/locale";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />
      <div className="mw6 center ph3 pv4">
        <div className="flex justify-between grey-3">
          <p>{ format(entry.getIn(["data", "date"]), "iiii, d MMMM, yyyy", { locale: nl }) }</p>
          <p>Lees in x minuten</p>
        </div>
        <div className="cms mw6">
          <p class="b">{ entry.getIn(["data", "description"]) }</p>
          { widgetFor("body") }
        </div>
      </div>
    </> ;
  }
}

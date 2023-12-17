import React from "react";
import Jumbotron from "./components/jumbotron";

const ContactEntry = ({heading, text}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const ContactEntries = ({data}) =>
  (data && data.length > 0
    ? <div className="flex-ns mb3">
      {// eslint-disable-next-line react/jsx-key
        data.map(({heading, text}) => <ContactEntry heading={heading} text={text} />)}
    </div>
    : "");

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];
    const image = getAsset(entry.getIn(["data", "image"]));
    return <div className="ph3 bg-off-white">
      <Jumbotron image={image} title={entry.getIn(["data", "title"])}/>
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <ContactEntries data={contactEntries} />
      </div>
    </div>;
  }
}

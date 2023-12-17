import React from "react";

export default class FooterPreview extends React.Component {
  render() {
    const {entry} = this.props;
    return <div class="mw7 center pt3">
      <div class="flex-ns justify-between">

        <div>
          <ul class="mb3">
            <li>{entry.getIn(["data", "address"])}</li>
            <li>{entry.getIn(["data", "postalcode"])}</li>
            <li>{entry.getIn(["data", "city"])}</li>
          </ul>
        </div>

        <div>
          <ul class="mb3">
            <li>Tel: <a href={`tel: ${entry.getIn(["data", "phonenumber"])}`}>
              {entry.getIn(["data", "phonenumber"])}
              </a></li>
            <li>Email: <a href={`mailto: ${entry.getIn(["data", "email"])}`}>
              {entry.getIn(["data", "email"])}
              </a></li>
          </ul>
        </div>

      </div>
    </div>
  }
}


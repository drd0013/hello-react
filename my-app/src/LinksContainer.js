import React, { Component } from "react";

import EditLinkComponent from "./EditLinkComponent";
import LinkDisplayComponent from "./LinkDisplayComponent";

class LinksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: ["url1", "url2"],
      isMakingLink: false
    };
  }

  updateEditState(newState) {
    console.log(newState, 'updating state')
    this.setState({ isMakingLink: newState });
  }

  addNewUrl(newUrl) {
    var newUrlList = this.state.urls.slice();
    newUrlList.push(newUrl);
    this.setState({ urls: newUrlList });
    this.updateEditState(false)
  }

  _renderEditComponent() {
    console.log(this.state);
    if (this.state.isMakingLink) {
      return (
        <EditLinkComponent
          onCancel={() => this.updateEditState(false)}
          onSubmit={urlValue => this.addNewUrl(urlValue)}
        />
      );
    }
    return null;
  }

  updateUrl(newUrl, index) {
    var newUrlList = this.state.urls.slice();
    newUrlList[index] = newUrl;
    this.setState({ urls: newUrlList });
  }

  _renderUrls() {
    let urlList = this.state.urls.map((url, index) => {
      return (
        <LinkDisplayComponent
          linkUrl={url}
          key={index}
          onUrlChange={(newUrl, index) => this.updateUrl(newUrl, index)}
          urlKey={index}
        />
      );
    });
    return urlList;
  }

  render() {
    return (
      <div>
        <p>Links:</p>
        {
          this.state.isMakingLink
          ?
          this._renderEditComponent()
          :
          <button onClick={() => this.updateEditState(true)}>Add Link</button>
        }
        {this._renderUrls()}
      </div>
    );
  }
}

export default LinksContainer;

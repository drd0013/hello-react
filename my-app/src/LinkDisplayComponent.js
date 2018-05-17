import React, { Component } from "react";

import EditLinkComponent from "./EditLinkComponent";

class LinkDisplayComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      editingUrl: this.props.linkUrl
    };
  }

  updateEditState(newState) {
    this.setState({ isEditing: newState });
  }

  cancelEdit() {
    this.setState({ editingUrl: this.props.linkUrl });
    this.updateEditState(false);
  }

  _renderDisplay() {
    return (
      <div>
        <span>url: {this.props.linkUrl}</span>
        <button onClick={() => this.updateEditState(true)}>
          Start Editing
        </button>
      </div>
    );
  }

  submitUrlChange(urlValue) {
    this.props.onUrlChange(urlValue, this.props.urlKey);
    this.updateEditState(false);
  }

  updateEditingUrl(e) {
    this.setState({ editingUrl: e.target.value });
  }

  _renderEdit() {
    return (
      <EditLinkComponent
        onCancel={() => this.cancelEdit()}
        onSubmit={urlValue => this.submitUrlChange(urlValue)}
        initialUrl={this.props.linkUrl}
      />
    );

    // return (
    //   <div>
    //     <input type='text' value={this.state.editingUrl} onChange={(e) => this.updateEditingUrl(e)} />
    //     <button onClick={() => this.cancelEdit()}>
    //       Cancel Editing
    //     </button>
    //     <button onClick={() => this.submitUrlChange()}>
    //       Submit Change
    //     </button>
    //   </div>
    // )
  }

  render() {
    return this.state.isEditing ? this._renderEdit() : this._renderDisplay();
  }
}

export default LinkDisplayComponent;

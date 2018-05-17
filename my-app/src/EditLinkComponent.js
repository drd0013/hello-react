import React, { Component } from "react";

class EditLinkComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editingUrl: this.props.initialUrl
    }
  }

  submitUrlChange() {
    this.props.onSubmit(this.state.editingUrl)
  }

  updateEditingUrl(e) {
    this.setState({editingUrl: e.target.value})
  }


  render() {
    return (
      <div>
        <input type='text' value={this.state.editingUrl} onChange={(e) => this.updateEditingUrl(e)} />
        <button onClick={() => this.props.onCancel()}>
          Cancel Editing
        </button>
        <button onClick={() => this.submitUrlChange()}>
          Submit Change
        </button>
      </div>
    )
  }
}

export default EditLinkComponent
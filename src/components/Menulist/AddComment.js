import React, { Component } from "react";

const INITIAL_STATE = {
  message: "",
  grade: ""
};

export default class AddComment extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { message, grade } = this.state;
    return (
      <div className="comments">
        <h4> Comments and ratings to the recipe</h4>
        <form className="comments-save-form">
          <label>
            Choose a grade
            <select
              className="select-grade"
              name="grade"
              value={grade}
              onChange={this.handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          <textarea
            className="message-field"
            rows="4"
            name="message"
            value={message}
            placeholder="Leave a comment..."
            onChange={this.handleChange}
          />

          <input type="submit" className="save-message-btn" value="Save" />
        </form>
      </div>
    );
  }
}

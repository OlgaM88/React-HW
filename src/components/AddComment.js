import React from "react";

const AddComment = (message, onmessageChange, grade, onChange) => (
  <div className="comments">
    <label>
      Choose a grade
      <select
        className="select-grade"
        name="grade"
        value={grade}
        onChange={onChange}
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
    <form id="comments-save-form">
      <textarea
        rows="6"
        name="message"
        value={message}
        placeholder="Leave a comment..."
        onChange={onmessageChange}
      />

      <input type="submit" value="Save" />
    </form>
  </div>
);
export default AddComment;

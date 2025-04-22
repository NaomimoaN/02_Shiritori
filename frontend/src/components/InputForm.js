import React, { useState } from "react";

function InputForm({ onAddWord, onSetName }) {
  const [shiritoriWord, setShiritoriWord] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name === "" || shiritoriWord === "") {
      setError("Please fill in both inputs.");
      setLoading(false);
      return;
    }

    // 親コンポーネントに単語と名前を渡す
    onAddWord(shiritoriWord);
    onSetName(name);

    // 状態をリセット

    setShiritoriWord("");
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name || ""} // null の場合は空文字列を使用
          onChange={(e) => setName(e.target.value)}
          placeholder={name ? name : "Your Name"}
        />

        <label htmlFor="shiritoriWord">Put Shiritori Word</label>
        <input
          type="text"
          id="shiritoriWord"
          value={shiritoriWord || ""} // null の場合は空文字列を使用
          onChange={(e) => setShiritoriWord(e.target.value)}
          placeholder="Word"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default InputForm;

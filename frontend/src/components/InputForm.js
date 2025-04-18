import React, { useState } from "react";

function InputForm({ onAddWord }) {
  const [name, setName] = useState("");
  const [shiritoriWord, setShiritoriWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHundle = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name === "" || shiritoriWord === "") {
      setError("Please fill in both inputs.");
      setLoading(false);
      return;
    }

    // 親コンポーネントに単語と名前を渡す
    onAddWord(shiritoriWord, name);

    // 状態をリセット
    setName("");
    setShiritoriWord("");
    setLoading(false)
  };

  return (
    <div>
      <form onSubmit={onSubmitHundle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <label htmlFor="shiritoriWord">Put Shiritori Word</label>
        <input
          type="text"
          id="shiritoriWord"
          value={shiritoriWord}
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

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        {" "}
        <em> Start Adding something for your trip 🚀 </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything to go 🛩️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

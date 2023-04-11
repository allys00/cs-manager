export const CollapsedCards = ({ cards }: { cards: JSX.Element[] }) => {
  return (
    <div className="relative group flex gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="absolute group-hover:static transition-all "
          style={{ left: index * 50, zoom: "70%" }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

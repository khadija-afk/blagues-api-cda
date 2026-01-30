export default function JokeCard({ joke }) {
    return (
      <div className="card">
        {joke ? joke : "Clique pour obtenir une blague 😄"}
      </div>
    );
  }
  
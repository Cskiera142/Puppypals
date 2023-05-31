import { puppyList } from "../data";

const puppyArr = () => {
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <div>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </div>
  );
};

import Ccomponent from "./Ccomponent";
import { ArticlesData } from "./ArticlesData";

export default function Articles() {
  if (!ArticlesData || ArticlesData.length === 0) return <div> That's all</div>;

  return (
    <div>
      {ArticlesData.map((article) => (
        <Ccomponent key={ArticlesData.id} article={article} />
      ))}
    </div>
  );
}

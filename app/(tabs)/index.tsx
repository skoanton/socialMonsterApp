import FeedList from "../../components/FeedList";
import MonsterList from "../../components/MonsterList";
import { useMonster } from "../../context/MonsterContext";

type HomePageProps = {};

export default function HomePage({}: HomePageProps) {
  const monsterContext = useMonster();
  console.log("Monstercontext:", monsterContext?.currentMonster?.name);
  return <>{monsterContext?.currentMonster ? <FeedList /> : <MonsterList />}</>;
}

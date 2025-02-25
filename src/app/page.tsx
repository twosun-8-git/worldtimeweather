import { Container } from "@/app/_components/layouts";
import { Main } from "@/app/_components/blocks";
import { ActiveCotunryInfo, ActiveCotunryTime } from "./_components/parts";
import { List } from "@/app/_components/parts";
import { Search } from "@/app/_components/widgets";

export default function Home() {
  return (
    <Container>
      <br />
      <Main>
        <ActiveCotunryInfo />
        <ActiveCotunryTime />
        <Search />
        <List />
      </Main>
    </Container>
  );
}

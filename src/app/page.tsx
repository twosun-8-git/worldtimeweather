import { Container } from "@/app/_components/layouts";
import { Main } from "@/app/_components/blocks";
import { ActiveCotunryInfo, ActiveCotunryTime } from "./_components/parts";
import { Search } from "@/app/_components/parts";

export default function Home() {
  return (
    <Container>
      <br />
      <Main>
        <ActiveCotunryInfo />
        <ActiveCotunryTime />
        <Search />
      </Main>
    </Container>
  );
}

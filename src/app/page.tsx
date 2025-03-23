import { Container } from "@/app/_components/layouts";
import { Main, Modal } from "@/app/_components/blocks";
import {
  Advertisement,
  ActiveCotunryInfo,
  ActiveCotunryTime,
  CardList,
  Search,
} from "@/app/_components/parts";

export default function Home() {
  return (
    <Container>
      <Advertisement />
      <Main>
        <ActiveCotunryInfo />
        <ActiveCotunryTime />
        <Search />
        <CardList />
      </Main>
      <Modal />
    </Container>
  );
}

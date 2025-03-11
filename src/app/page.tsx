import { Container } from "@/app/_components/layouts";
import { Main, Modal } from "@/app/_components/blocks";
import {
  Ads,
  ActiveCotunryInfo,
  ActiveCotunryTime,
  CardList,
  Search,
} from "@/app/_components/parts";

import { Ip } from "./ip";

export default function Home() {
  return (
    <Container>
      <Ads />
      <Main>
        <ActiveCotunryInfo />
        <ActiveCotunryTime />
        <Search />
        <CardList />
        <Ip />
      </Main>
      <Modal />
    </Container>
  );
}

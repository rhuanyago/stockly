import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "./_components/ui/header";

const Home = () => {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8 shadow">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
        </HeaderLeft>
      </Header>
    </div>
  );
};

export default Home;

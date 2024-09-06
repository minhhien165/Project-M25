// pages/index.tsx
import { FC } from 'react';
import Header from '../../components/Header/page';
import SidebarLeft from '../../components/SidebarLeft/page';
import SidebarRight from '../../components/SidebarRight/page';
import Feed from '../../components/Feed/page';
import Footer from '../../components/Footer/page';

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-4">
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

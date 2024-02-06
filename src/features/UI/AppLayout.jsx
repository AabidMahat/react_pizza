import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation(); // / Is universal for all the routes

  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}

      <Header />
      <div>
        <main className="z-10 mx-auto max-w-3xl">
          {/* // *Outlet is use to display result of child componenet/routes  */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

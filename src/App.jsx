import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/UI/Home';
import Error from './features/UI/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './features/UI/AppLayout';

import { action as UpdateOrderAction } from './features/order/UpdateOrder';

// * Creating Routes in imperative way

const router = createBrowserRouter([
  // /To perform nested route we use children keyword

  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, // * Second step :- is to add loader methods
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/newOrder',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  // ! pass it as parameter
  return <RouterProvider router={router} />;
}

export default App;

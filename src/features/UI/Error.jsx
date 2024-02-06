import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError(); //? use to get error from the route

  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1, { replace: true })}
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default NotFound;

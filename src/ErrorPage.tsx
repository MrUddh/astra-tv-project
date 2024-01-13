import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

/*
 Anytime the app throws an error while rendering, loading data, or performing data mutations,
 React Router will catch it and render this screen.
*/

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div>
      <h1>Something went wrong...</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default ErrorPage;

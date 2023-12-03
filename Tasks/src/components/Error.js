import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>🕸️Hello User, Something Went Wrong</h1>
      <p>Please reach out @xyzgmail.in</p>
      <p>{err.status + " : " + err.statusText}</p>
    </>
  );
};
export default Error;

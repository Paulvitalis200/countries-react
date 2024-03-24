import { Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Text textAlign="center">Oops...</Text>
      <p>
        {isRouteErrorResponse(error) ? (
          <Text textAlign="center">Sorry the country does not exist.</Text>
        ) : (
          "Unexpected error"
        )}
      </p>
    </>
  );
};

export default ErrorPage;

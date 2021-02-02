import React from "react";
import "../header.css";
import "../home.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";
const Error = () => {
  return (
    <div className="page-with-header">
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>NOT FOUND 404</AlertTitle>
        <AlertDescription>There is nothing here</AlertDescription>
      </Alert>
    </div>
  );
};
export default Error;

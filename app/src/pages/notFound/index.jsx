// NotFound.js

import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, Button } from "./styles";

const NotFound = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text>Oops! The page you're looking for doesn't exist.</Text>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/">Go back</Link>
      </Button>
    </Container>
  );
};

export default NotFound;

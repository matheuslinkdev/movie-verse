import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import PropTypes from 'prop-types'

export function Providers({children}) {
  return (
    <ChakraProvider theme={theme}>
      <main>{children}</main>
    </ChakraProvider>
  );
}

Providers.propTypes ={
  children: PropTypes.node
}
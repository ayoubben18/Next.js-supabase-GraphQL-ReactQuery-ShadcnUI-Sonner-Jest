"use client";

import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

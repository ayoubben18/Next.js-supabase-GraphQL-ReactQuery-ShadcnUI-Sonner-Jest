import PageWrapper from "@/components/PageWrapper";
import { graphql } from "@/gql";
import { query } from "@/lib/gql-server";
import { gql } from "@apollo/client";
import React from "react";

// get some mock data fist in sql/mock.sql

const GetProducts = graphql(`
  query GetProductsWithRatings {
    productsCollection {
      edges {
        node {
          name
          price
          ratingsCollection {
            edges {
              node {
                rating
              }
            }
          }
        }
      }
    }
  }
`);

const page = async () => {
  const { data, error } = await query({ query: GetProducts });
  if (error) return <div>{error.message}</div>;
  return (
    <PageWrapper>
      {data.productsCollection?.edges.map((e, index) => {
        return (
          <div key={index}>
            <h1>{e.node.name}</h1>
            <p>{e.node.price}</p>
            <div>
              {e.node.ratingsCollection?.edges.map((e, index) => {
                return <p key={index}>{e.node.rating}</p>;
              })}
            </div>
          </div>
        );
      })}
    </PageWrapper>
  );
};

export default page;

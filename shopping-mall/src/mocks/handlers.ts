import { graphql } from "msw";
import { QueryKeys } from "../queryClinet";

export const handlers = [
  graphql.query(QueryKeys.PRODUCTS, (req, res, ctx) => {}),
];

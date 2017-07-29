const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLScalarType,
  GraphQLInt,
} = require('graphql');

const GraphQLAlogliaSearchType = function GraphQLAlogliaType({ index }) {
  const hitType = new GraphQLScalarType({
    name: 'HitType',
    serialize: a => a,
    parseValue: a => a,
    parseLiteral(ast) {
      return ast.value;
    },
  });

  const searchType = new GraphQLObjectType({
    name: 'SearchType',
    fields: {
      hits: { type: new GraphQLList(hitType) },
      page: { type: GraphQLInt },
      nbHits: { type: GraphQLInt },
      nbPages: { type: GraphQLInt },
      hitsPerPage: { type: GraphQLInt },
      processingTimeMS: { type: GraphQLInt },
      query: { type: GraphQLString },
      params: { type: GraphQLString },
    },
  });

  return {
    type: searchType,
    args: {
      query: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(root, { query }) {
      return index.search(query);
    },
  };
};

module.exports = {
  GraphQLAlogliaSearchType,
};

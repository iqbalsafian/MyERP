import {
  makeExecutableSchema
} from 'graphql-tools';
import Conversations from './conversation';

const resolvers = {
  String: () => 'It works',
  Query: {
    conversation: (root, args) => {
      return {
        conversation_type: args.conversation_type
      }
    }
  }
}

const typeDefs = `
  type Conversations {
    conversation_type: Int!
  }

  type ConversationMessages {
    id: Int!
    conversation_id: Conversations
    message: String
    entity_id: Entities
  }

  type Participants {
    id: Int!
    conversation_id: Conversations
    entity_id: Entities
    isadmin: Boolean
  }

  type Query {
    conversation(conversation_type: Int!): Conversations
    getConversation: String
  }
`
const schema = makeExecutableSchema({
  typeDefs: [Conversations],
  resolvers
});

export default schema;

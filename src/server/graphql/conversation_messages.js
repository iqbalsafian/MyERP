import Conversation from './conversation';

const typeDefs = `
  type Conversation_Messages {
    id: ID!
    entity_ID: Conversation!
    message: String
    created_at: Date!
    updated_at: Date!
  }

  type Query {
    conversation_messages: [Conversation_Messages]
  }
`;

export default typeDefs;

import Entities from './entities';

const Conversations = `
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

export default () => [Conversations, Entities];

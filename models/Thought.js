// set up mongoose
const { Schema, model, Types } = require('mongoose');

// new plugin (moment)
const moment = require('moment')

// reaction schema
const reactionSchema = new Schema (
  {
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
     },
     reactionBody: {
      type: String,
      required: true,
      maxlength: 280
     },
     username: {
      type: String,
      required: true,
     },
     createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
     },
  },
  {
      toJSON: {
          virtuals: true,
          getters: true
      },
      id: false,
  }
)
// create thought schema
const thoughtSchema = new Schema (
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)
// get reaction
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})
//thought model
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
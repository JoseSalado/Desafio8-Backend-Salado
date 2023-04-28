import mongoose from "mongoose";


const ticketsCollection = "tickets";

const ticketsSchema = mongoose.Schema({
    code: String,
    purchase_datetime: Number,
    amount: Number,
    purchaser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
});

const Tickets = mongoose.model(ticketsCollection, ticketsSchema);

export default Tickets;
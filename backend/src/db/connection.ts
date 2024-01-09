import mongoose from 'mongoose';
export default async function connectToDatabase() {
    try {
        console.log('mongo', process.env.URI)
        if (!process.env.URI) {
            throw new Error('mongo url not defined')
        }
        const conn = await mongoose.connect(process.env.URI);
        console.log(`MongoDb connected`);
    } catch (error) {
        console.error(error)
        throw new Error("Unable to Connect to database")
    }
}

async function disconnectFromDatabase() {
    try {
        await mongoose.disconnect();
    } catch(error) {
        console.error(error)
        throw new Error("Unable to Disconnect from database")
    }
}

export { 
    connectToDatabase, 
    disconnectFromDatabase 
}
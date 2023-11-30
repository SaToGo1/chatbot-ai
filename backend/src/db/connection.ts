import mongoose from 'mongoose';
export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.URI)
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
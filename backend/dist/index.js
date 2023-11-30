import app from './app.js';
import connectToDatabase from './db/connection.js';
connectToDatabase()
    .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server Open at port ${PORT}`);
    });
})
    .catch(err => console.log(err));
//# sourceMappingURL=index.js.map
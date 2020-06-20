import app from './app';
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`HackyFeed Server is listening on port ${PORT}`);
});
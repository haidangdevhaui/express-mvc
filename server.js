import app from './bootstrap/app'
// running server
app.listen(process.env.PORT || 3000, () => console.log(`Server is running on port ${process.env.APP_PORT}`));
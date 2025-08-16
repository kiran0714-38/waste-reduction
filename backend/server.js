const express= require('express');
const app = express();
const mongoose=require("mongoose")

const dotenv = require('dotenv');
dotenv.config();    
const authRoutes = require('./routes/authRoutes');  
mongoose.connect(process.env.MongoDB_URI, {
  useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
}); 
app.use(express.json()); // for parsing application/json
app.use('/api/auth', authRoutes); // Use the auth routes        
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

const express= require('express');
const app = express();
const mongoose=require("mongoose")

const dotenv = require('dotenv');
dotenv.config();    
const authRoutes = require('./routes/authRoutes'); 
const adminRoutes = require('./routes/adminRoutes'); 

mongoose.connect(process.env.MongoDB_URI, {
  useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
}); 
app.use(express.json()); // for parsing application/json
app.use('/api/auth', authRoutes); 
app.use('/api/admin', adminRoutes);   // /api/admin/dashboard, /api/admin/users

// Use the auth routes      

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

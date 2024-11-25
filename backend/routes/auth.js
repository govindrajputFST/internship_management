const  express=require ("express");
const { googlelogin,login,logout,signup } =require ("../controllers/authController");

const router=express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/googlelogin',googlelogin);router.post('/logout',logout);
module.exports= router;
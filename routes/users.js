var express = require('express');
var router = express.Router();

// ส่งแบบฟอร์มสำหรับการล็อคอิน
router.get('/login', function(req, res, next) {
  res.render('login'); // แสดงหน้า login form
});

// รับข้อมูลการล็อคอินจากฟอร์มและตรวจสอบการตรงความเป็นจริง
router.post('/login', function(req, res, next) {
  // ทำการตรวจสอบชื่อผู้ใช้งานและรหัสผ่านในฐานข้อมูล
  // ถ้าล็อคอินสำเร็จ สามารถทำการเซตเซสชันและเปลี่ยนเส้นทางไปยังหน้าหลัก
  // ถ้าล็อคอินไม่สำเร็จ แสดงข้อความผิดพลาด

  // ตัวอย่างการตรวจสอบ
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    req.session.isAuthenticated = true;
    res.redirect('/home');
  } else {
    res.render('login', { error: 'Invalid username or password' });
  }
});

// ส่งแบบฟอร์มสำหรับการสมัครสมาชิก
router.get('/register', function(req, res, next) {
  res.render('register'); // แสดงหน้าสมัครสมาชิก
});

// รับข้อมูลการสมัครสมาชิกจากฟอร์มและบันทึกข้อมูลผู้ใช้งานในฐานข้อมูล
router.post('/register', function(req, res, next) {
  // รับข้อมูลจากฟอร์มและบันทึกข้อมูลผู้ใช้งานในฐานข้อมูล
  // ตรวจสอบการลงทะเบียนสำเร็จ และทำการส่งอีเมลการยืนยันอีเมล
  // หรือตรวจสอบการลงทะเบียนไม่สำเร็จและแสดงข้อความผิดพลาด

  // ตัวอย่างการบันทึกข้อมูลผู้ใช้งาน
  const { username, password, email } = req.body;
  // บันทึกข้อมูลผู้ใช้งานลงในฐานข้อมูล
  // ส่งอีเมลการยืนยันอีเมล (activation email) ไปยังผู้ใช้งาน

  res.redirect('/login'); // หลังจากสมัครสมาชิกสำเร็จ ให้กลับไปยังหน้าล็อคอิน
});

// ออกจากระบบล็อคอิน
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) {
      console.error('Error destroying session:', err);
      next(err);
    } else {
      res.redirect('/login'); // หลังจากล็อคเอาต์สำเร็จ ให้กลับไปยังหน้าล็อคอิน
    }
  });
});
// Middleware ตรวจสอบการล็อคอิน
function isLoggedIn(req, res, next) {
  if (req.session.isAuthenticated) {
    return next(); // ผู้ใช้งานล็อคอิน ให้ไปต่อ
  }
  res.redirect('/login'); // ผู้ใช้งานไม่ล็อคอิน ให้เปลี่ยนเส้นทางไปยังหน้า login
}

// Middleware ตรวจสอบการไม่ล็อคอิน
function isNotLoggedIn(req, res, next) {
  if (!req.session.isAuthenticated) {
    return next(); // ผู้ใช้งานไม่ล็อคอิน ให้ไปต่อ
  }
  res.redirect('/home'); // ผู้ใช้งานล็อคอินแล้ว ให้เปลี่ยนเส้นทางไปยังหน้าหลัก
}

// ตัวอย่างการใช้ middleware ในเส้นทาง
router.get('/protected', isLoggedIn, function(req, res, next) {
  // หน้านี้ต้องการการล็อคอิน
  res.render('protected_page');
});

router.get('/public', isNotLoggedIn, function(req, res, next) {
  // หน้านี้ไม่ต้องการการล็อคอิน
  res.render('public_page');
});

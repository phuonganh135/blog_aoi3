var express = require('express');
var router = express();

var userController = require('../controllers/user');
var postController = require('../controllers/post');
var khoaController = require('../controllers/khoa');
var bomon_chuyennganhController = require('../controllers/bomon_chuyennganh');
var giangvienController = require('../controllers/giangvien');
var lopController = require('../controllers/lop');
var sinhvienController = require('../controllers/sinhvien');
var gvhuongdanController = require('../controllers/giangvien_huongdan');
var detaiController = require('../controllers/detai');
var svdangkidtController = require('../controllers/sv_dangki_dt');
var thongbao_detaiController = require('../controllers/thongbao_detai');
var congviecController = require('../controllers/congviec');
var namhocController = require('../controllers/namhoc');
var hockiController = require('../controllers/hocki');
var thoigianController = require('../controllers/thoigian');
var binhluanController = require('../controllers/binhluan');



/* GET home page. */
router.route('/api')
    .get(function(req, res, next) {
        res.send('Welcome to blog API!');
    })

/* KHOA ROUTES */
router.route('/api/khoa')
    .post(khoaController.createKhoa)
    .get(khoaController.getKhoaList)

router.route('/api/namhoc')
    .get(namhocController.getNamHocList)

router.route('/api/hocki')
    .get(hockiController.getHocKiList)

router.route('/api/thoigian')
    .get(thoigianController.getThoiGianList)

router.route('/api/bomon_chuyennganh')
    .post(bomon_chuyennganhController.createBoMonChuyenNganh)
    .get(bomon_chuyennganhController.getBoMonChuyenNganhList)

// router.route('/api/bomon_chuyennganh')
//     .get(bomon_chuyennganhController.getBoMonChuyenNganhByMaKhoa)
    // .put(userController.updateUserById)
    // .delete(userController.deleteUserById)

router.route('/api/giangvien')
    .post(giangvienController.createGiangVien)
    .get(giangvienController.getGiangVienList)

router.route('/api/giangvien_info')
    .get(giangvienController.getGiangVienInfo)

router.route('/api/lop')
    .post(lopController.createLop)
    .get(lopController.getLopList)

router.route('/api/sinhvien')
    .post(sinhvienController.createSinhVien)
    .get(sinhvienController.getSinhVienList)

router.route('/api/sinhvien_dangki')
    .get(sinhvienController.getSinhVienDangKiList)
    .put(sinhvienController.updateSinhVienDangKiAccept)
    .delete(sinhvienController.updateSinhVienDangKiDecline)

router.route('/api/sinhvien_thuchien')
    .get(sinhvienController.getSinhVienThucHienList)

router.route('/api/sinhvien_info')
    .get(sinhvienController.getSinhVienInfo)

router.route('/api/giangvien_huongdan')
    .post(gvhuongdanController.createGiangVienHuongDan)
    .get(gvhuongdanController.getGiangVienHuongDanList)

router.route('/api/detai')
    .post(detaiController.createDeTai)
    .get(detaiController.getDeTaiList)

router.route('/api/detai_info')
    .get(detaiController.getDeTaiInfo)
    .put(detaiController.updateDeTai)
    .delete(detaiController.deleteDeTai)

router.route('/api/sv_dangki_dt')
    .post(svdangkidtController.createSVDangKiDT)
    .get(svdangkidtController.getSVDangKiDTList)

router.route('/api/thongbao_detai')
    .post(thongbao_detaiController.createThongBaoDeTai)
    .get(thongbao_detaiController.getThongBaoDeTaiList)

router.route('/api/congviec')
    .post(congviecController.createCongViec)
    .get(congviecController.getCongViecList)
    .put(congviecController.moveCongViec)
    .delete(congviecController.deleteCongViec)

router.route('/api/congviec_info')
    //.post(congviecController.createCongViec)
    .get(congviecController.getCongViecInfoList)
    .put(congviecController.updateCongViecInfo)

router.route('/api/binhluan')
    .post(binhluanController.createBinhLuan)
    .get(binhluanController.getBinhLuanList)
    .delete(binhluanController.deleteBinhLuan)



/* SINHVIEN ROUTES*/
// router.route('/api/sinhvien')
//     .get(userController.getUserList)
//     .post(userController.createUser)

/* USER ROUTES */
// router.route('/api/users')
//     .get(userController.getUserList)
//     .post(userController.createUser)

// router.route('/api/user/:id')
//     .get(userController.getUserById)
//     .put(userController.updateUserById)
//     .delete(userController.deleteUserById)

/* END USER ROUTES */

/* POST ROUTES */
// router.route('/api/posts')
//     .get(postController.getPostList)
//     .post(postController.createPost)

// router.route('/api/post/:id')
//     .get(postController.getPostById)
//     .put(postController.updatePostById)
//     .delete(postController.deletePostById)

/* END POST ROUTES */

/* RESOURCE ROUTES */
/* END RESOURCE ROUTES */

/* SINH VIEN */
// router.route('/api/users')
//     .get(userController.getUserList)
//     .post(userController.createUser)

// router.route('/api/user/:id')
//     .get(userController.getUserById)
//     .put(userController.updateUserById)
//     .delete(userController.deleteUserById)


module.exports = router;

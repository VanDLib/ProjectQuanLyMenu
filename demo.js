// Khai báo 1 prototype
//ES5

function Products (id, name){
    this.id = id;
    this.name = name;
    this.price = '0';
    this.img = '';
    this.showInfo = function(){
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
        console.log('img', this.img);
    }
}

let prod = new Products(1, 'Nguyễn Văn A');
console.log('prod', prod);
//ES6

class ProductsES6 {
    id = '';
    name = '';
    price = '0';
    img = '';
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    // Khai báo phương thức cách 1: Tạo 1 thuộc tính và gán nó bằng hàm
    showInfo = function(){
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
        console.log('img', this.img);
    }
    // Khai báo phương thức cách 2: Không cần chữ function
    // showInfo (){
    //     console.log('id', this.id);
    //     console.log('name', this.name);
    //     console.log('price', this.price);
    //     console.log('img', this.img);
    // }
}

let prd = new ProductsES6(1, 'Nguyễn Văn A');
console.log('prd', prd);

/*
    Hướng đối tượng (OOP) là gì? Có mấy tính chất:
    - Hướng đối tượng là 1 phương pháp lập trình giải quyết 
    các vấn đề sát với thế giới thực
    - Hướng đối tượng có 4 tính chất
        + Tính trừu tượng (Abstraction): Mô phỏng dữ liệu ở
        thế giới thật thành các thuộc tính hay còn gọi là
        đặt tính và phương thức hay còn gọi là hành động
        vào trong lập trình.
        + Tính đóng gói (Encapsolution): Các thuộc tính (biến)
        và phương thức (hàm) phải thông qua đối tượng thì mới truy
        xuất được. // JS không hỗ trợ Accessmodifier 
        (giới hạn thuộc tính và phương thức có thể truy xuất 
        được hoặc không cho phép truy xuất)
        + Tính kế thừa (Inheristance): Khi định nghĩa 1 lớp đối
        tượng (class) thì ta được phép kế thừa 1 lớp đối tượng
        khác thông qua từ khóa "extend" (lớp được kế thừa sẽ
        sở hữu các phương thức và thuộc tính từ lớp cha) 
        + Tính đa hình (Polymorphism): JS không hỗ trợ tính đa
        hình (nếu muốn có tính năng này => dùng Typescript =>
        một bộ ngôn ngữ nâng cao của JS)
 */

/*
    Ví dụ về tính kế thừa
*/

class NguoiDung {
    ma ='';
    hoTen ='';
    taiKhoan ='';
    matKhau ='';
    email ='';
    soDienThoai ='';
    constructor(maNguoiDung, tenNguoiDung){
        this.maNguoiDung = maNguoiDung;
        this.tenNguoiDung = tenNguoiDung;
    }
    dangNhap(){
        console.log('Đăng nhập');
    }
    dangXuat = function(){
        console.log('Đăng ký');    
    }
}

let nguoiDung = new NguoiDung();
console.log('nd: ', nguoiDung);

class SinhVien extends NguoiDung {
    diemToan = '';
    diemLy = '';
    diemHoa = '';
    constructor(maNguoiDung, tenNguoiDung){
        // gọi lại hàm mà nó kế thừa.
        // super là hàm kế thừa từ hàm cha
        super(maNguoiDung, tenNguoiDung);
    }
    xepLoai = function(){
        console.log('Xếp loại');
    }
    dangNhap() {
        console.log('Chức mừng ' + this.tenNguoiDung + " Đã đăng nhập thành công!");
        //Trong trường hợp muốn gọi thêm phương thức đăng nhập 
        // của hàm cha
        super.dangNhap();
    }
}

let sinhVien = new SinhVien(1, 'Tèo');
console.log('sv: ', sinhVien );
sinhVien.dangNhap();

class GiangVien extends NguoiDung {
    danhSachLopDangDay = [];
    constructor(maNguoiDung, tenNguoiDung){
        super(maNguoiDung, tenNguoiDung);
    }
    chamCong = function(){
        console.log('Chấm công');
    }
}

let giangVien = new GiangVien();
console.log('gv: ', giangVien);

class Mentor extends NguoiDung {
    danhSachLopMentor = [];
    constructor(maNguoiDung, tenNguoiDung){
        super(maNguoiDung, tenNguoiDung);
    }
    chamDiem = function(){
        console.log('Chấm điểm');
    }
}

let menTor = new Mentor();
console.log('mt: ', menTor);
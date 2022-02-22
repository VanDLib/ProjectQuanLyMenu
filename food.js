import { DANH_SACH_MON_AN } from "../../util/setting.js";
import { MonAn } from "../models/MonAn.js";
import { Menu } from "../models/Menu.js";
// let danhSachMonAn = [];


let menu = new Menu();
menu.layDanhSachMonAn();

document.getElementById('btnThemMon').onclick = function(){
    //Lấy giá trị người dùng đưa vào đối tượng món ăn
    let mon = new MonAn();

    let arrInput = document.querySelectorAll
        ('#foodForm input, #foodForm select, #foodForm textarea');
    

    for (let input of arrInput){
        // Lấy ra id và value của từng thẻ input
        
        let{id , value} = input;
        mon[id] = value;
    }

    // console.log('MonAn: ', mon);
    // console.log(arrInput);

    for (let key in mon){
        if(key === 'khuyenMai'){
            let tagGiaKhuyenMai = document.querySelector('li#giaKhuyenMai span');
            tagGiaKhuyenMai.innerHTML = mon.tinhGiaKhuyenMai();
        }
        if(key === 'maTinhTrang'){
            let tenTinhTrang = mon[key] == 0 ? 'Hết' : 'Còn';
            document.querySelector('li#tenTinhTrang span').innerHTML = tenTinhTrang;
        }
        if(key === 'moTa'){
            
            document.querySelector('li#moTa p').innerHTML = mon[key];
        }
        if(key === 'hinhAnh'){
            document.querySelector('img#imgMonAn').src = mon[key];
        }
        if(key === 'loaiMon'){
            let loaiMonAn = mon[key] == 'loai1' ? 'Chay' : 'Mặn';
            document.querySelector('li#loaiMon p').innerHTML = loaiMonAn;
        }
        if(document.querySelector(`li#${key} span`)){
            let spanValue = document.querySelector(`li#${key} span`);
            spanValue.innerHTML = mon[key];
        }
    }

    //Thêm món ăn vào thuộc tính .danhSachMonAn của đối tượng menu
    menu.themMonAn(mon);
    menu.luuDanhSachMonAn();
}

// function luuLocalStorage (){
//     let sDanhSachMonAn = JSON.stringify(danhSachMonAn);
//     localStorage.setItem(DANH_SACH_MON_AN, sDanhSachMonAn);
// }


import { DANH_SACH_MON_AN } from "../../util/setting.js";
import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

// let danhSachMonAn = [];
let menu = new Menu();
menu.layDanhSachMonAn();


// function layLocalStorage(){
    

//     if(localStorage.getItem(DANH_SACH_MON_AN)){
//         let sDanhSachMon = localStorage.getItem(DANH_SACH_MON_AN);
//         danhSachMonAn = JSON.parse(sDanhSachMon);
//         //Gọi phương thức để tạo dữ liệu từ Storage ra table
//         renderTable(danhSachMonAn);

//     }
// }

let renderTable = (arrMonAn) => {
    let html = '';
    for(let i = 0; i< arrMonAn.length; i++){
        //Mỗi lần duyệt trả ra 1 obj món ăn
        let monAnPrototype = new MonAn();
        let monAn = arrMonAn[i];
        monAn = {...monAnPrototype, ...monAn};
        html += `
            <tr>
                <td>${monAn.maMon}</td>
                <td>${monAn.tenMon}</td>
                <td>${monAn.loaiMon}</td>
                <td>${monAn.giaMon}</td>
                <td>${monAn.khuyenMai}</td>
                <td>${monAn.tinhGiaKhuyenMai()}</td>
                <td>${monAn.maTinhTrang}</td>
                <td>
                    <button  class="btn btn-danger" onclick="xoaMonAn('${monAn.maMon}')"> 
                        Xóa
                    </button>
                
                    <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary" onclick="editMonAn('${monAn.maMon}')"> 
                        Sửa
                    </button>
                </td>
            </tr>
        `
    }

    document.querySelector('tbody').innerHTML = html;
}

renderTable(menu.danhSachMonAn);



window.xoaMonAn = function (maMonAnClick){
    menu.xoaMonAn(maMonAnClick);
    // console.log(maMonAnClick);
    renderTable(menu.danhSachMonAn);
    
}

window.editMonAn = function (maMonAnClick){
    let monAnEdit = menu.layThongTinMonAn(maMonAnClick);

    if(monAnEdit){
        //Gán lên model popup
        let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
        for(let input of arrInput){
            let {id} = input;
            input.value = monAnEdit[id];

        }
    }
}

document.querySelector('#btnCapNhat').onclick = function(){
    //Lấy giá trị input từ giao diện
    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    let monAnEdit = new MonAn();
    for (let input of arrInput){
        let {id, value} = input;
        monAnEdit[id] = value;
    }

    menu.capNhatMonAn(monAnEdit.maMon,monAnEdit);
    renderTable(menu.danhSachMonAn);
}

document.querySelector('#selLoai').onchange = function(){
    //Lấy ra lợi người dùng onchange
    let loai = document.querySelector('#selLoai').value;
    
    //Backup dánh sách mon ăn trước khi filter
    let temp = [...menu.danhSachMonAn];

    //Gán danh sách món ăn filter theo loại
    menu.danhSachMonAn = menu.filterMonan(loai);

    //render table
    renderTable(menu.danhSachMonAn);

    menu.danhSachMonAn = temp;
}
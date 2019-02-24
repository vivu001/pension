function Person(name, tel, add, confirmed) {
    this.name = name;
    this.handyNummer = tel;
    this.add = add;
    this.confirmed = confirmed;
}

let hung = new Person("Hùng", "+49 1525 492 5039", "Hahnenstr. 27, 50354 Hürth", true);
let trang = new Person("Trang", "+49 1628 784 463", "Rathausstr. 49, 53225 Bonn", true);
let pa = new Person("Phương Anh", "+49 1520 823 3047", "Frankfurt", true);
let chi = new Person("Chi", "+49 1522 1090 319", "Hannover", false);
let duc = new Person("Đức", "+49 1523 8799 619", "Dortmund", true);
let hanh = new Person("Hạnh", "+49 1520 723 0978", "Koethen", true);
let bang = new Person("Băng", "+49 1764 761 7879", "Magdeburg", true);
let khanh = new Person("Khánh", "+49 1590 199 0801", "Berlin", false);
let hieu = new Person("A Hiếu", "+49 1728 752 318", "Heilbronn", true);

const participants = [hung, trang, pa, chi, duc, hanh, bang, khanh, hieu];

let contentBlock = document.getElementById("dotted");
contentBlock.innerHTML = `<ul>
          <li>Thời gian: <em>15. - 16.03.2019 (edited)</em>
            <ul class="info">
              <li>Chiều thứ 6 (15.03) mọi người sẽ gặp nhau ở Bonn. Ai bận có thể đến vào tối or sáng sớm hôm sau</li>
              <li>Mọi người có thể ra về từ <em>SÁNG</em> chủ nhật, ai muốn ở lại chơi thêm qua t2 cũng ok, nhưng không phải ở Köln vì Hùng bận</li>
            </ul>
          </li>
          <li>Tham gia: <span id = "name"></span>
            <ul class="info">
              <li>Ai có gấu (alt oder neu) có thể mang theo, nhưng cần báo trước để thu xếp chỗ ngủ ^^</li>
            </ul>
          </li>
          <li>Ăn uống: <em>Köln</em>
            <ul class="info">
              <li>Việc nấu nướng & ăn uống sẽ diễn ra tại nhà Hùng vào <em>SÁNG THỨ 7</em></li>
            </ul>
          </li>     
          <li>Đi chơi + ngủ: <em>Köln - Bonn</em>
            <ul class="info">
              <li>Thứ 6: vì chiều t6 đã có người đến Bonn nên Trang sẽ dẫn mọi người đi chơi quanh quanh dưới đó</li>
              <li>Thứ 7: THINKING...</li>
              <li>Ngủ: nhà Hùng & nhà Trang</li>
            </ul>
          </li>
        </ul>`;
contentBlock.style.lineHeight = ("2");

let namesBlock = document.getElementById('name');
participants.forEach(function (elem, i, participants) {
    let participantNode = document.createElement('span');
    //check trang thai "confirmed" cua nguoi tham gia
    if (elem.confirmed) {
        participantNode.style.color = "rgb(49, 231, 33)";
        participantNode.style.fontWeight = "bold";
    } else {
        participantNode.style.color = "white";
    }

    if (i < participants.length - 1) {
        participantNode.innerHTML = elem.name + ", ";
    } else {
        participantNode.innerHTML = elem.name;
    }
    namesBlock.appendChild(participantNode);
});

let infos = document.getElementById('adresse');

// create Info of Hung
let hungInfo = document.createElement('div');
hungInfo.innerHTML = addInfo(hung, "https://www.google.de/maps/place/Hahnenstra%C3%9Fe+27,+50354+H%C3%BCrth/@50.8936348,6.9008951,15.75z/data=!4m5!3m4!1s0x47bf249e31bddee3:0x81138aef8f0e5f1e!8m2!3d50.8923!4d6.91");
infos.appendChild(hungInfo);

// create Info of Trang
let trangInfo = document.createElement('div');
trangInfo.innerHTML = addInfo(trang, "https://www.google.de/maps/place/Rathausstra%C3%9Fe+49,+53225+Bonn/@50.743384,7.1185325,16z/data=!4m5!3m4!1s0x47bee1101a09a7e3:0x6850f8d5ff06a7bf!8m2!3d50.7421823!4d7.1188651");
infos.appendChild(trangInfo);

function addInfo(person, gmap) {
    return `<div><strong>${person.name} </strong></div>
        <div class="handynummer">
          <a href="tel:${person.handyNummer}">${person.handyNummer}</a>
        </div>
        <div class="adresse">
          <a href=${gmap}>${person.add}</a>
        </div>`;
}
// ===============================
// VŨ TRỤ SINH NHẬT
// ===============================


// ===============================
// DANH SÁCH THÀNH VIÊN
// ===============================

const MEMBERS = [
  { code: "VTN",  date: "02/09" },
  { code: "PHNH", date: "03/09" },
  { code: "BTNB", date: "13/09" },
  { code: "ĐTTH", date: "05/09" },
  { code: "NNHT", date: "25/09" },
  { code: "NTTV", date: "16/10" },
  { code: "NTTH", date: "11/10" },
  { code: "TTH",  date: "20/10" },
  { code: "NMT",  date: "31/10" },
  { code: "TTL",  date: "09/10" },
  { code: "PHL",  date: "10/10" },
  { code: "NTC",  date: "10/10" },
  { code: "PTH",  date: "18/10" },
  { code: "NTTT", date: "18/10" },
  { code: "BTG",  date: "20/10" }
];


// ===============================
// THÔNG TIN CÁC NGÔI SAO
// ===============================

const STAR_DATA = {

  "02/09": {
    title: "Một điểm sáng trong tháng Chín",
    message:
      "Một hành trình mới lại bắt đầu. Chúc bạn thêm một vòng quanh Mặt Trời thật nhiều điều đáng nhớ."
  },

  "03/09": {
    title: "Một điểm sáng trong tháng Chín",
    message:
      "Mỗi năm đi qua là một câu chuyện mới. Chúc bạn luôn tìm thấy những điều khiến mình muốn tiến về phía trước."
  },

  "05/09": {
    title: "Một điểm sáng trong tháng Chín",
    message:
      "Giữa rất nhiều vì sao, hôm nay vũ trụ có một điểm sáng dành riêng cho bạn."
  },

  "13/09": {
    title: "Một điểm sáng trong tháng Chín",
    message:
      "Chúc bạn thêm một tuổi mới với những cuộc gặp gỡ đẹp, những trải nghiệm đáng nhớ và thật nhiều khoảnh khắc bình yên."
  },

  "25/09": {
    title: "Một điểm sáng trong tháng Chín",
    message:
      "Thêm một vòng quanh Mặt Trời, thêm một chương mới. Chúc chương tiếp theo thật đáng để nhớ."
  },

  "09/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Chúc bạn luôn có đủ ánh sáng để nhìn thấy những điều tốt đẹp đang hiện diện quanh mình."
  },

  "10/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Vũ trụ rộng lớn, nhưng hôm nay vẫn có một điểm sáng nhỏ dành riêng cho bạn."
  },

  "11/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Chúc hành trình mới của bạn có thêm nhiều điều bất ngờ, nhiều niềm vui và những người đồng hành đáng quý."
  },

  "16/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Một vòng quanh Mặt Trời nữa đã hoàn thành. Chúc bạn tiếp tục có những quỹ đạo thật đẹp của riêng mình."
  },

  "18/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Có những ngày chỉ là một dấu mốc trên lịch. Và có những ngày khiến cả một nhóm người muốn gửi lời chúc đến bạn."
  },

  "20/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Hôm nay, vũ trụ đặc biệt dành một khoảng trời để đánh dấu ngày của bạn."
  },

  "31/10": {
    title: "Một điểm sáng trong tháng Mười",
    message:
      "Một ngày đặc biệt giữa những ngày cuối tháng. Chúc bạn bước vào vòng quay mới với thật nhiều điều đáng mong đợi."
  }

};


// ===============================
// TRẠNG THÁI NGƯỜI CHƠI
// ===============================

const player = {

  code: "",

  date: "",

  character: "",

  x: 50,

  y: 85,

  speed: 0.65,

  searchingSince: null,

  currentSignal: null,

  unlocked: false

};


// ===============================
// LẤY CÁC PHẦN TỬ HTML
// ===============================

const introScreen =
  document.getElementById("introScreen");

const formScreen =
  document.getElementById("formScreen");

const characterScreen =
  document.getElementById("characterScreen");

const gameScreen =
  document.getElementById("gameScreen");

const revealScreen =
  document.getElementById("revealScreen");


const startButton =
  document.getElementById("startButton");

const continueToCharacter =
  document.getElementById("continueToCharacter");

const enterGalaxyButton =
  document.getElementById("enterGalaxy");


const playerNameInput =
  document.getElementById("playerName");

const birthDayInput =
  document.getElementById("birthDay");

const birthMonthInput =
  document.getElementById("birthMonth");

const hudPlayerName =
  document.getElementById("hudPlayerName");


const characterButtons =
  document.querySelectorAll(".character-option");

const birthdayStars =
  document.querySelectorAll(".birthday-star");


const signalModal =
  document.getElementById("signalModal");

const signalTitle =
  document.getElementById("signalTitle");

const signalMessage =
  document.getElementById("signalMessage");

const checkSignal =
  document.getElementById("checkSignal");

const closeSignal =
  document.getElementById("closeSignal");


const revealTitle =
  document.getElementById("revealTitle");

const revealDate =
  document.getElementById("revealDate");

const revealMessage =
  document.getElementById("revealMessage");


const restartButton =
  document.getElementById("restartButton");


// ===============================
// CHUYỂN MÀN HÌNH
// ===============================

function showScreen(screen) {

  document.querySelectorAll(".screen").forEach(function(item) {

    item.classList.remove("active");

  });

  screen.classList.add("active");
}


// ===============================
// CHUẨN HÓA MÃ
// ===============================

function normalizeCode(value) {

  return value.trim().toUpperCase();

}


// ===============================
// NÚT BẮT ĐẦU
// ===============================

startButton.addEventListener("click", function() {

  showScreen(formScreen);

});


// ===============================
// KIỂM TRA THÔNG TIN NGƯỜI CHƠI
// ===============================

continueToCharacter.addEventListener("click", function() {

  const code =
    normalizeCode(playerNameInput.value);

  const dayValue =
    birthDayInput.value;

  const monthValue =
    birthMonthInput.value;


  // Kiểm tra bỏ trống

  if (
    !code ||
    !dayValue ||
    !monthValue
  ) {

    alert(
      "Vui lòng nhập đầy đủ mã ký hiệu, ngày và tháng sinh."
    );

    return;
  }


  // Chuyển sang số để kiểm tra

  const dayNumber =
    Number(dayValue);

  const monthNumber =
    Number(monthValue);


  // Kiểm tra ngày

  if (
    !Number.isInteger(dayNumber) ||
    dayNumber < 1 ||
    dayNumber > 31
  ) {

    alert(
      "Ngày sinh chưa hợp lệ. Vui lòng kiểm tra lại."
    );

    return;
  }


  // Kiểm tra tháng

  if (
    !Number.isInteger(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12
  ) {

    alert(
      "Tháng sinh chưa hợp lệ. Vui lòng kiểm tra lại."
    );

    return;
  }


  // Chuẩn hóa thành DD/MM

  const day =
    String(dayNumber).padStart(2, "0");

  const month =
    String(monthNumber).padStart(2, "0");

  const date =
    day + "/" + month;


  // Tìm thành viên tương ứng

  const member =
    MEMBERS.find(function(item) {

      return (
        item.code === code &&
        item.date === date
      );

    });


  // Không tìm thấy

  if (!member) {

    alert(
      "Thông tin chưa khớp với danh sách hành trình. Bạn hãy kiểm tra lại mã ký hiệu và ngày sinh."
    );

    return;
  }


  // Lưu thông tin người chơi

  player.code =
    code;

  player.date =
    date;


  // Sang màn hình chọn nhân vật

  showScreen(characterScreen);

});


// ===============================
// CHỌN NHÂN VẬT
// ===============================

characterButtons.forEach(function(button) {

  button.addEventListener("click", function() {


    // Bỏ trạng thái chọn cũ

    characterButtons.forEach(function(item) {

      item.classList.remove("selected");

    });


    // Chọn nhân vật hiện tại

    button.classList.add("selected");


    // Lưu nhân vật

    player.character =
      button.dataset.character;


    // Cho phép vào vũ trụ

    enterGalaxyButton.disabled =
      false;

  });

});


// ===============================
// VÀO VŨ TRỤ
// ===============================

enterGalaxyButton.addEventListener("click", function() {


  if (!player.character) {

    alert(
      "Hãy chọn một người bạn đồng hành trước khi tiếp tục."
    );

    return;
  }


  // Đặt lại vị trí ban đầu

  player.x =
    50;

  player.y =
    85;


  // Bắt đầu tính thời gian khám phá

  player.searchingSince =
    Date.now();


  // Xóa trạng thái cũ

  player.currentSignal =
    null;

  player.unlocked =
    false;


  // Hiển thị mã người chơi

  hudPlayerName.textContent =
    player.code;


  // Tạo nền sao

  createBackgroundStars();


  // Cập nhật vị trí nhân vật

  updatePlayerPosition();


  // Vào game

  showScreen(gameScreen);

});


// ===============================
// TẠO SAO NỀN
// ===============================

function createBackgroundStars() {

  const container =
    document.getElementById("backgroundStars");


  if (!container) {

    return;
  }


  container.innerHTML =
    "";


  for (
    let i = 0;
    i < 140;
    i++
  ) {

    const star =
      document.createElement("span");


    star.className =
      "background-star";


    star.style.left =
      Math.random() * 100 + "%";


    star.style.top =
      Math.random() * 100 + "%";


    const size =
      Math.random() * 3 + 1;


    star.style.width =
      size + "px";


    star.style.height =
      size + "px";


    star.style.opacity =
      Math.random() * 0.7 + 0.2;


    container.appendChild(star);

  }

}


// ===============================
// CẬP NHẬT VỊ TRÍ NGƯỜI CHƠI
// ===============================

function updatePlayerPosition() {

  const playerElement =
    document.getElementById("player");


  if (!playerElement) {

    return;
  }


  playerElement.style.left =
    player.x + "%";


  playerElement.style.top =
    player.y + "%";

}


// ===============================
// ĐIỀU KHIỂN DI CHUYỂN
// ===============================

const keys = {};


// Nhấn phím

window.addEventListener("keydown", function(event) {

  keys[event.key.toLowerCase()] =
    true;


  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {

    event.preventDefault();

  }

});


// Nhả phím

window.addEventListener("keyup", function(event) {

  keys[event.key.toLowerCase()] =
    false;

});


// ===============================
// VÒNG LẶP GAME
// ===============================

function gameLoop() {

  let moved =
    false;


  // Đi lên

  if (
    keys["arrowup"] ||
    keys["w"]
  ) {

    player.y -=
      player.speed;

    moved =
      true;

  }


  // Đi xuống

  if (
    keys["arrowdown"] ||
    keys["s"]
  ) {

    player.y +=
      player.speed;

    moved =
      true;

  }


  // Đi trái

  if (
    keys["arrowleft"] ||
    keys["a"]
  ) {

    player.x -=
      player.speed;

    moved =
      true;

  }


  // Đi phải

  if (
    keys["arrowright"] ||
    keys["d"]
  ) {

    player.x +=
      player.speed;

    moved =
      true;

  }


  // Không cho đi ra ngoài bản đồ

  player.x =
    Math.max(
      2,
      Math.min(98, player.x)
    );


  player.y =
    Math.max(
      2,
      Math.min(98, player.y)
    );


  // Nếu người chơi đang di chuyển

  if (moved) {

    player.searchingSince =
      player.searchingSince ||
      Date.now();


    updatePlayerPosition();

    checkNearbyStars();

  }


  requestAnimationFrame(
    gameLoop
  );

}


// Bắt đầu vòng lặp

gameLoop();


// ===============================
// KIỂM TRA SAO GẦN NGƯỜI CHƠI
// ===============================

function checkNearbyStars() {

  birthdayStars.forEach(function(star) {


    // Sao đã kiểm tra rồi
    // → không bao giờ phát tín hiệu lại

    if (
      star.dataset.checked === "true"
    ) {

      return;
    }


    const starX =
      parseFloat(
        star.style.left
      );


    const starY =
      parseFloat(
        star.style.top
      );


    const dx =
      player.x - starX;


    const dy =
      player.y - starY;


    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );


    // Chỉ khi thật sự chạm rất gần

    if (
      distance < 2.2
    ) {

      triggerSignal(star);

    }

  });

}


// ===============================
// HIỆN TÍN HIỆU
// ===============================

function triggerSignal(star) {


  // Nếu modal đang mở
  // → không mở thêm tín hiệu khác

  if (
    signalModal.classList.contains("active")
  ) {

    return;
  }


  // Lưu sao hiện tại

  player.currentSignal =
    star;


  // Nội dung mặc định

  signalTitle.textContent =
    "Phát hiện tín hiệu";


  signalMessage.textContent =
    "Có một tín hiệu đang ở rất gần bạn. Bạn có muốn kiểm tra không?";


  // Hiện nút kiểm tra

  checkSignal.style.display =
    "block";


  // Mở modal

  signalModal.classList.add(
    "active"
  );

}


// ===============================
// ĐÓNG TÍN HIỆU
// ===============================

closeSignal.addEventListener("click", function() {


  signalModal.classList.remove(
    "active"
  );


  player.currentSignal =
    null;

});


// ===============================
// KIỂM TRA TÍN HIỆU
// ===============================

checkSignal.addEventListener("click", function() {


  // Lấy ngôi sao hiện tại

  const star =
    player.currentSignal;


  // Không có sao
  // → dừng

  if (!star) {

    return;
  }


  // Lấy ngày của ngôi sao

  const starDate =
    star.dataset.date;


  // Tìm thành viên hiện tại

  const matchedMember =
    MEMBERS.find(function(member) {

      return (
        member.code === player.code &&
        member.date === player.date
      );

    });


  // =============================
  // TÍN HIỆU ĐÚNG
  // =============================

  if (
    matchedMember &&
    starDate === player.date
  ) {


    // Đánh dấu sao đã kiểm tra

    star.dataset.checked =
      "true";


    // Đánh dấu đây là sao đúng

    star.dataset.found =
      "true";


    // Đổi giao diện sao

    star.classList.add(
      "found"
    );


    // Người chơi đã mở khóa

    player.unlocked =
      true;


    // Đóng modal

    signalModal.classList.remove(
      "active"
    );


    // Xóa tín hiệu hiện tại

    player.currentSignal =
      null;


    // Sau một khoảng ngắn
    // chuyển sang màn hình chúc mừng

    setTimeout(function() {

      showReveal(starDate);

    }, 500);


    return;
  }


  // =============================
  // TÍN HIỆU SAI
  // =============================

  signalTitle.textContent =
    "Tín hiệu không dành cho bạn";


  signalMessage.textContent =
    "Điểm sáng này không thuộc về hành trình của bạn. Bạn đã kiểm tra điểm này rồi.";


  // Ẩn nút kiểm tra

  checkSignal.style.display =
    "none";


  // Đánh dấu sao đã được kiểm tra

  star.dataset.checked =
    "true";


  // Đánh dấu sao sai

  star.classList.add(
    "checked"
  );


  // Biến ngôi sao thành dấu X

  star.textContent =
    "×";


  // Xóa tín hiệu hiện tại

  player.currentSignal =
    null;

});


// ===============================
// MỞ KHÓA SINH NHẬT
// ===============================

function showReveal(date) {

  const data =
    STAR_DATA[date];


  if (!data) {

    return;
  }


  revealTitle.textContent =
    data.title;


  revealDate.textContent =
    date;


  revealMessage.textContent =
    data.message;


  showScreen(
    revealScreen
  );

}


// ===============================
// NÚT CHƠI LẠI
// ===============================

restartButton.addEventListener("click", function() {

  window.location.reload();

});

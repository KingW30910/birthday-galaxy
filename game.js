// ===============================
// VŨ TRỤ SINH NHẬT
// ===============================

// Danh sách thành viên
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


// Thông tin các ngôi sao
const STAR_DATA = {
  "02/09": {
    title: "Một điểm sáng trong tháng Chín",
    message: "Một hành trình mới lại bắt đầu. Chúc bạn thêm một vòng quanh Mặt Trời thật nhiều điều đáng nhớ."
  },

  "03/09": {
    title: "Một điểm sáng trong tháng Chín",
    message: "Mỗi năm đi qua là một câu chuyện mới. Chúc bạn luôn tìm thấy những điều khiến mình muốn tiến về phía trước."
  },

  "05/09": {
    title: "Một điểm sáng trong tháng Chín",
    message: "Giữa rất nhiều vì sao, hôm nay vũ trụ có một điểm sáng dành riêng cho bạn."
  },

  "13/09": {
    title: "Một điểm sáng trong tháng Chín",
    message: "Chúc bạn thêm một tuổi mới với những cuộc gặp gỡ đẹp, những trải nghiệm đáng nhớ và thật nhiều khoảnh khắc bình yên."
  },

  "25/09": {
    title: "Một điểm sáng trong tháng Chín",
    message: "Thêm một vòng quanh Mặt Trời, thêm một chương mới. Chúc chương tiếp theo thật đáng để nhớ."
  },

  "09/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Chúc bạn luôn có đủ ánh sáng để nhìn thấy những điều tốt đẹp đang hiện diện quanh mình."
  },

  "10/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Vũ trụ rộng lớn, nhưng hôm nay vẫn có một điểm sáng nhỏ dành riêng cho bạn."
  },

  "11/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Chúc hành trình mới của bạn có thêm nhiều điều bất ngờ, nhiều niềm vui và những người đồng hành đáng quý."
  },

  "16/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Một vòng quanh Mặt Trời nữa đã hoàn thành. Chúc bạn tiếp tục có những quỹ đạo thật đẹp của riêng mình."
  },

  "18/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Có những ngày chỉ là một dấu mốc trên lịch. Và có những ngày khiến cả một nhóm người muốn gửi lời chúc đến bạn."
  },

  "20/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Hôm nay, vũ trụ đặc biệt dành một khoảng trời để đánh dấu ngày của bạn."
  },

  "31/10": {
    title: "Một điểm sáng trong tháng Mười",
    message: "Một ngày đặc biệt giữa những ngày cuối tháng. Chúc bạn bước vào vòng quay mới với thật nhiều điều đáng mong đợi."
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

const introScreen = document.getElementById("introScreen");
const formScreen = document.getElementById("formScreen");
const characterScreen = document.getElementById("characterScreen");
const gameScreen = document.getElementById("gameScreen");
const revealScreen = document.getElementById("revealScreen");

const startButton = document.getElementById("startButton");
const continueToCharacter = document.getElementById("continueToCharacter");
const enterGalaxyButton = document.getElementById("enterGalaxy");

const playerNameInput = document.getElementById("playerName");
const birthDayInput = document.getElementById("birthDay");
const birthMonthInput = document.getElementById("birthMonth");
const hudPlayerName = document.getElementById("hudPlayerName");

const characterButtons = document.querySelectorAll(".character-option");
const birthdayStars = document.querySelectorAll(".birthday-star");

const signalModal = document.getElementById("signalModal");
const signalTitle = document.getElementById("signalTitle");
const signalMessage = document.getElementById("signalMessage");

const checkSignal = document.getElementById("checkSignal");
const closeSignal = document.getElementById("closeSignal");

const revealTitle = document.getElementById("revealTitle");
const revealDate = document.getElementById("revealDate");
const revealMessage = document.getElementById("revealMessage");

const restartButton = document.getElementById("restartButton");


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
// LẤY NGÀY THÁNG TỪ INPUT DATE
// ===============================

function getBirthday(value) {
  if (!value) {
    return "";
  }

  const parts = value.split("-");

  if (parts.length !== 3) {
    return "";
  }

  const month = parts[1];
  const day = parts[2];

  return day + "/" + month;
}


// ===============================
// NÚT BẮT ĐẦU
// ===============================

startButton.addEventListener("click", function() {
  showScreen(formScreen);
});


// ===============================
// KIỂM TRA THÔNG TIN
// ===============================

continueToCharacter.addEventListener("click", function() {

const code = normalizeCode(playerNameInput.value);

const day = birthDayInput.value;
const month = birthMonthInput.value;

const date = day && month
  ? day + "/" + month
  : "";
  if (!code || !date) {
    alert("Vui lòng nhập đầy đủ mã ký hiệu và ngày sinh.");
    return;
  }

  const member = MEMBERS.find(function(item) {
    return item.code === code && item.date === date;
  });

  if (!member) {
    alert("Thông tin chưa khớp với danh sách hành trình. Bạn hãy kiểm tra lại mã ký hiệu và ngày sinh.");
    return;
  }

  player.code = code;
  player.date = date;

  showScreen(characterScreen);
});

// ===============================
// CHỌN NHÂN VẬT
// ===============================

characterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Bỏ trạng thái đã chọn của các nhân vật khác
    characterButtons.forEach(function(item) {
      item.classList.remove("selected");
    });

    // Đánh dấu nhân vật hiện tại
    button.classList.add("selected");

    // Lưu nhân vật
    player.character = button.dataset.character;

    // Cho phép vào vũ trụ
    enterGalaxyButton.disabled = false;

  });

});

// ===============================
// VÀO VŨ TRỤ
// ===============================

enterGalaxyButton.addEventListener("click", function() {

  if (!player.character) {
    alert("Hãy chọn một người bạn đồng hành trước khi tiếp tục.");
    return;
  }

  player.x = 50;
  player.y = 85;
  player.searchingSince = Date.now();

  hudPlayerName.textContent = player.code;

  createBackgroundStars();
  updatePlayerPosition();

  showScreen(gameScreen);

});


// ===============================
// TẠO SAO NỀN
// ===============================

function createBackgroundStars() {

  const container = document.getElementById("backgroundStars");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < 140; i++) {

    const star = document.createElement("span");

    star.className = "background-star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.opacity = Math.random() * 0.7 + 0.2;

    container.appendChild(star);
  }
}


// ===============================
// CẬP NHẬT VỊ TRÍ NGƯỜI CHƠI
// ===============================

function updatePlayerPosition() {

  const playerElement = document.getElementById("player");

  if (!playerElement) {
    return;
  }

  playerElement.style.left = player.x + "%";
  playerElement.style.top = player.y + "%";
}


// ===============================
// DI CHUYỂN
// ===============================

const keys = {};

window.addEventListener("keydown", function(event) {

  keys[event.key.toLowerCase()] = true;

  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    event.preventDefault();
  }

});

window.addEventListener("keyup", function(event) {
  keys[event.key.toLowerCase()] = false;
});


function gameLoop() {

  let moved = false;

  if (keys["arrowup"] || keys["w"]) {
    player.y -= player.speed;
    moved = true;
  }

  if (keys["arrowdown"] || keys["s"]) {
    player.y += player.speed;
    moved = true;
  }

  if (keys["arrowleft"] || keys["a"]) {
    player.x -= player.speed;
    moved = true;
  }

  if (keys["arrowright"] || keys["d"]) {
    player.x += player.speed;
    moved = true;
  }

  player.x = Math.max(2, Math.min(98, player.x));
  player.y = Math.max(2, Math.min(98, player.y));

  if (moved) {
    player.searchingSince = player.searchingSince || Date.now();

    updatePlayerPosition();
    checkNearbyStars();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();


// ===============================
// KIỂM TRA SAO GẦN NGƯỜI CHƠI
// ===============================

function checkNearbyStars() {

  birthdayStars.forEach(function(star) {

    if (star.dataset.found === "true") {
      return;
    }

    const starX = parseFloat(star.style.left);
    const starY = parseFloat(star.style.top);

    const dx = player.x - starX;
    const dy = player.y - starY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 6) {
      triggerSignal(star);
    }

  });

}


// ===============================
// HIỆN TÍN HIỆU
// ===============================

function triggerSignal(star) {

  if (signalModal.classList.contains("active")) {
    return;
  }

  player.currentSignal = star;

  signalTitle.textContent = "Phát hiện tín hiệu";

  signalMessage.textContent =
    "Có một tín hiệu đang ở rất gần bạn. Bạn có muốn kiểm tra không?";

  checkSignal.style.display = "block";

  signalModal.classList.add("active");
}


// ===============================
// ĐÓNG TÍN HIỆU
// ===============================

closeSignal.addEventListener("click", function() {

  signalModal.classList.remove("active");

  player.currentSignal = null;

});


// ===============================
// KIỂM TRA TÍN HIỆU
// ===============================

checkSignal.addEventListener("click", function() {

  const star = player.currentSignal;

  if (!star) {
    return;
  }

  const starDate = star.dataset.date;

  const matchedMember = MEMBERS.find(function(member) {
    return member.code === player.code && member.date === player.date;
  });

  if (matchedMember && starDate === player.date) {

    star.dataset.found = "true";
    star.classList.add("found");

    player.unlocked = true;

    signalModal.classList.remove("active");

    setTimeout(function() {
      showReveal(starDate);
    }, 500);

  } else {

    signalTitle.textContent = "Tín hiệu không dành cho bạn";

    signalMessage.textContent =
      "Bạn đã đến rất gần một điểm sáng, nhưng tín hiệu này không thuộc về hành trình của bạn. Hãy tiếp tục khám phá.";

    checkSignal.style.display = "none";

  }

});


// ===============================
// MỞ KHÓA SINH NHẬT
// ===============================

function showReveal(date) {

  const data = STAR_DATA[date];

  if (!data) {
    return;
  }

  revealTitle.textContent = data.title;
  revealDate.textContent = date;
  revealMessage.textContent = data.message;

  showScreen(revealScreen);
}


// ===============================
// NÚT CHƠI LẠI
// ===============================

restartButton.addEventListener("click", function() {
  window.location.reload();
});

console.log("Vũ trụ sinh nhật đã khởi động.");
```javascript
/* =========================================================
   VŨ TRỤ SINH NHẬT
   Another Year Around the Sun

   PHIÊN BẢN:
   - Người chơi nhập MÃ KÝ HIỆU
   - Nhập NGÀY SINH
   - Hệ thống đối chiếu mã + ngày/tháng
   - Không sử dụng năm sinh trong game
   - Xử lý được ngày sinh trùng nhau
========================================================= */


/* =========================================================
   1. DANH SÁCH THÀNH VIÊN

   ⚠️ Đây là dữ liệu dùng để xác nhận người chơi.

   Chỉ lưu:
   - mã ký hiệu
   - ngày/tháng

   KHÔNG lưu năm sinh.
========================================================= */

const MEMBERS = [

  { code: "VTN",   date: "02/09" },
  { code: "PHNH",  date: "03/09" },
  { code: "BTNB",  date: "13/09" },
  { code: "ĐTTH",  date: "05/09" },
  { code: "NNHT",  date: "25/09" },

  { code: "NTTV",  date: "16/10" },
  { code: "NTTH",  date: "11/10" },
  { code: "TTH",   date: "20/10" },
  { code: "NMT",   date: "31/10" },
  { code: "TTL",   date: "09/10" },

  { code: "PHL",   date: "10/10" },
  { code: "NTC",   date: "10/10" },

  { code: "PTH",   date: "18/10" },
  { code: "NTTT",  date: "18/10" },

  { code: "BTG",   date: "20/10" }

];


/* =========================================================
   2. THÔNG TIN CÁC ĐIỂM SÁNG

   Trên bản đồ KHÔNG hiển thị ngày sinh.
========================================================= */

const STAR_DATA = {

  "02/09": {
    title: "Một điểm sáng đã được đánh thức.",
    message:
      "Tín hiệu này mang theo dấu vết của một ngày đặc biệt."
  },

  "03/09": {
    title: "Một tín hiệu đang chờ bạn.",
    message:
      "Có vẻ như vũ trụ vừa gửi đến bạn một lời nhắn."
  },

  "13/09": {
    title: "Bạn đang đến rất gần.",
    message:
      "Một điểm sáng đang phát tín hiệu từ phía trước."
  },

  "05/09": {
    title: "Tín hiệu được phát hiện.",
    message:
      "Có một điều đặc biệt đang chờ được mở khóa."
  },

  "25/09": {
    title: "Một điểm sáng trong tầm quan sát.",
    message:
      "Hãy kiểm tra xem tín hiệu này có thuộc về bạn không."
  },

  "16/10": {
    title: "Tín hiệu đang đến gần.",
    message:
      "Không gian quanh bạn vừa xuất hiện một tín hiệu lạ."
  },

  "11/10": {
    title: "Phát hiện tín hiệu.",
    message:
      "Có một điểm sáng đang cố gắng liên lạc với bạn."
  },

  "20/10": {
    title: "Một tín hiệu đặc biệt.",
    message:
      "Có lẽ bạn vừa tìm thấy một điều dành riêng cho mình."
  },

  "31/10": {
    title: "Điểm sáng đã được phát hiện.",
    message:
      "Tín hiệu này đang chờ bạn xác nhận."
  },

  "09/10": {
    title: "Tín hiệu trong vùng không gian.",
    message:
      "Một ngày đặc biệt đang ẩn đâu đó trong vũ trụ này."
  },

  "10/10": {
    title: "Tín hiệu kép được phát hiện.",
    message:
      "Có nhiều hơn một câu chuyện bắt đầu từ điểm thời gian này."
  },

  "18/10": {
    title: "Tín hiệu kép được phát hiện.",
    message:
      "Một điểm thời gian, nhưng có thể có nhiều hành trình."
  }

};


/* =========================================================
   3. TRẠNG THÁI NGƯỜI CHƠI
========================================================= */

let player = {

  code: "",
  date: "",

  character: null,

  x: 50,
  y: 85,

  speed: 0.65,

  searchingSince: null,

  currentSignal: null,

  unlocked: false

};


/* =========================================================
   4. CÁC PHẦN TỬ HTML
========================================================= */

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

const enterGalaxy =
  document.getElementById("enterGalaxy");


const playerNameInput =
  document.getElementById("playerName");

const playerBirthdayInput =
  document.getElementById("playerBirthday");


const characterButtons =
  document.querySelectorAll(".character");


const playerElement =
  document.getElementById("player");

const hudPlayerName =
  document.getElementById("hudPlayerName");


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


/* =========================================================
   5. HÀM CHUẨN HÓA MÃ KÝ HIỆU

   Ví dụ:

   "vtn"     → "VTN"
   " VTN "   → "VTN"
   "Vtn"     → "VTN"
========================================================= */

function normalizeCode(value) {

  return value
    .trim()
    .toUpperCase();

}


/* =========================================================
   6. CHUYỂN MÀN HÌNH
========================================================= */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(item => {

      item.classList.remove("active");

    });

  screen.classList.add("active");

}


/* =========================================================
   7. TẠO SAO NỀN
========================================================= */

function createBackgroundStars() {

  const container =
    document.getElementById(
      "backgroundStars"
    );

  if (!container) return;


  container.innerHTML = "";


  const numberOfStars = 180;


  for (
    let i = 0;
    i < numberOfStars;
    i++
  ) {

    const star =
      document.createElement("div");


    star.className =
      "space-star";


    star.style.left =
      Math.random() * 100 + "%";


    star.style.top =
      Math.random() * 100 + "%";


    const size =
      Math.random() * 2.5 + 1;


    star.style.width =
      size + "px";


    star.style.height =
      size + "px";


    star.style.animationDelay =
      Math.random() * 4 + "s";


    container.appendChild(star);

  }

}


/* =========================================================
   8. BẮT ĐẦU
========================================================= */

startButton.addEventListener(
  "click",
  () => {

    showScreen(formScreen);

  }
);


/* =========================================================
   9. NHẬP MÃ + NGÀY SINH
========================================================= */

continueToCharacter.addEventListener(
  "click",
  () => {

    /*
      Lấy mã ký hiệu
    */

    const code =
      normalizeCode(
        playerNameInput.value
      );


    /*
      Lấy ngày sinh
    */

    const dateValue =
      playerBirthdayInput.value;


    /* -----------------------------------------
       Kiểm tra mã
    ----------------------------------------- */

    if (!code) {

      alert(
        "Hãy nhập mã ký hiệu của bạn."
      );

      playerNameInput.focus();

      return;

    }


    /* -----------------------------------------
       Kiểm tra ngày sinh
    ----------------------------------------- */

    if (!dateValue) {

      alert(
        "Hãy chọn ngày sinh của bạn."
      );

      playerBirthdayInput.focus();

      return;

    }


    /*
      input type="date":

      YYYY-MM-DD

      Ví dụ:

      2001-10-10

      Chúng ta chỉ lấy:

      10/10
    */

    const parts =
      dateValue.split("-");


    const month =
      parts[1];


    const day =
      parts[2];


    const formattedDate =
      `${day}/${month}`;


    /* -----------------------------------------
       Lưu trạng thái
    ----------------------------------------- */

    player.code =
      code;


    player.date =
      formattedDate;


    console.log(
      "Mã người chơi:",
      player.code
    );


    console.log(
      "Ngày sinh:",
      player.date
    );


    /* -----------------------------------------
       KIỂM TRA MÃ + NGÀY

       Đây là bước xác nhận trước khi vào game.
    ----------------------------------------- */

    const matchedMember =
      MEMBERS.find(
        member =>

          member.code ===
          player.code &&

          member.date ===
          player.date
      );


    if (!matchedMember) {

      alert(
        "Thông tin chưa khớp với danh sách hành trình. Hãy kiểm tra lại mã ký hiệu và ngày sinh."
      );

      return;

    }


    /*
      Nếu khớp → chuyển sang chọn nhân vật
    */

    showScreen(
      characterScreen
    );

  }
);


/* =========================================================
   10. CHỌN NHÂN VẬT
========================================================= */

characterButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        characterButtons.forEach(
          item => {

            item.classList.remove(
              "selected"
            );

          }
        );


        button.classList.add(
          "selected"
        );


        player.character =
          button.dataset.character;


        enterGalaxy.disabled =
          false;

      }
    );

  }
);


/* =========================================================
   11. BƯỚC VÀO VŨ TRỤ
========================================================= */

enterGalaxy.addEventListener(
  "click",
  () => {

    if (!player.character) {

      alert(
        "Hãy chọn một người bạn đồng hành."
      );

      return;

    }


    /*
      HUD chỉ hiển thị mã ký hiệu.

      Không hiển thị ngày sinh.
    */

    hudPlayerName.textContent =
      player.code;


    /*
      Vị trí ban đầu
    */

    player.x =
      50;

    player.y =
      85;


    updatePlayerPosition();


    /*
      Tạo sao nền
    */

    createBackgroundStars();


    /*
      Bắt đầu tính thời gian tìm kiếm
    */

    player.searchingSince =
      Date.now();


    showScreen(
      gameScreen
    );


    startSearchTimer();

  }
);


/* =========================================================
   12. CẬP NHẬT VỊ TRÍ
========================================================= */

function updatePlayerPosition() {

  playerElement.style.left =
    player.x + "%";

  playerElement.style.top =
    player.y + "%";

}


/* =========================================================
   13. ĐIỀU KHIỂN
========================================================= */

const keys = {};


document.addEventListener(
  "keydown",
  event => {

    keys[
      event.key.toLowerCase()
    ] = true;

  }
);


document.addEventListener(
  "keyup",
  event => {

    keys[
      event.key.toLowerCase()
    ] = false;

  }
);


/* =========================================================
   14. VÒNG LẶP DI CHUYỂN
========================================================= */

function movementLoop() {

  if (
    !gameScreen.classList.contains(
      "active"
    )
  ) {

    requestAnimationFrame(
      movementLoop
    );

    return;

  }


  let moved =
    false;


  /* Lên */

  if (
    keys["w"] ||
    keys["arrowup"]
  ) {

    player.y -=
      player.speed;

    moved =
      true;

  }


  /* Xuống */

  if (
    keys["s"] ||
    keys["arrowdown"]
  ) {

    player.y +=
      player.speed;

    moved =
      true;

  }


  /* Trái */

  if (
    keys["a"] ||
    keys["arrowleft"]
  ) {

    player.x -=
      player.speed;

    moved =
      true;

  }


  /* Phải */

  if (
    keys["d"] ||
    keys["arrowright"]
  ) {

    player.x +=
      player.speed;

    moved =
      true;

  }


  /*
    Giới hạn bản đồ
  */

  player.x =
    Math.max(
      3,
      Math.min(
        97,
        player.x
      )
    );


  player.y =
    Math.max(
      8,
      Math.min(
        94,
        player.y
      )
    );


  if (moved) {

    updatePlayerPosition();

    checkNearbyStars();

  }


  requestAnimationFrame(
    movementLoop
  );

}


movementLoop();


/* =========================================================
   15. TÍNH KHOẢNG CÁCH
========================================================= */

function calculateDistance(
  playerX,
  playerY,
  starElement
) {

  const starX =
    parseFloat(
      starElement.style.left
    );


  const starY =
    parseFloat(
      starElement.style.top
    );


  const dx =
    playerX -
    starX;


  const dy =
    playerY -
    starY;


  return Math.sqrt(
    dx * dx +
    dy * dy
  );

}


/* =========================================================
   16. KIỂM TRA SAO GẦN NHẤT
========================================================= */

function checkNearbyStars() {

  const stars =
    document.querySelectorAll(
      ".birthday-star"
    );


  let closestStar =
    null;


  let closestDistance =
    Infinity;


  stars.forEach(
    star => {

      /*
        Nếu đã tìm thấy thì bỏ qua.
      */

      if (
        star.dataset.found ===
        "true"
      ) {

        return;

      }


      const distance =
        calculateDistance(
          player.x,
          player.y,
          star
        );


      if (
        distance <
        closestDistance
      ) {

        closestDistance =
          distance;


        closestStar =
          star;

      }

    }
  );


  /*
    Bán kính phát tín hiệu
  */

  const SIGNAL_DISTANCE =
    6;


  if (
    closestStar &&
    closestDistance <=
      SIGNAL_DISTANCE
  ) {

    triggerSignal(
      closestStar
    );

  }

}


/* =========================================================
   17. PHÁT TÍN HIỆU
========================================================= */

function triggerSignal(star) {

  /*
    Không mở nhiều tín hiệu cùng lúc.
  */

  if (
    signalModal.classList.contains(
      "active"
    )
  ) {

    return;

  }


  player.currentSignal =
    star;


  const date =
    star.dataset.date;


  const data =
    STAR_DATA[date];


  signalTitle.textContent =
    data
      ? data.title
      : "Phát hiện tín hiệu";


  signalMessage.textContent =
    data
      ? data.message
      : "Có một tín hiệu đang chờ được xác nhận.";


  signalModal.classList.add(
    "active"
  );

}


/* =========================================================
   18. KIỂM TRA TÍN HIỆU
========================================================= */

checkSignal.addEventListener(
  "click",
  checkCurrentSignal
);


function checkCurrentSignal() {

  const star =
    player.currentSignal;


  if (!star) {

    return;

  }


  const starDate =
    star.dataset.date;


  const playerDate =
    player.date;


  /* =====================================================
     ĐÚNG NGÀY
  ====================================================== */

  if (
    starDate ===
    playerDate
  ) {

    /*
      Xác nhận thêm một lần bằng mã.

      Điều này đặc biệt quan trọng
      với các ngày trùng như:

      10/10
      18/10
      20/10
    */

    const matchedMember =
      MEMBERS.find(
        member =>

          member.code ===
          player.code &&

          member.date ===
          starDate
      );


    if (!matchedMember) {

      showWrongSignal();

      return;

    }


    /*
      Đánh dấu điểm sáng
      đã được tìm thấy.
    */

    star.dataset.found =
      "true";


    star.style.opacity =
      "0.35";


    closeSignalModal();


    unlockBirthday(
      starDate
    );


    return;

  }


  /* =====================================================
     SAI NGÀY
  ====================================================== */

  showWrongSignal();

}


/* =========================================================
   19. TÍN HIỆU KHÔNG ĐÚNG
========================================================= */

function showWrongSignal() {

  signalTitle.textContent =
    "Tín hiệu này không dành cho bạn.";


  signalMessage.textContent =
    "Điểm sáng này thuộc về một ngày khác. Hãy tiếp tục hành trình — tín hiệu của bạn vẫn đang ở đâu đó trong vũ trụ.";


  checkSignal.textContent =
    "TIẾP TỤC KHÁM PHÁ";


  checkSignal.onclick =
    () => {

      checkSignal.textContent =
        "KIỂM TRA TÍN HIỆU";


      checkSignal.onclick =
        checkCurrentSignal;


      closeSignalModal();

    };

}


/* =========================================================
   20. ĐÓNG MODAL
========================================================= */

closeSignal.addEventListener(
  "click",
  () => {

    closeSignalModal();

  }
);


function closeSignalModal() {

  signalModal.classList.remove(
    "active"
  );


  player.currentSignal =
    null;

}


/* =========================================================
   21. MỞ KHÓA SINH NHẬT
========================================================= */

function unlockBirthday(date) {

  player.unlocked =
    true;


  /*
    Lấy thông tin người chơi
    từ mã + ngày.
  */

  const member =
    MEMBERS.find(
      item =>

        item.code ===
        player.code &&

        item.date ===
        date
    );


  /*
    Hiện mã ký hiệu thay vì tên thật.
  */

  const displayCode =
    member
      ? member.code
      : player.code;


  revealTitle.textContent =
    `Đã tìm thấy điểm sáng của ${displayCode}.`;


  revealDate.textContent =
    date;


  revealMessage.textContent =
    `Thêm một vòng quanh Mặt Trời. Một hành trình mới lại bắt đầu — và hôm nay, vũ trụ dành riêng một điểm sáng cho bạn.`;


  setTimeout(
    () => {

      showScreen(
        revealScreen
      );

    },
    500
  );

}


/* =========================================================
   22. GỢI Ý SAU 20 GIÂY
========================================================= */

let hintShown =
  false;


function startSearchTimer() {

  hintShown =
    false;


  player.searchingSince =
    Date.now();


  const timer =
    setInterval(
      () => {

        /*
          Nếu đã rời game
        */

        if (
          !gameScreen.classList.contains(
            "active"
          )
        ) {

          clearInterval(timer);

          return;

        }


        /*
          Nếu đã tìm thấy
        */

        if (
          player.unlocked
        ) {

          clearInterval(timer);

          return;

        }


        const elapsed =
          Date.now() -
          player.searchingSince;


        /*
          Sau 20 giây
        */

        if (
          elapsed >= 20000 &&
          !hintShown
        ) {

          showSearchHint();

          hintShown =
            true;

        }

      },
      1000
    );

}


/* =========================================================
   23. GỢI Ý HƯỚNG ĐI
========================================================= */

function showSearchHint() {

  const targetStars =
    document.querySelectorAll(
      ".birthday-star"
    );


  let targetStar =
    null;


  /*
    Tìm điểm sáng đúng ngày.

    Không hiển thị ngày.
  */

  targetStars.forEach(
    star => {

      if (
        star.dataset.date ===
        player.date
      ) {

        targetStar =
          star;

      }

    }
  );


  if (!targetStar) {

    return;

  }


  const starX =
    parseFloat(
      targetStar.style.left
    );


  const starY =
    parseFloat(
      targetStar.style.top
    );


  const dx =
    starX -
    player.x;


  const dy =
    starY -
    player.y;


  let direction =
    "";


  if (
    Math.abs(dx) > 4
  ) {

    direction +=
      dx > 0
        ? "về phía bên phải"
        : "về phía bên trái";

  }


  if (
    Math.abs(dy) > 4
  ) {

    if (direction) {

      direction +=
        " và ";

    }


    direction +=
      dy > 0
        ? "xuống phía dưới"
        : "lên phía trên";

  }


  if (!direction) {

    direction =
      "ngay quanh khu vực bạn đang đứng";

  }


  signalTitle.textContent =
    "Một tín hiệu yếu vừa được ghi nhận.";


  signalMessage.textContent =
    `Có vẻ tín hiệu của bạn nằm ${direction}. Hãy tiếp tục quan sát các điểm sáng xung quanh.`;


  signalModal.classList.add(
    "active"
  );


  /*
    Đây chỉ là GỢI Ý.

    Không cho kiểm tra tín hiệu
    trong trường hợp này.
  */

  checkSignal.style.display =
    "none";


  closeSignal.textContent =
    "TIẾP TỤC TÌM KIẾM";


  closeSignal.onclick =
    () => {

      signalModal.classList.remove(
        "active"
      );


      checkSignal.style.display =
        "";


      closeSignal.textContent =
        "TIẾP TỤC KHÁM PHÁ";


      closeSignal.onclick =
        () => {

          closeSignalModal();

        };

    };

}


/* =========================================================
   24. CHƠI LẠI
========================================================= */

restartButton.addEventListener(
  "click",
  () => {

    location.reload();

  }
);


/* =========================================================
   25. LOG KIỂM TRA
========================================================= */

console.log(
  "🌌 Vũ trụ sinh nhật đã khởi động."
);


console.log(
  "Số hành trình:",
  MEMBERS.length
);


console.log(
  "Các mã đã được thiết lập:",
  MEMBERS.map(
    member => member.code
  )
);
```

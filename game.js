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
    title: "Ngôi sao của bạn",
    object: "Hubble Ultra Deep Field",
    science:
      "Một vùng trời cực sâu chứa hàng nghìn thiên hà, trong đó có những thiên hà được nhìn thấy ở thời điểm rất xa trong quá khứ. Hubble đã quan sát khu vực này trong năm 2009.",
    distance:
      "Có những thiên hà cách chúng ta tới khoảng 13 tỷ năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/september-2.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "03/09": {
    title: "Ngôi sao của bạn",
    object: "Galaxy HUDF-JD2",
    science:
      "Một ứng viên thiên hà ở rất xa trong vùng Hubble Ultra Deep Field. Ánh sáng từ thiên thể này đã mất khoảng 13 tỷ năm để đến với chúng ta.",
    distance:
      "Khoảng 13 tỷ năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/september-3.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "05/09": {
    title: "Ngôi sao của bạn",
    object: "Hubble Ultra Deep Field",
    science:
      "Một vùng trời sâu nơi Hubble ghi lại vô số thiên hà mờ nhạt nằm rải rác trên nền không gian tối. Đây là một trong những kiểu quan sát cho thấy vũ trụ rộng lớn đến mức nào.",
    distance:
      "Có những thiên hà cách chúng ta tới khoảng 13 tỷ năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/september-5.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "13/09": {
    title: "Ngôi sao của bạn",
    object: "Arches Cluster",
    science:
      "Một cụm sao trẻ và cực kỳ đồ sộ nằm gần trung tâm Ngân Hà. Hàng nghìn ngôi sao tập trung trong một vùng không gian tương đối nhỏ.",
    distance:
      "Khoảng 25.000 năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/september-13.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "25/09": {
    title: "Ngôi sao của bạn",
    object: "Galaxy NGC 1132",
    science:
      "Một thiên hà elip khổng lồ nằm trong một hệ hóa thạch — dấu vết còn lại của quá trình nhiều thiên hà nhỏ hợp nhất trong lịch sử vũ trụ.",
    distance:
      "Khoảng 320 triệu năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/september-25.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "09/10": {
    title: "Ngôi sao của bạn",
    object: "Galaxy Cluster Abell 2667",
    science:
      "Một cụm thiên hà khổng lồ gồm nhiều thiên hà liên kết với nhau bởi lực hấp dẫn. Khối lượng lớn của cụm còn có thể làm bẻ cong ánh sáng từ các thiên thể xa hơn.",
    distance:
      "Khoảng 3,2 tỷ năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-9.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "10/10": {
    title: "Ngôi sao của bạn",
    object: "Interacting Galaxies Arp 148",
    science:
      "Hai thiên hà đang tương tác hấp dẫn với nhau, tạo nên một cấu trúc đặc biệt trong quá trình biến đổi và tương tác của chúng.",
    distance:
      "Khoảng 450 triệu năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-10.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "11/10": {
    title: "Ngôi sao của bạn",
    object: "GOODS South Field",
    science:
      "Một vùng trời sâu chứa rất nhiều thiên hà ở những khoảng cách khác nhau. Hubble đã sử dụng các quan sát sâu để nhìn xuyên qua một vùng trời nhỏ và phát hiện một vũ trụ đầy những thiên hà xa xôi.",
    distance:
      "Có những thiên hà cách chúng ta tới khoảng 13 tỷ năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-11.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "16/10": {
    title: "Ngôi sao của bạn",
    object: "Ring Nebula",
    science:
      "Tinh vân Vành Nhẫn là lớp khí và bụi được một ngôi sao giống Mặt Trời giải phóng khi tiến đến giai đoạn cuối của vòng đời.",
    distance:
      "Khoảng 2.300 năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-16.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "18/10": {
    title: "Ngôi sao của bạn",
    object: "Reflection Nebula N30B",
    science:
      "Một vùng tinh vân phản xạ nằm trong Đám Mây Magellan Lớn. Ánh sáng của các ngôi sao trẻ làm nổi bật khí và bụi xung quanh chúng.",
    distance:
      "Khoảng 160.000 năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-18.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "20/10": {
    title: "Ngôi sao của bạn",
    object: "30 Doradus",
    science:
      "Một trong những vùng hình thành sao nổi bật nhất trong vùng lân cận của chúng ta. Hàng loạt ngôi sao trẻ, nóng và khối lượng lớn đang hình thành giữa những đám mây khí và bụi khổng lồ.",
    distance:
      "Khoảng 160.000 năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-20.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  },

  "31/10": {
    title: "Ngôi sao của bạn",
    object: "Nebula NGC 281",
    science:
      "Một tinh vân phát xạ trong chòm sao Cassiopeia, nơi khí phát sáng xung quanh các ngôi sao trẻ tạo nên khung cảnh giống một đám mây giữa những vì sao.",
    distance:
      "Khoảng 9.500 năm ánh sáng.",
    image:
      "https://cdn.hubblebirthday.com/october-31.jpg",
    credit:
      "NASA / ESA — Kính viễn vọng Không gian Hubble"
  }

};

const birthdayWishes = {
  "VTN": {
    date: "02/09",
    title: "Một ngôi sao bền bỉ",
    message: "Chúc bạn tuổi mới luôn có đủ bình yên để tận hưởng những điều giản dị, đủ vững vàng để đi qua những ngày nhiều thử thách và đủ dịu dàng với chính mình trên hành trình trưởng thành. Mong rằng dù vũ trụ có rộng lớn đến đâu, bạn vẫn luôn tìm được nơi khiến mình cảm thấy thuộc về. ✨"
  },

  "PHNH": {
    date: "03/09",
    title: "Những khởi đầu mới",
    message: "Chúc bạn tuổi mới có thêm nhiều cơ hội để khám phá những điều mình chưa từng thử, gặp những người khiến mình được truyền cảm hứng và can đảm theo đuổi những điều thực sự có ý nghĩa. Mong mỗi ngày đều mở ra một chân trời mới để bạn háo hức bước tới. 🚀"
  },

  "BTNB": {
    date: "13/09",
    title: "Một vũ trụ của riêng mình",
    message: "Chúc bạn luôn giữ được những điều khiến mình trở nên đặc biệt, không cần phải giống bất kỳ vì sao nào khác để tỏa sáng. Mong tuổi mới mang đến cho bạn những niềm vui bất ngờ, những kết nối chân thành và thật nhiều khoảnh khắc mà sau này nhớ lại, bạn vẫn mỉm cười. 💜"
  },

  "ĐTTH": {
    date: "05/09",
    title: "Ánh sáng dịu dàng",
    message: "Chúc bạn tuổi mới không chỉ có những ngày rực rỡ mà còn có cả những ngày bình thường thật dễ chịu. Mong bạn luôn gặp được sự tử tế khi cần, có người đồng hành khi mỏi mệt và luôn nhớ rằng mình xứng đáng được quan tâm, kể cả trong những lúc chẳng cần phải làm điều gì thật lớn lao. 🌟"
  },

  "NNHT": {
    date: "25/09",
    title: "Hành trình của riêng bạn",
    message: "Chúc bạn có một tuổi mới với nhiều trải nghiệm đáng nhớ và những bước tiến khiến bản thân tự hào. Đường đi không nhất thiết phải thẳng, và tốc độ cũng chẳng cần giống ai. Mong bạn luôn đủ kiên nhẫn để đi theo nhịp của mình, bởi mỗi hành trình đều có một vẻ đẹp riêng. 🌌"
  },

  "NTTV": {
    date: "16/10",
    title: "Những điều đang lớn lên",
    message: "Chúc bạn tuổi mới có thêm nhiều điều để mong đợi, nhiều trải nghiệm để học hỏi và nhiều lý do để tin vào những lựa chọn của mình. Mong bạn không quá khắt khe với những điều chưa hoàn hảo, bởi đôi khi, chính những bước đi còn vụng về lại đưa chúng ta đến những nơi thật đẹp. 🪐"
  },

  "NTTH": {
    date: "11/10",
    title: "Một khoảng trời bình yên",
    message: "Chúc bạn có một năm mới của cuộc đời với thật nhiều niềm vui nhỏ bé nhưng chân thành. Mong những ngày bận rộn vẫn có khoảng nghỉ dành cho bản thân, những lúc chông chênh vẫn có điều để bám vào và những ngày vui luôn có người để sẻ chia. Bình yên cũng là một điều rất đáng để chúc mừng. 🌷"
  },

  "TTH": {
    date: "20/10",
    title: "Tỏa sáng theo cách của mình",
    message: "Chúc bạn tuổi mới có đủ can đảm để bắt đầu, đủ kiên trì để tiếp tục và đủ bao dung để cho phép mình đôi lúc dừng lại. Mong bạn không chỉ tự hào về những gì mình đạt được, mà còn trân trọng cả con người mình đang trở thành trên suốt hành trình ấy. ✨"
  },

  "NMT": {
    date: "31/10",
    title: "Một cái kết, một khởi đầu",
    message: "Sinh nhật vào ngày cuối cùng của tháng cũng thật đặc biệt — như một dấu chấm nhỏ để khép lại một chương và mở ra chương mới. Chúc bạn tuổi mới có thể nhẹ nhàng đặt xuống những điều đã cũ, mang theo những bài học đáng quý và đón chờ những bất ngờ đẹp đẽ đang ở phía trước. 🎂"
  },

  "TTL": {
    date: "09/10",
    title: "Những kết nối trong vũ trụ",
    message: "Chúc bạn tuổi mới gặp thêm những người khiến cuộc sống trở nên phong phú hơn, có những cuộc trò chuyện giúp mình hiểu thêm về thế giới và có những mối quan hệ mà ở đó, bạn được là chính mình. Mong những điều tốt đẹp bạn trao đi cũng tìm được đường quay trở lại với bạn. 💫"
  },

  "PHL": {
    date: "10/10",
    title: "Niềm vui từ những điều nhỏ",
    message: "Chúc bạn có một tuổi mới với nhiều tiếng cười, những ngày làm việc và học tập thật đáng giá, cùng những khoảnh khắc giản dị đủ sức làm lòng mình nhẹ lại. Mong hạnh phúc không chỉ nằm ở những cột mốc lớn, mà còn hiện diện trong một ngày bình thường mà bạn cảm thấy thật sự vui. ☀️"
  },

  "NTC": {
    date: "10/10",
    title: "Dành chỗ cho những bất ngờ",
    message: "Chúc bạn tuổi mới có thêm nhiều câu chuyện hay để kể, nhiều điều mới mẻ để khám phá và nhiều khoảnh khắc khiến mình thầm nghĩ: May mà mình đã thử. Mong bạn luôn giữ được sự tò mò trước cuộc sống và niềm tin rằng phía trước vẫn còn rất nhiều điều tốt đẹp chưa được nhìn thấy. 🌠"
  },

  "PTH": {
    date: "18/10",
    title: "Được là chính mình",
    message: "Chúc bạn tuổi mới có thêm tự do để lựa chọn điều mình yêu thích, đủ tự tin để nói lên điều mình tin tưởng và đủ dịu dàng để lắng nghe những nhu cầu của bản thân. Mong bạn không phải thu nhỏ mình để vừa vặn với mọi nơi, mà có thể tìm thấy những không gian nơi mình được đón nhận trọn vẹn. 💗"
  },

  "NTTT": {
    date: "18/10",
    title: "Một năm đáng nhớ",
    message: "Chúc bạn có một tuổi mới nhiều trải nghiệm khiến mình trưởng thành, nhiều cơ hội để khám phá những khả năng còn chưa nhận ra và nhiều người đồng hành đáng quý. Mong một ngày nhìn lại, bạn sẽ thấy mình không cần có một năm hoàn hảo — chỉ cần một năm đã sống thật lòng và có những điều đáng nhớ. 🌌"
  },

  "BTG": {
    date: "20/10",
    title: "Một vùng trời đầy hy vọng",
    message: "Chúc bạn tuổi mới có thêm những cơ hội để làm điều mình mong muốn, những người để cùng chia sẻ niềm vui và những khoảng lặng để hiểu mình hơn. Mong dù có đi qua bao nhiêu chặng đường, bạn vẫn giữ được một chút háo hức với tương lai và luôn tìm thấy lý do để tiếp tục tiến về phía trước. 🚀"
  }
};

function showBirthdayWish(memberCode) {
  const wish = birthdayWishes[memberCode];

  const wishSection = document.getElementById("revealWishSection");
  const wishText = document.getElementById("revealWish");

  if (!wish || !wishSection || !wishText) {
    console.warn("Chưa tìm thấy lời chúc:", memberCode);
    return;
  }

  wishText.textContent = `${wish.title}\n\n${wish.message}`;
  wishSection.style.display = "block";
}

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

const revealImage =
  document.getElementById("revealImage");

const revealObject =
  document.getElementById("revealObject");

const revealScience =
  document.getElementById("revealScience");

const revealCredit =
  document.getElementById("revealCredit");

const revealWishSection =
  document.getElementById("revealWishSection");

const revealWish =
  document.getElementById("revealWish");

const revealTransition =
  document.getElementById("revealTransition");

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

const characterStatus =
  document.getElementById("characterStatus");

characterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    characterButtons.forEach(function(item) {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

    player.character =
      button.dataset.character;

    enterGalaxyButton.disabled =
      false;

    if (characterStatus) {
      characterStatus.textContent =
        "Đã chọn người bạn đồng hành · " +
        player.character;
    }

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
  player.currentSignal = null;
  player.unlocked = false;

  hudPlayerName.textContent = player.code;

  /*
   * Đưa nhân vật đã chọn vào galaxy
   */
  setPlayerCharacter();

  createBackgroundStars();
  updatePlayerPosition();

  showScreen(gameScreen);
});
    function setPlayerCharacter() {

  const playerElement = document.getElementById("player");

  if (!playerElement) return;

  /*
   * Xóa avatar cũ nếu có
   */
  playerElement.innerHTML = "";

  /*
   * Tìm đúng nhân vật mà người chơi đã chọn
   */
  const selectedCharacter = document.querySelector(
    '.character-option[data-character="' +
    player.character +
    '"]'
  );

  if (!selectedCharacter) return;

  /*
   * Lấy SVG từ thẻ nhân vật
   */
  const originalSvg =
    selectedCharacter.querySelector("svg");

  if (!originalSvg) return;

  /*
   * Tạo bản sao SVG
   */
  const playerSvg =
    originalSvg.cloneNode(true);

  /*
   * Gắn class riêng cho avatar trong galaxy
   */
  playerSvg.classList.add("player-avatar-svg");

  /*
   * Thêm vào player
   */
  playerElement.appendChild(playerSvg);
}


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


/* ĐIỀU KHIỂN CẢM ỨNG - BẢN SỬA */
(function enableTouchControls() {
  const controls = document.getElementById("touchControls");
  if (!controls) {
    console.error("Không tìm thấy #touchControls trong HTML");
    return;
  }

  const directions = {
    up: "arrowup",
    down: "arrowdown",
    left: "arrowleft",
    right: "arrowright"
  };

  controls.querySelectorAll(".move-btn").forEach(function(button) {
    const key = directions[button.dataset.move];
    if (!key) return;

    const release = function() {
      keys[key] = false;
      button.classList.remove("pressed");
    };

    button.addEventListener("pointerdown", function(event) {
      event.preventDefault();
      event.stopPropagation();

      keys[key] = true;
      button.classList.add("pressed");

      try {
        button.setPointerCapture(event.pointerId);
      } catch (error) {
        // Vẫn tiếp tục hoạt động nếu trình duyệt không hỗ trợ capture.
      }
    });

    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
    button.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
  });

  window.addEventListener("blur", function() {
    Object.values(directions).forEach(function(key) {
      keys[key] = false;
    });
  });

  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      Object.values(directions).forEach(function(key) {
        keys[key] = false;
      });
    }
  });
})();


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

    // Sao đã được kiểm tra rồi → bỏ qua
    if (star.dataset.checked === "true") {
      return;
    }


    // Lấy vị trí sao

    const starX =
      parseFloat(star.style.left);

    const starY =
      parseFloat(star.style.top);


    // Tính khoảng cách giữa người chơi và sao

    const dx =
      player.x - starX;

    const dy =
      player.y - starY;

    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );


    // =============================
    // 1. ĐANG Ở GẦN SAO
    // =============================

    if (distance < 8) {

      star.classList.add("nearby");

    } else {

      star.classList.remove("nearby");

    }


    // =============================
    // 2. THẬT SỰ CHẠM SAO
    // =============================

    if (distance < 2.2) {

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

  const data = STAR_DATA[date];

  if (!data) {
    return;
  }

  // =================================
  // CHUẨN BỊ NỘI DUNG REVEAL
  // =================================

  revealTitle.textContent =
    data.title;

  const dateParts =
    date.split("/");

  const day =
    dateParts[0];

  const month =
    dateParts[1];

  const monthNames = [
    "",
    "THÁNG MỘT",
    "THÁNG HAI",
    "THÁNG BA",
    "THÁNG TƯ",
    "THÁNG NĂM",
    "THÁNG SÁU",
    "THÁNG BẢY",
    "THÁNG TÁM",
    "THÁNG CHÍN",
    "THÁNG MƯỜI",
    "THÁNG MƯỜI MỘT",
    "THÁNG MƯỜI HAI"
  ];

  revealDate.textContent =
    day + " " + monthNames[Number(month)];

  revealImage.src =
    data.image;

  revealImage.alt =
    data.object +
    " — ảnh thiên văn từ Hubble";

  revealObject.textContent =
    data.object;

  revealScience.textContent =
    data.science;

  revealCredit.textContent =
    "Ảnh: " + data.credit;

  // Hiện tại chưa có lời chúc
  revealWishSection.style.display =
    "none";

  revealWish.textContent =
    "";

  // =================================
  // CHUYỂN CẢNH
  // =================================

  revealTransition.classList.remove(
    "leaving"
  );

  revealTransition.classList.add(
    "active"
  );

  // Chờ ánh sáng mở ra
  setTimeout(function() {

    showScreen(
      revealScreen
    );

  }, 420);

  // Cho Reveal xuất hiện phía sau
  setTimeout(function() {

    revealTransition.classList.add(
      "leaving"
    );

  }, 1050);

  // Dọn lớp chuyển cảnh
  setTimeout(function() {

    revealTransition.classList.remove(
      "active"
    );

    revealTransition.classList.remove(
      "leaving"
    );

  }, 1700);

}

// ===============================
// NÚT CHƠI LẠI
// ===============================

restartButton.addEventListener("click", function() {

  window.location.reload();
});

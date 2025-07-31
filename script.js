function nextSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("show"));
  document.getElementById("slide" + slideNumber).classList.add("show");
}

function bukaAmplop() {
  document.getElementById("envelope").classList.add("opened");
  setTimeout(() => nextSlide(3), 1000); // Tunggu efek buka
}

const pesan = "Yahhh mungkin ini agak Alay bukan agak sihh memang Alayy,  tapi sekali-sekali tidak kenapa lahh disini saya pake Aku Kamu yaahh karena kayaknya kamu lebih suka kata itu dripda anda dan saya. Aku ingat pertama kali aku mulai tertarik sama kamu… waktu masih di SMA. Tidak tau kenapa, dari sekian banyak orang, ada sesuatu dari kamu yang menarik,dan buat aku penasaran, dan ingin lebih dekat. Saat itu aku mulai mencoba mendekat—pelan-pelan, diam-diam, berharap siapa tau bisa jadi lebih dari teman. Tapi yahh kenyataan berkata lain. Aku tahu saat itu kamu menyukai orang lain. Jujur, rasanya cukup menyakitkan anjayyy, walaupun aku nggak pernah berani bilang( DISCLAIMER lalu masih cupu). Dari situ, aku mulai menyerah… dan waktu itu bersamaan juga dengan kelulusan ku. Aku pikir, mungkin ini saatnya untuk berhenti mencoba. Tapi lucunya, perasaan itu nggak pernah benar-benar hilang. Aku pun nggak tau sejak kapan perasaan itu kembali, tapi yang jelas... kali ini aku nggak mau lagi hanya diam. Dan yang paling membahagiakan aku berhasil broww. Aku berhasil menyampaikan apa yang selama ini aku simpan, dan lebih dari itu… kamu menerimanya DAMNNNNNN. Terima kasih, ya. Terima kasih sudah menerima perasaanku, yang dulu hanya bisa aku pendam sendiri. Terima kasih karena sudah membuka hatimu, dan membuat aku merasa dicintai. HAPPY GIRLFRIEND DAY    Pesannya baca sendiri yahhh kalo yang lain lihat nanti ke cool lan ku di masyarakat hilang wkwkwkw ini sisi yang hanya sayang yang tau";

let i = 0;
function typeWriter() {
  if (i < pesan.length) {
    document.getElementById("pesanCinta").innerHTML += pesan.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById("slide3").classList.contains("show")) {
    typeWriter();
  }
});

function downloadPesan() {
  const element = document.createElement("a");
  const file = new Blob([pesan], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "pesan-cinta.txt";
  element.click();
}

function starmusicandanext() {
  const music = document.getElementById("bgMusic");
  music.play();
  nextSlide(2);
}


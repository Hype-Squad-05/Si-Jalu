const chatbotResponses = {
  greeting: [
  "Halo! Saya asisten Si Jalu. Ada yang bisa saya bantu?",
  "Selamat datang di Si Jalu. Apa yang ingin Anda ketahui?"],


  topup: [
  "Untuk melakukan top up saldo:\n\n1. Klik tombol Top Up di halaman utama.\n\n2. Pilih metode pembayaran (transfer bank, e-wallet, dll).\n\n3. Ikuti instruksi dan konfirmasi pembayaran.\nSaldo Anda akan langsung bertambah setelah transaksi berhasil."],


  withdrawal: [
  "Untuk menarik saldo:\n\n1. Klik tombol Tarik Tunai di halaman utama.\n\n2. Masukkan jumlah yang ingin ditarik.\n\n3. Pilih metode penarikan (rekening bank/e-wallet).\n\n4. Konfirmasi dan tunggu proses hingga selesai.\nPenarikan biasanya diproses dalam 5–10 menit."],


  taskNearby: [
  "Fitur Tugas di Sekitar menampilkan daftar tugas atau pekerjaan ringan yang tersedia di dekat lokasi Anda.\nAnda bisa mengambil tugas seperti antar barang, bantu bersih-bersih, atau keperluan lainnya.\nFitur ini menggunakan akses lokasi Anda untuk menampilkan hasil yang relevan."],


  troubleshooting: [
  "Jika Anda mengalami kendala teknis atau kesulitan lainnya, Anda bisa:\n\n• Mengirim pesan langsung ke customer support melalui chat ini\n\n• Atau hubungi kami via email: support@sijalu.id\nKami siap membantu Anda setiap hari pukul 08.00 – 22.00 WIB."],


  customerService: [
  "Berikut adalah kontak customer service Si Jalu:\n📞 WhatsApp: +62 812-xxxx-xxxx\n📧 Email: support@sijalu.id\n⏰ Jam Operasional: 08.00 – 22.00 WIB"],


  transactionHistory: [
  "Untuk melihat riwayat transaksi Anda:\n\n1. Masuk ke halaman utama.\n\n2. Klik ikon menu → pilih Riwayat Transaksi.\nDi sana Anda bisa melihat semua top up, penarikan, dan penggunaan saldo."],


  coverage: [
  "Saat ini Si Jalu masih dalam tahap pengembangan dan tersedia terbatas di beberapa wilayah.\nKami sedang memperluas jangkauan agar bisa digunakan di seluruh Indonesia.\nSilakan aktifkan lokasi untuk melihat fitur yang tersedia di daerah Anda."],


  joinPartner: [
  "Untuk bergabung sebagai mitra/freelancer:\n\n1. Masuk ke menu utama → pilih Gabung Sebagai Mitra\n\n2. Isi data diri dan upload dokumen yang dibutuhkan\n\n3. Tunggu proses verifikasi maksimal 1×24 jam\nSetelah disetujui, Anda bisa mulai menerima tugas dari pengguna lain."],


  howItWorks: [
  "Cara kerja Si Jalu:\n\n1. Pencari tugas membuat permintaan (lokasi, kebutuhan, waktu).\n\n2. Penyedia jasa menerima tugas yang cocok.\n\n3. Setelah cocok, mereka terhubung melalui chat dan menyelesaikan tugas sesuai kesepakatan."],


  fallback: [
  "Maaf, saya belum memahami pertanyaan Anda 😔\nAnda bisa coba pilih salah satu pertanyaan berikut:\n\n• Bagaimana cara top up?\n\n• Apa itu Tugas di Sekitar?\n\n• Kontak customer service\nAtau kirim pesan langsung untuk bantuan lebih lanjut."],


  // Common questions for suggestions
  suggestedQuestions: [
  "Bagaimana cara top up?",
  "Bagaimana cara menarik saldo?",
  "Apa itu fitur Tugas di Sekitar?",
  "Bagaimana jika saya mengalami kendala?",
  "Kontak customer service",
  "Lihat riwayat transaksi",
  "Apakah Si Jalu bisa digunakan di semua daerah?",
  "Bagaimana cara gabung sebagai mitra atau freelancer?",
  "Bagaimana cara kerja Si Jalu?"]

};

function getChatbotResponse(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("halo") || input.includes("hai") || input.includes("hi")) {
    return getRandomResponse(chatbotResponses.greeting);
  }

  if (input.includes("top up") || input.includes("topup") || input.includes("isi saldo")) {
    return getRandomResponse(chatbotResponses.topup);
  }

  if (input.includes("tarik") || input.includes("withdraw") || input.includes("ambil uang") || input.includes("menarik saldo")) {
    return getRandomResponse(chatbotResponses.withdrawal);
  }

  if (input.includes("tugas di sekitar") || input.includes("tugas sekitar") || input.includes("apa itu tugas")) {
    return getRandomResponse(chatbotResponses.taskNearby);
  }

  if (input.includes("kendala") || input.includes("masalah") || input.includes("error") || input.includes("kesulitan")) {
    return getRandomResponse(chatbotResponses.troubleshooting);
  }

  if (input.includes("cs") || input.includes("customer service") || input.includes("kontak") || input.includes("hubungi")) {
    return getRandomResponse(chatbotResponses.customerService);
  }

  if (input.includes("riwayat") || input.includes("history") || input.includes("transaksi")) {
    return getRandomResponse(chatbotResponses.transactionHistory);
  }

  if (input.includes("mitra") || input.includes("freelancer") || input.includes("gabung") || input.includes("daftar")) {
    return getRandomResponse(chatbotResponses.joinPartner);
  }

  if (input.includes("wilayah") || input.includes("daerah") || input.includes("coverage") || input.includes("jangkauan")) {
    return getRandomResponse(chatbotResponses.coverage);
  }

  if (input.includes("cara kerja") || input.includes("bagaimana si jalu") || input.includes("sistem")) {
    return getRandomResponse(chatbotResponses.howItWorks);
  }

  return getRandomResponse(chatbotResponses.fallback);
}

function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Get suggested questions for the UI
function getSuggestedQuestions() {
  return chatbotResponses.suggestedQuestions;
}
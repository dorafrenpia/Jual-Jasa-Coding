function kirimViaGmail() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  const subject = encodeURIComponent("Permintaan Jasa Website dari " + nama);
  const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\n${pesan}`);

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=frendyhansung@email.com&su=${subject}&body=${body}`;

  window.open(gmailURL, '_blank');
  return false; // Supaya form tidak refresh
}

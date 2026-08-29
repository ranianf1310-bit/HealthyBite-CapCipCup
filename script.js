const menu = [
    {
        nama: "Ayam spicy",
        harga: 10000,
        emoji: "🍗",
        deskripsi: "Nasi, ayam, saus, dan lalapan",
        indikator: "kuning"
    },
    {
        nama: "Ayam Geprek",
        harga: 10000,
        emoji: "🍗",
        deskripsi: "Nasi, ayam, sambal geprek, dan lalapan",
        indikator: "kuning"
    },
    {
        nama: "Nasi Campur",
        harga: 9000,
        emoji: "🍚",
        deskripsi: "Nasi, telur balado, tahu, tempe, mie goreng, dan urap sayur",
        indikator: "hijau"
    },
    {
        nama: "Soto Ayam",
        harga: 9000,
        emoji: "🍛",
        deskripsi: "Nasi, ayam, dan kuah soto",
        indikator: "hijau"
    },
    {
        nama: "Pecel",
        harga: 8000,
        emoji: "🥗",
        deskripsi: "Nasi, telur, kangkung, tauge, dan bumbu pecel",
        indikator: "hijau"
    },
    {
        nama: "Es Teh",
        harga: 3000,
        emoji: "🫖",
        deskripsi: "Teh dingin dengan pemanis gula",
        indikator: "kuning"
    },
    {
        nama: "Air Mineral",
        harga: 2000,
        emoji: "💧",
        deskripsi: "Air mineral",
        indikator: "hijau"
    },
    {
        nama: "Es Minuman Saset",
        harga: 3000,
        emoji: "🥤",
        deskripsi: "Minuman instan bubuk dengan berbagai rasa",
        indikator: "merah"
    },
    {
        nama: "Es Susu Cokelat",
        harga: 5000,
        emoji: "🥛",
        deskripsi: "Minuman cokelat dengan susu",
        indikator: "kuning"
    },
    {
        nama: "Es Kopi Susu",
        harga: 5000,
        emoji: "☕️",
        deskripsi: "Minuman kopi dengan susu dan pemanis",
        indikator: "kuning"
    },
    {
        nama: "Es Kopi Gula Aren",
        harga: 5000,
        emoji: "🧋",
        deskripsi: "Minuman kopi dengan gula aren",
        indikator: "merah"
    },
    {
        nama: "Kopi Hitam",
        harga: 4000,
        emoji: "☕️",
        deskripsi: "Minuman kopi tanpa gula",
        indikator: "hijau"
    }
];

let filterAktif = "semua";

function teksIndikator(indikator) {
    if (indikator === "hijau") {
        return "Lebih<br>seimbang";
    }

    if (indikator === "kuning") {
        return "Perlu<br>dibatasi";
    }

    return "Batasi<br>frekuensi";
}

function tampilkanMenu() {
    const daftar = document.getElementById("menuList");

    const kataKunci = document
        .getElementById("search")
        .value
        .toLowerCase();

    const hasil = menu.filter(function(item) {

        const cocokNama = item.nama
            .toLowerCase()
            .includes(kataKunci);

        const cocokFilter =
            filterAktif === "semua" ||
            item.indikator === filterAktif;

        return cocokNama && cocokFilter;
    });

    if (hasil.length === 0) {
        daftar.innerHTML = `
            <div class="empty">
                🔎
                <br><br>
                Menu tidak ditemukan.
            </div>
        `;
        return;
    }

    daftar.innerHTML = "";

    hasil.forEach(function(item) {

        daftar.innerHTML += `
            <div class="food">

                <div class="food-image">
                    ${item.emoji}
                </div>

                <div class="food-info">

                    <div class="food-name">
                        ${item.nama}
                    </div>

                    <div class="food-desc">
                        ${item.deskripsi}
                    </div>

                    <div class="price">
                        Rp${item.harga.toLocaleString("id-ID")}
                    </div>

                </div>

                <div class="indicator ${item.indikator}">

                    <div class="dot"></div>

                    ${teksIndikator(item.indikator)}

                </div>

            </div>
        `;
    });
}

function ubahFilter(filter, tombol) {

    filterAktif = filter;

    document
        .querySelectorAll(".filters button")
        .forEach(function(button) {
            button.classList.remove("active");
        });

    tombol.classList.add("active");

    tampilkanMenu();
}

tampilkanMenu();

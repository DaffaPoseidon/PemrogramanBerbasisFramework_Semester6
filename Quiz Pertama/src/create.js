const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        nim: form.nim.value,
        nama: form.nama.value,
        alamat: form.alamat.value,
        angkatan: form.angkatan.value,
        kerja: form.kerja.value,
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });
}

form.addEventListener('submit', createPost);
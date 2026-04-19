const imageInput  = document.getElementById('imageInput');
const imgPreview  = document.getElementById('imgPreview');
const uploadInner = document.getElementById('uploadInner');

if (imageInput) {
  imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imgPreview.src = e.target.result;
        imgPreview.style.display = 'block';
        if (uploadInner) uploadInner.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });
}

const bookForm  = document.getElementById('bookForm');
const submitBtn = document.getElementById('submitBtn');
if (bookForm && submitBtn) {
  bookForm.addEventListener('submit', () => {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving...';
  });
}
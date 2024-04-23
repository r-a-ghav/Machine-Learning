const fileInput = document.getElementById('file-input');
        const uploadedImage = document.getElementById('uploaded-image');

        fileInput.addEventListener('change', function () {
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    uploadedImage.src = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        });

        // JavaScript to handle file selection and display the video
        const videoInput = document.getElementById('video-input');
        const uploadedVideo = document.getElementById('uploaded-video');

        videoInput.addEventListener('change', function () {
            const file = videoInput.files[0];

            if (file) {
                const videoURL = URL.createObjectURL(file);
                uploadedVideo.src = videoURL;
            }
        });
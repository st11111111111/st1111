document.addEventListener('DOMContentLoaded', function() {
    const bannerCarousel = {
        container: document.getElementById('banner-carousel'),
        items: document.querySelectorAll('#banner-carousel img'),
        currentIndex: 0,
        
        init() {
            this.showSlide(0);
            this.startAutoSlide();
        },
        
        showSlide(index) {
            this.items.forEach(item => item.classList.add('hidden'));
            this.items[index].classList.remove('hidden');
            
            // 添加淡入效果
            this.items[index].classList.add('animate-fade-in');
        },
        
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            this.showSlide(this.currentIndex);
        },
        
        startAutoSlide() {
            setInterval(() => this.nextSlide(), 5000); // 每5秒切换一次
        }
    };
    
    bannerCarousel.init();

    // 视频控制
    const videos = document.querySelectorAll('video');
    const muteButton = document.querySelector('.fa-volume-mute').parentElement;
    let isMuted = true; // 初始状态为静音

    // 初始化视频状态
    videos.forEach(video => {
        video.muted = isMuted;
        video.play().catch(function(error) {
            console.log("视频自动播放失败:", error);
        });
    });

    // 静音控制
    muteButton.addEventListener('click', function() {
        isMuted = !isMuted;
        videos.forEach(video => {
            video.muted = isMuted;
        });
        
        // 更新图标
        const icon = muteButton.querySelector('i');
        if (isMuted) {
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        } else {
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        }
    });
}); 
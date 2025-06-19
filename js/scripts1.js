// Smooth scrolling
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Search functionality
        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value;
            if (searchTerm.trim()) {
                alert(`🔍 Mencari: "${searchTerm}"\n\nFitur pencarian akan dikembangkan lebih lanjut.`);
            } else {
                alert('⚠️ Silakan masukkan kata kunci pencarian.');
            }
        }
        
        // Load news
        function loadNews(newsType) {
            const newsMap = {
                'pertamina': 'Kasus Korupsi Pertamina',
                'timah': 'Kasus Korupsi PT Timah',
                'bts': 'Kasus Korupsi Proyek BTS 4G',
                'duta': 'Kasus Korupsi PT Duta Palma Group',
                'garuda': 'Kasus Korupsi Garuda Indonesia',
                'tppi': 'Kasus Korupsi PT TPPI',
                'century': 'Kasus Korupsi Bank Century',
                'blbi': 'Kasus Korupsi BLBI',
                'musimmas': 'Kasus Korupsi Musim Mas Group',
                'jiwasraya': 'Kasus Korupsi PT Jiwasraya',
                'asabri': 'Kasus Korupsi Asabri'
            };
            
            alert(`📰 Membuka: ${newsMap[newsType]}\n\nHalaman detail akan dikembangkan.`);
        }
        
        // Add comment
        function addComment(event) {
            event.preventDefault();
            const commentText = document.getElementById('commentText').value;
            
            if (commentText.trim()) {
                const commentsContainer = document.getElementById('commentsContainer');
                const newComment = document.createElement('div');
                newComment.className = 'd-flex mb-4';
                newComment.innerHTML = `
                    <div class="flex-shrink-0">
                        <div class="comment-avatar">AN</div>
                    </div>
                    <div class="ms-3">
                        <div class="fw-bold text-primary">Anonim</div>
                        <div class="text-muted small">Baru saja</div>
                        <p class="mt-2">${commentText}</p>
                    </div>
                `;
                
                commentsContainer.appendChild(newComment);
                document.getElementById('commentText').value = '';
                
                // Show success message
                const alert = document.createElement('div');
                alert.className = 'alert alert-success alert-dismissible fade show';
                alert.innerHTML = `
                    ✅ Komentar berhasil ditambahkan!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
                
                const form = document.querySelector('.comment-form');
                form.insertBefore(alert, form.firstChild);
                
                // Auto dismiss after 3 seconds
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 3000);
            }
        }
        
        // Show about modal
        function showAbout() {
            alert(`ℹ️ Tentang Lentera Taubat\n\nLentera Taubat adalah platform informasi yang didedikasikan untuk memberikan data dan analisis mengenai kasus-kasus korupsi di Indonesia.\n\nMisi kami adalah menerangi kebenaran dan mendukung transparansi dalam pemberantasan korupsi.\n\n👥 Dikembangkan oleh Kelompok 6`);
        }
        
        // Show login modal
        function showLogin() {
            alert(`🔐 Fitur Login\n\nSistem login akan dikembangkan untuk memberikan akses ke fitur-fitur tambahan seperti:\n\n• Menyimpan artikel favorit\n• Berlangganan newsletter\n• Diskusi terintegrasi\n• Dashboard personal\n\nTerima kasih atas kesabaran Anda!`);
        }
        
        // Filter by category
        function filterByCategory(category) {
            const categoryMap = {
                'pemerintahan': 'Berita Korupsi Pemerintahan',
                'bumn': 'Berita Korupsi BUMN',
                'daerah': 'Berita Korupsi Pemerintahan Daerah',
                'swasta': 'Berita Korupsi Sektor Swasta',
                'internasional': 'Berita Korupsi Internasional'
            };
            
            alert(`📂 Filter: ${categoryMap[category]}\n\nMenampilkan berita dalam kategori ini.\n\nFitur filter akan dikembangkan lebih lanjut.`);
        }
        
        // Follow social media
        function followSocial(platform) {
            const platforms = {
                'twitter': 'Twitter (@LenteraTaubat)',
                'instagram': 'Instagram (@lentera.taubat)',
                'youtube': 'YouTube Channel'
            };
            
            alert(`📱 Mengikuti ${platforms[platform]}\n\nTerima kasih telah mengikuti media sosial kami!\n\nLink akan diarahkan ke halaman resmi.`);
        }
        
        // Subscribe to newsletter
        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            
            if (email) {
                // Show success message
                const card = event.target.closest('.card-body');
                const successMsg = document.createElement('div');
                successMsg.className = 'alert alert-success alert-dismissible fade show mt-3';
                successMsg.innerHTML = `
                    ✅ Berhasil berlangganan dengan email: ${email}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
                
                card.appendChild(successMsg);
                document.getElementById('newsletterEmail').value = '';
                
                // Auto dismiss after 5 seconds
                setTimeout(() => {
                    if (successMsg.parentNode) {
                        successMsg.remove();
                    }
                }, 5000);
            }
        }
        
        // Search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Add some interactivity on page load
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🔍 Lentera Taubat - Website Loaded Successfully!');
            
            // Add hover effects to news links
            const newsLinks = document.querySelectorAll('.news-list a');
            newsLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(5px)';
                    this.style.transition = 'transform 0.3s ease';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
            });
        });
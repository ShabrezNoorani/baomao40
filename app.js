document.addEventListener('DOMContentLoaded', function() {
    
    // --- MOBILE MENU SCRIPT ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('mobile-menu-open');
        });

        document.querySelectorAll('#mobile-menu a').forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('mobile-menu-open');
            });
        });
    }

    // --- DYNAMIC MENU BUILDER SCRIPT ---
    const menuGrid = document.getElementById('menu-grid');
    const pageLang = document.documentElement.lang; // 'en' or 'fr'

    if (menuGrid && typeof menuData !== 'undefined') {
        menuData.forEach(item => {
            // Create the main card container
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 menu-card relative overflow-hidden';
            
            let cardHTML = '';

            // Add promo banner for 'food' category items
            if (item.category === 'food') {
                card.setAttribute('data-original-price', item.originalPrice);
                card.setAttribute('data-discount-euros', item.discountEuros);
                cardHTML += `<div class="promo-banner absolute top-0 left-0 bg-red-500 text-white font-bold text-sm py-1 px-3 transform -rotate-45 -translate-x-8 translate-y-4" style="display: none;"></div>`;
            }

            // Add image
            cardHTML += `<img src="${item.image}" alt="${item.name[pageLang]}" class="w-full h-48 object-cover rounded-md mb-4 shadow-sm" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/FFFFFF?text=Image+Not+Found';">`;
            
            // Add name and description
            cardHTML += `<h3 class="text-2xl font-semibold text-gray-800 mb-2">${item.name[pageLang]}</h3>`;
            cardHTML += `<p class="text-gray-600 mb-4 min-h-[6rem]">${item.description[pageLang]}</p>`;

            // Handle pricing display
            if (item.category === 'food') {
                cardHTML += `
                    <div class="price-container h-8">
                        <span class="original-price text-gray-400 text-xl font-bold" style="text-decoration: line-through;"></span>
                        <span class="discounted-price text-orange-600 text-xl font-bold ml-2"></span>
                    </div>`;
            } else {
                // For 'drink' category or items without price
                 cardHTML += `<span class="text-orange-600 text-xl font-bold">Various</span>`;
            }
            
            card.innerHTML = cardHTML;
            menuGrid.appendChild(card);
        });
    }

    // --- DYNAMIC PER-ITEM PROMOTION SCRIPT ---
    const menuItems = document.querySelectorAll('.menu-card[data-original-price]');
    menuItems.forEach(item => {
        const originalPriceElement = item.querySelector('.original-price');
        const discountedPriceElement = item.querySelector('.discounted-price');
        const promoBanner = item.querySelector('.promo-banner');

        if (!originalPriceElement || !discountedPriceElement || !promoBanner) {
            return;
        }

        const originalPrice = parseFloat(item.getAttribute('data-original-price'));
        const discountAmount = parseFloat(item.getAttribute('data-discount-euros'));

        // Apply discount if it's valid
        if (discountAmount > 0 && discountAmount < originalPrice) {
            const newPrice = originalPrice - discountAmount;
            const percentageDiscount = Math.round((discountAmount / originalPrice) * 100);

            originalPriceElement.textContent = `€${originalPrice.toFixed(2)}`;
            originalPriceElement.style.display = 'inline';

            discountedPriceElement.textContent = `€${newPrice.toFixed(2)}`;
            
            promoBanner.textContent = `-${percentageDiscount}%`;
            promoBanner.style.display = 'block';

        } else {
            // If no discount, show only the original price
            originalPriceElement.style.display = 'none'; // Hide the strike-through element
            discountedPriceElement.textContent = `€${originalPrice.toFixed(2)}`;
            promoBanner.style.display = 'none';
        }
    });
});

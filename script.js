/* ==================== DATA & STATE MANAGEMENT ==================== */
const FOOD_DATA = [
  {
    id: 1,
    name: "Rice Bowl Ayam Crispy",
    category: "Ayam",
    price: 15000,
    rating: 4.9,
    isRecommended: true,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
    desc: "Rice bowl ayam crispy renyah dengan nasi hangat dan saus spesial kantin."
  },
  {
    id: 2,
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    price: 13000,
    rating: 4.8,
    isRecommended: true,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80",
    desc: "Nasi goreng bumbu lezat dengan topping telur, bakso, dan kerupuk."
  },
  {
    id: 3,
    name: "Mie Ayam Bakso",
    category: "Mie",
    price: 12000,
    rating: 4.7,
    isRecommended: true,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
    desc: "Mie kenyal dengan potongan ayam semur gurih dan 2 bakso sapi."
  },
  {
    id: 4,
    name: "Ayam Geprek Sambal Korek",
    category: "Ayam",
    price: 14000,
    rating: 4.9,
    isRecommended: false,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80",
    desc: "Ayam digeprek pedas gurih disajikan dengan nasi hangat pedas mantap."
  },
  {
    id: 5,
    name: "Mie Goreng Jumbo",
    category: "Mie",
    price: 10000,
    rating: 4.6,
    isRecommended: false,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80",
    desc: "Mie goreng dengan bumbu khas racikan kantin sekolah porsi mengenyangkan."
  },
  {
    id: 6,
    name: "Chicken Burger",
    category: "Fast Food",
    price: 15000,
    rating: 4.7,
    isRecommended: false,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    desc: "Burger daging ayam renyah dengan keju, selada, dan saus mayo."
  },
  {
    id: 7,
    name: "Kentang Goreng Keju",
    category: "Snack",
    price: 8000,
    rating: 4.8,
    isRecommended: true,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
    desc: "French fries renyah bertabur bumbu keju gurih favorit istirahat."
  },
  {
    id: 8,
    name: "Seblak Komplit",
    category: "Makanan",
    price: 12000,
    rating: 4.9,
    isRecommended: false,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80",
    desc: "Seblak pedas kuah kencur dengan kerupuk basah, sosis, bakso, dan ceker."
  },
  {
    id: 9,
    name: "Es Teh Manis Jumbo",
    category: "Minuman",
    price: 4000,
    rating: 5.0,
    isRecommended: true,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
    desc: "Es teh segar manis pas pelupas dahaga sehabis pelajaran penjas."
  },
  {
    id: 10,
    name: "Jus Alpukat",
    category: "Minuman",
    price: 10000,
    rating: 4.8,
    isRecommended: false,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80",
    desc: "Jus alpukat kental dengan krimer cokelat lezat."
  },
  {
    id: 11,
    name: "Milkshake Cokelat",
    category: "Minuman",
    price: 8000,
    rating: 4.7,
    isRecommended: false,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
    desc: "Susu manis rasa cokelat dingin creamy."
  },
  {
    id: 12,
    name: "Pisang Coklat Lumer",
    category: "Dessert",
    price: 7000,
    rating: 4.9,
    isRecommended: true,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=500&q=80",
    desc: "Piscok goreng krispi dengan isian cokelat lumer manis."
  }
];

// App State initialized from LocalStorage
let appState = {
  cart: JSON.parse(localStorage.getItem('lea_cart')) || [],
  favorites: JSON.parse(localStorage.getItem('lea_favs')) || [1, 9],
  history: JSON.parse(localStorage.getItem('lea_history')) || [],
  activeCategory: 'all',
  activeItemModal: null,
  modalQty: 1
};

/* ==================== DOM ELEMENTS ==================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  initEventListeners();
  renderAllViews();
});

/* ==================== EVENT LISTENERS & NAVIGATION ==================== */
function initEventListeners() {
  // Start Button Click (Welcome Screen -> Main App)
  const btnStart = document.getElementById('btn-start');
  btnStart.addEventListener('click', () => {
    btnStart.style.transform = 'scale(0.9)';
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('hidden');

    setTimeout(() => {
      document.getElementById('welcome-screen').classList.remove('active');
      document.getElementById('welcome-screen').classList.add('hidden');
      overlay.classList.add('hidden');
      document.getElementById('app-container').classList.remove('hidden');
    }, 800);
  });

  // Bottom Navigation Switches
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetPage = item.getAttribute('data-target');
      switchView(targetPage);

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Category Filter Chips
  const categoryChips = document.querySelectorAll('.cat-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      appState.activeCategory = chip.getAttribute('data-category');
      renderMenu();
    });
  });

  // Live Search Input
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    renderMenu(val);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    renderMenu();
  });

  // Location Selector Radio Event
  const locationRadios = document.querySelectorAll('input[name="location"]');
  locationRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const kelasContainer = document.getElementById('kelas-input-container');
      if (e.target.value === 'Kelas') {
        kelasContainer.classList.remove('hidden');
      } else {
        kelasContainer.classList.add('hidden');
      }
    });
  });

  // Payment Radio Event (QRIS Simulation Toggle)
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const qrisBox = document.getElementById('qris-simulation');
      if (e.target.value === 'QRIS') {
        qrisBox.classList.remove('hidden');
      } else {
        qrisBox.classList.add('hidden');
      }
    });
  });

  // Modal Events
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('qty-minus').addEventListener('click', () => updateModalQty(-1));
  document.getElementById('qty-plus').addEventListener('click', () => updateModalQty(1));
  document.getElementById('btn-add-to-cart-modal').addEventListener('click', addModalItemToCart);

  // Proceed Checkout Button
  document.getElementById('btn-proceed-checkout').addEventListener('click', () => {
    if (appState.cart.length === 0) return;
    switchView('page-checkout');
  });

  document.getElementById('btn-back-to-cart').addEventListener('click', () => {
    switchView('page-cart');
  });

  // Pay Now Button
  document.getElementById('btn-pay-now').addEventListener('click', handlePaymentSubmit);

  // History / Profile Navigation Buttons
  document.getElementById('btn-to-history').addEventListener('click', () => switchView('page-history'));
  document.getElementById('btn-notif-trigger').addEventListener('click', () => switchView('page-notifications'));
  document.getElementById('header-avatar').addEventListener('click', () => switchView('page-profile'));
  document.getElementById('prof-btn-fav').addEventListener('click', () => switchView('page-favorites'));
  document.getElementById('prof-btn-history').addEventListener('click', () => switchView('page-history'));
  document.getElementById('prof-btn-notif').addEventListener('click', () => switchView('page-notifications'));
}

/* ==================== RENDERING FUNCTIONS ==================== */
function renderAllViews() {
  renderRecommended();
  renderMenu();
  renderFavorites();
  renderCart();
  renderHistory();
  updateCartBadge();
}

function switchView(pageId) {
  const pages = document.querySelectorAll('.view-page');
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.remove('hidden');
      page.classList.add('active');
    } else {
      page.classList.add('hidden');
      page.classList.remove('active');
    }
  });

  if (pageId === 'page-favorites') renderFavorites();
  if (pageId === 'page-cart') renderCart();
  if (pageId === 'page-history') renderHistory();

  window.scrollTo(0, 0);
}

// Render Recomendation "Untukmu"
function renderRecommended() {
  const container = document.getElementById('recommended-container');
  const recommendedItems = FOOD_DATA.filter(item => item.isRecommended);

  container.innerHTML = recommendedItems.map(item => `
    <div class="rec-card" onclick="openModal(${item.id})">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="card-title">${item.name}</div>
      <div class="card-bottom-row">
        <span class="price-text">Rp${item.price.toLocaleString('id-ID')}</span>
        <button class="btn-add-mini" onclick="event.stopPropagation(); quickAddToCart(${item.id})">+</button>
      </div>
    </div>
  `).join('');
}

// Render Menu Makanan with Search & Category Filtering
function renderMenu(query = '') {
  const container = document.getElementById('menu-container');
  const noResults = document.getElementById('no-results');

  let filtered = FOOD_DATA;

  // Filter Category
  if (appState.activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === appState.activeCategory);
  }

  // Filter Query
  if (query) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');
  container.innerHTML = filtered.map((item, index) => {
    const isFav = appState.favorites.includes(item.id);
    return `
      <div class="food-card" style="animation-delay: ${index * 0.05}s" onclick="openModal(${item.id})">
        <button class="fav-btn-card" onclick="event.stopPropagation(); toggleFavorite(${item.id})">
          ${isFav ? '❤️' : '♡'}
        </button>
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="rating-badge">⭐ ${item.rating} ${item.isBestSeller ? '• 🔥 Best Seller' : ''}</span>
        <div class="card-title">${item.name}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-bottom-row">
          <span class="price-text">Rp${item.price.toLocaleString('id-ID')}</span>
          <button class="btn-add-mini" onclick="event.stopPropagation(); quickAddToCart(${item.id})">+</button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Favorites Page
function renderFavorites() {
  const container = document.getElementById('favorites-container');
  const noFavs = document.getElementById('no-favorites');

  const favItems = FOOD_DATA.filter(item => appState.favorites.includes(item.id));

  if (favItems.length === 0) {
    container.innerHTML = '';
    noFavs.classList.remove('hidden');
    return;
  }

  noFavs.classList.add('hidden');
  container.innerHTML = favItems.map(item => `
    <div class="food-card" onclick="openModal(${item.id})">
      <button class="fav-btn-card" onclick="event.stopPropagation(); toggleFavorite(${item.id})">❤️</button>
      <img src="${item.image}" alt="${item.name}" />
      <div class="card-title">${item.name}</div>
      <p class="card-desc">${item.desc}</p>
      <div class="card-bottom-row">
        <span class="price-text">Rp${item.price.toLocaleString('id-ID')}</span>
        <button class="btn-add-mini" onclick="event.stopPropagation(); quickAddToCart(${item.id})">+</button>
      </div>
    </div>
  `).join('');
}

// Render Cart
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const emptyCart = document.getElementById('empty-cart');
  const summaryBox = document.getElementById('cart-summary-box');

  if (appState.cart.length === 0) {
    container.innerHTML = '';
    emptyCart.classList.remove('hidden');
    summaryBox.classList.add('hidden');
    return;
  }

  emptyCart.classList.add('hidden');
  summaryBox.classList.remove('hidden');

  let subtotal = 0;

  container.innerHTML = appState.cart.map((cartItem, idx) => {
    const itemTotal = cartItem.totalPrice * cartItem.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${cartItem.image}" alt="${cartItem.name}" />
        <div class="cart-item-info">
          <h4>${cartItem.name}</h4>
          ${cartItem.extras.length > 0 ? `<p style="font-size:0.7rem; color:#8d99ae;">+ ${cartItem.extras.join(', ')}</p>` : ''}
          <p class="cart-item-price">Rp${itemTotal.toLocaleString('id-ID')}</p>
        </div>
        <div class="quantity-control">
          <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
          <span style="font-size: 0.85rem; font-weight:700;">${cartItem.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  const total = subtotal + 1000; // + Service fee Rp1.000

  document.getElementById('cart-subtotal').innerText = `Rp${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('cart-total').innerText = `Rp${total.toLocaleString('id-ID')}`;
  document.getElementById('checkout-total-price').innerText = `Rp${total.toLocaleString('id-ID')}`;
}

// Render Order History
function renderHistory() {
  const container = document.getElementById('history-container');
  if (appState.history.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <span>📋</span>
        <p>Belum ada riwayat pesanan.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.history.map(order => `
    <div class="checkout-form glass-morphism margin-top-sm" style="margin-bottom: 12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="color:var(--primary); font-size:0.85rem;">#${order.id}</strong>
        <span class="student-status-tag">${order.status}</span>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted);">${order.date}</p>
      <hr class="divider"/>
      ${order.items.map(i => `<p style="font-size:0.82rem;">${i.name} × ${i.qty}</p>`).join('')}
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
        <span style="font-weight:800; font-size:0.9rem;">Total: Rp${order.total.toLocaleString('id-ID')}</span>
        <button class="btn-secondary" style="padding:6px 12px; font-size:0.75rem;" onclick="reorder('${order.id}')">Pesan Lagi</button>
      </div>
    </div>
  `).join('');
}

/* ==================== CART & MODAL ACTIONS ==================== */
function openModal(id) {
  const item = FOOD_DATA.find(f => f.id === id);
  if (!item) return;

  appState.activeItemModal = item;
  appState.modalQty = 1;

  document.getElementById('modal-img').src = item.image;
  document.getElementById('modal-title').innerText = item.name;
  document.getElementById('modal-price').innerText = `Rp${item.price.toLocaleString('id-ID')}`;
  document.getElementById('modal-desc').innerText = item.desc;
  document.getElementById('modal-qty').innerText = '1';
  document.getElementById('modal-notes').value = '';

  // Reset checkboxes
  document.querySelectorAll('.checkbox-option input').forEach(cb => cb.checked = false);

  const tag = document.getElementById('modal-tag');
  if (item.isBestSeller) {
    tag.innerText = '🔥 Best Seller';
    tag.classList.remove('hidden');
  } else {
    tag.classList.add('hidden');
  }

  document.getElementById('product-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

function updateModalQty(change) {
  appState.modalQty = Math.max(1, appState.modalQty + change);
  document.getElementById('modal-qty').innerText = appState.modalQty;
}

function addModalItemToCart() {
  if (!appState.activeItemModal) return;

  const extras = [];
  let extraPrice = 0;

  document.querySelectorAll('.checkbox-option input:checked').forEach(cb => {
    extras.push(cb.value);
    extraPrice += parseInt(cb.getAttribute('data-price') || '0');
  });

  const notes = document.getElementById('modal-notes').value.trim();

  const cartItem = {
    id: appState.activeItemModal.id,
    name: appState.activeItemModal.name,
    image: appState.activeItemModal.image,
    price: appState.activeItemModal.price,
    totalPrice: appState.activeItemModal.price + extraPrice,
    qty: appState.modalQty,
    extras: extras,
    notes: notes
  };

  appState.cart.push(cartItem);
  saveCart();
  closeModal();
  showToast(`✓ ${cartItem.name} ditambahkan ke keranjang`);
}

function quickAddToCart(id) {
  const item = FOOD_DATA.find(f => f.id === id);
  if (!item) return;

  const existingIndex = appState.cart.findIndex(c => c.id === id && c.extras.length === 0);
  if (existingIndex > -1) {
    appState.cart[existingIndex].qty += 1;
  } else {
    appState.cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      totalPrice: item.price,
      qty: 1,
      extras: [],
      notes: ''
    });
  }

  saveCart();
  showToast(`✓ ${item.name} ditambahkan!`);
}

function updateCartQty(index, change) {
  appState.cart[index].qty += change;
  if (appState.cart[index].qty <= 0) {
    appState.cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function toggleFavorite(id) {
  const idx = appState.favorites.indexOf(id);
  if (idx > -1) {
    appState.favorites.splice(idx, 1);
    showToast('Item dihapus dari favorit');
  } else {
    appState.favorites.push(id);
    showToast('❤️ Ditambahkan ke favorit Lea!');
  }

  localStorage.setItem('lea_favs', JSON.stringify(appState.favorites));
  renderMenu();
  renderFavorites();
}

function saveCart() {
  localStorage.setItem('lea_cart', JSON.stringify(appState.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = appState.cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById('nav-cart-count').innerText = count;
}

/* ==================== CHECKOUT & ORDER SIMULATION ==================== */
function handlePaymentSubmit() {
  if (appState.cart.length === 0) return;

  const btnPay = document.getElementById('btn-pay-now');
  btnPay.innerText = 'MEMPROSES PESANAN...';
  btnPay.disabled = true;

  setTimeout(() => {
    btnPay.innerText = 'BAYAR & PESAN SEKARANG';
    btnPay.disabled = false;

    // Calculate Total
    const subtotal = appState.cart.reduce((a, b) => a + (b.totalPrice * b.qty), 0);
    const total = subtotal + 1000;
    const orderId = 'LEA-' + Math.floor(1000 + Math.random() * 9000);

    // Save to History
    const newOrder = {
      id: orderId,
      items: [...appState.cart],
      total: total,
      status: 'Sedang Diproses',
      date: new Date().toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    appState.history.unshift(newOrder);
    localStorage.setItem('lea_history', JSON.stringify(appState.history));

    // Clear Cart
    appState.cart = [];
    saveCart();

    // Trigger Confetti
    if (window.confetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    document.getElementById('tracking-order-id').innerText = `#${orderId}`;
    switchView('page-tracking');
    simulateLiveTracking();
  }, 1200);
}

function simulateLiveTracking() {
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step4 = document.getElementById('step-4');

  step1.className = 'timeline-step completed';
  step2.className = 'timeline-step active';
  step3.className = 'timeline-step';
  step4.className = 'timeline-step';

  setTimeout(() => {
    step2.className = 'timeline-step completed';
    step3.className = 'timeline-step active';
    showToast('🔔 Pesanan Lea siap diambil/diantar!');
  }, 5000);
}

function reorder(orderId) {
  const pastOrder = appState.history.find(h => h.id === orderId);
  if (!pastOrder) return;

  pastOrder.items.forEach(item => {
    appState.cart.push({ ...item });
  });

  saveCart();
  switchView('page-cart');
  showToast('✓ Pesanan berhasil ditambahkan ke keranjang');
}

/* ==================== TOAST UTILITY ==================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').innerText = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2200);
}


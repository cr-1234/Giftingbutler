// Mock Gift Products Data with extensive category metadata (Uncommon Goods style, premium selection)
const products = [
  {
    id: 1,
    title: "Aesthetic Wave Mirror",
    brand: "LumiDeco",
    price: 38.00,
    categories: ["decor", "her", "bat-mitzvah", "housewarming"],
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "An elegant, retro-inspired wavy vanity mirror that adds instant visual texture and warmth to any modern room. Featured extensively on TikTok aesthetic curations.",
    affiliateUrl: "https://www.uncommongoods.com/product/wavy-neon-mirror",
    badge: "Trending"
  },
  {
    id: 2,
    title: "Soft Cotton Swaddle & Teether Set",
    brand: "LoomyBaby",
    price: 34.99,
    categories: ["baby", "bris", "children-u3", "grandchildren"],
    imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium organic muslin cotton swaddles paired with a natural maple wood teething ring. Perfect baby registry starter kit.",
    affiliateUrl: "https://www.amazon.com/dp/B08V5NPD8X?tag=giftingbutler-20",
    badge: "Organic"
  },
  {
    id: 3,
    title: "Leather Embossed Kiddush Cup Set",
    brand: "JudaicArt",
    price: 120.00,
    categories: ["bar-mitzvah", "lchaim-vort", "wedding"],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A gorgeous modern silver kiddush cup with a handcrafted custom leather wrap sleeve. Excellent milestone souvenir.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Premium Art"
  },
  {
    id: 4,
    title: "Upsherin Scissors & Honey Cake Box Set",
    brand: "TraditionBox",
    price: 45.00,
    categories: ["upsherin", "children-u3", "grandchildren"],
    imageUrl: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Traditional honey biscuits and personalized keepsakes for a toddler's Upsherin hair cutting ceremony.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Specialty"
  },
  {
    id: 5,
    title: "Modern Glass Mezuzah Case",
    brand: "StudioGlass",
    price: 55.00,
    categories: ["housewarming", "wedding", "lchaim-vort"],
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Beautiful clean lines and color infusions characterize this Mezuzah casing. Hand-blown craftsmanship.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "New Home"
  },
  {
    id: 6,
    title: "Retro Mechanical Keyboard",
    brand: "ClickyVibe",
    price: 89.00,
    categories: ["tech", "him", "bar-mitzvah"],
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A gorgeous retro typewriter-style keyboard with satisfying tactile switches, round keys, and custom ambient backlights.",
    affiliateUrl: "https://www.uncommongoods.com/product/retro-typewriter-keyboard",
    badge: "Bestseller"
  },
  {
    id: 7,
    title: "Personalized Silver Challah Board",
    brand: "SterlingCrown",
    price: 210.00,
    categories: ["wedding", "housewarming"],
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A heavy marble chalboard featuring elegant sterling silver borders. A traditional and centerpiece gift for weddings.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Handcrafted"
  },
  {
    id: 8,
    title: "Ambient Sunset Projection Lamp",
    brand: "SolGlow",
    price: 15.00,
    categories: ["tech", "decor", "her", "children-9-12"],
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Bathe your room in beautiful, warm golden sunset hues. Rotate 180 degrees to projects colors across walls, ceiling, and desk layouts.",
    affiliateUrl: "https://www.uncommongoods.com/product/sunset-lamp",
    badge: "Cozy Vibes"
  },
  {
    id: 9,
    title: "Interactive Wooden Play Gym",
    brand: "HabaKids",
    price: 64.95,
    categories: ["children-u3", "grandchildren"],
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A beautifully designed organic birch wood activity play gym with sensory toys to assist infant sensory exploration.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Pure Wood"
  },
  {
    id: 10,
    title: "Stem Coding Robot Toy",
    brand: "RoboEdu",
    price: 79.99,
    categories: ["children-4-8", "grandchildren", "him", "her"],
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Introduce kids to basic computer coding logic with this charming programmable robot toy containing path cards.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "STEM"
  },
  {
    id: 11,
    title: "Creative Sketching Tablet Set",
    brand: "ArtJoy",
    price: 45.00,
    categories: ["children-9-12", "grandchildren", "her"],
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A high-precision drawing kit containing a sleek design tablet, styling pen, and drawing lessons handbook.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Creative"
  },
  {
    id: 12,
    title: "Sterling Silver Havdalah Set",
    brand: "JudaicArt",
    price: 180.00,
    categories: ["shvielle-chaim-vort", "wedding"],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A beautifully sculpted sterling silver Havdalah set including spice holder, candle holder, and tray.",
    affiliateUrl: "https://www.amazon.com/?tag=giftingbutler-20",
    badge: "Traditional"
  }
];

// Local Storage Helper Utilities
const storage = {
  get: (key, fallback) => {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Weekly Key Generator helper for dynamic entry counting
function getWeeklyKey(prefix) {
  const d = new Date();
  const year = d.getFullYear();
  const start = new Date(year, 0, 1);
  const diff = d - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const weekNum = Math.ceil((diff / oneDay + start.getDay() + 1) / 7);
  return `${prefix}_${year}_w${weekNum}`;
}

// User Giveaway Helper Logic
function getGiveawayEntries() { 
  return storage.get(getWeeklyKey('giveawayEntries'), []); 
}

function setGiveawayEntries(entries) { 
  storage.set(getWeeklyKey('giveawayEntries'), entries); 
}

function getMyEmail() { 
  return localStorage.getItem(getWeeklyKey('giveawayMyEmail')); 
}

function setMyEmail(email) { 
  localStorage.setItem(getWeeklyKey('giveawayMyEmail'), email); 
}

// Prize amount scales with entries
function calculatePrize(count) {
  if (count >= 10000) return '$100';
  if (count >= 5000)  return '$75';
  if (count >= 1000)  return '$50';
  if (count >= 250)   return '$25';
  if (count >= 100)   return '$10';
  return '$5';
}

// Update giveaway entry count and prize display
function updateEntryCount() {
  const entries = getGiveawayEntries();
  const countEl = document.getElementById('entryCount');
  const prizeEl = document.getElementById('prizeAmount');
  const tiers   = document.querySelectorAll('.prize-tier');
  const prize   = calculatePrize(entries.length);
  
  if (countEl) countEl.textContent = entries.length;
  if (prizeEl) prizeEl.textContent = prize;
  
  if (tiers.length) {
    const map = { '$5': 0, '$10': 1, '$25': 2, '$50': 3, '$75': 4, '$100': 5 };
    const targetIdx = map[prize] !== undefined ? map[prize] : 0;
    tiers.forEach((t, i) => {
      t.classList.toggle('active', i === targetIdx);
    });
  }
}

// Add Mock Seed Entries if storage is empty
if (getGiveawayEntries().length === 0) {
  const initialSeeds = Array.from({length: 120}, (_, i) => `seeduser${i}@gmail.com`);
  setGiveawayEntries(initialSeeds);
}

// Application Registry State
let familyMembers = storage.get("gifting_butler_family", [
  { id: 1, name: "Jacob", wishlist: [
    { title: "Retro Mechanical Keyboard", url: "https://www.uncommongoods.com/product/retro-typewriter-keyboard" }
  ]},
  { id: 2, name: "Sarah", wishlist: [
    { title: "Aesthetic Wave Mirror", url: "https://www.uncommongoods.com/product/wavy-neon-mirror" }
  ]}
]);

let reminders = storage.get("gifting_butler_reminders", [
  { id: 1, event: "Sarah's Birthday", date: "2026-07-15", timeOption: "2_weeks" },
  { id: 2, event: "Jacob's Graduation", date: "2026-06-25", timeOption: "1_week" }
]);

let activeMemberId = familyMembers.length > 0 ? familyMembers[0].id : null;
let currentProductViewing = null;

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const giveawayModal = document.getElementById("giveaway-modal");
const triggerGiveawayBtn = document.getElementById("trigger-giveaway-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const giveawayForm = document.getElementById("giveaway-form");
const familyMemberList = document.getElementById("family-member-list");
const addMemberForm = document.getElementById("add-member-form");
const memberNameInput = document.getElementById("member-name-input");
const activeWishlistContainer = document.getElementById("active-wishlist-container");
const activeMemberName = document.getElementById("active-member-name");
const wishlistItemsContainer = document.getElementById("wishlist-items");
const addWishlistItemForm = document.getElementById("add-wishlist-item-form");
const wishlistTitleInput = document.getElementById("wishlist-title-input");
const wishlistUrlInput = document.getElementById("wishlist-url-input");
const shareWishlistBtn = document.getElementById("share-wishlist-btn");
const reminderForm = document.getElementById("reminder-form");
const reminderList = document.getElementById("reminder-list");

// Details Modal
const detailModal = document.getElementById("detail-modal");
const closeDetailModalBtn = document.getElementById("close-detail-modal-btn");
const detailImg = document.getElementById("detail-img");
const detailBrand = document.getElementById("detail-brand");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");
const detailPrice = document.getElementById("detail-price");
const detailAffiliateLink = document.getElementById("detail-affiliate-link");
const detailWishlistBtn = document.getElementById("detail-wishlist-btn");

// Header Search
const headerSearchInput = document.getElementById("header-search");

// Giveaway Popup Step Transition Elements
// (Removed stepAd and stepForm as we simplified the modal)

// Render Product Catalog
function renderProducts(categoryFilter = "all", searchQuery = "") {
  productsGrid.innerHTML = "";
  
  const feedTitle = document.getElementById("feed-title");
  if (feedTitle) {
    if (searchQuery) {
      feedTitle.textContent = `Search results for: "${searchQuery}"`;
    } else if (categoryFilter === "all") {
      feedTitle.textContent = "Trending Curations";
    } else {
      const cleanTitle = categoryFilter.replace("-", " ").toUpperCase();
      feedTitle.textContent = `${cleanTitle} SELECTIONS`;
    }
  }

  let filtered = products;

  if (categoryFilter !== "all") {
    filtered = filtered.filter(p => p.categories.includes(categoryFilter));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 3rem 1rem; color:var(--text-muted); font-weight:800;">No items found. Try searching or filtering another category.</p>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.imageUrl}" alt="${p.title}" class="product-img" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <button class="product-wishlist-btn" onclick="event.stopPropagation(); quickAddToWishlist('${p.title}', '${p.affiliateUrl}')">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="product-details">
        <span class="product-brand">${p.brand}</span>
        <span class="product-title">${p.title}</span>
        <div class="product-price-row">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <span class="product-link">
            Details <i data-lucide="info"></i>
          </span>
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openProductDetails(p);
    });

    productsGrid.appendChild(card);
  });
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Product Details Popup modal logic
function openProductDetails(product) {
  currentProductViewing = product;
  detailImg.src = product.imageUrl;
  detailBrand.textContent = product.brand;
  detailTitle.textContent = product.title;
  detailDesc.textContent = product.description;
  detailPrice.textContent = `$${product.price.toFixed(2)}`;
  detailAffiliateLink.href = product.affiliateUrl;

  const member = familyMembers.find(m => m.id === activeMemberId);
  const wishlistBtnText = member ? `Add to ${member.name}'s wishlist` : "Add to your wishlist";
  detailWishlistBtn.innerHTML = `<i data-lucide="heart"></i> ${wishlistBtnText}`;
  
  detailModal.style.display = "flex";
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

function hideProductDetails() {
  detailModal.style.display = "none";
  currentProductViewing = null;
}

closeDetailModalBtn.addEventListener("click", hideProductDetails);
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) hideProductDetails();
});

detailWishlistBtn.addEventListener("click", () => {
  if (currentProductViewing) {
    quickAddToWishlist(currentProductViewing.title, currentProductViewing.affiliateUrl);
    hideProductDetails();
  }
});

// Category Selection Clicks Filter
document.querySelectorAll(".category-select-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    document.querySelectorAll(".category-select-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("data-category") === category);
    });
    renderProducts(category, headerSearchInput.value.trim());
  });
});

// Search input handling
headerSearchInput.addEventListener("input", (e) => {
  const activeLink = document.querySelector(".category-select-link.active");
  const category = activeLink ? activeLink.getAttribute("data-category") : "all";
  renderProducts(category, e.target.value.trim());
});

// Quick Add product item to active family wishlist
window.quickAddToWishlist = function(title, url) {
  if (!activeMemberId) {
    alert("Please add or select a Family Member first!");
    return;
  }
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member) {
    if (member.wishlist.some(item => item.url === url)) {
      alert("This item is already in their wishlist!");
      return;
    }
    member.wishlist.push({ title, url });
    storage.set("gifting_butler_family", familyMembers);
    renderWishlist();
    alert(`Added "${title}" to ${member.name}'s wishlist!`);
  }
};

// Giveaway Modal Navigation
function showGiveawayModal() {
  giveawayModal.style.display = "flex";
}

function hideGiveawayModal() {
  giveawayModal.style.display = "none";
}

triggerGiveawayBtn.addEventListener("click", showGiveawayModal);
closeModalBtn.addEventListener("click", hideGiveawayModal);
giveawayModal.addEventListener("click", (e) => {
  if (e.target === giveawayModal) hideGiveawayModal();
});

giveawayForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("giveaway-email").value.trim();
  
  let entries = getGiveawayEntries();
  if (entries.includes(email)) {
    alert("This email is already registered for this week's giveaway!");
    hideGiveawayModal();
    return;
  }

  entries.push(email);
  setGiveawayEntries(entries);
  setMyEmail(email);
  
  alert(`✨ Success! You have been entered into the Gifting Butler Weekly Giveaway!`);
  hideGiveawayModal();
});

// Automatically trigger popup on session load
window.addEventListener("load", () => {
  setTimeout(() => {
    if (!sessionStorage.getItem("gifting_butler_modal_dismissed")) {
      showGiveawayModal();
      sessionStorage.setItem("gifting_butler_modal_dismissed", "true");
    }
  }, 2000);
});

// Mobile Nav Drawer logic
const mobileMenuBtn   = document.getElementById("mobile-menu-btn");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileNavOverlay= document.getElementById("mobile-nav-overlay");
const mobileNavClose  = document.getElementById("mobile-nav-close");
const mobileGiveawayBtn = document.getElementById("mobile-giveaway-btn");

function openMobileNav() {
  mobileNavDrawer.classList.add("open");
  mobileNavOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeMobileNav() {
  mobileNavDrawer.classList.remove("open");
  mobileNavOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", openMobileNav);
mobileNavClose.addEventListener("click", closeMobileNav);
mobileNavOverlay.addEventListener("click", closeMobileNav);

// Mobile drawer links close the drawer when tapped
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    closeMobileNav();
  });
});

// Mobile giveaway button
mobileGiveawayBtn.addEventListener("click", () => {
  closeMobileNav();
  showGiveawayModal();
});

// Family Registry & Wishlists logic
function renderFamilyMembers() {
  familyMemberList.innerHTML = "";
  familyMembers.forEach(member => {
    const item = document.createElement("div");
    item.className = `family-member-item ${member.id === activeMemberId ? 'active' : ''}`;
    item.innerHTML = `
      <div class="family-member-info">
        <h4>${member.name}</h4>
        <p>${member.wishlist.length} Items listed</p>
      </div>
      <button class="wishlist-item-delete" onclick="deleteFamilyMember(event, ${member.id})">
        <i data-lucide="trash-2"></i>
      </button>
    `;
    item.addEventListener("click", () => {
      activeMemberId = member.id;
      renderFamilyMembers();
      renderWishlist();
    });
    familyMemberList.appendChild(item);
  });
  if (window.lucide) lucide.createIcons();
}

addMemberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = memberNameInput.value.trim();
  if (name) {
    const newId = familyMembers.length > 0 ? Math.max(...familyMembers.map(m => m.id)) + 1 : 1;
    familyMembers.push({ id: newId, name, wishlist: [] });
    activeMemberId = newId;
    memberNameInput.value = "";
    storage.set("gifting_butler_family", familyMembers);
    renderFamilyMembers();
    renderWishlist();
  }
});

window.deleteFamilyMember = function(event, id) {
  event.stopPropagation();
  familyMembers = familyMembers.filter(m => m.id !== id);
  if (activeMemberId === id) {
    activeMemberId = familyMembers.length > 0 ? familyMembers[0].id : null;
  }
  storage.set("gifting_butler_family", familyMembers);
  renderFamilyMembers();
  renderWishlist();
};

function renderWishlist() {
  if (!activeMemberId) {
    activeWishlistContainer.style.display = "none";
    return;
  }
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (!member) {
    activeWishlistContainer.style.display = "none";
    return;
  }

  activeWishlistContainer.style.display = "block";
  activeMemberName.textContent = member.name;
  wishlistItemsContainer.innerHTML = "";

  if (member.wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:1rem;">Wishlist is empty. Paste a link below!</p>`;
    return;
  }

  member.wishlist.forEach((item, index) => {
    const element = document.createElement("div");
    element.className = "wishlist-item";
    element.innerHTML = `
      <a href="${item.url}" target="_blank"><i data-lucide="gift" style="width:14px; height:14px; vertical-align:middle; margin-right:4px;"></i> ${item.title}</a>
      <button class="wishlist-item-delete" onclick="deleteWishlistItem(${index})">
        <i data-lucide="x"></i>
      </button>
    `;
    wishlistItemsContainer.appendChild(element);
  });
  if (window.lucide) lucide.createIcons();
}

window.deleteWishlistItem = function(index) {
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member) {
    member.wishlist.splice(index, 1);
    storage.set("gifting_butler_family", familyMembers);
    renderFamilyMembers();
    renderWishlist();
  }
};

addWishlistItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = wishlistTitleInput.value.trim();
  let url = wishlistUrlInput.value.trim();
  
  if (url.includes("amazon.com")) {
    const urlObj = new URL(url);
    urlObj.searchParams.set("tag", "giftingbutler-20");
    url = urlObj.toString();
  }

  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member && title && url) {
    member.wishlist.push({ title, url });
    wishlistTitleInput.value = "";
    wishlistUrlInput.value = "";
    storage.set("gifting_butler_family", familyMembers);
    renderFamilyMembers();
    renderWishlist();
  }
});

shareWishlistBtn.addEventListener("click", () => {
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member) {
    const shareText = `Check out ${member.name}'s wishlist on Gifting Butler:\n` + 
      member.wishlist.map(item => `- ${item.title}: ${item.url}`).join("\n");
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Wishlist copied to clipboard!");
    });
  }
});

// Yearly Event Reminders Logic
function renderReminders() {
  reminderList.innerHTML = "";
  if (reminders.length === 0) {
    reminderList.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:1rem;">No reminders set yet.</p>`;
    return;
  }

  reminders.forEach(rem => {
    const item = document.createElement("div");
    item.className = "reminder-item";
    
    const dateObj = new Date(rem.date);
    const dateFormatted = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
    
    const cleanOption = rem.timeOption.replace("_", " ");
    
    item.innerHTML = `
      <div class="reminder-details">
        <h4>${rem.event}</h4>
        <p><i data-lucide="refresh-cw" style="width:12px; height:12px; vertical-align:middle;"></i> Yearly on ${dateFormatted} | Alert: ${cleanOption} before</p>
      </div>
      <button class="reminder-delete" onclick="deleteReminder(${rem.id})">
        <i data-lucide="trash-2" style="width:16px; height:16px;"></i>
      </button>
    `;
    reminderList.appendChild(item);
  });
  if (window.lucide) lucide.createIcons();
}

reminderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const eventName = document.getElementById("reminder-event").value.trim();
  const eventDate = document.getElementById("reminder-date").value;
  const timeOption = document.getElementById("reminder-time").value;

  if (eventName && eventDate) {
    const newId = reminders.length > 0 ? Math.max(...reminders.map(r => r.id)) + 1 : 1;
    reminders.push({ id: newId, event: eventName, date: eventDate, timeOption });
    document.getElementById("reminder-event").value = "";
    document.getElementById("reminder-date").value = "";
    storage.set("gifting_butler_reminders", reminders);
    renderReminders();
    alert(`Reminder for "${eventName}" saved successfully!`);
  }
});

window.deleteReminder = function(id) {
  reminders = reminders.filter(r => r.id !== id);
  storage.set("gifting_butler_reminders", reminders);
  renderReminders();
};

// Initial Runs
renderProducts("all");
renderFamilyMembers();
renderWishlist();
renderReminders();

// Back to Top functionality
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

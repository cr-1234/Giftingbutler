// Mock Gift Products Data (Uncommon Goods style with Gen Z appeal)
const products = [
  {
    id: 1,
    title: "Aesthetic Wave Mirror",
    brand: "LumiDeco",
    price: 38.00,
    category: "decor",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/wavy-neon-mirror",
    badge: "Trending"
  },
  {
    id: 2,
    title: "Ami Magazine Print Subscription",
    brand: "Ami Magazine Weekly",
    price: 180.00,
    category: "magazines",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.amimagazine.org/",
    badge: "Weekly Print"
  },
  {
    id: 3,
    title: "Mishpacha Magazine Subscription",
    brand: "Mishpacha Weekly",
    price: 195.00,
    category: "magazines",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://mishpacha.com/",
    badge: "Holiday Special"
  },
  {
    id: 4,
    title: "Retro Mechanical Keyboard",
    brand: "ClickyVibe",
    price: 89.00,
    category: "tech",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/retro-typewriter-keyboard",
    badge: "Bestseller"
  },
  {
    id: 5,
    title: "Mushroom Bedside Lamp",
    brand: "Shroomy",
    price: 24.50,
    category: "decor",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/mushroom-glass-lamp",
    badge: "TikTok Fav"
  },
  {
    id: 6,
    title: "Minimalist Instax Camera Organizer",
    brand: "FujiKeep",
    price: 19.99,
    category: "lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/camera-stand",
    badge: "Organized"
  },
  {
    id: 7,
    title: "Scented Cereal Bowl Candle",
    brand: "SmellGood",
    price: 18.00,
    category: "lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/cereal-bowl-candle",
    badge: "Uncommon Only"
  },
  {
    id: 8,
    title: "Ambient Sunset Projection Lamp",
    brand: "SolGlow",
    price: 15.00,
    category: "tech",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    affiliateUrl: "https://www.uncommongoods.com/product/sunset-lamp",
    badge: "Cozy vibes"
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

// Application State
let familyMembers = storage.get("gifty_family_members", [
  { id: 1, name: "Jacob", wishlist: [
    { title: "Retro Mechanical Keyboard", url: "https://www.uncommongoods.com/product/retro-typewriter-keyboard" },
    { title: "Scented Cereal Bowl Candle", url: "https://www.uncommongoods.com/product/cereal-bowl-candle" }
  ]},
  { id: 2, name: "Sarah", wishlist: [
    { title: "Aesthetic Wave Mirror", url: "https://www.uncommongoods.com/product/wavy-neon-mirror" }
  ]}
]);

let reminders = storage.get("gifty_reminders", [
  { id: 1, event: "Sarah's Birthday", date: "2026-07-15", timeOption: "2_weeks" },
  { id: 2, event: "Jacob's Graduation", date: "2026-06-25", timeOption: "1_week" }
]);

let activeMemberId = familyMembers.length > 0 ? familyMembers[0].id : null;

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const categoryTags = document.querySelectorAll(".category-tag");
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
const chatbotTriggerBtn = document.getElementById("chatbot-trigger-btn");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInputForm = document.getElementById("chatbot-input-form");
const chatbotInput = document.getElementById("chatbot-input");
const heroChatBtn = document.getElementById("hero-chat-btn");

// Render Product Catalog
function renderProducts(categoryFilter = "all") {
  productsGrid.innerHTML = "";
  const filtered = categoryFilter === "all" 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.imageUrl}" alt="${p.title}" class="product-img" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <button class="product-wishlist-btn" onclick="quickAddToWishlist('${p.title}', '${p.affiliateUrl}')">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="product-details">
        <span class="product-brand">${p.brand}</span>
        <a href="${p.affiliateUrl}" target="_blank" class="product-title">${p.title}</a>
        <div class="product-price-row">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <a href="${p.affiliateUrl}" target="_blank" class="product-link">
            Buy Gift <i data-lucide="external-link"></i>
          </a>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Quick Add product card item to active user wishlist
window.quickAddToWishlist = function(title, url) {
  if (!activeMemberId) {
    alert("Please add or select a Family Member first!");
    return;
  }
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member) {
    // Avoid duplicates
    if (member.wishlist.some(item => item.url === url)) {
      alert("This item is already in their wishlist!");
      return;
    }
    member.wishlist.push({ title, url });
    storage.set("gifty_family_members", familyMembers);
    renderWishlist();
    alert(`Added "${title}" to ${member.name}'s Wishlist!`);
  }
};

// Filter Products trigger
categoryTags.forEach(tag => {
  tag.addEventListener("click", () => {
    categoryTags.forEach(t => t.classList.remove("active"));
    tag.classList.add("active");
    renderProducts(tag.dataset.category);
  });
});

// Giveaway Popup trigger
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
  const email = document.getElementById("giveaway-email").value;
  alert(`✨ Success! ${email} has been entered into the giveaway! Watch out for special partner updates from Mishpacha in your inbox.`);
  hideGiveawayModal();
});

// Show popup automatically on load (after 2 seconds delay)
window.addEventListener("load", () => {
  setTimeout(() => {
    // Only display if the user hasn't closed it yet in this session
    if (!sessionStorage.getItem("gifty_modal_dismissed")) {
      showGiveawayModal();
      sessionStorage.setItem("gifty_modal_dismissed", "true");
    }
  }, 2000);
});

// Family Registry Widget Logic
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
    storage.set("gifty_family_members", familyMembers);
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
  storage.set("gifty_family_members", familyMembers);
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
    storage.set("gifty_family_members", familyMembers);
    renderFamilyMembers();
    renderWishlist();
  }
};

addWishlistItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = wishlistTitleInput.value.trim();
  const url = wishlistUrlInput.value.trim();
  const member = familyMembers.find(m => m.id === activeMemberId);
  
  if (member && title && url) {
    member.wishlist.push({ title, url });
    wishlistTitleInput.value = "";
    wishlistUrlInput.value = "";
    storage.set("gifty_family_members", familyMembers);
    renderFamilyMembers();
    renderWishlist();
  }
});

shareWishlistBtn.addEventListener("click", () => {
  const member = familyMembers.find(m => m.id === activeMemberId);
  if (member) {
    const shareText = `Check out ${member.name}'s gift wishlist on Gifty:\n` + 
      member.wishlist.map(item => `- ${item.title}: ${item.url}`).join("\n");
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Wishlist copied to clipboard! Share it with friends and family.");
    });
  }
});

// Gifting Event Reminders Logic
function renderReminders() {
  reminderList.innerHTML = "";
  if (reminders.length === 0) {
    reminderList.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:1rem;">No reminders set yet.</p>`;
    return;
  }

  reminders.forEach(rem => {
    const item = document.createElement("div");
    item.className = "reminder-item";
    const dateFormatted = new Date(rem.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const cleanOption = rem.timeOption.replace("_", " ");
    
    item.innerHTML = `
      <div class="reminder-details">
        <h4>${rem.event}</h4>
        <p><i data-lucide="calendar" style="width:12px; height:12px; vertical-align:middle;"></i> ${dateFormatted} | Alert: ${cleanOption} before</p>
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
    storage.set("gifty_reminders", reminders);
    renderReminders();
    alert(`Reminder for "${eventName}" saved successfully!`);
  }
});

window.deleteReminder = function(id) {
  reminders = reminders.filter(r => r.id !== id);
  storage.set("giftingbutler_reminders", reminders);
  renderReminders();
};

// AI Chatbot Box Logic
function toggleChatbot() {
  const isVisible = chatbotWindow.style.display === "flex";
  chatbotWindow.style.display = isVisible ? "none" : "flex";
}

chatbotTriggerBtn.addEventListener("click", toggleChatbot);
chatbotCloseBtn.addEventListener("click", () => chatbotWindow.style.display = "none");
heroChatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  chatbotWindow.style.display = "flex";
  chatbotInput.focus();
});

chatbotInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatbotInput.value.trim();
  if (!text) return;

  // Render user bubble
  appendChatBubble(text, "user");
  chatbotInput.value = "";

  // Mock bot reply logic with delay
  setTimeout(() => {
    const botReply = generateBotResponse(text);
    appendChatBubble(botReply, "bot");
  }, 600);
});

function appendChatBubble(text, sender) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-bubble-${sender}`;
  bubble.textContent = text;
  chatbotMessages.appendChild(bubble);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateBotResponse(userMsg) {
  const msg = userMsg.toLowerCase();
  
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey! Ready to find the dopest gift? Who's the lucky person and what do they like? (Tech, books, cool mirror, aesthetic room decor?)";
  }
  if (msg.includes("ami") || msg.includes("mishpacha") || msg.includes("magazine") || msg.includes("read")) {
    return "A magazine subscription is a stellar gift option! We support prints from Ami Weekly and Mishpacha. You can find their subscriptions in our 'Reading/Sub' category tab above! Would you like me to highlight them?";
  }
  if (msg.includes("sister") || msg.includes("girl") || msg.includes("she")) {
    return "For her, the TikTok viral Aesthetic Wave Mirror or a Scented Cereal Bowl Candle are absolute hits. They add instant high-vibes to any vanity setup!";
  }
  if (msg.includes("brother") || msg.includes("tech") || msg.includes("gamer") || msg.includes("boy")) {
    return "For gamer/tech enthusiasts, the Retro Typewriter Keyboard is insanely popular. Or check out the Ambient Sunset Projection Lamp for cozy evening study setups!";
  }
  if (msg.includes("mom") || msg.includes("mother") || msg.includes("parent")) {
    return "Moms love cozy vibes! I'd recommend the Scented Cereal Bowl Candle, or if she loves reading, a Mishpacha print subscription is the perfect weekly gift!";
  }
  
  return "Ooh, nice vibe! I'd highly recommend checking out our top curations like the Retro Mechanical Keyboard or the Wave Mirror. Or you can add a custom affiliate link from any store onto a family member's wishlist right on Gifty!";
}

// Initial Runs
renderProducts("all");
renderFamilyMembers();
renderWishlist();
renderReminders();

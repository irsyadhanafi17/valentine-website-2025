// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    specialPersonName: "Patty",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Favorite and Forever Person? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💗'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Am I your safe place?",                                    // First interaction
            yesBtn: "Always",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "More than just a place, you are my home. 🏠"           // Secret hover message
        },
        second: {
            text: "How much do you value our process?",                          // For the love meter
            startText: "To the moon and back!",                                   // Text before the percentage
            nextBtn: "Next ⏳"                                         // Text for the next button
        },
        third: {
            text: "Will you be my favorite and forever person? To grow, to support, and to stay until we're gold. ✨", // The big question!
            yesBtn: "Yes, Forever!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I knew our bond was this strong! 🥰🚀✨v",  // Shows when they go past 5000%
        high: "To growth and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "Together in every step. 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm so grateful to have you! 🎉✨💝",
        message: "'No matter where the road leads, I promise to be the one who cheers for you the loudest. Let's grow and stay until we're gold! ✨'",
        emojis: "🚀🌱🏠"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#f8d7da",  // Pink Vintage lembut
        backgroundEnd: "#fdf2e9",    // Krem hangat
        buttonBackground: "#d63384", 
        buttonHover: "#ff8787",      
        textColor: "#634141"         // Cokelat tua agar tulisan jelas dibaca
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.2s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.1         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://files.catbox.moe/69rw8l.mp3", // Music streaming URL
        startText: "🔊",        // Button text to start music
        stopText: "🔇",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

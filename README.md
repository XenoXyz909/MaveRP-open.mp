# MaveRP-open.mp

# 🎮 Mave Roleplay (Open.MP)

**MaveRP** is a modern roleplay gamemode built for [Open.MP](https://open.mp), designed to bring a realistic and optimized roleplay experience to San Andreas Multiplayer (SA-MP) players.  
Developed with performance, modularity, and immersion in mind.

Credits :
Yee (Owner & Founder)

XenoX (Developer & Founder)



---

## ✨ Features

- 🧩 **Character System**
  - Multi-character support
  - Clean UI with dialog-based menus

- 💬 **Chat & Roleplay System**
  - Proximity-based chat
  - OOC / IC distinction
  - Chat radius configurable from settings

- 💾 **MySQL Integration**
  - Secure player data storage
  - Automatic reconnection handling
  - Character and account linking

- 🚗 **Vehicle Management**
  - Player-owned vehicles
  - Engine, lights, and lock systems

- 🏙️ **Dynamic World**
  - Load objects dynamically via Streamer
  - Support for 0.3DL and Open.MP artwork

- 🛡️ **Admin & RCON Tools**
  - Command-based admin system
  - Live player logs and RCON security

---

## 🛠️ Requirements

| Dependency | Version | Purpose |
|-------------|----------|----------|
| **Open.MP Server** | `>= 1.3.0` | Game server base |
| **MySQL Plugin** | `R41+` | Database connection |
| **samp_bcrypt** | Latest | Password hashing |
| **Streamer Plugin** | Latest | Dynamic object streaming |
| **CrashDetect** | Latest | Debugging and error catching |

---

## ⚙️ Configuration

Edit the `server.cfg.json` file to configure your server.

Example:
```json
{
    "name": "Mave Roleplay",
    "language": "English",
    "max_players": 50,
    "logo": "https://raw.githubusercontent.com/XenoXyz909/MaveRP-open.mp/main/logo.png",
    "banners": {
        "light": "https://raw.githubusercontent.com/XenoXyz909/MaveRP-open.mp/main/light_banner.png",
        "dark": "https://raw.githubusercontent.com/XenoXyz909/MaveRP-open.mp/main/dark_banner.png"
    },
    "discord": {
        "invite": "https://discord.gg/maverp"
    },
    "pawn": {
        "legacy_plugins": ["crashdetect", "mysql", "samp_bcrypt", "streamer"],
        "main_scripts": ["main"]
    }
}

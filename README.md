<p align="center"><a target="_blank"><img src="res/myfigudb_banner_blue.svg" alt="MyFiguDB Logo"></a></p>

<p align="center">
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white" alt="PostgreSQL"></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" alt="Express.js"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="https://nodemon.io/"><img src="https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=white" alt="Nodemon"></a>
</p>


**MyFiguDB** is a personal **figurine collection manager**.  
It allows users to **search**, **track**, and **organize** their figure collection, monitor **resellers**, and **discover new releases**.

> Built with a **PERN** stack: **PostgreSQL** (via Prisma ORM), **Express**, **React**, **Node.js** (and Nodemon).

---

## About MyFiguDB

- Create your personal figure **collection**
- Build your **wishlist** with upcoming releases
- View figures with **images** and details
- **Search** figures by license, series, or character
- Track **purchase status** and release dates
- Check **prices** and **availability** from **resellers**
- Explore **other users’** collections and wishlists

---

## Database Schema

### Users & Collection
- `user` → [id, name, username, password]
- `figure_user` → [user_id, figure_id, comment, score, is_bought, buy_at]

### Figures & Metadata
- `figure` → [id, name, size, release_date]
- `editor` → [id, name]
- `series` → [id, name]
- `figure_image` → [id, figure_id, size]
- `figure_status` → [id, name]

### Characters & Licenses
- `character` → [id, name, license_id]
- `license` → [id, name]
- `figure_character` → [figure_id, character_id]

### Resellers
- `reseller` → [id, name, url]
- `figure_reseller` → [figure_id, reseller_id, price, ref, url, status]

---

## Tech Stack

| Layer       | Tech                            |
|-------------|---------------------------------|
| Frontend    | React                           |
| Backend     | Node.js (and Nodemon) + Express |
| Database    | PostgreSQL + Prisma (ORM)       |

---

## 📄 License

Licensed under the MIT License.
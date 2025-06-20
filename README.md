# Skincare-product-website-design
# 🌿 Skincare React UI

A modern, responsive skincare website built with **React**, **Tailwind CSS**, and **GSAP animations**. This project includes dynamic product filtering, scroll-based text effects, responsive layout design, and animated UI components for a beautiful user experience.

---

## 📸 Features

- 🖼️ **Responsive Hero Sections**
  - Large background images with overlaid titles and buttons
- 🛍️ **Best-Selling Products**
  - Clean card layout with product images, names, and prices
  - Cart icon highlights active category items
- 🎛️ **Product Category Filters**
  - Filter buttons with GSAP-highlighted cart icons
  - All products visible; active ones visually highlighted
- ❓ **Animated FAQ Section**
  - Expand/collapse behavior with plus/minus icon toggle
  - Scroll animations for text appearance
- ✨ **Scroll-based Text Animation**
  - "SKINCARE" header text animates on scroll using GSAP
  - Word-by-word paragraph fade-in on scroll

---

## 🔧 Technologies Used

| Tech         | Usage                             |
|--------------|-----------------------------------|
| React        | Component-based UI                |
| Tailwind CSS | Utility-first styling             |
| GSAP         | Animation and scroll triggers     |
| Lucide React | Beautiful icons                   |

---
## 📁 Folder Structure
### Skincare-product-website-design/
├── public/
│ ├── products/
│ │ ├── alya.png
│ │ ├── sakura.png
│ │ └── body-lotion.png
│ └── hero/
│ └── beauty-product.jpg
├── src/
│ ├── components/
│ │ ├── HeroGsap.jsx
│ │ ├── FilteredProductSection.jsx
│ │ ├── FaqSection.jsx
│ │ ├── SkincareScrollText.jsx
│ │ └── SkincareIntroText.jsx
│ └── App.jsx
├── README.md
└── package.json

## 🎯 Customization Notes

- 📸 Place your product images inside `/public/products/`
- 🖼️ Hero section image goes in `/public/hero/`
- ✅ You can update the product or FAQ list from inside the respective component files (`src/components/`)

## 🧪 Future Enhancements (Optional)

- [ ] Add backend integration for dynamic product data
- [ ] Add a contact form with form validation
- [ ] Animate individual letters in headings
- [ ] Add unit tests for UI behavior

---

 ## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

 ## 👨‍💻 Developed by

**Abhishek Ranjan**  
🔗 [GitHub Profile](https://github.com/abhisheksdhr62)


## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/skincare-react-ui.git
cd skincare-react-ui


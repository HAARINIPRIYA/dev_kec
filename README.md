# Kongu Engineering College - DevOps Program Website

A professional, responsive website for Kongu Engineering College's DevOps program in collaboration with GUVI.

## 📋 Project Overview

This is a complete front-end website featuring 7 pages with forms, validation, and a modern design. The website showcases the DevOps program offered through a partnership between Kongu Engineering College and GUVI.

## 📁 Project Structure

```
guvi_kec/
├── index.html              # Home Page
├── about.html              # About Us Page
├── register.html           # Registration Form Page
├── schedule.html           # Program Schedule Page
├── contact.html            # Contact & Support Page
├── login.html              # Student Login Page
├── signup.html             # New Account Sign Up Page
├── css/
│   └── styles.css          # Custom CSS and animations
├── js/
│   └── script.js           # Form validation and interactivity
└── README.md               # This file
```

## 🎨 Features

### Pages Included

1. **Home Page (index.html)**
   - Hero banner with call-to-action buttons
   - Program highlights section
   - Key information cards
   - Partnership showcase
   - Call-to-action section

2. **About Page (about.html)**
   - Mission statement
   - Information about Kongu Engineering College
   - Information about GUVI partnership
   - Partnership benefits
   - Program overview
   - Student testimonials
   - Statistics

3. **Register Page (register.html)**
   - Comprehensive registration form
   - Personal information fields
   - Academic information fields
   - Program preferences
   - Form validation with error messages

4. **Schedule Page (schedule.html)**
   - Upcoming batch information
   - 12-week course structure timeline
   - Important dates and deadlines
   - Learning mode details (Online, Offline, Hybrid)

5. **Contact Page (contact.html)**
   - Contact information cards
   - Contact form with validation
   - Office hours for both institutions
   - FAQ section with collapsible answers

6. **Login Page (login.html)**
   - Email/Username login field
   - Password field with visibility toggle
   - Remember me checkbox
   - "Forgot password" link
   - Sign up redirect
   - Demo login credentials

7. **Sign Up Page (signup.html)**
   - Full registration form for new users
   - Personal information fields
   - Contact information
   - Password strength indicator
   - Password confirmation
   - Terms agreement
   - Newsletter opt-in

### Responsive Design
- ✅ Fully responsive on mobile, tablet, and desktop
- ✅ Mobile hamburger navigation menu
- ✅ Flexible grid layouts
- ✅ Touch-friendly buttons and forms

### Form Validation
- ✅ Email validation
- ✅ Phone number validation
- ✅ Password strength requirements
- ✅ Password matching validation
- ✅ Required field validation
- ✅ Real-time error messages
- ✅ Success messages on form submission

### Design Elements
- ✅ Professional gradient backgrounds
- ✅ Smooth transitions and hover effects
- ✅ Card-based layouts
- ✅ Consistent navigation bar across all pages
- ✅ Professional footer with links
- ✅ Icons and emojis for visual appeal
- ✅ Color scheme: Blue and Purple

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Client-side form validation and interactivity
- **No Backend Required** - All functionality is client-side

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation & Usage

1. **Extract/Clone the project files**
   ```bash
   # If you have the files, simply navigate to the project folder
   cd guvi_kec
   ```

2. **Open in a web browser**
   - Option A: Double-click `index.html` to open it directly
   - Option B: Use a local server (recommended)
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js (with http-server):
   ```bash
   npx http-server
   ```
   
   Then visit: `http://localhost:8000`

3. **Navigate through pages**
   - Use the navigation bar to visit different pages
   - Test all forms with validation
   - Try responsive design by resizing your browser

## 📝 Form Features

### Registration Form Validation
- First Name and Last Name (minimum 2 characters)
- Email address (valid email format)
- Phone number (valid 10+ digit format)
- Department selection
- Year of study selection
- College name
- Batch preference
- Learning mode selection
- Experience level
- Terms acceptance

### Contact Form Validation
- Full name (minimum 2 characters)
- Email address (valid format)
- Phone number (optional)
- Inquiry category selection
- Subject (minimum 3 characters)
- Message (minimum 10 characters)
- Contact consent checkbox

### Login Form Validation
- Email or username (minimum 3 characters)
- Password (minimum 6 characters)
- Remember me option
- Forgot password link

### Sign Up Form Validation
- First and last name
- Email address
- Phone number
- Country selection
- Password strength requirements:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one number
  - At least one special character
- Password confirmation matching
- Terms agreement

## 🎨 Color Scheme

- **Primary Blue**: #2563eb
- **Primary Purple**: #7c3aed
- **Dark Text**: #1f2937
- **Light Background**: #f9fafb
- **Border Color**: #e5e7eb

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Small**: 640px - 768px
- **Medium**: 768px - 1024px
- **Large**: 1024px - 1280px
- **Extra Large**: > 1280px

## 🔐 Login Credentials (Demo)

For testing the login page:
- **Email**: demo@kec.ac.in
- **Password**: Demo123!

## 📞 Contact Information

**Kongu Engineering College**
- Address: Perundurai, Erode, Tamil Nadu, India - 638052
- Phone: +91 9876543210
- Email: devops@kec.ac.in

**GUVI**
- Phone: +91 9876543211
- Email: support@guvi.in

## 🔄 Navigation Structure

All pages include:
- Fixed navigation bar with links to all pages
- Mobile hamburger menu for small screens
- Footer with quick links and social media
- Consistent styling and layout

## ✨ JavaScript Features

- Mobile menu toggle
- Form validation with error messages
- Password visibility toggle
- Password strength indicator
- Success messages on form submission
- Smooth animations on scroll
- FAQ toggle functionality

## 📦 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

The website includes information about:
- DevOps fundamentals
- Docker containerization
- Kubernetes orchestration
- CI/CD pipelines
- Cloud platforms (AWS)
- Infrastructure as Code
- More advanced DevOps topics

## 📊 Program Details

- **Duration**: 12 weeks
- **Batch Size**: Limited to 50 students
- **Fee**: ₹25,000
- **Learning Modes**: Online, Offline, Hybrid
- **Start Dates**: Multiple batches (March, May, etc.)
- **Eligibility**: Engineering students and IT professionals

## 🚨 Error Handling

All forms include:
- Field-level validation
- Real-time error messages
- User-friendly error descriptions
- Success confirmation messages
- Error clearing on re-attempt

## ♿ Accessibility Features

- Semantic HTML5 markup
- Proper heading hierarchy
- Alt text placeholders for images
- Focus states on interactive elements
- Clear button labels
- Proper form labels

## 📝 Notes

- All data is processed client-side only
- No data is sent to a server
- Forms reset after successful submission
- Mobile menu auto-closes when a link is clicked
- Password fields include visibility toggle

## 🔮 Future Enhancements

Potential additions for backend integration:
- Database for storing registrations
- Email notifications
- User dashboard
- Payment gateway integration
- Certificate generation system
- Student progress tracking

## 📄 License

This project is created for Kongu Engineering College and GUVI partnership.

## 👨‍💻 Developer Notes

- All styles are using Tailwind CSS utility classes
- Custom CSS in `styles.css` provides animations and additional effects
- JavaScript is vanilla (no frameworks required)
- Forms use HTML5 validation attributes as fallback
- Mobile-first responsive design approach

## 🐛 Testing Checklist

- [ ] Test all navigation links
- [ ] Fill out registration form completely
- [ ] Test form validation (empty fields, invalid email, etc.)
- [ ] Test contact form validation
- [ ] Test login form with demo credentials
- [ ] Test signup form password strength indicator
- [ ] Test mobile responsiveness on different screen sizes
- [ ] Test mobile menu toggle
- [ ] Check all interactive elements (buttons, dropdowns, etc.)
- [ ] Verify all external links work
- [ ] Test FAQ accordion

## 💡 Tips for Customization

1. **Change Colors**: Update the color variables in `css/styles.css`
2. **Update Content**: Edit text directly in HTML files
3. **Replace Logos**: Replace the "K" logo with actual college logo
4. **Modify Forms**: Add/remove fields as needed in respective HTML files
5. **Update Contact Info**: Edit phone numbers and emails in relevant sections
6. **Add Backend**: Connect forms to a backend API by modifying `js/script.js`

---

**Created with ❤️ for Kongu Engineering College & GUVI Partnership**
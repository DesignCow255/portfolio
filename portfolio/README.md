# Responsive Portfolio Website

A modern, fully responsive portfolio website built with HTML5, CSS3, and JavaScript. Features a comprehensive CV section, mobile-first design, and smooth animations.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **CV Section**: Complete CV page with download functionality
- **Interactive Navigation**: Mobile-friendly hamburger menu
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Accessibility**: Screen reader friendly with proper semantic HTML
- **Performance Optimized**: Fast loading with optimized assets

## File Structure

```
portfolio/
├── index.html          # Homepage with hero section
├── cv.html            # Comprehensive CV page
├── about.html         # About page with skills
├── work.html          # Work portfolio page
├── category.html      # Project categories page
├── project.html       # Individual project detail page
├── contact.html       # Contact form page
├── styles.css         # Complete responsive stylesheet
├── script.js          # Interactive JavaScript functionality
├── img/               # Image assets directory
│   ├── clients/       # Client logos
│   └── projects/      # Project screenshots
└── docs/              # Document assets
    └── cv.pdf         # CV document for download
```

## Pages Overview

### Homepage (index.html)

- Hero section with profile image
- Brief introduction and call-to-action buttons
- Featured work preview
- Navigation to CV and other sections

### CV Page (cv.html)

- Personal information section
- Skills overview with categorized lists
- Professional experience timeline
- Education background
- Certifications and achievements
- Featured projects showcase
- Direct PDF download link

### About Page (about.html)

- Personal story and background
- Skills and expertise
- Statistics and achievements
- Professional philosophy

### Work Portfolio (work.html)

- Grid layout of projects
- Project categories and filtering
- Links to detailed project pages

### Contact Page (contact.html)

- Contact form with validation
- Contact information display
- Social media links

## Technical Details

### CSS Features

- CSS Custom Properties (CSS Variables)
- Flexbox and CSS Grid layouts
- Mobile-first responsive design
- Smooth transitions and animations
- Dark mode support (via prefers-color-scheme)
- Print-friendly styles

### JavaScript Features

- Mobile menu toggle functionality
- Form validation and submission
- Smooth scrolling navigation
- Intersection Observer animations
- Back-to-top button
- Keyboard navigation support
- Error handling and accessibility features

### Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above
- **Large Screens**: 1400px and above

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Setup

1. **Local Development Server**

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js (if available)
   npx http-server -p 8000

   # Using PHP (if available)
   php -S localhost:8000
   ```

2. **File Structure**
   - Place images in `img/` directory
   - Place documents in `docs/` directory
   - Update file paths in HTML as needed

3. **Customization**
   - Update personal information in CV section
   - Replace placeholder images with actual photos
   - Modify color scheme in CSS custom properties
   - Add/remove sections as needed

## Performance Notes

- CSS is optimized with minimal redundancy
- JavaScript is loaded efficiently with DOM ready checks
- Images are optimized for web (consider using WebP format)
- Font loading is handled by system fonts for better performance

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators for interactive elements
- Skip-to-content link for screen readers

## Future Enhancements

- [ ] Dark mode toggle button
- [ ] Multi-language support
- [ ] Blog/news section
- [ ] Project filtering and search
- [ ] Admin panel for content management
- [ ] Integration with headless CMS

## License

This project is open source and available under the MIT License.

## Contact

For questions or contributions, please use the contact form on the website or reach out through the provided contact information.

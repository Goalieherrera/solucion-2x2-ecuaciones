==============================
2x2 Equation Solver (HTML/JS)
==============================

This is a responsive web-based tool that solves a system of two linear equations with two variables (x, y). It uses Cramer's Rule to compute the solution.

==========
TECHNOLOGIES
==========
- HTML5
- Tailwind CSS (via CDN)
- Modern JavaScript (vanilla)
- Modular structure (index.html, style.css, script.js)

==========
HOW IT WORKS
==========
Solves systems of equations in this form:

  a₁·x + b₁·y = c₁  
  a₂·x + b₂·y = c₂

Using **Cramer's Rule**:

  Determinant (D) = a₁·b₂ - a₂·b₁

  x = (c₁·b₂ - c₂·b₁) / D  
  y = (a₁·c₂ - a₂·c₁) / D

If the determinant is 0, it reports "No unique solution".

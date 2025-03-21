function solveEquations() {
    const a1 = parseFloat(document.getElementById("a1").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
    const a2 = parseFloat(document.getElementById("a2").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const c2 = parseFloat(document.getElementById("c2").value);
  
    const det = a1 * b2 - a2 * b1;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(det)) {
      resultDiv.textContent = "Please fill in all the coefficients.";
      return;
    }
  
    if (det === 0) {
      resultDiv.textContent = "❌ No unique solution (determinant is 0)";
      return;
    }
  
    const x = (c1 * b2 - c2 * b1) / det;
    const y = (a1 * c2 - a2 * c1) / det;
  
    resultDiv.innerHTML = `✅ <strong>x</strong> = ${x.toFixed(4)}<br/>✅ <strong>y</strong> = ${y.toFixed(4)}`;
  }
  
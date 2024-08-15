document.getElementById('generateButton').addEventListener('click', () => {
    const codeInput = document.getElementById('codeInput').value;
    const diagramContainer = document.getElementById('diagramContainer');

    // Borra cualquier diagrama anterior
    diagramContainer.innerHTML = '';

    // Usa flowchart.js para generar el diagrama
    const diagram = flowchart.parse(codeInput);
    diagram.drawSVG('diagramContainer');
});
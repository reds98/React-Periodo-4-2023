const canvas = document.getElementById("asterigramaCanvas");
const ctx = canvas.getContext("2d");

const grid_size = 12;
const cell_size = canvas.width / grid_size;
const fontSize = cell_size * 0.7; 

const words = {
    horizontales: ['BYTE', 'PILA'],
    verticales: ['MEMORIA', 'REGISTRO'],
    cuestarriba: ['HEXA', 'PROCES'],
    cuestabajo: ['INSTRU', 'SEGMENT']
};

const grid = Array(grid_size).fill(null).map(() => Array(grid_size).fill(' '));

// Insertar palabras en la cuadrícula

// horizontales
for (let i = 0; i < words.horizontales[0].length; i++) grid[3][3+i] = words.horizontales[0][i];
for (let i = 0; i < words.horizontales[1].length; i++) grid[6][5+i] = words.horizontales[1][i];

// verticales
for (let i = 0; i < words.verticales[0].length; i++) grid[2+i][2] = words.verticales[0][i];
for (let i = 0; i < words.verticales[1].length; i++) grid[3+i][8] = words.verticales[1][i];

// cuestarriba
for (let i = 0; i < words.cuestarriba[0].length; i++) grid[grid_size-2-i][1+i] = words.cuestarriba[0][i];
for (let i = 0; i < words.cuestarriba[1].length; i++) grid[grid_size-1-i][4+i] = words.cuestarriba[1][i];

// cuestabajo
for (let i = 0; i < words.cuestabajo[0].length; i++) grid[1+i][2+i] = words.cuestabajo[0][i];
for (let i = 0; i < words.cuestabajo[1].length; i++) grid[2+i][3+i] = words.cuestabajo[1][i];

// Dibujar el grid
for (let i = 0; i < grid_size; i++) {
    for (let j = 0; j < grid_size; j++) {
        ctx.strokeRect(j * cell_size, i * cell_size, cell_size, cell_size);
        
        ctx.font = `${fontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(grid[i][j], j * cell_size + cell_size / 2, i * cell_size + cell_size / 2);
    }
}

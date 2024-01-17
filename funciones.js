const display = document.getElementById('display');
const history = [];

// Función para limpiar la pantalla
const clearDisplay = () => {
    display.value = '';
};

// Función para agregar un dígito u operador al display
const appendToDisplay = (value) => {
    display.value += value;
};

// Función para agregar una entrada al historial
const addHistoryEntry = (expression, result) => {
    history.push({ expression, result });
};

// Función para actualizar el historial en la interfaz de usuario
const updateHistory = () => {
    const historyList = document.getElementById('history-list');

    // Limpiar el historial existente
    historyList.innerHTML = '';

    // Agregar cada entrada del historial como un nuevo elemento de lista
    history.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.expression} = ${entry.result}`;
        listItem.addEventListener('click', () => deleteHistoryEntry(index));
        historyList.appendChild(listItem);
    });
};

// Función para borrar una entrada específica del historial
const deleteHistoryEntry = (index) => {
    history.splice(index, 1);
    updateHistory();
};

// Función para borrar todo el historial
const clearHistory = () => {
    history.length = 0;
    updateHistory();
};
// ... (código anterior)

// Función para borrar el último dígito en el display (retroceso)
const deleteLastDigit = () => {
    const currentExpression = display.value;
    display.value = currentExpression.slice(0, -1);
};

// ... (código posterior)


// Función principal para realizar el cálculo y actualizar el historial
const calculateResult = () => {
    try {
        // Obtener la expresión actual en el display
        const expression = display.value;

        // Utilizar un parser seguro (por ejemplo, la función parseFloat)
        const result = parseFloat(eval(expression).toFixed(10));

        // Mostrar el resultado en el display
        display.value = result;

        // Agregar la entrada al historial y actualizar la interfaz de usuario
        addHistoryEntry(expression, result);
        updateHistory();
    } catch (error) {
        // Manejar errores (por ejemplo, si la expresión es inválida)
        display.value = 'Error';
    }
};

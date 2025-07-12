import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import './App.css'; // Criaremos este arquivo depois

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplayValue('0');
      setClearDisplay(false);
      return;
    }

    if (displayValue === '0' || clearDisplay) {
      setDisplayValue(value);
      setClearDisplay(false);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
     <div className="buttons-grid">
       {/* Linha 1 */}
       <Button label="7" onClick={() => handleButtonClick('7')} />
       <Button label="8" onClick={() => handleButtonClick('8')} />
       <Button label="9" onClick={() => handleButtonClick('9')} />
       <Button label="÷" onClick={() => handleButtonClick('/')} operator />

       {/* Linha 2 */}
       <Button label="4" onClick={() => handleButtonClick('4')} />
       <Button label="5" onClick={() => handleButtonClick('5')} />
       <Button label="6" onClick={() => handleButtonClick('6')} />
       <Button label="×" onClick={() => handleButtonClick('*')} operator />

       {/* Linha 3 */}
       <Button label="1" onClick={() => handleButtonClick('1')} />
       <Button label="2" onClick={() => handleButtonClick('2')} />
       <Button label="3" onClick={() => handleButtonClick('3')} />
       <Button label="-" onClick={() => handleButtonClick('-')} operator />

       {/* Linha 4 - Modificada para incluir o = */}
       <Button label="0" onClick={() => handleButtonClick('0')} />
       <Button label="C" onClick={() => handleButtonClick('C')} />
       <Button label="=" onClick={() => {
         try {
           setDisplayValue(eval(displayValue).toString());
         } catch {
           setDisplayValue('Erro');
         }
       }} equals />
       <Button label="+" onClick={() => handleButtonClick('+')} operator />
     </div>

    </div>
  );
};

export default App;
import logo from './logo.svg';
import './App.css';
import BudgetCard from './components/budgetCard'
import { Button, Container, Stack } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'reapeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        alignItems: 'flex-start'
      }}
      >
        
      </div>
    </Container>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import BudgetCard from './components/budgetCard/BudgetCard'
import { Button, Container, Stack } from 'react-bootstrap'
import AddBudgetModal from './components/addBudgetModal/AddBudgetModal';
import { useState } from 'react';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

  return (
    <>
      <Container>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}
          >
            Add Budget
          </Button>
          <Button variant='outline-primary'>Add Expense</Button>
        </Stack>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'reapeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          alignItems: 'flex-start'
        }}
        >
          <BudgetCard name='Entertainment' amount={200} max={1000} ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => {
        setShowAddBudgetModal(false)
      }} />
    </>
  );
}

export default App;

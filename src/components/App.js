import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main.js';
import ParticleSettings from './ParticleSettings.js';
import { useBlockchain } from '../contexts/BlockchainContext';

function App() {
  const { account, loading, tetherBalance, rwdBalance, stakingBalance, stakeTokens, unstakeTokens, transactionStatus } = useBlockchain();

  let content;
  if (loading) {
    content = <p id='loader' role="status" aria-live="polite" className='text-center' style={{ margin: '30px', color: 'white' }}><b>LOADING PLEASE...</b></p>;
  } else {
    content = (
      <Main
        tetherBalance={tetherBalance}
        rwdBalance={rwdBalance}
        stakingBalance={stakingBalance}
        stakeTokens={stakeTokens}
        unstakeTokens={unstakeTokens}
        transactionStatus={transactionStatus}
      />
    );
  }

  return (
    <div className='App' style={{ position: 'relative' }}>
      <div style={{ position: 'absolute' }}>
        <ParticleSettings />
      </div>
      <Navbar account={account} />
      <div className='container-fluid mt-5'>
        <div className='row'>
          <main role='main' className='col-lg-12 ml-auto mr-auto' style={{ maxWidth: '600px', minHeight: '100vm' }}>
            <div>
              {content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

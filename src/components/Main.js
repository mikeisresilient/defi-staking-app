import React, { useRef } from 'react';
import tether from '../tether.png';
import Airdrop from './Airdrop';
import { useBlockchain } from '../contexts/BlockchainContext';

const Main = () => {
  const { tetherBalance, rwdBalance, stakingBalance, stakeTokens, unstakeTokens, transactionStatus } = useBlockchain();
  const inputRef = useRef(null);

  return (
    <div id='content' className='mt-3'>
      <div className='text-center' style={{ color: 'white' }}>
        <div className='row'>
          <div className='col'>
            <h5>Staking Balance</h5>
            <p>{window.web3.utils.fromWei(stakingBalance, 'Ether')} &nbsp; USDT</p>
          </div>
          <div className='col'>
            <h5>Reward Balance</h5>
            <p>{window.web3.utils.fromWei(rwdBalance, 'Ether')} &nbsp; RWD</p>
          </div>
        </div>
      </div>
      <div className='card mb-2' style={{ opacity: '.9' }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let amount;
            amount = inputRef.current.value.toString();
            amount = window.web3.utils.toWei(amount, 'Ether');
            stakeTokens(amount);
          }}
          className='mb-3'>
          <div style={{ borderSpacing: '0 1em' }}>
            <label htmlFor='stake-amount' className='float-left' style={{ marginLeft: '15px' }}><b>Stake Tokens</b></label>
            <span className='float-right' style={{ marginRight: '8px' }}>
              Balance: {window.web3.utils.fromWei(tetherBalance, 'Ether')}
            </span>
            <div className='input-group mb-4'>
              <input
                id='stake-amount'
                ref={inputRef}
                type='text'
                placeholder='0'
                required />
              <div className='input-group-open'>
                <div className='input-group-text'>
                  <img src={tether} alt='tether' height='32' />
                  &nbsp;&nbsp;&nbsp;USDT
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary btn-lg btn-block'>DEPOSIT</button>
          </div>
        </form>
        <button
          type='submit'
          onClick={(event) => {
            event.preventDefault();
            unstakeTokens();
          }}
          className='btn btn-primary btn-lg btn-block'>WITHDRAW</button>
        <div className='card-body text-center' style={{ color: '#007bff' }}>
          AIRDROP <Airdrop stakingBalance={stakingBalance} />
        </div>
        {transactionStatus &&
          <div role="alert" aria-live="assertive" className='text-center' style={{ color: 'white', marginTop: '10px' }}>
            {transactionStatus}
          </div>
        }
      </div>
    </div>
  );
};

export default Main;
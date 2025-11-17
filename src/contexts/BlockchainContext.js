import React, { createContext, useContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import Tether from '../../shared/abis/Tether.json';
import RWD from '../../shared/abis/RWD.json';
import DecentralBank from '../../shared/abis/DecentralBank.json';

const BlockchainContext = createContext();

export const useBlockchain = () => {
  return useContext(BlockchainContext);
};

export const BlockchainProvider = ({ children }) => {
  const [account, setAccount] = useState('0x0');
  const [tether, setTether] = useState({});
  const [rwd, setRwd] = useState({});
  const [decentralBank, setDecentralBank] = useState({});
  const [tetherBalance, setTetherBalance] = useState('0');
  const [rwdBalance, setRwdBalance] = useState('0');
  const [stakingBalance, setStakingBalance] = useState('0');
  const [loading, setLoading] = useState(true);
  const [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    const load = async () => {
      await loadWeb3();
      await loadBlockchainData();
    };
    load();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('No ethereum browser detected! You can check out MetaMask!');
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    // Load Tether Contract
    const tetherData = Tether.networks[networkId];
    if (tetherData) {
      const tetherContract = new web3.eth.Contract(Tether.abi, tetherData.address);
      setTether(tetherContract);
      let balance = await tetherContract.methods.balanceOf(accounts[0]).call();
      setTetherBalance(balance.toString());
    } else {
      window.alert('Error! Tether contract not deployed - no detected network!');
    }

    // Load RWD Contract
    const rwdData = RWD.networks[networkId];
    if (rwdData) {
      const rwdContract = new web3.eth.Contract(RWD.abi, rwdData.address);
      setRwd(rwdContract);
      let balance = await rwdContract.methods.balanceOf(accounts[0]).call();
      setRwdBalance(balance.toString());
    } else {
      window.alert('Error! Reward Token not deployed - no detected network!');
    }

    // Load DecentralBank Contract
    const decentralBankData = DecentralBank.networks[networkId];
    if (decentralBankData) {
      const decentralBankContract = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address);
      setDecentralBank(decentralBankContract);
      let balance = await decentralBankContract.methods.stakingBalance(accounts[0]).call();
      setStakingBalance(balance.toString());
    } else {
      window.alert('Error! DecentralBank contract not deployed - no detected network!');
    }
    setLoading(false);
  };

  const stakeTokens = (amount) => {
    setLoading(true);
    setTransactionStatus('');
    tether.methods.approve(decentralBank._address, amount).send({ from: account }).on('transactionHash', (hash) => {
      decentralBank.methods.depositTokens(amount).send({ from: account })
        .on('receipt', (receipt) => {
          setLoading(false);
          setTransactionStatus('Staking successful!');
          loadBlockchainData();
        })
        .on('error', (error) => {
          setLoading(false);
          setTransactionStatus('Staking failed: ' + error.message);
        });
    })
    .on('error', (error) => {
        setLoading(false);
        setTransactionStatus('Approval failed: ' + error.message);
    });
  };

  const unstakeTokens = () => {
    setLoading(true);
    setTransactionStatus('');
    decentralBank.methods.unstakeTokens().send({ from: account })
      .on('receipt', (receipt) => {
        setLoading(false);
        setTransactionStatus('Unstaking successful!');
        loadBlockchainData();
      })
      .on('error', (error) => {
        setLoading(false);
        setTransactionStatus('Unstaking failed: ' + error.message);
      });
  };

  const value = {
    account,
    tether,
    rwd,
    decentralBank,
    tetherBalance,
    rwdBalance,
    stakingBalance,
    loading,
    transactionStatus,
    stakeTokens,
    unstakeTokens,
  };

  return (
    <BlockchainContext.Provider value={value}>
      {children}
    </BlockchainContext.Provider>
  );
};

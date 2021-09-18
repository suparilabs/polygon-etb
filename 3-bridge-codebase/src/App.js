import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Navbar from "./Navbar";
import WalletConnectProvider from "@maticnetwork/walletconnect-provider";
const config = require("./config.js");
const MaticPoSClient = require("@maticnetwork/maticjs").MaticPOSClient;
const Network = require("@maticnetwork/meta/network");
const Matic = require("@maticnetwork/maticjs");

const App = () => {
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);
  let content;
  const [Networkid, setNetworkid] = useState(0);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [amount, setInputAmount] = useState("");
  const [burnHash, setBurnHash] = useState("");
  const [maticProvider, setMaticProvider] = useState();
  const [ethereumprovider, setEthereumProvider] = useState();
  const [bridgeOptions] = useState([
    {
      label: "Proof of Stake",
      value: "Proof of Stake",
    },
    {
      label: "Plasma",
      value: "Plasma",
    },
  ]);
  const [tokenTypes, setTokenTypes] = useState([
    {
      label: "Ether",
      value: "Ether",
    },
    {
      label: "ERC20",
      value: "ERC20",
    },
    {
      label: "ERC721",
      value: "ERC721",
    },
    {
      label: "ERC1155",
      value: "ERC1155",
    },
  ]);
  const [selectedBridgeOption, setSelectedBridgeOption] = useState({
    label: "Proof of Stake",
  });
  const [selectedToken, setSelectedToken] = useState({
    label: "Ether",
  });

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setLoading(true);
    const maticProvider = new WalletConnectProvider({
      host: config.MATIC_RPC,
      callbacks: {
        onConnect: console.log("matic connected"),
        onDisconnect: console.log("matic disconnected!"),
      },
    });

    const ethereumProvider = new WalletConnectProvider({
      host: config.ETHEREUM_RPC,
      callbacks: {
        onConnect: console.log("mainchain connected"),
        onDisconnect: console.log("mainchain disconnected"),
      },
    });

    setMaticProvider(maticProvider);
    setEthereumProvider(ethereumProvider);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    setNetworkid(networkId);

    if (networkId === config.ETHEREUM_CHAINID) {
      setLoading(false);
    } else if (networkId === config.MATIC_CHAINID) {
      setLoading(false);
    } else {
      window.alert(" switch to  Matic or Ethereum network");
    }
  };
  // posClientGeneral facilitates the operations like approve, deposit, exit
  const posClientParent = () => {
    const maticPoSClient = new MaticPoSClient({
      network: config.NETWORK,
      version: config.VERSION,
      maticProvider: maticProvider,
      parentProvider: window.web3,
      parentDefaultOptions: { from: account },
      maticDefaultOptions: { from: account },
    });
    return maticPoSClient;
  };
  // posclientBurn facilitates the burning of tokens on the matic chain
  const posClientChild = () => {
    const maticPoSClient = new MaticPoSClient({
      network: config.NETWORK,
      version: config.VERSION,
      maticProvider: window.web3,
      parentProvider: ethereumprovider,
      parentDefaultOptions: { from: account },
      maticDefaultOptions: { from: account },
    });
    return maticPoSClient;
  };
  // getMaticPlasmaClient facilitates the burning of tokens on the matic chain
  const getMaticPlasmaParent = async (
    _network = config.NETWORK,
    _version = config.VERSION
  ) => {
    const network = new Network(_network, _version);
    const matic = new Matic({
      network: _network,
      version: _version,
      parentProvider: window.web3,
      maticProvider: maticProvider,
      parentDefaultOptions: { from: account },
      maticDefaultOptions: { from: account },
    });
    await matic.initialize();
    return { matic, network };
  };

  // getMaticPlasmaClientBurn facilitates the operations like approve, deposit,confirmWithdraw ,exit
  const getMaticPlasmaChild = async (
    _network = config.NETWORK,
    _version = config.VERSION
  ) => {
    const matic = new Matic({
      network: _network,
      version: _version,
      parentProvider: ethereumprovider,
      maticProvider: window.web3,
      parentDefaultOptions: { from: account },
      maticDefaultOptions: { from: account },
    });
    await matic.initialize();
    return { matic };
  };

  // POS ether functionality

  const depositEther = async () => {
    const maticPoSClient = posClientParent();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();

    await maticPoSClient.depositEtherForUser(account, x1, {
      from: account,
    });
  };

  const burnEther = async () => {
    const maticPoSClient = posClientChild();
    const x = inputValue * 1000000000000000000;
    const x1 = x.toString();
    await maticPoSClient
      .burnERC20(config.posChildWETH, x1, {
        from: account,
      })
      .then((res) => {
        console.log(res.transactionHash);
        setBurnHash(res.transactionHash);
      });
  };

  const exitEther = async () => {
    const maticPoSClient = posClientParent();
    await maticPoSClient
      .exitERC20(inputValue, {
        from: account,
      })
      .then((res) => {
        console.log("exit o/p", res);
      });
  };

  // POS ERC20 functionality

  const depositERC20 = async () => {
    const maticPoSClient = posClientParent();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();
    await maticPoSClient.approveERC20ForDeposit(config.posRootERC20, x1, {
      from: account,
    });
    await maticPoSClient.depositERC20ForUser(config.posRootERC20, account, x1, {
      from: account,
    });
  };

  const burnERC20 = async () => {
    const maticPoSClient = posClientChild();
    const x = inputValue * 1000000000000000000;
    const x1 = x.toString();
    await maticPoSClient
      .burnERC20(config.posChildERC20, x1, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
      });
  };

  const exitERC20 = async () => {
    const maticPoSClient = posClientParent();
    await maticPoSClient
      .exitERC20(inputValue, {
        from: account,
      })
      .then((res) => {
        console.log("exit o/p", res);
      });
  };
  // POS ERC721 functionality

  const depositERC721 = async () => {
    const maticPoSClient = posClientParent();
    const tokenId = inputValue.toString();
    await maticPoSClient.approveERC721ForDeposit(
      config.posRootERC721,
      tokenId,
      {
        from: account,
      }
    );
    await maticPoSClient.depositERC721ForUser(
      config.posRootERC721,
      account,
      tokenId,
      {
        from: account,
      }
    );
  };

  const burnERC721 = async () => {
    const maticPoSClient = posClientChild();
    const tokenId = inputValue.toString();
    await maticPoSClient
      .burnERC721(config.posChildERC721, tokenId, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
      });
  };

  const exitERC721 = async () => {
    const maticPoSClient = posClientParent();
    await maticPoSClient
      .exitERC721(inputValue, {
        from: account,
      })
      .then((res) => {
        console.log("exit o/p", res);
      });
  };

  // POS ERC1155 functionality

  const depositERC1155 = async () => {
    const maticPoSClient = posClientParent();
    const tokenId = inputValue.toString();
    await maticPoSClient.approveERC1155ForDeposit(config.posRootERC1155, {
      from: account,
    });
    await maticPoSClient.depositSingleERC1155ForUser(
      config.posRootERC1155,
      account,
      tokenId,
      amount,
      {
        from: account,
      }
    );
  };

  const burnERC1155 = async () => {
    const maticPoSClient = posClientChild();
    const tokenId = inputValue.toString();
    await maticPoSClient
      .burnSingleERC1155(config.posChildERC721, tokenId, amount, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
      });
  };

  const exitERC1155 = async () => {
    const maticPoSClient = posClientParent();
    await maticPoSClient
      .exitSingleERC1155(inputValue, {
        from: account,
      })
      .then((res) => {
        console.log("exit o/p", res);
      });
  };

  const onchange = (e) => {
    setInputValue(e.target.value);
  };

  const onamountchange = (e) => {
    setInputAmount(e.target.value);
  };

  // Plasma ether functionality
  const depositEtherPlasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();
    await matic
      .depositEther(x1, {
        from: account,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const burnEtherPlasma = async () => {
    const { matic } = await getMaticPlasmaChild();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();
    await matic
      .startWithdraw(config.plasmaWETH, x1, {
        from: account,
      })
      .then((res) => {
        console.log("burn ether plasma txn hash", res.transactionHash);
      });
  };

  const confirmWithdrawEtherPlasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    await matic.withdraw(inputValue, { from: account }).then((res) => {
      console.log("Confirm withdraw hash: ", res.transactionHash);
    });
  };

  const exitEtherPlasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    await matic
      .processExits(config.rootChainWETH, {
        from: account,
      })
      .then((res) => {
        console.log("process exit", res.transactionHash);
      });
  };

  // Plasma ERC20 functionality
  const depositERC20Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();
    await matic.approveERC20TokensForDeposit(config.plasmaRootERC20, x1, {
      from: account,
    });
    return matic.depositERC20ForUser(config.plasmaRootERC20, account, x1, {
      from: account,
    });
  };
  const burnERC20Plasma = async () => {
    const { matic } = await getMaticPlasmaChild();
    const x = inputValue * 1000000000000000000; // 18 decimals
    const x1 = x.toString();
    matic
      .startWithdraw(config.plasmaChildERC20, x1, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
        console.log(res.transactionHash);
      });
  };

  const confirmWithdrawERC20Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    matic
      .withdraw(inputValue, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
        console.log(res.transactionHash);
      });
  };

  const exitERC20Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    await matic
      .processExits(config.plasmaRootERC20, { from: account })
      .then((res) => {
        console.log("Exit hash: ", res.transactionHash);
      });
  };

  // Plasma ERC721 functionality
  const depositERC721Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    const tokenId = inputValue;
    await matic.approveERC20TokensForDeposit(config.plasmaRootERC721, tokenId, {
      from: account,
    });
    return matic.safeDepositERC721Tokens(config.plasmaRootERC721, tokenId, {
      from: account,
    });
  };

  const burnERC721Plasma = async () => {
    const { matic } = await getMaticPlasmaChild();
    const tokenId = inputValue;
    matic
      .startWithdrawForNFT(config.plasmaChildERC721, tokenId, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
        console.log(res.transactionHash);
      });
  };

  const confirmWithdrawERC721Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    matic
      .withdrawNFT(inputValue, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
        console.log(res.transactionHash);
      });
  };

  const exitERC721Plasma = async () => {
    const { matic } = await getMaticPlasmaParent();
    await matic
      .processExits(config.plasmaRootERC721, { from: account })
      .then((res) => {
        console.log("Exit hash: ", res.transactionHash);
      });
  };

  if (loading === true) {
  } else {
    content = (
      <div>
        <div
          id="POS"
          hidden={
            selectedBridgeOption.label === "Proof of Stake" ? false : true
          }
        >
          <div
            id="Ether"
            hidden={
              selectedToken.label === "Ether" &&
              selectedBridgeOption.label === "Proof of Stake"
                ? false
                : true
            }
          >
            <button
              onClick={depositEther}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnEther}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>

            <button
              onClick={exitEther}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <label for="pos-inputValue">
              {Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                ? `Amount in Ether for deposit or burn transaction hash to exit`
                : `Amount of Ether to burn`}
            </label>
            <input
              id="pos-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
          <div
            id="ERC20"
            hidden={
              selectedToken.label === "ERC20" &&
              selectedBridgeOption.label === "Proof of Stake"
                ? false
                : true
            }
          >
            <button
              onClick={depositERC20}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnERC20}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>

            <button
              onClick={exitERC20}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <label for="erc20-pos-inputValue">
              {Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                ? `Amount of tokens to deposit or burn transaction hash to exit`
                : `Amount of tokens to burn`}
            </label>
            <input
              id="erc20-pos-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
          <div
            id="ERC721"
            hidden={
              selectedToken.label === "ERC721" &&
              selectedBridgeOption.label === "Proof of Stake"
                ? false
                : true
            }
          >
            <button
              onClick={depositERC721}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnERC721}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>

            <button
              onClick={exitERC721}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <label for="erc721-pos-inputValue">
              {Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                ? `tokenId for deposit or burn transaction hash to exit`
                : `TokenId to burn`}
            </label>
            <input
              id="erc721-pos-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />

            <p id="burnHash">{burnHash}</p>
          </div>
          <div
            id="ERC1155"
            hidden={
              selectedToken.label === "ERC1155" &&
              selectedBridgeOption.label === "Proof of Stake"
                ? false
                : true
            }
          >
            <button
              onClick={depositERC1155}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnERC1155}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>

            <button
              onClick={exitERC1155}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <label for="erc1155-pos-tokenId">
              {Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                ? `tokenID for deposit or burn transaction hash for exit`
                : `tokenId`}
            </label>
            <input
              id="erc1155-pos-tokenId"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <br />
            <label for="erc1155-pos-amount">Amount</label>
            <input
              id="erc1155-pos-amount"
              type="text"
              placeholder="value"
              name="amount"
              value={amount}
              onChange={onamountchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
        </div>

        <div
          id="plasma"
          hidden={selectedBridgeOption.label === "Plasma" ? false : true}
        >
          <div
            id="PlasmaEther"
            hidden={selectedToken.label === "Ether" ? false : true}
          >
            <button
              onClick={depositEtherPlasma}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnEtherPlasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>
            <button
              onClick={confirmWithdrawEtherPlasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              Confirm Withdraw
            </button>

            <button
              onClick={exitEtherPlasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <input
              id="plasma-ether-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
          <div
            id="PlasmaERC20"
            hidden={selectedToken.label === "ERC20" ? false : true}
          >
            <button
              onClick={depositERC20Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnERC20Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>
            <button
              onClick={confirmWithdrawERC20Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              Confirm Withdraw
            </button>

            <button
              onClick={exitERC20Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <input
              id="plasma-erc20-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
          <div
            id="PlasmaERC721"
            hidden={selectedToken.label === "ERC721" ? false : true}
          >
            <button
              onClick={depositERC721Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.MATIC_CHAINID
                  ? true
                  : false
              }
            >
              Deposit
            </button>

            <button
              onClick={burnERC721Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? true
                  : false
              }
            >
              burn
            </button>
            <button
              onClick={confirmWithdrawERC721Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              Confirm Withdraw
            </button>

            <button
              onClick={exitERC721Plasma}
              disabled={
                Networkid !== 0 && Networkid === config.ETHEREUM_CHAINID
                  ? false
                  : true
              }
            >
              exit
            </button>

            <br />
            <input
              id="plasma-erc721-inputValue"
              type="text"
              placeholder="value"
              name="inputValue"
              value={inputValue}
              onChange={onchange}
              required
            />
            <p id="burnHash">{burnHash}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar account={account} />
      <div>
        <select
          onChange={(e) => {
            setSelectedBridgeOption({ label: e.target.value });
            if (e.target.value === "Plasma") {
              setTokenTypes([
                {
                  label: "Ether",
                  value: "Ether",
                },
                {
                  label: "ERC20",
                  value: "ERC20",
                },
                {
                  label: "ERC721",
                  value: "ERC721",
                },
              ]);
            } else {
              setTokenTypes([
                {
                  label: "Ether",
                  value: "Ether",
                },
                {
                  label: "ERC20",
                  value: "ERC20",
                },
                {
                  label: "ERC721",
                  value: "ERC721",
                },
                {
                  label: "ERC1155",
                  value: "ERC1155",
                },
              ]);
            }
          }}
        >
          {bridgeOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select onChange={(e) => setSelectedToken({ label: e.target.value })}>
          {tokenTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {content}
    </div>
  );
};

export default App;

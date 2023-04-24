//Web3 Info
const web3 = new Web3(window.ethereum);

const fariaLimerAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "readId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "awardFariaLimer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const fariaLimerAddress = "0xb119f8201F19BfE34dD38f4c4BDC17DB7ea06750";
const auctionAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_stopTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_currentWinner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
    ],
    name: "NewAuction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "BiddersOfAuctionAtTokenId",
    outputs: [
      {
        internalType: "address",
        name: "bidderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "valueBidded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "currentWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "fariaLimer",
    outputs: [
      {
        internalType: "contract FariaLimer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "highestBidder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "imageAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "minimumBid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "winners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "currentMoment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "timeLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "isThereTime",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "amountOfWinners",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "bid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "newAuction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionOftokenId",
        type: "uint256",
      },
    ],
    name: "getBiddersInfoAtId",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "bidderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "valueBidded",
            type: "uint256",
          },
        ],
        internalType: "struct Auction.BiddersInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
const auctionAddress = "0x63f2e10fd390f86Edc0e7D1Fe6394c73de76CF5F";

//ELEMENTOS HTML
const token_image = document.getElementById("token_image");
const pinata_uri =
  "https://gateway.pinata.cloud/ipfs/QmXQqzRiLjutSQME3USvgHJsNEJ972hHou8AcqQsUbeGjz/";
const token_id = document.getElementById("token_id");
const connectWalletBtn = document.getElementById("connectWalletBtn");
const startAuctionBtn = document.getElementById("startAuctionBtn");
const bidBtn = document.getElementById("bidBtn");
const bidInputValue = document.getElementById("bidInputValue");
const countDownClock = document.getElementById("countDownClock");
//\ELEMENTOS HTML
//Async functions

const readId = async () => {
  if (ethereum) {
    try {
      let faria_limerContract = new web3.eth.Contract(
        fariaLimerAbi,
        fariaLimerAddress
      );
      let sendCall = await faria_limerContract.methods.readId().call();
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Connect to goerli");
  }
};
const getBiddersInfoAtId = async (_tokenId) => {
  if (ethereum) {
    try {
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let biddersInfo = await auctionContract.methods
        .getBiddersInfoAtId(_tokenId)
        .call();
      return biddersInfo;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("please Install Metamask!");
  }
};
const connectWallet = async () => {
  if (ethereum) {
    try {
      let contaLogada = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return contaLogada[0];
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
};
const isThereTime = async () => {
  if (ethereum) {
    try {
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods.isThereTime().call();
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Some mistake happened here");
  }
};
const timeLeft = async () => {
  if (ethereum) {
    try {
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods.timeLeft().call();
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("There is something wrong here!");
  }
};
const highestBidder = async () => {
  if (ethereum) {
    try {
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods.highestBidder().call();
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Something came up!");
  }
};
const highestBid = async () => {
  if (ethereum) {
    try {
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods.minimumBid().call();
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Something came up again");
  }
};
const bid = async (_amount) => {
  if (ethereum) {
    try {
      let accounts = await web3.eth.getAccounts();
      let account = accounts[0];
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods
        .bid()
        .send({ from: account, value: _amount });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Something is wrong!");
  }
};
const newAuction = async (_amount) => {
  if (ethereum) {
    try {
      let accounts = await web3.eth.getAccounts();
      let account = accounts[0];
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      let sendCall = await auctionContract.methods
        .newAuction()
        .send({ from: account, value: _amount });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Something is not working properly");
  }
};
//\Async functions

//Getting Data

readId()
  .then((current_token_id) => {
    console.log(current_token_id);
    token_image.setAttribute(
      "src",
      pinata_uri + `${Number(current_token_id) + 1}.svg`
    );
    token_id.innerHTML = Number(current_token_id) + 1;
    getBiddersInfoAtId(Number(current_token_id) + 1)
      .then((biddersInfo) => {
        for (let i = 0; i < biddersInfo.length; i++) {
          let newBidBox = document.createElement("li");
          let newBidderAddress = document.createElement("h2");
          let newBidValue = document.createElement("h2");
          newBidBox.className = "bidderInfo";
          newBidderAddress.innerHTML = biddersInfo[i].bidderAddress;
          newBidValue.innerHTML =
            biddersInfo[i].valueBidded / 10 ** 18 + " ETH";
          newBidBox.appendChild(newBidderAddress);
          newBidBox.appendChild(newBidValue);
          caixaListaBidders.appendChild(newBidBox);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
isThereTime()
  .then((is_there_time) => {
    console.log(is_there_time);
    if (is_there_time) {
      startAuctionBtn.style.display = "none";
      bidBtn.style.display = "inline";
      bidInputValue.style.display = "inline";
    } else {
      bidBtn.style.display = "none";
      bidInputValue.style.display = "none";
    }
  })
  .catch((error) => {
    console.log(error);
  });
timeLeft()
  .then((time_left) => {
    let seconds = time_left;
    const countdown = () => {
      if (seconds > 0) {
        countDownClock.innerHTML = `${seconds} seconds left`;
        seconds--;
      } else {
        countDownClock.innerHTML = "Time is over";
      }
    };
    let interval = setInterval(countdown, 1000);
  })
  .catch((error) => {
    console.log(error);
  });
//\Getting Data

//Button Operations

connectWalletBtn.addEventListener("click", () => {
  connectWallet()
    .then((contaLogada) => {
      alert(`You are connected as : \n ${contaLogada}`);
    })
    .catch((error) => {
      console.log(error);
    });
});
startAuctionBtn.addEventListener("click", () => {
  newAuction()
    .then((auctionStarted) => {
      if (auctionStarted) {
        alert("Auction Started!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
bidBtn.addEventListener("click", () => {
  let amount = bidInputValue.value;
  amount = amount * 10 ** 18;
  amount = amount.toString();
  bid(amount)
    .then((bidded) => {
      if (bidded) {
        alert("Aposta realizada com sucesso!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
//\Button Operations

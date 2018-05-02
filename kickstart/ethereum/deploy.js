const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'track cat demand hand gown goose cram buddy squeeze horror top gas',
    'https://rinkeby.infura.io/wdwyiKIYQSniObIeZUee'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '4723880' });

    //console.log(compiledFactory.interface);
    console.log('Contract deployed to', result.options.address);    

};
deploy();
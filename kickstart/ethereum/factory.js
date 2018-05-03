import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x009E2749Ff7BB43e8C2bCFc82A802926Da6b425B'
);

export default instance;
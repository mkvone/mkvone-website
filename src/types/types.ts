export interface ChainInfo {
    Chain_Id: string;
    'Validator Address': string;
    catching_up: boolean;
    coin_price: number;
    img_url: string;
    last_block_time: string;
    latest_block_height: number;
    total_staked: number;
    voting_power: number;
    symbol: string;
}
export interface TextProps {
    type?: 'error'; // 여기에 필요한 다른 타입들을 추가할 수 있습니다.
}

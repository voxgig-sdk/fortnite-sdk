export interface Cosmetic {
    added?: string;
    description?: string;
    id?: string;
    images?: Record<string, any>;
    name?: string;
    rarity?: Record<string, any>;
    type?: Record<string, any>;
}
export interface CosmeticListMatch {
    language?: string;
    $action?: string;
    [action: string]: any;
}
export interface Shop {
}
export interface ShopLoadMatch {
    language?: string;
    $action?: string;
    [action: string]: any;
}
export interface Statistic {
    account?: Record<string, any>;
    battlePass?: Record<string, any>;
    stats?: Record<string, any>;
}
export interface StatisticLoadMatch {
    account_id?: string;
    image?: string;
    name?: string;
    time_window?: string;
}
